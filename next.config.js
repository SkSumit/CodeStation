module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({ parser: { amd: false } });
    return config;
  },
};
