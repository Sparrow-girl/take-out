/*
*与后台交互模块
 */
import ajax from './ajax'

// 获取地址信息（根据经纬度）
export const reqAddress=geohash=>ajax('/api/position/'+geohash)

// 获取msite页面食品分类列表
export const reqCategorys=()=>ajax('/api/index_category')

// 获取msite商铺列表
export const reqShops=({latitude,longitude})=>ajax('/api/shops',{latitude,longitude})

// 账号密码登录
export const reqPwdLogin=(name,pwd,captcha)=>ajax('/api/login_pwd',{
    name,
    pwd,
    captcha
},post)

// 获取短信验证码
export const reqSendCode=phone=>ajax('/api/sendcode',{phone})

// 手机号验证码登录
export const reqSmsLogin=(phone,code)=>ajax('/api/login_sms',{phone,code},'POST')

// 获取用户信息
export const reqUser=()=>ajax('/api/userinfo')

// 请求登出
export const reqLogout=()=>ajax('/api/logout')

