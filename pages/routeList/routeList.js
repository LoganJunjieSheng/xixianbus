const app = getApp()
// pages/routeList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    routeList:[],
    searchEnd:'',
  },
  toRouteInfo:(e)=>{
    const route = e.target.dataset.route;
    app.globalData.selectRoute=route;
    wx.navigateTo({
      url: '../routeInfo/routeInfo'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.searchEnd);
    // const searchEnd = app.globalData.searchEnd;
    const searchEnd = '西咸大厦';
    this.setData({ searchEnd: searchEnd})
    const staticData=require('../../utils/data.js');
    const routeList = staticData.getRouteList();
    // console.log(routeList)
    //开始遍历本地路线数组,目的是找到拥有searchEnd且moring_night=0的线路
    const resultArray=[];
    routeList.map((route,routeIndex)=>{
      route.stops.map((stop,stopIndex)=>{
        if (stop.stopname === searchEnd && route.moring_night==='0'){
          resultArray.push(route);
        }
      })
    })
    // console.log(resultArray);
    this.setData({ routeList: resultArray});
    console.log(this.data.routeList);
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