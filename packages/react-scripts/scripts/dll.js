'use strict';

process.env.NODE_ENV = 'production';

// const rm = require('rimraf');
const path = require('path');
const chalk = require('react-dev-utils/chalk');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.dll.config');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());

function webpackDll() {
  webpack(webpackConfig, (err, stats) => {
  
    if (err) throw err;
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + '\n\n'
    );
  
    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'));
      process.exit(1);
    }
  
    console.log(chalk.cyan('  Build complete.\n'));
    console.log(
      chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
          "  Opening index.html over file:// won't work.\n"
      )
    );
  });
}

function deleteall(path, callBack) {
	var files = [];
	if(fs.existsSync(path)) {
		files = fs.readdirSync(path);
		files.forEach(function(file, index) {
			var curPath = path + "/" + file;
			if(fs.statSync(curPath).isDirectory()) { // recurse
				deleteall(curPath);
			} else { // delete file
				fs.unlinkSync(curPath);
			}
		});
    fs.rmdirSync(path);
    callBack();
	} else {
    callBack();
  }
};

deleteall(path.resolve(appDirectory, 'dll'), webpackDll);