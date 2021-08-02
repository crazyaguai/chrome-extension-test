function CreateManifestPlugin() {
};

CreateManifestPlugin.prototype.apply = function(compiler) {
  console.log("==========")
  console.log(compiler)
  console.log(compiler.plugin)
  compiler.plugin('done', (compilation, callback) => {
    console.log("webpack compile done");
    callback();
  });
};

module.exports = CreateManifestPlugin
