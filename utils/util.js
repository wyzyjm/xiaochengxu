const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const requset = () =>{
  wx.request({
    url: 'example.php', //仅为示例，并非真实的接口地址
    data: {
      x: '',
      y: ''
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success (res) {
      console.log(res.data)
    },
    fail(errMsg,errno){
      console.log('错误信息:',errMsg,'错误码:',errno
      );
    }
  })
}

module.exports = {
  formatTime,
  requset
}
