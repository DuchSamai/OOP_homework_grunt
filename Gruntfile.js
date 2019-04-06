module.exports = function (grunt){
     grunt.initConfig({
        concat: {
          js: {
            src: ['js/script1.js', 'js/script2.js'],
            dest: 'dist/js/script.js',
          },
          css: {
            src: ['css/min.css', 'css/theme.css'],
            dest: 'dist/css/styles.css',
          },
        },
        watch: {
          js: {
            files: ['js/**/*.js'],
            tasks: ['concat:js'],
            
          },
          css: {
            files: ['css/**/*.css'],
            tasks: ['concat:css'],
            
          },
        },
      });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['concat','watch']);
}