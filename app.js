requirejs.config({
    paths: {
      'jquery': './bower_components/jquery/dist/jquery',
      'boostrap': './bower_components/boostrap/dist/css/boostrap',
      'knockout': './bower_components/knockout/dist/knockout'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['js/main']);