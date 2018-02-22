const gulp = require("gulp");

gulp.task("build", callback => {
  const asc = require("assemblyscript/bin/asc");
  asc.main([
    "main.ts",
    "--baseDir", "src",
    "--binaryFile", "../out/main.wasm",
    "--sourceMap",
    "--measure"
  ], callback);
});

gulp.task("default", ["build"]);

gulp.task("project:load", () => {
  const utils = require("@wasm/studio-utils");
  eval(utils.project.getFile("setup.js").getData());
});
