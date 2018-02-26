const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsid: 0,
    goodsinfo: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      goodsid:options.id,
      rmb:app.globalData.rmb,
    })
    this.setData({ goodsImagePre: "http://c.diancall.com/pipes/img/goods_900/", })
    wx.request({
      url: app.globalData.diancallUrl + 'custgoods/find/' + parseInt(options.id).toString(36),
      success: res => {
        var goodsinfo = res.data;
        if (goodsinfo) {
          this.setData({ goodsinfo: goodsinfo })
          var goodsimgs = goodsinfo.goodsimgs;
          console.info(goodsimgs);
          if (goodsimgs) {
            var imgArr = goodsimgs.split(';');
            this.setData({
              imgArr: imgArr,
            })
          } else {
            goodsimgs = goodsinfo.goodsface;
            this.setData({ imgArr: [goodsimgs] })
          }
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})