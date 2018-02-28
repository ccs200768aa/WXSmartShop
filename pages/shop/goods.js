const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rmb: app.globalData.rmb,
    goodsid: 0,
    goodsinfo: null,
    buyNowChecked: false,
    formData: null,
    props: null,
  },
  /**
   * 立即购买
   */
  buyNowBindTap: function () {
    this.setData({
      buyNowChecked: true,
    })
  },
  /**
   * 涂层点击
   */
  coverBindTap: function () {
    this.setData({
      buyNowChecked: false,
    })
  },
  /**
   * 单选按钮点击
   */
  propRadioBindCheck: function (e) {
    var group = e.currentTarget.id;
    for (var prop in this.props) {
      var propt = this.props[prop]
      for (var val in propt) {
        if (propt[val].propid == e.detail.value) {
          propt[val].checked = true;
        }
      }
    }
    this.setData({
      props: this.props,
    })


  },
  /**
   * 表单提交
   */
  propSubmit: function (e) {
    for (var prop in this.props) {
      var val = this.props[prop];
      var ischeck = false;
      for (var id in val) {
        if (val[id].checked) { ischeck = true; continue; }
      }
      if (!ischeck) {
        wx.showToast({
          title: '请选择' + prop,
          icon: 'none'
        })
        return;
      }
    }
    this.formData = e.detail.value
    if (this.formData.number < 1) {
      wx.showToast({
        title: '请输入购买数量',
        icon: 'none',
      })
      return;
    }
    var param = {
      props: [],
      bean: { custuserid: 0, goodsid: this.goodsid, count: 0 }
    };
    for (var id in this.formData) {
      if (id == 'number') {
        param.bean.count = this.formData[id]
      } else {
        param.props = this.formData[id]
      }
    }
    console.info(param)
    wx.request({
      url: app.globalData.diancallUrl + 'b2cmall/add2custcart',
      data: param,
      success: res => {
        var retcode = res.data.retcode;
        if (retcode != 0) {
          wx.showToast({
            title: res.data.retinfo,
            icon: 'none',
          })
          return;
        }
      },
      fail: function (res) {
        wx.showToast({
          title: res,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.goodsid = options.id
    this.setData({
      goodsid: options.id,
    })
    this.setData({ goodsImagePre: "http://c.diancall.com/pipes/img/goods_900/", })
    wx.request({
      url: app.globalData.diancallUrl + 'custgoods/find/' + parseInt(options.id).toString(36),
      success: res => {
        var goodsinfo = res.data;
        if (goodsinfo) {
          this.setData({ goodsinfo: goodsinfo })
          if (goodsinfo) {
            var goodsimgs = goodsinfo.goodsimgs;
            this.props = goodsinfo.propValues;
            this.setData({ props: this.props })
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