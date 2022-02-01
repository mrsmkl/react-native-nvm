module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["babel-plugin-rewrite-require", {
        "aliases": {
          "crypto": "crypto-browserify"
        }
      }]
    ]
  };
};
