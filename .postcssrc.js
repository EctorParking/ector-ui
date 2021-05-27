module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [require('stylelint')],
    }),
    require('postcss-icss-values')(),
    require('postcss-cssnext')(),
    require('postcss-reporter')({ clearReportedMessages: true }),
    require('postcss-url')({
      url: 'inline',
    }),
  ],
};
