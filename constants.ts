
import type { MenuItem } from './types';

export const MENU_DATA: MenuItem[] = [
  {
    name: "日常",
    icon: "CalendarIcon",
    description: "",
    children: [
      {
        name: "首页概况",
        description: "查看门店实时概况，时段销售金额概览，创建代办事项，添加售后客服",
        children: []
      },
      {
        name: "营收看板",
        description: "查看某一天营收总览、收银总览、销售统计、团购核销总览、游戏币售/耗总览",
        children: []
      },
      {
        name: "订单管理",
        description: "",     
        children: [
          {
            name: "销售订单",
            description: "查看门店售卖的订单，包含已支付和已退款订单，可操作订单退单",
             children: []
          },
          {
            name: "核销订单",
            description: "查看门店各个第三团平台的团购核销订单",
             children: []
          },
          {
            name: "兑换订单",
            description: "查看门店兑换的订单，包含已支付和已退款订单，可操作订单退单",
             children: []
          }
        ]
      },
      {
        name: "营销日历",
        description: "智能营销日历，清晰标注行业淡旺季与重大节点，自动将年度目标拆解到日，并为每个阶段AI推荐最佳营销策略。",
        children: []
      }
    ]
  },
  {
    name: "套餐",
    icon: "CreditCardIcon",
    description: "",
    children: [
      {
        name: "门票套餐",
        description: "",      
        children: [
          {
            name: "计次票套餐",
            description: "创建/编辑单次/多次的门票套餐并设置该套餐可游玩的项目",
             children: []
          },
          {
            name: "年月票套餐",
            description: "创建/编辑月卡/年卡的门票套餐并设置该套餐可游玩的项目",
             children: []
          },
          {
            name: "门票查询",
            description: "查看门票的获得情况和使用情况",
             children: []
          }
        ]
      },
      {
        name: "其他套餐",
        description: "",
        children: [
          {
            name: "预存款套餐",
            description: "创建/编辑含有本金和赠金的预存款储值套餐",
             children: []
          },
          {
            name: "组合套餐",
            description: "创建/编辑游戏币/门票套餐组合售卖的组合套餐，设置入会套餐",
             children: []
          }
        ]
      },
      {
        name: "套餐分组",
        description: "创建/编辑服务类套餐的分组",
        children: []
      },
      {
        name: "代币套餐",
        description: "",
        children: [
          {
            name: "游戏币套餐",
            description: "创建/编辑游戏币套餐",
             children: []
          }
        ]
      }
    ]
  },
  {
    name: "会员",
    icon: "UsersIcon",
    description: "",
    children: [
      {
        name: "会员概况",
        description: "查看门店会员总览，某段时间的会员情况，储值情况",
        children: []
      },
      {
        name: "会员信息",
        description: "",
        children: [
          {
            name: "会员查询",
            description: "查看某会员的储值、消费、游玩记录、会员日志，支持储值/消费频次/消费金额排序",
             children: []
          },
          {
            name: "游客查询",
            description: "查看某游客的储值、消费、游玩记录、会员日志，支持储值排序",
             children: []
          },
          {
            name: "会员标签",
            description: "查看被打上标签的会员分层/数量",
             children: []
          }
        ]
      },
      {
        name: "会员管理",
        description: "",
        children: [
          {
            name: "等级管理",
            description: "创建/编辑会员等级，让门店的会员进行分层管理，设置会员等级权益和福利",
             children: []
          },
          {
            name: "高级设置",
            description: "关于会员账户验证设置",
             children: []
          },
          {
            name: "卡片管理",
            description: "查看所有流通的会员实体卡情况",
             children: []
          },
          {
            name: "协议管理",
            description: "新增/编辑会员可签署的协议并可查看签署记录",
             children: []
          }
        ]
      },
      {
        name: "会员记录",
        description: "", 
        children: [
          {
            name: "入会记录",
            description: "查询玩家成为会员的记录",
             children: []
          },
          {
            name: "储值变更",
            description: "查询会员的储值变动明细记录",
             children: []
          },
          {
            name: "等级变更",
            description: "查询会员等级的变动记录",
             children: []
          },
          {
            name: "资料变更",
            description: "查询会员的资料变更记录",
             children: []
          },
          {
            name: "客诉记录",
            description: "查询店员在收银台/pos机/舰长助手给会员客诉变更储值的记录",
             children: []
          },
          {
            name: "延期记录",
            description: "查询会员储值/门票被延期的记录",
             children: []
          },
          {
            name: "储值余额",
            description: "查询门店所有会员的储值剩余情况",
             children: []
          },
          {
            name: "领卡记录",
            description: "查询实体卡被领取的记录",
             children: []
          },
          {
            name: "退卡记录",
            description: "查询实体卡被退卡的记录",
             children: []
          },
          {
            name: "换卡记录",
            description: "查询实体卡被换卡记录",
             children: []
          },
          {
            name: "注销记录",
            description: "查询会员账户注销的记录",
             children: []
          },
          {
            name: "腕带记录",
            description: "查看已申请的腕带码使用记录",
             children: []
          }
        ]
      }
    ]
  },
  {
    name: "商品",
    icon: "ArchiveBoxIcon",
    description: "",
    children: [
      {
        name: "商品资料",
        description: "新增/编辑实体商品的商品信息",
        children: []
      },
      {
        name: "门店-库存管理",
        description: "",
        children: [
          {
            name: "商品库存",
            description: "查看实体商品的即时库存，操作商品库存变动，设置安全库存",
             children: []
          },
          {
            name: "仓库管理",
            description: "新增/编辑门店仓库，可设置仓库管理员，可操作商品库存变动",
             children: []
          }
        ]
      },
      {
        name: "集团-库存管理",
        description: "",
        children: [
          {
            name: "集采管理",
            description: "新增门店向集团发起申购单，接收集团发来的申购单",
             children: []
          },
          {
            name: "调拨单管理",
            description: "新增门店向门店发起的调拨单，接收门店/集团发来的调拨单",
             children: []
          }
        ]
      },
      {
        name: "单据记录",
        description: "",
        children: [
          {
            name: "库存变更汇总",
            description: "汇总某一周期所有商品的期初数据，期中出入盘数据，期末剩余数据",
             children: []
          },
          {
            name: "库存变更单据",
            description: "查询库存出入转的单据记录，导出单据凭证，可审核单据",
             children: []
          },
          {
            name: "库存变更记录",
            description: "查询实体商品库存变更明细",
             children: []
          },
          {
            name: "盘点盈亏记录",
            description: "查询盘点记录及盘点盈亏记录",
             children: []
          },
          {
            name: "库存分析表",
            description: "根据商品分组预设条件后，对当前库存进行分析",
             children: []
          },
          {
            name: "商品预警",
            description: "查看安全库存、保质期、滞销的商品预警明细",
             children: []
          }
        ]
      },
      {
        name: "基础管理",
        description: "", 
        children: [
          {
            name: "商品分组",
            description: "新增/编辑商品资料的分组组别",
             children: []
          },
          {
            name: "商品标签",
            description: "新增/编辑商品资料的标签分类",
             children: []
          },
          {
            name: "品牌管理",
            description: "新增/编辑商品资料的品牌",
             children: []
          },
          {
            name: "单位管理",
            description: "新增/编辑商品资料的单位",
             children: []
          },
          {
            name: "供应商设置",
            description: "新增/编辑商品资料的供应商",
             children: []
          },
          {
            name: "出入库类型",
            description: "新增/编辑商品出入库子类型",
             children: []
          }
        ]
      }
    ]
  },
  {
    name: "营销",
    icon: "MegaphoneIcon",
    description: "",
    children: [
      {
        name: "优惠券",
        description: "",
        children: [
          {
            name: "券管理",
            description: "创建/编辑各种优惠券的内容",
             children: []
          },
          {
            name: "送券活动",
            description: "创建/编辑优惠券的派送方式",
             children: []
          },
          {
            name: "派送记录",
            description: "查看各种优惠券的派送记录",
             children: []
          },
          {
            name: "核销记录",
            description: "查看已派送的优惠券被使用的记录",
             children: []
          }
        ]
      },
      {
        name: "促活专区",
        description: "",
        children: [
          {
            name: "限时优惠",
            description: "设置商品/套餐的限时售卖优惠/兑换优惠，打折或者满减",
             children: []
          },
          {
            name: "拼团活动",
            description: "设置指定套餐，多人一起下单，人数够了就能享受更低价格，支持分享链接",
             children: []
          },
          {
            name: "秒杀活动",
            description: "设置指定套餐，特价限时限量，先到先得，手慢无，支持分享链接",
             children: []
          },
          {
            name: "砍价活动",
            description: "设置指定套餐，支持邀请好友帮砍一刀，人越多价格越低，中途/砍到底价下单购买",
             children: []
          },
          {
            name: "领券中心",
            description: "可上架优惠券，让玩家可以无门槛领取",
             children: []
          },
          {
            name: "升单推荐",
            description: "可设置玩家在小程序下单时，推荐更高客单价的套餐使其升单",
             children: []
          }
        ]
      },
      {
        name: "互动专区",
        description: "",
        children: [
          {
            name: "弹窗广告",
            description: "可上传海报，让玩家进入小程序时以弹窗的形式展示给玩家，玩家点击海报可跳转指定页面",
             children: []
          },
          {
            name: "导购营销",
            description: "可设置店员为内推员，推广指定套餐让玩家下单即可获得推广提成",
             children: []
          },
          {
            name: "二级分销",
            description: "可让玩家成为分销员，推广指定套餐，推广成功后获得指定奖励",
             children: []
          },
          {
            name: "异业联盟",
            description: "可让附近其他业态的商家成为你的伙伴，玩家可以用储值兑换合作商家的商品",
             children: []
          },
          {
            name: "红包活动",
            description: "可生成凭手气/固定储值红包二维码，分享给玩家抢",
             children: []
          },
          {
            name: "游玩任务",
            description: "可设置任务节点，让玩家做任务打卡指定卡头获得积分，可把积分排名展示在终端",
             children: []
          },
          {
            name: "排队叫号",
            description: "支持游玩项目设置排队，可根据实时人数进行叫号，控制人流",
             children: []
          }
        ]
      },
      {
        name: "留存专区",
        description: "",
        children: [
          {
            name: "签到有礼",
            description: "可让玩家参与小程序的每日签到以获得指定奖品",
             children: []
          },
          {
            name: "关注有礼",
            description: "可让玩家参与小程序的每日签到以获得指定奖品",
             children: []
          },
          {
            name: "活动赠送",
            description: "设置赠送内容，可在收银台赠送给玩家",
             children: []
          }
        ]
      },
      {
        name: "拉新专区",
        description: "",
        children: [
          {
            name: "新人专享",
            description: "设置只有新注册的会员才能购买的专属套餐，以弹窗的形式提醒下单",
             children: []
          },
          {
            name: "拉新有礼",
            description: "可让玩家推广，让朋友也成为会员，相互可获得奖励；被邀请人下单后，相互能二次获得奖励",
             children: []
          }
        ]
      }
    ]
  },
  {
    name: "设备",
    icon: "WrenchScrewdriverIcon",
    description: "",
    children: [
      {
        name: "运营管理",
        description: "",
        children: [
          {
            name: "设备配置",
            description: "生成配置二维码，可配置自助设备到门店",
             children: []
          },
          {
            name: "区域管理",
            description: "可划分经营区域，报表可以区域进行筛选查看营收数据",
             children: []
          }
        ]
      },
      {
        name: "设备管理",
        description: "",
        children: [
          {
            name: "游戏机台",
            description: "新增/编辑游戏机台的参数、标签、分组、机种等信息",
             children: []
          },
          {
            name: "价格策略",
            description: "可设置不同时间段，卡头不同的扣币/收费策略",
             children: []
          }
        ]
      },
      {
        name: "经营设备",
        description: "",
        children: [
          {
            name: "收银台",
            description: "编辑PC端收银台信息，收银台轮播海报内容",
             children: []
          },
          {
            name: "Pos机",
            description: "编辑移动端收银台信息",
             children: []
          }
        ]
      },
      {
        name: "设备记录",
        description: "",
        children: [
          {
            name: "项目扣费记录",
            description: "查看游玩项目的扣费明细",
             children: []
          }
        ]
      }
    ]
  },
  {
    name: "线上",
    icon: "GlobeAltIcon",
    description: "",
    children: [
      {
        name: "微信管理",
        description: "",
        children: [
          {
            name: "小程序管理",
            description: "可编辑小程序装修、显示/隐藏已上架套餐、设置店铺信息",
             children: []
          },
          {
            name: "公众号管理",
            description: "绑定微信公众号，可以发送消息模板触达玩家",
             children: []
          }
        ]
      },
      {
        name: "团购映射",
        description: "",
        children: [
          {
            name: "核销设置",
            description: "设置团购的套餐与系统的套餐相互关联映射，才可核销团购",
             children: []
          },
          {
            name: "核销订单",
            description: "查看所有第三方平台的核销订单明细",
             children: []
          }
        ]
      },
      {
        name: "自营商城",
        description: "",
        children: [
          {
            name: "商城管理",
            description: "设置小程序售卖/兑换门店礼品的商城装修",
             children: []
          },
          {
            name: "兑换订单",
            description: "查看玩家在小程序兑换门店礼品的订单",
             children: []
          },
          {
            name: "退单管理",
            description: "管理玩家在小程序兑换门店礼品的退货订单",
             children: []
          },
          {
            name: "发货管理",
            description: "如果自营商城支持快递的话，玩家兑换，就需要在这里进行发货",
             children: []
          }
        ]
      },
      {
        name: "礼品商城",
        description: "",
        children: [
          {
            name: "兑换记录",
            description: "查看玩家在线上宝点游乐商城兑换记录",
             children: []
          },
          {
            name: "退货记录",
            description: "查看玩家在线上宝点游乐商城退货记录",
             children: []
          }
        ]
      }
    ]
  },
  {
    name: "报表",
    icon: "ChartBarIcon",
    description: "",
    children: [
      {
        name: "财务报表",
        description: "",
        children: [
          {
            name: "营收概况报表",
            description: "可查看营收概况，销售币单价，销售汇总，设备消耗汇总，兑换与回收汇总，会员每日概况",
             children: []
          },
          {
            name: "门店营收报表",
            description: "查看营收日报、营收月报，以及收款来源和类型",
             children: []
          },
          {
            name: "确认收入报表",
            description: "查看门店确认收入汇总，耗币收入明细，耗次票收入明细，耗年票收入明细",
             children: []
          }
        ]
      },
      {
        name: "销售报表",
        description: "",
        children: [
          {
            name: "销售统计报表",
            description: "查看销售套餐/商品根据不同维度的统计报表",
             children: []
          },
          {
            name: "时段销售报表",
            description: "查看某段时间根据时间段划分的营收金额",
             children: []
          },
          {
            name: "商品兑换汇总",
            description: "查看自营商城和礼品商城的兑换汇总，储值消耗情况",
             children: []
          }
        ]
      }
    ]
  },
  {
    name: "设置",
    icon: "CogIcon",
    description: "",
    children: [
      {
        name: "员工权限",
        description: "",
        children: [
          {
            name: "员工管理",
            description: "设置店员账号以及所属职位",
             children: []
          },
          {
            name: "职位权限",
            description: "设置职位的权限",
             children: []
          }
        ]
      },
      {
        name: "运营监控",
        description: "",
        children: [
          {
            name: "异常记录",
            description: "处理触达风控的异常数据，处理经营设备异常的情况",
             children: []
          },
          {
            name: "导出中心",
            description: "下载系统内点击导出的内容",
             children: []
          },
          {
            name: "系统日志",
            description: "查看系统的操作日志，收银台的授权日志",
             children: []
          },
          {
            name: "回收站",
            description: "可恢复被删除的系统数据",
             children: []
          }
        ]
      },
      {
        name: "基础设置",
        description: "",
        children: [
          {
            name: "财务设置",
            description: "新增/编辑支付渠道、其他收支",
             children: []
          },
          {
            name: "消息管理",
            description: "管理公众号、小程序、企业微信、短信等渠道的消息发送",
             children: []
          }
        ]
      },
      {
        name: "更多设置",
        description: "关于收银台、商品、门票、设备、门店参数、日历的高级设置",
        children: []
      },
      {
        name: "数据管理",
        description: "管理门店数据日志",
        children: []
      }
    ]
  }
];
