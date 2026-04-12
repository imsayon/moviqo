import fs from "node:fs";
import path from "node:path";
import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./env.js";
import { errorHandler, notFoundHandler } from "../middleware/error-handler.js";
import { bookingsRouter } from "../modules/bookings/bookings.routes.js";
import { healthRouter } from "../modules/health/health.routes.js";
import { moviesRouter } from "../modules/movies/movies.routes.js";

export function createServer() {
  const app = express();

  app.use(helmet({ crossOriginResourcePolicy: false }));
  app.use(compression());
  app.use(express.json());
  app.use(morgan(env.nodeEnv === "production" ? "combined" : "dev"));

  if (env.nodeEnv !== "production") {
    app.use(
      cors({
        origin: ["http://localhost:5173"],
        credentials: false
      })
    );
  }

  app.get("/api", (_request, response) => {
    response.json({ name: "moviqo-api", version: "1.0.0" });
  });
  app.use("/api/health", healthRouter);
  app.use("/api/movies", moviesRouter);
  app.use("/api/bookings", bookingsRouter);

  const indexHtmlPath = path.join(env.webDistPath, "index.html");
  if (fs.existsSync(indexHtmlPath)) {
    app.use(express.static(env.webDistPath));
    app.get("*", (request, response, next) => {
      if (request.path.startsWith("/api")) {
        return next();
      }

      response.sendFile(indexHtmlPath);
    });
  }

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}

