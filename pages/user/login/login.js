// pages/user/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    pwd:''
  },
  searchBox:function(e){
    const that = this;
    let first,second;
    that.setData({
      username    :    e.detail.value.username,
      pwd   :     e.detail.value.pwd
    });

    console.log(this.data.username);
    console.log(this.data.pwd);
    wx.request(
      {
        url:'http://localhost:8080/v1/user/add',
        data:{
          name:this.data.username,
          age:30
        },
        method:'POST',
        success:function(res)
        {
          wx.switchTab('/pages/user/list/userlist') } });
    //显示用户列表页
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
