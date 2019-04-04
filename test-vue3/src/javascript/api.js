// const domain = 'https://hzpwechat-test.baihejia.com/'
//const domain = 'https://hzp.baihejia.com/'
// const domain = 'http://10.90.5.144:9000/'

const  domain ='/api/'

const api = {
  canPublish: domain + 'ProfileController/canPublish', // 是否可发房源或求租
  checkPublish: domain + 'ProfileController/checkPublish', // 是否可发房源或求租
  searchCommunity: domain + 'ProfileController/communities', // 搜索小区
  search: domain + 'Match/search',//搜索关键字
  openCities: domain + 'LocationController/openCities',//选择城市
  generateCode: domain + 'UserController/generateCode', // 发房源时获取验证码
  areas: domain + 'ProfileController/areas', // 获取区域
  businessAreas: domain + 'ProfileController/businessAreas', // 获取商圈
  qcloudCosConfig: domain + 'Application/qcloudCosConfig', // 腾讯云上传图片配置
  getCityByLocation: domain + 'Application/getCityByLocation',//获取城市
  chuzuList: domain + 'chuzu',//有房出租列表
  qiuzuList: domain + 'qiuzu',//无房求租列表
  chuzuDetail: domain + 'HouseController/findById',//有房出租详情
  qiuzuDetail: domain + 'HouseRequestController/findById',//无房求租详情
  personalHomePage: domain + 'UserController/personalHomePage',//个人主页
  likeList: domain + 'UserController/likeList',//喜欢收藏列表
  unlike: domain + 'HouseController/unlike',//取消喜欢收藏出租
  like: domain + 'HouseController/like',//喜欢收藏出租
  unlikeRent: domain + 'HouseRequestController/unlike',//取消喜欢收藏求租
  likeRent: domain + 'HouseRequestController/like',//喜欢收藏求租
  myPublication: domain + 'UserController/myPublication',//我的发布列表
  housePublishOrUpdate: domain + 'HouseController/publishOrUpdate', // 有房发布
  rentPublishOrUpdate: domain + 'HouseRequestController/publishOrUpdate', // 无房发布
  seen: domain + 'ProfileController/seen', // 看过我的
  register: domain + 'UserController/register', // 注册登录
  loginByMobile: domain + 'UserController/loginByMobile', // 手机号登录
  feedback: domain + 'ProfileController/feedback', // 反馈
  bindMobile: domain + 'UserController/bindMobile' ,// 绑定手机号
  logout: domain + 'UserController/logout', // 退出登录
  updateProfile: domain + 'UserController/updateProfile', // 登录后补充用户信息
  myBrowsingHistory: domain + 'ProfileController/myBrowsingHistory', // 浏览
  privacySettings: domain + 'UserController/privacySettings', // 隐私保护
  updateProfile: domain + 'UserController/updateProfile', // 更新个人信息
  report: domain + 'UserController/report', //举报
  imMessages: domain + 'UserController/imMessages', //举报
  houseOff: domain + 'HouseController/off', // 有房下架
  houseOn: domain + 'HouseController/on', // 有房重新上架
  houseRequestOff: domain + 'HouseRequestController/off', // 无房下架
  houseRequestOn: domain + 'HouseRequestController/on', // 无房重新上架
  comment: domain + 'ProfileController/comment', // 详情页和个人主页留言
  removeMessage: domain + 'ProfileController/removeMessage', // 删除留言
  replyMessageByParent: domain + 'ProfileController/replyMessageByParent', // 查看回复
  excludeCommend: domain + 'ProfileController/excludeCommend', // 推荐头像删除
  messageByLoginUserId: domain + 'ProfileController/messageByLoginUserId', // 通知留言
  hasLoggedIn: domain + 'UserController/hasLoggedIn', // 向服务端请求是否还有登录状态
  signDetail: domain + 'sign/mpDetail', // 查看合同
  unifiedOrder: domain + 'WeChatController/unifiedOrder', //直接调起微信支付
  getUserList: domain + 'UserController/getUserList', // 获取个人资料
  blockUserId: domain + 'UserController/blockUser', // 拉黑
  blockUserIds: domain + 'ProfileController/blockUserIds', // 获取拉黑列表
  depositDetail: domain + 'DepositController/deposit',//保单详情
  findOpenId: domain + 'UserController/findOpenId',//获取用户openid
  depositCount: domain + 'DepositController/depositCount',//获取已有多少人购买押金险
  passiveLikeList: domain + 'UserController/passiveLikeList', // 被收藏列表
  filterForbiddenUser: domain + 'UserController/filterForbiddenUser', // 被封禁的用户
  getSubways: domain + 'ProfileController/subways', // 获取地铁线
  getSubwayStations: domain + 'ProfileController/subwayStations', // 获取地铁站
  config: domain + 'Application/config', // 获取IM 配置
  addFactor: domain + 'ProfileController/addFactor', //身份选择判断是中介和或者是公寓
  gsProvinces: domain + 'LocationController/provinces',//省份接口
  gsCities: domain + 'LocationController/getCitiesByProvinceId',//城市接口
  gsAreas: domain + 'ProfileController/areas',//区域接口
  cities: domain + 'LocationController/cities', // 获取切换城市的列表
  getPoster: domain + 'ActivityController/getPoster', // 生成海报
  contractPlanDetail: domain + 'Application/contractPlanDetail', // 去签约介绍页
  operate: domain + 'Application/operate', // 开关
  matchPromotion: domain + 'SignController/matchPromotion', // 房东签约前调用
  initState: domain + 'UserController/initState',//公寓入驻申请
  offOnlineSave: domain + 'SignController/offOnlineSave',//线下签约公寓
  me: domain + 'UserController/me',//获取用户公寓审核信息
  administratorsHouseCount: domain + 'GoSignH5Controller/administratorsHouseCount',//公寓开通页面按钮的控制
  userFindById: domain + 'UserController/findById', //根据用户ID获取用户信息
  bannerList: domain + 'Application/bannerList',
  fromQRCODE: domain + 'OperationController/fromQRCODE',//扫码进入小程序奖励
  receive: domain + 'GoSignH5Controller/receive',//我的奖金h5页面路径
  notifyLessee: domain + 'SignController/notifyLessee',//短信通知租户 上线签约
  newOffOnlineSave: domain + 'SignController/newOffOnlineSave',//新版线下签约
  offLineSign: domain + 'SignController/offLineSign',//身份验证成功，领取20奖励
  queryContract: domain + 'SignController/queryContract',//查询交易接口
  queryContractByHouseId: domain + 'SignController/queryContractByHouseId',//展示中报备查询
  dynamic: domain + 'OperationController/dynamic',//提现名单
  account: domain + 'OperationController/account',//获取提现余额
  chuzuDetailFaBu: domain + 'HouseController/byId',//有房出租编辑
  qiuzuDetailFaBu: domain + 'HouseRequestController/byId',//无房求租详情编辑
  apartmentPage: domain + 'GoSignH5Controller/apply',//点击我是公寓进入的落地页h5
  sendMessage: domain + 'PrivateMsgController/sendMessage',//私信给运营用户发送短信
  schoolByName: domain + 'LocationController/schoolByName',//根据name模糊匹配学校
  provincesAll: domain + 'LocationController/provincesAll',//获取省份
  getCitiesAllByProvinceId: domain + 'LocationController/getCitiesAllByProvinceId',//根据省份获取城市
  commend: domain + 'ProfileController/commend',//私信发匹配消息
  commendHouse: domain + 'HouseController/commendHouse',//推荐house列表
  commendHouseRequest: domain + 'HouseRequestController/commendHouseRequest',//推荐houserequest列表
  mpHouse: domain + 'HouseController/mpHouseList',//左滑右滑有房列表
  mpHouseRequest: domain + 'HouseRequestController/mpHouseRequestList',//左滑右滑无房列表
  leftSlip: domain + 'NeedReplenishController/leftSlip',//左滑
  rightSlip: domain + 'NeedReplenishController/rightSlip',//右滑
  tipsChuzu: domain + 'GoSignH5Controller/tipsChuzu',//出租小窍门
  tipsQiuzu: domain + 'GoSignH5Controller/tipsQiuzu',//求租租小窍门
  needSave: domain + 'NeedReplenishController/save',//保存补充信息
  wechatMessageNotify: domain + 'ProfileController/wechatMessageNotify',//发送私信调的接口
  findByUserId: domain + 'NeedReplenishController/findByUserId',//查询补充的信息
}

export default api;
