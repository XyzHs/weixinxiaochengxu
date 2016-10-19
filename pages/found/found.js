//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    list:[],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
//   事件处理函数
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://localhost/mock/lbt.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
          // console.log(res.data);
        that.setData({
          list: res.data,
          loadingHidden: true
        });
      },
      fail: function (error) {
        console.log(error);
      }
    });
  }
})
