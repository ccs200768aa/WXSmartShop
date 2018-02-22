// pages/find/find.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareText: '分享好友',
    mapText: '地图导航',
    telText: '联系我们',
    addressText: '联系地址： 深圳市南山区高新园尚美科技大厦',
    telNoText:'联系方式： 13355558888 ',
    openTimeText:'营业时间： 9：00-18：00',
    imageWineList: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519281082582&di=f9ec8ea3b631f2a4815b562dadb4b40b&imgtype=0&src=http%3A%2F%2Fwww.jingyanbus.com%2Fuploads%2Fallimg%2Fc160805%2F14F3624TGB0-N5J8.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519281170002&di=bc1b7bcff2fe0cae2fe92a4ec062eace&imgtype=0&src=http%3A%2F%2Fimg66.foodjx.com%2F9%2F20170103%2F636190394887343778634.jpg',],
    imageChateauList:[
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519281219343&di=3b099007bc19a341301c17763f51ae6e&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140516%2F0033034359072842_b.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519281245580&di=54b04c822fe430a987e6dd5ce6fff720&imgtype=0&src=http%3A%2F%2Fwww.nlswine.com%2Fezcatfiles%2Fred054%2Fimg%2Fimg%2F8683%2FDuero4.jpg']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.storeName) {
      this.setData({
        storeName: app.globalData.storeName,
      })
    } 

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