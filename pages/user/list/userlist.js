// pages/user/list/userlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userlist: []
  },
  getpage: function (userlist) {
    var currentuserlist = this.data.userlist;
    if(userlist==null) return;
    for (var userindex = 0; userindex < userlist.length; userindex++) {
      var demodata = {
        "name": userlist[userindex].name,
        "age": userlist[userindex].age,
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
    var that=this;
    wx.request(
      {
        url:'http://localhost:8080/v1/user/list',
        success:function(res)
        {
          console.log(res);
          if(res.data.length==null)
          {
            wx.redirectTo({url:"/pages/user/login/login"})
            return;
          }
          if(res.data.date==null)
          {
            wx.redirectTo({url:"/pages/user/login/login"})
            return;
          }
          if(res.data.date.length==0)
          {
            wx.redirectTo({url:"/pages/user/login/login"})
            return;
          }
          that.getpage(res.data.date);
        }
      }
    );
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
    this.loading = true;
    this.getpage();
    this.loading = false;
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})