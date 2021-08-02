const manifestDefault = {
  // 版本，必须是2
  "manifest_version": 2,
  // 名称
  "name": "浏览器扩展demo",
  "version": "1.0.0",
  // 描述
  "description": "简单的浏览器扩展demo",
  "icons": {
    "16": "asset/img/icon.png",
    "48": "asset/img/icon.png",
    "128": "asset/img/icon.png"
  },
  "background": {
    // 2种指定方式，如果指定JS，那么会自动生成一个背景页
    "page": "background.html"
    // "scripts": ["js/background.js"]
  },
  // 浏览器右上角图标设置，browser_action、page_action、app必须三选一
  "browser_action": {
    "default_icon": "asset/img/icon.png",
    // 图标悬停时的标题，可选
    "default_title": "1234",
    "default_popup": "popup.html"
  },

  // 需要直接注入页面的JS
  "content_scripts": [
    {
      // "matches": ["http://*/*", "https://*/*"],
      // "<all_urls>" 表示匹配所有地址
      "matches": ["<all_urls>"],
      // 多个JS按顺序注入
      "js": ["js/contentscript.js"],
      // JS的注入可以随便一点，但是CSS的注意就要千万小心了，因为一不小心就可能影响全局样式
      "css": ["css/contentcss.css"],
      // 代码注入的时间，可选值： "document_start", "document_end", or "document_idle"，最后一个表示页面空闲时，默认document_idle
      "run_at": "document_start"
    }
  ],

  // 权限申请
  "permissions": [
    "contextMenus", // 右键菜单
    "tabs", // 标签
    "notifications", // 通知
    "webRequest", // web请求
    "webRequestBlocking",
    "storage", // 插件本地存储
    "http://*/*", // 可以通过executeScript或者insertCSS访问的网站
    "https://*/*" // 可以通过executeScript或者insertCSS访问的网站
  ],

  // 普通页面能够直接访问的插件资源列表，如果不设置是无法直接访问的
  "web_accessible_resources": ["js/inject.js"],

  // 插件主页，这个很重要，不要浪费了这个免费广告位
  //    "homepage_url": "",

  // 覆盖浏览器默认页面
  //    "chrome_url_overrides": {
  //        // 覆盖浏览器默认的新标签页
  //        "newtab": "newtab.html"
  //    },

  // Chrome40以前的插件配置页写法
  "options_page": "options.html",
  // Chrome40以后的插件配置页写法，如果2个都写，新版Chrome只认后面这一个
  "options_ui": {
    "page": "options.html",
    // 添加一些默认的样式，推荐使用
    "chrome_style": true
  },
  // 向地址栏注册一个关键字以提供搜索建议，只能设置一个关键字
  "omnibox": { "keyword": "go" },
  // 默认语言
  "default_locale": "zh_CN",
  // devtools页面入口，注意只能指向一个HTML文件，不能是JS文件
  "devtools_page": "devtools.html"
}

module.exports = manifestDefault
