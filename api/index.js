const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

import cors_proxy from "cors-anywhere";

cors_proxy
  .createServer({
    originWhitelist: [],
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, () =>
    console.log("Running CORS Anywhere on " + host + ":" + port)
  );
