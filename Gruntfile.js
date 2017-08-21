module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          "build/css/style.css": ["source/sass/style.scss"]
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ["last 2 version", "ie 10"]
      },
      style: {
        src: "build/css/style.css"
      }
    },

    cmq: {
      style: {
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },

    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    csscomb: {
      style: {
        expand: true,
        src: ["source/sass/**/*.scss"]
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3,
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif,svg}"]
          }]
      }
    },

    svgmin: {
      options: {
        plugins: [
          {
            removeViewBox: false
                }, {
            removeUselessStrokeAndFill: false
                }
            ]
      },
      files: {
        expand: true,
        src: ["source/img/**/*.svg"]
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
                  "img/*.*",
                  "types/*.*",
                  "index.html",
                  "bower_components"
              ],
          dest: "build"
          }]
      },

      buildHTML: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
                  "index.html"
                ],
          dest: "build"
            }]
      }
    },

    clean: {
      build: ["build"]
    },

    svgstore: {
      options: {
        includeTitleElement: false,
        svg: {
          style: "display:none",
        },
        cleanup: [
                  "fill",
                ],
      },
      default: {
        files: {
          "build/img/sprite.svg": ["source/img/icons/*.svg"],
        },
      },
    },

    //    sprite: {
    //      all: {
    //        src: "source/img/icons/*.png",
    //        retinaSrcFilter: "source/img/icons/*@2x.png",
    //        dest: "build/img/sprite.png",
    //        retinaDest: "build/img/sprite@2x.png",
    //        destCss: "source/sass/sprite.scss"
    //      }
    //    },

    uglify: {
      start: {
        files: {
          "build/js/script.min.js": ["source/js/*.js"]
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },

      scripts: {
        files: ["source/js/*.js"],
        tasks: ["uglify"],
        options: {
          spawn: false
        },
      },

      sass: {
        files: ["source/sass/**/*.scss"],
        tasks: ["sass", "cssmin"],
        options: {
          spawn: false
        },
      },

      spriteSVG: {
        files: ["source/img/sprite/*.svg"],
        tasks: ["svgstore"],
        options: {
          spawn: false
        },
      },

      html: {
        files: ["source/index.html"],
        tasks: ["copy:buildHTML"],
        options: {
          spawn: false
        },
      }

      //      spritePNG: {
      //        files: [
      //                      "source/img/icons/*.png"
      //                    ],
      //        tasks: ["sprite"],
      //        options: {
      //          spawn: false
      //        },
      //      }
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask("build", [
        "csscomb",
        "clean",
        "copy",
        "imagemin",
        "uglify",
        "svgmin",
        "svgstore",
//        "sprite",
        "sass",
        "autoprefixer",
        "cmq",
        "cssmin"
    ]);
  grunt.loadNpmTasks("grunt-contrib-watch");
  //    grunt.loadNpmTasks("grunt-csscomb");
};
