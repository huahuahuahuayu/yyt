// pages/goodsdetail/goodsdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    one:0,
    two:1,
    join:0,
    buy:1,
    currentIndex:0,
    currentId:0,
    num:1,
    hiddenToast: true,
    pics:[
     {"url":"../../images/zt.png"}
    ],
    // 加购弹出层
   show: false
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  joincart:function(e){
    console.log(e)
    this.setData({ 
      show: true,
      currentId:e.target.dataset.index,
    
    });
  },
  onClose() {
    this.setData({ show: false });
  },
  // 购物车减少
  deduct(){
    if(this.data.num>1){
      this.data.num--
      this.setData({
        num:this.data.num
      })
    }
    
 else{
    this.setData({
      hiddenToast: !this.data.hiddenToast
  })
  }
  },
  // toast显示时间到时处理业务
  toastHidden:function(){
    this.setData({
        hiddenToast: true
    })
},
  add(){
    let num=this.data.num
    if(num<1000){
      this.data.num++
    }
    this.setData({
    num:this.data.num
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
  onShow: function (e) {

  },
  titleClick:function(e){
    console.log(e)
    this.setData({
      currentIndex:e.target.dataset.index
    })
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