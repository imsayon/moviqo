import { createServer } from "./app/createServer.js";
import { env } from "./app/env.js";

const app = createServer();

app.listen(env.port, () => {
  console.log(`Moviqo API listening on http://localhost:${env.port}`);
});
