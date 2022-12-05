//将tabbar文件的内容进行对数据的封装

const tabbarData = [
  {
    text:'首页',
    image:"tabbar/tab_home.png",
    activeImage:'tabbar/tab_home_active.png',
    path:'/home'
  },
  {
    text:'收藏',
    image:"tabbar/tab_favor.png",
    activeImage:'tabbar/tab_favor_active.png',
    path:'/favor'
  },
  {
    text:'订单',
    image:"tabbar/tab_order.png",
    activeImage:'tabbar/tab_order_active.png',
    path:'/order'
  },
  {
    text:'消息',
    image:"tabbar/tab_message.png",
    activeImage:'tabbar/tab_message.png',
    path:'/info'
  },
]

// 将数据的内容导出出去
export default tabbarData