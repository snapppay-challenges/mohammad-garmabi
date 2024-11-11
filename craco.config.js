const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    configure: (webpackConfig) => {
      if (process.env.NODE_ENV === 'production') {
        // remove console in production
        const TerserPlugin = webpackConfig.optimization.minimizer.find(
          (i) => i.constructor.name === 'TerserPlugin'
        );
        if (TerserPlugin) {
          // TerserPlugin.options.terserOptions.compress['drop_console'] = true;
        }
      }

      return webpackConfig;
    },
  },
  eslint: {
    enable: true,
    mode: 'extends',
  },
};
