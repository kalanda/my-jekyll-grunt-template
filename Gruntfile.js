'use strict';

module.exports = function(grunt) {

    // Show elapsed time after tasks run
    require('time-grunt')(grunt);

    // Load all Grunt tasks
    require('jit-grunt')(grunt, {
      useminPrepare: 'grunt-usemin'
    });

    // Config for tasks
    grunt.initConfig({

        app: {
            source: 'app',
            dist: 'dist',
            baseurl: ''
        },

        wiredep: {
          task: {
            src: [ '<%= app.source %>/**/*.html' ],
            options: { }
          }
        },

        watch: {
            jekyll: {
              options: { livereload: true },
                files: ['<%= app.source %>/**/*.{html,yml,md,mkd,markdown}'],
                tasks: ['jekyll:server']
            },
            js: {
                options: { livereload: true },
                files: ['<%= app.source %>/assets/js/**/*.js'],
                tasks: ['jshint', 'copy:server_js']
            },
            sass: {
                options: { livereload: true },
                files: ['<%= app.source %>/assets/scss/**/*.{scss,sass}'],
                tasks: ['sass:server', 'autoprefixer:server']
            },
            images: {
                options: { livereload: true },
                files: ['<%= app.source %>/assets/images/**/*.{gif,jpg,jpeg,png,svg,webp}'],
                tasks: ['copy:server_images']
            },
        },

        copy: {
            server_js: {
                expand: true,
                cwd: '<%= app.source %>',
                src: ['assets/js/**'],
                dest: '.tmp/<%= app.baseurl %>'
            },
            server_images: {
                expand: true,
                cwd: '<%= app.source %>',
                src: ['assets/images/**'],
                dest: '.tmp/<%= app.baseurl %>'
            },
            dist_js: {
                expand: true,
                cwd: '<%= app.source %>',
                src: ['assets/js/**'],
                dest: '<%= app.dist %>/<%= app.baseurl %>'
            },
            dist_images: {
                expand: true,
                cwd: '<%= app.source %>',
                src: ['assets/images/**'],
                dest: '<%= app.dist %>/<%= app.baseurl %>'
            }
        },

        sass: {
            options: {
            },
            server: {
                options: {
                  outputStyle: 'expanded',
                  lineNumbers : true,
                  sourcemap: 'none',
                  sourceComments: true,
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.source %>/assets/scss',
                    src: '**/*.{scss,sass}',
                    dest: '.tmp/<%= app.baseurl %>/assets/css',
                    ext: '.css'
                }]
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.source %>/assets/scss',
                    src: '**/*.{scss,sass}',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/assets/css',
                    ext: '.css'
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers : ['> 5%', 'last 2 version', 'ie 8', 'ie 9']
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '.tmp/<%= app.baseurl %>/assets/css',
                    src: '**/*.css',
                    dest: '.tmp/<%= app.baseurl %>/assets/css'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>/assets/css',
                    src: '**/*.css',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/assets/css'
                }]
            }
        },

        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: '0.0.0.0',
            },
            livereload: {
                options: {
                    base: [
                        '.jekyll',
                        '.tmp',
                        '<%= app.source %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: {
                        target: 'http://localhost:9000/<%= app.baseurl %>'
                    },
                    base: [
                        '<%= app.dist %>',
                        '.tmp'
                    ]
                }
            }
        },

        clean: {
            server: [
                '.jekyll',
                '.tmp'
            ],
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= app.dist %>/*',
                        '!<%= app.dist %>/.git*'
                    ]
                }]
            }
        },

        jekyll: {
            options: {
                src: '<%= app.source %>'
            },
            dist: {
                options: {
                    config: '_config.yml,_config.build.yml',
                    dest: '<%= app.dist %>/<%= app.baseurl %>',
                }
            },
            server: {
                options: {
                    config: '_config.yml',
                    dest: '.jekyll/<%= app.baseurl %>'
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    removeEmptyAttributes: true,
                    minifyJS: true,
                    minifyCSS: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>',
                    src: '**/*.html',
                    dest: '<%= app.dist %>/<%= app.baseurl %>'
                }]
            }
        },

        cssmin: {
            dist: {
                options: {
                    keepSpecialComments: 0,
                    check: 'gzip'
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>/assets/css',
                    src: ['*.css'],
                    dest: '<%= app.dist %>/<%= app.baseurl %>/assets/css'
                }]
            }
        },

        useminPrepare:{
            html: '<%= app.dist %>/index.html',
            options: {
                dest: '<%= app.dist %>',
                flow: {
                    steps: {
                        js: [
                            'concat',
                            'uglifyjs'
                        ],
                        css: [
                            'concat',
                            'cssmin'
                        ]
                    },
                    post: {
                        js: [{
                            name: 'concat',
                            createConfig: function(context, block) {

                                var generated = context.options
                                generated.options = {
                                    // there's no easy way to set the separator
                                    // differently between JS and CSS
                                    process: function (src, filepath) {
                                      if (filepath.split(/\./).pop === 'js') {
                                        return src + '\n;\n';
                                      }
                                      return src;
                                    }
                                };

                                return generated;
                            }
                        }],
                        css: [{
                            name: 'cssmin',
                            createConfig: function(context, block) {
                                var generated = context.options
                                generated.options = {
                                    keepSpecialComments : 0
                                };
                                return generated;
                            }
                        }]
                    }
                }
            }
        },

        usemin: {
            html: '<%= app.dist %>/**/*.html'
        },

        imagemin: {
            options: {
                progressive: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>/assets/images',
                    src: '**/*.{jpg,jpeg,png,gif}',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/assets/images'
                }]
            }
        },

        svgmin: {
            dist: {
                options: {
                  plugins: [
                      { removeViewBox: false },               // don't remove the viewbox atribute from the SVG
                      { removeUselessStrokeAndFill: false },  // don't remove Useless Strokes and Fills
                      { removeEmptyAttrs: false }             // don't remove Empty Attributes from the SVG
                  ]
                },
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>/assets/images',
                    src: '**/*.svg',
                    dest: '<%= app.dist %>/<%= app.baseurl %>/assets/images'
                }]
            }
        },

        /*buildcontrol: {
            dist: {
                options: {
                    dir: '<%= app.dist %>/<%= app.baseurl %>',
                    remote: 'git@github.com:user/repo.git',
                    branch: 'gh-pages',
                    commit: true,
                    push: true,
                    connectCommits: false
                }
            }
        },*/

        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                strict: false,
                es3: true,
                curly: false,
                eqeqeq: false,

                // RELAX
                // asi: true,
                // lastsemic: true,
                // eqnull: true,
                // globalstrict: true,
                // evil: true,
                browser: true,
                jquery: true
            },
            target: [
                '<%= app.source %>/assets/js/*.js',
                '!<%= app.source %>/assets/js/vendor/*.js' // exclude vendors
            ]
        },
    });

    // Define Tasks
    grunt.registerTask('serve', [
        'wiredep',
        'clean:server',
        'jekyll:server',
        'sass:server',
        'autoprefixer:server',
        'copy:server_js',
        'copy:server_images',
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('build', [
        'wiredep',
        'clean:dist',
        'jekyll:dist',
        'copy:dist_images',
        'copy:dist_js',
        'imagemin',
        'svgmin',
        'sass:dist',
        'autoprefixer:dist',
        'jshint',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'usemin',
        'htmlmin'
    ]);

    /*grunt.registerTask('deploy', [
        'build',
        'buildcontrol'
    ]);*/

    grunt.registerTask('default', [
        'serve'
    ]);
};
