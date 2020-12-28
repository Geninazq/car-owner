// pages/activity/activityList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityList: [
      {
        name: '开业十周年庆典活动，49元抢1499元“盛典八大项目”',
        time: '2020/02/01 — 2020/03/01 ',
        sellNum: 100,
        lookNum: 99
      },{
        name: '开业十周年庆典活动',
        time: '2020/02/01 — 2020/03/01 ',
        sellNum: 10,
        lookNum: 99
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },
})