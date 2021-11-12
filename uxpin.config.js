module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.js',
          'src/components/CardActions/CardActions.js',
          'src/components/Card/Card.js',
          'src/components/AvatarIcon/AvatarIcon.js',
          'src/components/CardContent/CardContent.js',
          'src/components/CardTitle/CardTitle.js',
          'src/components/CardCover/CardCover.js',
          'src/components/Paragraph/Paragraph.js',
          'src/components/Title/Title.js',

        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Example Design System'
};
