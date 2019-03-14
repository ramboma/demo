// pages/user/list/userlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userlist: []
  },
  initdata: function () {
    this.data.userlist = [];
    this.getpage();
  },
  getpage: function () {
    var currentuserlist = this.data.userlist;
    for (var userindex = 0; userindex < 10; userindex++) {
      var demodata = {
        "name": "rambo",
        "age": "30",
        "image": "/images/tabbar/shop1.png",
        "address": "北京朝阳区"
      };
      currentuserlist.push(demodata);
    }
    this.setData({
      userlist: currentuserlist
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initdata();
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
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loading=true;
    this.getpage();
    this.loading=false;
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})