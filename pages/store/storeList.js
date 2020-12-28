// pages/store/storeList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: ['red', 'blue', 'yellow', 'green'],
    storeList: [
      {
        name: '勿忧车测试门店苏州店',
        tagList: ['故障维修', '钣金喷漆', '轮胎', '保养', '美容'],
        adress: '江苏省苏州市若水路320号',
        distance: '5.56km'
      },{
        name: '勿忧车测试门店苏州店',
        tagList: ['故障维修', '钣金喷漆', '轮胎', '保养', '美容', '钣金喷漆', '轮胎', '保养', '美容', '钣金喷漆', '轮胎', '保养', '美容'],
        adress: '江苏省苏州fgsds发生的说法是的法师打发市若水路320号',
        distance: '5.56km'
      }
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  // 导航
  navigation: function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    })
  }
  
})