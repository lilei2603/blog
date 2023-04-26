module.exports = {
  "base": "/blog/",
  "title": "LEI'S ZONE",
  "description": "这辈子没法做太多的事情，所以每一件都要做到精彩绝伦！",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/icon.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "mode": "dark", // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    "modePicker": false, // 默认 true，false 不显示模式调节按钮，true 则显示
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "动态",
        "link": "/timeline/",
        "icon": "reco-date"
      }
      // {
      //   "text": "分类",
      //   "icon": "reco-category",
      //   "items": [
      //     {
      //       "text": "技术分享",
      //       "link": "/blogs/other/guide.html",
      //       "icon": "reco-github"
      //     }
      //   ]
      // }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      // {
      //   "title": "M!st4ker",
      //   "desc": "碌碌无为三十年，平平无奇最可悲。",
      //   "logo": "https://s.gravatar.com/avatar/a2a62345c324596e0c044631de27cbc9?s=200",
      //   "link": "https://0x01x0.cf"
      // }
    ],
    "logo": "/icon.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Lei",
    "authorAvatar": "/icon.png",
    "startYear": "2022",
    "noFoundPageByTencent": false
  },
  "markdown": {
    "lineNumbers": true
  },
  "locales": {
    "/": {
      "lang": "zh-CN"
    }
  },
  // 插件
  "plugins": []
}
