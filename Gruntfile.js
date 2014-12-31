/**
 * Created by poxip on 31.12.14.
 */

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: '**/*.*',
                options: {
                    livereload: 1337
                }
            }
        }

        /*uglify: {

         css: {
         files: {

         }
         }

         }*/
    })

    grunt.registerTask('default', ['watch']);
};