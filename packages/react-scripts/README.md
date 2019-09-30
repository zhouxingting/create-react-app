This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run build:test`

打包生产测试环境代码. 区别**测试环境变量** `process.env.PROD_TEST === 'true'.

## libraries & version control
注意根目录下 `package.json` `dependencies` **依赖版本控制**. 若有 `^、~、*` 等符号, 将其去掉.
```
"dayjs": "1.8.10"
"js-cookie": "2.2.0"
"blueimp-md5": "2.10.0"
...
// 以后部分关联项目可能会统一依赖库
```
每次安装依赖库应指定对应版本号. `e.g. yarn add react@16.6.0`.

## 代码格式化 ！！
初次创建项目时需手动安装 `prettier`, `husky`, `lint-staged`. 

`yarn add prettier husky lint-staged` or `npm install prettier husky lint-staged --save`.

`git commit` 时会自动格式化， 配置内容在根目录 `package.json` 文件内.

## antd 自定义主题
`antd`自定义主题 [相关链接](https://ant.design/docs/react/customize-theme-cn)
`antd-mobile`自定义主题 [相关链接](https://mobile.ant.design/docs/react/customize-theme-cn)

  根目录 `.env` 文件:
  
  `ANTD_THEME={"@primary-color": "#FF7800"}`

## lodash 使用注意 
建议使用**全路径引用**， 例： `import debounce from 'lodash/debounce'`. (默认已 tree shaking)

`.env`文件:
```
REACT_APP_DLL_LIBS=["react", "react-dom", "redux", "axios", "qs", "react-spring", "redux-saga"]
GENERATE_SOURCEMAP=false
```
具体配置查看 [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin).

## 分离打包部分依赖库，提高构建速度 （dllPlugin & dllReferencePlugin）
`.env`文件：
```
REACT_APP_DLL_INJECT=false // 配置此参数将不会将打包的依赖bundle注入index.html.
REACT_APP_DLL_LIBS=["react", "react-dom", "redux", "axios", "qs"] // 配置分离依赖库， 此示例为默认.
```

## [preload-webpack-plugin](https://github.com/googlechromelabs/preload-webpack-plugin)
```
REACT_APP_PRELOAD_OPTION={ "rel": "prefetch", "include": "asyncChunks" }
```
## css模块化
除了node_modules下文件，全部进行了less文件模块化
