//index.js
//获取应用实例
const app = getApp()

Page({
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
  onLoad: function () {
  },

  // 查看更多
  viewMore: function(){
    wx.navigateTo({
      url: '../activity/activityList/activityList',
    })
  },

  // 查看详情
  viewDetail: function(e){
    wx.navigateTo({
      url: '../activity/activityDetail/activityDetail',
    })
  }
})
