//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    list:[],
    current:0,
    loadingHidden:false,
    refreshHidden: true,
    loadmoreHidden: true
  },
  //事件处理函数
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://localhost/mock/index1.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        // console.log(res.data);
        // that.setData({
        //   list: res.data,
        //   loadingHidden: true
        // });
        setTimeout(function () {
          that.setData({
            list: res.data,
            loadingHidden: true
          });
        }, 1500);
      },
      fail: function (error) {
        console.log(error);
      }
    });
  },
  switchSlider: function (event) {
    // console.log(1);
    this.setData({
      current: event.target.dataset.index
    })
  },
  changeSlider: function (event) {
    this.setData({
      current: event.detail.current
    });
  },
  actionToupper: function () {
    var that = this;
    this.setData({
      refreshHidden: false
    });
    wx.request({
      url: 'http://localhost/mock/refresh.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            list: res.data.concat(that.data.list),
            refreshHidden: true,
          });
        }, 1500);
      }
    });
  },
    onPullDownRefresh: function () {
    console.log(0);
  },

  actionTolower: function () {
    var that = this;
    this.setData({
      loadmoreHidden: false
    });
    wx.request({
      url: 'http://localhost/mock/refresh.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            list: that.data.list.concat(res.data),
            loadmoreHidden: true,
          });
        }, 1500);
      }
    });
  }
})
