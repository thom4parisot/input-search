/*global module:false*/
module.exports = function(grunt) {
  grunt.initConfig({
    // Metadata.
    meta: {
      version: '0.1.0'
    },
    copy: {
      src: {
         files: [
           { expand: true, cwd: 'components/', src: 'jquery/*.js', dest: 'src/vendor/'  },
           { expand: true, cwd: 'components/', src: 'modernizr/*.js', dest: 'src/vendor/'  }
         ]
      },
      tests: {
        files: [
          { expand: true, cwd: 'components/', src: '**/*.*', dest: 'test/resources/'  }
        ]
      }
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
      files: ['http://localhost:3001/searchfield.html']
    }
  });

  // These plugins provide necessary tasks.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-jquerymanifest');

  // Default task.
  grunt.registerTask('default', [/*'qunit', */'jquerymanifest']);
  grunt.registerTask('build', ['copy:src']);
  grunt.registerTask('test', ['copy:tests', 'qunit']);

};
