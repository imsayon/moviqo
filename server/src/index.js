import { createServer } from "./app/createServer.js";
import { env } from "./app/env.js";

const app = createServer();

const server = app.listen(env.port, () => {
  console.log(`Moviqo API listening on http://localhost:${env.port}`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${env.port} is already in use. Stop the existing API process or change PORT.`);
    process.exit(1);
  }

  throw error;
});
