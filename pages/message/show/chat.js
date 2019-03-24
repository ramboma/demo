// pages/message/show/chat.js
var ws= {
      onopen: null,
      onmessage: null,
      socketOpen: false,
      socketMsgQueue: []
    };
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    wx.connectSocket({
      url: 'ws://localhost:8080/greeting'
    })
    wx.onSocketOpen(function (res) {
      console.log('WebSocket连接已打开！')
      ws.socketOpen = true
      for (var i = 0; i < ws.socketMsgQueue.length; i++) {
        sendSocketMessage(ws.socketMsgQueue[i])
      }
      ws.socketMsgQueue = []

      //ws.onopen && ws.onopen()
    })

    wx.onSocketMessage(function (res) {
      console.log('收到onmessage事件:', res)
    })

    var Stomp = require('../../../utils/stomp.js').Stomp;
    Stomp.setInterval = function () { }
    Stomp.clearInterval = function () { }
    var client = Stomp.over(ws);

    var destination = '/topic/message';
    client.connect('user', 'pass', function (sessionId) {
      console.log('sessionId', sessionId)

      client.subscribe(destination, function (body, headers) {
        console.log('From MQ:', body);
      });

      client.send(destination, 'hello workyun.com !');
    })
    */
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

  },
  connect: function () {
    this.connectWebsocket();
  },
  disconnect:function(){

  },
  sayhello: function (msg) {
    console.log('send msg:')
    console.log(ws.socketOpen);
    wx.sendSocketMessage("lala");
    if (ws.socketOpen) {
      wx.sendSocketMessage({
        data: msg
      })
    } else {
      ws.socketMsgQueue.push(msg)
    }
  },
  connectWebsocket: function () {
    wx.connectSocket({
      url: 'ws://localhost:8080/ws',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success(res){
        console.log("lian shang le ");
      }
    })
    wx.onSocketOpen(function (res) {
      console.log('WebSocket连接已打开！')
    })
    wx.onSocketError(function (res) {
      console.log('WebSocket连接打开失败，请检查！')
    })
    wx.onSocketMessage(function (res) {
      console.log('收到服务器内容：' + res.data)
    })
  }
})