const app = getApp()
// pages/routeInfo/routeInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectRoute: {},
    stopName: [],
    stopOption: [],
    startIndex: 0,
    endIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const selectRoute=app.globalData.selectRoute;
    const selectRoute = {
      lineid: "E1A",
      moring_night: '0',
      stops: [{
        "stopid": "0",
        "stopname": "曲江新开门南路转盘",
        "time": "7:20",
        "longitude": "34.2113036627",
        "latitude": "109.0005777381"
      },
      {
        "stopid": "1",
        "stopname": "电视塔",
        "time": "7:40",
        "longitude": "34.2032500000",
        "latitude": "108.9518320000"
      },
      {
        "stopid": "2",
        "stopname": "西咸集团",
        "time": "8:23",
        "longitude": "34.3293700000",
        "latitude": "108.7578930000"
      },
      {
        "stopid": "3",
        "stopname": "西咸人才大厦",
        "time": "8:28",
        "longitude": "34.3188390000",
        "latitude": "108.7840900000"
      },
      {
        "stopid": "4",
        "stopname": "西咸大厦",
        "time": "8:38",
        "longitude": "34.3393640000",
        "latitude": "108.7922190000"
      }
      ]
    };
    console.log(selectRoute);
    let stopName = [];
    let stopOption = [];
    selectRoute.stops.map((item, index) => {
      stopOption.push({ id: item.stopid, name: item.stopname, });
      stopName.push(item.stopname);
    })
    wx.request({
      url: app.globalData.ip +'/allSchedule',
      data: {
        lineid: selectRoute.lineid.slice(0,2),//只穿E1 A/B不穿
      },
      header: {
        'content-type': "application/x-www-form-urlencoded"
      },
      method:'POST',
      success: function (res) {
        const allSchedule=JSON.parse(res.data.data);
        console.log(allSchedule);
      }
    })
    this.setData({ stopName: stopName, stopOption: stopOption, endIndex: stopName.length-1 });
  },

  bindStartStop: function(e){
    this.setData({
      startIndex: e.detail.value,
    })
  },
  bindEndStop: function (e) {
    this.setData({
      endIndex: e.detail.value,
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