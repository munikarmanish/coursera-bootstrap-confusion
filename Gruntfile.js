'use strict';

module.exports = function (grunt) {

    // import plugins
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    grunt.initConfig({
        // configure plugin-tasks here
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss',
                },
            },
        },

        watch: {
            files: 'css/*.scss',
            tasks: ['sass'],
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js',
                    ],
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './',
                    },
                },
            },
        },
    });

    // project tasks
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);

};
