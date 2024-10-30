module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.js$/,
    enforce: "pre",
    use: ["source-map-loader"],
    exclude: /node_modules\/react-marquee-slider/,
  });
  return config;
};
