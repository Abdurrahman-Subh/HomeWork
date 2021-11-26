const koa = require("koa"),
  router = require("koa-router")();

var app = new koa();

router.get("/", function (ctx, next) {
  ctx.body = "<h1>Index</h1>";
});
router.get("/hakkimda", function (ctx, next) {
  ctx.body = "<h1>Hakkimda</h1>";
});
router.get("/iletisim", function (ctx, next) {
  ctx.body = "<h1>Iletisim</h1>";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log("Listening on port 3000");
