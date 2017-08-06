//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    topPaints: [
      '/image/resources/1.jpeg',
      '/image/resources/2.png',
      '/image/resources/3.png'
    ],
    pastGoodPaints: [{
      name: 'Paint 1',
      url: '/image/resources/7.png'
    }, {
      name: 'Paint 2',
      url: '/image/resources/8.jpeg'
    }, {
      name: 'Paint 3',
      url: '/image/resources/9.jpeg'
    }, {
      name: 'Paint 4',
      url: '/image/resources/10.jpeg'
    }, {
      name: 'Paint 5',
      url: '/image/resources/11.jpeg'
    }, {
      name: 'Paint 6',
      url: '/image/resources/12.jpeg'
    }, {
      name: 'Paint 6',
      url: '/image/resources/13.jpeg'
    }, {
      name: 'Paint 6',
      url: '/image/resources/14.jpeg'
    }],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 800,
    navbar: ['作品', '推荐'],
    currentNavbar: '0'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  switchNav(e) {
    this.setData({
      currentNavbar: e.currentTarget.dataset.idx
    });
    if (e.currentTarget.dataset.idx == 1 && this.data.latest_list.length == 0) {
      this.pullUpLoadLatest();
    }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      that.update()
    })
  }
})
