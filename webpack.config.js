const config = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    // contacts: './src/js/contacts.js',
    // about: './src/js/about.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        dependency: { not: ['url'] },
      },
    ],
  },
};

module.exports = config;
