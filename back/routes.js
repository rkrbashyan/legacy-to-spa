const fs = require("fs");

// Menu options - user specific set of menu options
const MENU_ITEMS = [
  { label: "Page 1 (Legacy)", url: "/page1", isLegacy: true },
  { label: "Page 2 (Legacy)", url: "/page2", isLegacy: true },
  { label: "Page 3 (SPA)", url: "/page3", isLegacy: false },
  { label: "Page 4 (SPA)", url: "/page4", isLegacy: false },
];

// Presuming that front end is built for production
const MANIFEST = JSON.parse(
  fs.readFileSync("./dist/assets/manifest.json", "utf-8")
);

const LEGACY_SCRIPTS = [
  "chunk-vendors.js",
  "chunk-common.js",
  "app-legacy.js",
].map((name) =>
  process.env.NODE_ENV === "production" ? MANIFEST[name] : `js/${name}`
);

const SPA_SCRIPTS = ["chunk-vendors.js", "chunk-common.js", "app.js"].map(
  (name) =>
    process.env.NODE_ENV === "production" ? MANIFEST[name] : `js/${name}`
);

async function routes(fastify, options) {
  fastify.register(require("point-of-view"), {
    engine: {
      nunjucks: require("nunjucks"),
    },
  });

  fastify.get("/", async (request, reply) => reply.redirect("/page1"));

  // Legacy pages
  fastify.get("/page1", async (request, reply) =>
    reply.view("templates/legacy_page1.html", {
      menuItems: MENU_ITEMS,
      scripts: LEGACY_SCRIPTS,
    })
  );

  fastify.get("/page2", async (request, reply) =>
    reply.view("templates/legacy_page2.html", {
      menuItems: MENU_ITEMS,
      scripts: LEGACY_SCRIPTS,
    })
  );

  // SPA pages
  fastify.get("/page:(3|4)", async (request, reply) =>
    reply.view("templates/spa.html", {
      menuItems: MENU_ITEMS,
      scripts: SPA_SCRIPTS,
    })
  );
}

module.exports = routes;
