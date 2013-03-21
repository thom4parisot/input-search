/*global module:false*/
module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    // Metadata.
    meta: {
      version: '0.1.0'
    },
    jquerymanifest: {
      options: {
        source: grunt.file.readJSON('package.json'),
        overrides: {
          title: "jquery.input-search",
          author: {
            name: "Thomas Parisot",
            email: "thomas@oncle-tom.net",
            url: "http://case.oncle-tom.net"
          },
          homepage: "http://github.com/oncletom/input-search"
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    }
  });

  // These plugins provide necessary tasks.
  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-jquerymanifest');

  // Default task.
  grunt.registerTask('default', [/*'qunit', */'jquerymanifest']);

};
