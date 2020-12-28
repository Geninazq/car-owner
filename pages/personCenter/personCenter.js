
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userPhone: '',
    cardRow: {
      name: 'myCard',
      iconImg: '',
      leftText: '我的卡券'
    },
    packageRow: {
      name: 'package',
      iconImg: '../../images/huodong.png',
      leftText: '活动套餐',
      rightText: ''
    }
  },
  onLoad: function () {
    console.log(app.globalData.userPhone)
    if(app.globalData.userPhone){
      this.setData({
        userPhone: app.globalData.userPhone
      })
    }
    if(app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }else if(this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  // 获取用户信息
  getUserInfo:function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // 获取手机号
  getPhoneNumber: function(e) {
    console.log(e)
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
    app.globalData.userPhone = e.detail.encryptedData;
    this.setData({
      userPhone: e.detail.encryptedData
    })
  },

  
})
