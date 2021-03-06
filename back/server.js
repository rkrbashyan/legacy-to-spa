const fastify = require("fastify")({
  logger: true,
});
const path = require("path");

fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "dist/assets"),
});

fastify.register(require("./routes"));

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
