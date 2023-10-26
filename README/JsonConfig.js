// 全局配置
const config = {
  // 所有页面路径
  "pages":[
    "pages/index/index",  // 第一位: 项目首页
    "pages/logs/logs"
  ],
  // 底部tab栏配置 个数: 2-5个
  "tabBar": {
    "color": "#C9C9C9",           // 未选中的文字颜色
    "selectedColor":  "#C7A26A",  // 选中的文字颜色
    "borderStyle": "white",
    "backgroundColor": "#fff",
    "list": [{
      "pagePath": "pages/index/index",  // 页面路径
      "text": "首页",

    }, {
      "pagePath": "pages/logs/index",
      "text": "日志"
    }]
  },
  // 小程序外观
  "window":{
    // 导航栏
    "navigationBarTitleText": "Weixin",     // 标题
    "navigationBarBackgroundColor": "#fff", // 背景色
    "navigationBarTextStyle":"black",       // 标题颜色 white & black

    "backgroundTextStyle":"light",  // 三个小圆点的样式 light & dark
    "backgroundColor": "#ccc",      // 全局背景色

    "enablePullDownRefresh": true,  // 全局开启下拉刷新, 真机上不会自动收起
    "onReachBottomDistance": 50     // 触底距离100, 触发加载
  },
  "style": "v2",  // 小程序使用的样式版本
  "sitemapLocation": "sitemap.json" // 指明sitemap.json的位置
}

// 开发者工具配置
const toolConfig = {
  "description": "项目配置文件",

  // 编译相关的配置
  "setting": {
    "bundle": false,
    "userConfirmedBundleSwitch": false,
    "urlCheck": true,
    "scopeDataCheck": false,
    "coverView": true,
    "es6": true,      // ES5转ES6
    "postcss": true,  // 自动添加样式前缀
    "compileHotReLoad": false,
    "lazyloadPlaceholderEnable": false,
    "preloadBackgroundData": false,
    "minified": true,
    "autoAudits": false,
    "newFeature": false,
    "uglifyFileName": false,
    "uploadWithSourceMap": true,
    "useIsolateContext": true,
    "nodeModules": false,
    "enhance": true,
    "useMultiFrameRuntime": true,
    "showShadowRootInWxmlPanel": true,
    "packNpmManually": false,
    "enableEngineNative": false,
    "packNpmRelationList": [],
    "minifyWXSS": true,
    "showES6CompileOption": false,
    "minifyWXML": true,
    "babelSetting": {
      "ignore": [],
      "disablePlugins": [],
      "outputPath": ""
    },
    "ignoreUploadUnusedFiles": true
  },
  "compileType": "miniprogram",
  "condition": {},
  "editorSetting": {
    "tabIndent": "insertSpaces",
    "tabSize": 2
  },
  "libVersion": "2.19.4",
  "packOptions": {
    "ignore": [],
    "include": []
  },
  "appid": "wxe9232e9f9f32fcdc" // 小程序账号ID
}

// sitemap
const sitemapConfig = {
  "desc": "关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html",
  "rules": [{
    "action": "allow",  // disallow:不允许被微信索引
    "page": "*"
  }]
}

// 页面配置
const pageConfig = {
  "usingComponents": {}
} 