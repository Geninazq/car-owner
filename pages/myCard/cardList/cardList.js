// pages/myCard/myCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponList: [{
      name: '免费洗车券',
      validPeriod: '2020/02/01 — 2020/03/01'
    },{
      name: '免费洗车券2',
      validPeriod: '2020/02/01 — 2020/03/02'
    },{
      name: '免费洗车券3',
      validPeriod: '2020/02/01 — 2020/03/02'
    },{
      name: '免费洗车券4',
      validPeriod: '2020/02/01 — 2020/03/02'
    },{
      name: '免费洗车券5',
      validPeriod: '2020/02/01 — 2020/03/02'
    },{
      name: '免费洗车券6',
      validPeriod: '2020/02/01 — 2020/03/02'
    }]
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

  linkTo: function(e) {
    var couponNo = e.currentTarget.dataset.num;
    wx.navigateTo({
      url: '../cardDetail/cardDetail',
    })
  }
})