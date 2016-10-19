Page({
  data: {
    percent: 0,
    progressShow: true,

    poster: '/images/lbt1.jpg',
    name: '恋歌',
    author: '香香',
    src: '/mock/liange.mp3',
    action: null
  },
  onLoad: function () {
    var timer = setInterval(function () {
      this.setData({
        percent: ++this.data.percent
      });
      if(this.data.percent === 20) {
        this.setData({
          progressShow: false,
          action: {
            method: 'play'
          }
        })
        clearInterval(timer);
      }
    }.bind(this), 100);
  },

  videoErrorCallback: function () {
    console.log('error');
  }
});
