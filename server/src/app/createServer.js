import fs from "node:fs";
import path from "node:path";
import compression from "compression";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./env.js";
import { errorHandler, notFoundHandler } from "../middleware/error-handler.js";
import { authRouter } from "../modules/auth/auth.routes.js";
import { bookingsRouter } from "../modules/bookings/bookings.routes.js";
import { healthRouter } from "../modules/health/health.routes.js";
import { moviesRouter } from "../modules/movies/movies.routes.js";

export function createServer() {
  const app = express();

  // Security middleware
  app.use(helmet({ crossOriginResourcePolicy: false }));
  app.use(compression());
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ limit: "10mb", extended: true }));
  
  // Logging
  app.use(morgan(env.nodeEnv === "production" ? "combined" : "dev"));

  // CORS headers for allowed origins
  app.use((request, response, next) => {
    const origin = request.headers.origin;
    if (env.allowedOrigins.includes(origin)) {
      response.header("Access-Control-Allow-Origin", origin);
    }
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.header("Access-Control-Allow-Credentials", "true");
    
    if (request.method === "OPTIONS") {
      return response.sendStatus(200);
    }
    
    next();
  });

  // API routes
  app.get("/api", (_request, response) => {
    response.json({ name: "moviqo-api", version: "1.0.0" });
  });
  
  app.use("/api/health", healthRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/movies", moviesRouter);
  app.use("/api/bookings", bookingsRouter);

  // Static file serving and SPA fallback
  const hasProductionBuild = fs.existsSync(path.join(env.webDistPath, "index.html"));
  const staticRoot = env.nodeEnv === "production" && hasProductionBuild ? env.webDistPath : env.clientRootPath;
  const indexHtmlPath = path.join(staticRoot, "index.html");
  
  if (fs.existsSync(indexHtmlPath)) {
    app.use(express.static(staticRoot));
    app.get("*", (request, response, next) => {
      if (request.path.startsWith("/api")) {
        return next();
      }

      response.sendFile(indexHtmlPath);
    });
  }

  // Error handling
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
