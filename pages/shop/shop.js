// pages/shop/shop.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrls: [
      'http://c.diancall.com/diancall_web/www/assets/banner/banner1.jpg',
      'http://c.diancall.com/diancall_web/www/assets/banner/banner2.jpg'
    ],
    indicatorDots: true,
    autoPlay: true,
    interval: 3000,
    duration: 1000,
    bannerArr: {},
    bannerImagePre: '',
  },
  goodsBindTap:function(e){
    const dataset = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/shop/goods?id=' + dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      bannerImagePre: "http://c.diancall.com/dir/custbanner/",
      goodsImagePre: "http://c.diancall.com/pipes/img/goods_900/",
      rmb: app.globalData.rmb,
    }),
      wx.request({
        url: app.globalData.diancallUrl + 'bannerpage/query',
        data: {
          bean: '{"status":[10]}',
        },
        success: res => {
          this.setData({
            bannerArr: res.data
          })
        },
      }),
      wx.request({
        url: app.globalData.diancallUrl + 'custgoods/query',
        data: {
          bean: { 'status': [10], 'storeid': 25001809 },
        },
        success: res => {
          this.setData({
            goodsList: res.data.rows,
            total: res.data.total,
          })
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