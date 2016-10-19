Page({
  data: {
    modalHidden: true,

    userInfo: {
      username: '',
      password: ''
    },
  },
  onShow: function() {
    var u = wx.getStorageSync('username');
    if(!u) {
      this.setData({
        userInfo: {
          username: '',
          password: ''
        },
        modalHidden: false
      });
    }
  },

  actionConfirm: function () {
    wx.setStorageSync('username', this.data.userInfo.username);
    wx.setStorageSync('password', this.data.userInfo.password);
    this.setData({
      modalHidden: true
    })
  },
  actionCancel: function () {
    this.setData({
      modalHidden: true
    })
  },

  saveUsername: function (event) {
    this.setData({
      'userInfo.username': event.detail.value
    })
  },
  savePassword: function (event) {
    this.setData({
      'userInfo.password': event.detail.value
    })
  },
});
