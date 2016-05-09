module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			simplegrunt: {
				port: 1337,
				livereload: 35729,
				hostname: 'localhost',
			}
		}
	});
	grunt.loadNpmTasks('grunt-connect');
	grunt.registerTask('default', 'connect:simplegrunt');
}
