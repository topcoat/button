/*global module:false*/
module.exports = function(grunt) {


    // Project configuration.
    grunt.initConfig({

        clean: {
            release: ['css']
        },

            stylus: {
        compile: {
                options: {
                    paths: ['node_modules/topcoat-utils/src/mixins', 'node_modules/topcoat-button-base/src/mixins', 'node_modules/topcoat-theme/src', 'node_modules/topcoat-theme/src/includes'],
                    import: ['button-mixin', 'utils', 'theme-topcoat-mobile-light', 'global', 'fonts'],
                    compress: false
                },
                files: [{
                    src: 'src/topcoat-button.styl',
                    dest: 'css/topcoat-button.css'
                }]
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.min.css'
            }
        },

        copy: {
            release: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'node_modules/topcoat-theme/font/**/*',
                    dest: 'font'
                }]
            }
        },

        jade: {
            compile: {
                expand: true,
                cwd: 'test/perf',
                src: ['*.jade'],
                dest: 'test/perf/',
                ext: '.test.html'
            }
        },

        simplemocha: {
            all: {
                src: ['test/*.test.js']
            }
        },

        watch: {
            files: 'src/**/*.styl',
            tasks: ['build', 'test']
        }
    });


    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task.
    grunt.registerTask('default', ['clean', 'build', 'test', 'release']);
    grunt.registerTask('build', ['stylus', 'jade']);
    grunt.registerTask('test', ['simplemocha']);
    grunt.registerTask('release', ['cssmin', 'copy']);

};