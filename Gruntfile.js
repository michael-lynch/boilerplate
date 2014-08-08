module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		
		banner: '',

		concat: {
		
			options: {
				banner: '<%= banner %>',
				stripBanners: true
			},
			
			main: {
				src: ['resources/js/lib/**/*.js','resources/js/plugins/**/*.js','resources/js/scripts.js'],
				dest: 'js/scripts.js'
			}
		},
		
		uglify: {
		
			options: {
				banner: '<%= banner %>'
			},
			
			main: {
				src: '<%= concat.main.dest %>',
				dest: 'js/scripts.js'
			}
		},
		
		jshint: {
			options: {
				curly: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				browser: true,
				force : true,
				globals: {
					jQuery: true,
					$: true,
					google: true
				}
			},
			
			beforeconcat: ['resources/js/scripts.js']
		},

		less: {
		
			develop: {
			
				options: {
					paths: ["resources/less"]
				},
				
				files: {
					"css/styles.css": "resources/less/styles.less"
				}
			},
			
			build: {
			
				options: {
					paths: ["resources/less"],
					yuicompress: true

				},
				
				files: {
					"css/styles.css": "resources/less/styles.less"
				}
			}
		},

		imagemin: {
		
			develop: {
			
				files: [
					{
						expand: true,
						cwd: '/img',
						src: ['**/*.jpg','**/*.png'],
						dest: '/img'
					}
				]
			},
			
			test: {
			
				options: {
					optimizationLevel: 1
				},
				
				files: [
					{
						expand: true,
						cwd: 'img',
						src: ['**/*.jpg','**/*.png'],
						dest: 'img'
					}
				]
			},
			
			build: {
			
				options: {
					optimizationLevel: 7
				},
				
				files: [
					{
						expand: true,
						cwd: 'img',
						src: ['**/*.jpg','**/*.png'],
						dest: 'img'
					}
				]
			}
		},

		shell: {
		
			updatecopy: {
				command: '',
				options: {
					stdout: true
				}
			}
		},

		watch: {
		
			css: {
				files: ['resources/less/**/*.less'],
				tasks: ['less:develop'],
				options: {
					nospawn: true
				}
			},
			
			javascript: {
				files: ['resources/js/scripts.js', 'resources/js/**/*.js'],
				tasks: ['concat','uglify'],
				options: {
					nospawn: true
				}
			},
			
			images: {
				files: ['img/**/*.jpg', 'img/**/*.png'],
				tasks: ['imagemin:develop'],
				options: {
					nospawn: true
				}
			}

		}
	});

	//packages
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-shell');

	//default task
	grunt.registerTask('default', ['concat', 'less:develop', 'watch']);

	//images task
	grunt.registerTask('images', ['imagemin:build']);

	//test task
	grunt.registerTask('test', ['jshint', 'concat', 'less:develop', 'imagemin:test']);

	//production task.
	grunt.registerTask('build', ['jshint', 'concat', 'uglify', 'less:build', 'imagemin:build']);

};
