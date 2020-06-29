//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    statusBarHeight: app.globalData.statusBarHeight,
    imgs: [
    {"url":"../../images/one.jpg"},
    {"url":"../../images/two.jpg"},
    {"url":"../../images/three.jpg"},
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    mspic:"../../images/one.jpg",
    detailname:"麻辣小龙虾250g",
    mprice:"1.00",
    yprice:"58.00",
    synum:"80份",
    rqnum:"20w",
    ttitle:"今日特惠",
    twotitle:"麻辣小龙虾500g",
    thtprice:"特惠价",
   thprice:"9.00",
    thyprice:"30.00",
    currentIndex: 0,
    // 菜单数据
   topMenuList: [
     { "name":"热菜"},
     { "name":"热菜" },
     { "name":"热菜" },
     { "name":"热菜" },
     { "name":"热菜" },
     { "name":"热菜" },
     { "name":"热菜" },
     
   ],
    // 商品数据
    bottomContent: [
      {"img":"../../images/head.jpeg","title":"麻辣小龙虾500g","oldprice":"99.00","newprice":"20"},
      {"img":"../../images/head.jpeg","title":"红烧武昌鱼","oldprice":"99.00","newprice":"20"}
    ],


  },
  //事件处理函数
  bindViewTap: function() {
   
  },

  onLoad: function () {
    console.log(app.globalData.statusBarHeight);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
 
  //选项卡
  //滑动切换tab
  pagechange:function(e){
    console.log(e)
    console.log(123)
  },
  //点击tab切换
  titleClick:function(e){
    console.log(e)
    var index = e.target.dataset.index;
    if (this.data.currentIndex == index) {
      return false;
    } else {
      this.setData({
        currentIndex: index
      });
    }
  },
onPageScroll: function (t) {
  var a = this;
  console.log(t.scrollTop)
  a.setData({
  scrollTop:t.scrollTop
  })
  }
})
