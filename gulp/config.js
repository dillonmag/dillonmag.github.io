var config = {
  main: {
        src: './app/',
        // inject:root
        dest: './'
        // endinject
},
  sass: {
    src: 'sass/style.sass',
    dest: 'css',
    error: 'Error Running SASS'
  },
   favicon: {
    windowsBackgroundColor: '#d13044',
    androidChromeThemeColor: '#d13044',
    name: 'dillon',
    safariPinnedTabThemeColor: '#eeeeee'
  },
      root: {
    src: './gulp/config.js',
    dest: './gulp/'
  },
    frameworkSass: {
    src: 'sass/vendors/framework.sass',
    dest: 'sass/vendors/'
  },
      frameworkJs: {
    src: './gulp/config.js',
    dest: './gulp/'
  },
  uncss: {
    src: 'css/style.css',
    dest: 'css',
    html: '**/*.html',
    ignore: [/.chosen/, /.popover/, /.calendar/, /.modal/, /.flexslider/]
  },
  inlineCss: {
    src: '*-mail.html'
  },
  nunjucks: {
    src: 'pages/**/*.*',
    error: 'Error Running Nunjucks',
    template: 'templates/',
    watch: 'templates/**/*',
    data: 'data/generated/data.json'
  },
  ghPages: {
    src: '**/*'
  },
  imagemin: {
     src: 'images/**/*.+(png|jpg|jpeg|gif|svg)',
    dest: 'images'
  },
  js: {
    src: ['./bower_components/jquery/dist/jquery.js',
          // inject:framework



          './bower_components/semantic-ui-sass/app/assets/javascripts/semantic-ui.js',



          // endinject
          // inject:flexslider
          './app/js/vendors/flexslider.js',
          // endinject
          // inject:clipboard

          // endinject
          './bower_components/modernizr/modernizr.js',
          './bower_components/detectizr/dist/detectizr.js',
          './bower_components/chosen/chosen.jquery.js',
          './app/js/*.js'],
    dest: 'js',
    title: 'main.js'
  },
  json: {
    src: 'data/*.json',
    dest: 'data/generated',
    error: 'Error Running JSON extend',
    file: 'data.json'
  }
};

// Exporting config
module.exports = config;
