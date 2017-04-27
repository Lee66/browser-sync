var gulp = require('gulp');
var browserSync = require('browser-sync');

//gulp.task('browser-sync',function(){
//	browserSync.init({
//		server:{
//			//指定服务器启动根目录
//			baseDir:"./"
//		}
//	});
//	//监听任何文件变化，实时刷新页面
//  gulp.watch("./**/*.*").on('change', browserSync.reload);
//});

// 静态服务器
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("./**/*.*").on('change', browserSync.reload);
});
gulp.task('default', ["browser-sync"]);

// 代理

//gulp.task('browser-sync', function() {
//	browserSync.init({
//		proxy: "你的域名或IP"
//	});
//});
