module.exports = function(grunt) {
	// var sassStyle = 'expanded';

	//任务配置代码
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

	    compass: {
            dist: {
	            options: {
	                sassDir: 'style/sass',
	                cssDir : 'style/css',
	                imagesPath: 'images',
	                imagesDir: '../demo/images',
	                // httpPath: 'demo',
	                // generatedImagesDir: 'demo/images',
	                // httpGeneratedImagesPath: 'https://127.0.0.1/demo/images',
	                // environment: 'development',
	                // outputStyle: 'compressed', //压缩css
	                // relativeAssets: true, //路径
	                // noLineComments: true //不生成注释行
	            }
	        }
	    },
		watch: {
			client: {
				files: ['index.html','template/*','controller/*','images/*','style/css/style.css'],
				options: {
					livereload: true
				},
			},
            compass: {
                files: ['style/sass/*.scss'],
                tasks: ['compass']
            }
		},
		imagemin: {
		    dynamic: {
		        options: {
		            optimizationLevel: 3 // png图片优化水平，3是默认值，取值区间0-7
		        },
		        files: [
		            {
		                expand: true, // 开启动态扩展
		                cwd: "images/original/", // 需要处理的图片路径
		                src: ["*.{png,jpg,gif}"], // 要处理的文件格式(images下的所有png,jpg,gif)
		                dest: "images/" // 处理后的图片路径
		            }
		        ]
		    }
		},

		//合并
		// concat: {
		// 	options: {
		// 		separator: ';',
		// 	},
		// 	dist: {
		//         src: ['./src/plugin.js', './src/plugin2.js'],
		//         dest: './global.js',
		//     },
		// },


		//压缩
	 //    uglify: {
		//     compressjs: {
		//         files: {
		//           './global.min.js': ['./global.js']
		//         }
		//     }
	 //    },

	 	//排查规范性
	    // jshint: {
	    //     all: ['controller']
	    // },

	    
	});

	//插件加载代码
	// grunt.loadNpmTasks('grunt-contrib-sass');
  	// grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-watch');
  	// grunt.loadNpmTasks('grunt-contrib-connect');
  	grunt.loadNpmTasks('grunt-contrib-compass');
  	grunt.loadNpmTasks('grunt-contrib-imagemin');


	//任务注册代码
	// grunt.registerTask('outputcss',['sass']);
  	// grunt.registerTask('concatjs',['concat']);
  	// grunt.registerTask('compressjs',['concat','jshint','uglify']);
  	// grunt.registerTask('watchit',['sass','concat','jshint','uglify','connect','watch']);
	grunt.registerTask('default',['compass']); //css compass
  	grunt.registerTask('dev',['watch']); //监控&刷新

  	
  	grunt.registerTask('minimg',['imagemin']); //图片优化
};