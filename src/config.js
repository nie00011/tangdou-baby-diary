const globalData = {
  soft_no: "and",
  code: null,
  externalLinksUrl: '',//分享的外链地址
  loginInfo: null,
  bankAcct: '',
  custServiceTel: "400-000-5767",
  token: "whiktigWnpLUeONpwaF4xaAqFj3AhMcxrQeCAFqbsNFA5gGPNuFANIhtw7cLGn59PjafFndNBZG", //接口加密秘钥 本地写死
  merchant_id: "00000001", //请求财富接口商户号
  platform: '0', //同appweb接口调用 判断用户来源
  encry_mode: 'des', //加密方式
  custServiceTel: "400-000-5767",//客服电话
  sms_type: { // 短信模板
    register: "2", //注册
    loginDrain: "77", //引流登录
    wxWithdrawal: " 171", // 代言人提现 163 测试   171 生产
  },
  //准生产
//   serverUrl: "https://xhxts.xintongfund.com",
//   oss_url: "https://xhxts.xintongfund.com/",
//   baseUrl: 'https://xhxts.xintongfund.com/servlet/json',
//   video_oss_url: "https://jjdx-video.oss-cn-shanghai.aliyuncs.com/"
  //测试
  oss_url: "https://jjdxcs.xintongfund.com/oss/",
  serverUrl: "https://jjdxcs.xintongfund.com/servlet/json",
  baseUrl: 'https://jjdxcs.xintongfund.com/servlet/json',
  video_oss_url: "https://jjdxcs.xintongfund.com/oss/"
  //生产
//   oss_url: "https://market.xintongfund.com/",
//   serverUrl: "https://m.xintongfund.com",
//   baseUrl: 'https://m.xintongfund.com/servlet/json',
//   video_oss_url: "https://jjdx-video.oss-cn-shanghai.aliyuncs.com/"
}

export default globalData;