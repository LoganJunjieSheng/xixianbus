const app = getApp();
// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: '0',
      title: '全部订单'
    },
    {
      id: '1',
      title: '全部订单'
    }],
    selectedId: '0',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const openId = app.globalData.openid;
    wx.request({
      url: app.globalData.ip +'/xixianbus/allOrder',
      data: {
        userId: openId,
      },
      method: 'POST',
      success: function (res) {
        console.log(res);
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