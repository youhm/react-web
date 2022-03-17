/*
 * @Description: description
 * @version: 0.1
 * @Author: youhuimin
 * @Date: 2021-07-13 10:52:20
 * @LastEditors: youhuimin
 * @LastEditTime: 2022-03-14 15:22:18
 * @FilePath: \react\my-app\src\axios\requestList.js
 */
const proxyStr = '/xdeas_api'
// import serverApi from '@/axios/serverApi'

// let proxyStr = serverApi[ENV] // 这里是vue.config.js中做跨域匹配的字符串,如果修改的话,vue.config.js中的字符串要相对应修改

// if(sessionStorage.getItem('serverApi')){
//     proxyStr = serverApi[sessionStorage.getItem('serverApi')]
// }

export default {
    'getSecurityToken':proxyStr + '/xdeas-user-admin/getSecurityToken', // 获取OSStoken
    'loginBySessionId':proxyStr + '/xdeas-user-v2/chinaunicom/oss/api/loginBySessionId', // 根据sessionId的单点登录
    'loginByPhone':proxyStr + '/xdeas-user-v2/account/terminal/loginByPhone', // 验证码登录
    'sendValidCodeByPhone':proxyStr + '/xdeas-user-v2/account/terminal/sendValidCodeByPhone', // 获取验证码
    'selectByAccountIdOrg':proxyStr + '/xdeas-user-v2/resource/selectByAccountIdOrg', // 获取用户路由资源
    'selectAccountByAccount':proxyStr + '/xdeas-user-v2/account/selectAccountByAccount', // 获取用户信息
    'selectEngineroomByOrg':proxyStr + '/xdeas-engineroom/engineroom/room/business/selectEngineroomByOrg', // 获取机房列表
    'selectAllTypesTreeWithPath':proxyStr + '/xdeas-engineroom/engineroom/deviceType/business/selectAllTypesTreeWithPath', // 获取设备类型树
    'selectDevicesV3':proxyStr + '/xdeas-engineroom/engineroom/device/business/query/selectDevicesV3', // 获取设备类型树
    'selectDevicesList':proxyStr + '/xdeas-engineroom/engineroom/device/business/query/selectDevicesPage', // 获取设备类型树
    'selectDeviceTypeDetail':proxyStr + '/xdeas-engineroom/engineroom/deviceType/business/selectDeviceTypeDetail', // 获取设备类型详情
    'saveDevice':proxyStr + '/xdeas-engineroom/engineroom/device/business/command/saveDevice', // 获取设备类型详情
    'selectDeviceInfo':proxyStr + '/xdeas-engineroom/engineroom/device/business/query/selectDeviceInfo', // 获取设备详情
    'selectGatewaysByLocationId':proxyStr + '/xdeas-devices/selectGatewaysByLocationId', // 获取IOT列表
    'selectObjectType': proxyStr + '/xdeas-devices/selectObjectType', // 获取iot类型列表
    'delDevice':proxyStr + '/xdeas-engineroom/engineroom/device/business/command/delDevice', // 删除设备
    'getCollectorByOrganization':proxyStr + '/xdeas-datahub/v1/collector/getCollectorByOrganization', // 获取团队下采集器列表
    'getCollectorByIotObject':proxyStr + '/xdeas-datahub/v1/collector/getCollectorByIotObject', // 根据IOT获取采集器
    'selectCalculationsByOrg':proxyStr + '/xdeas-calculation/calculation/business/query/selectCalculationsByOrg', // 选择图标映射
    'saveDeviceDataItemConfig':proxyStr + '/xdeas-engineroom/engineroom/device/business/command/saveDeviceDataItemConfig', // 保存数据映射
    'refreshTokenForSessionId':proxyStr + '/xdeas-user-v2/account/terminal/refreshTokenForSessionId', // 根据token获取新的sessionId
    'loginByAccount':proxyStr + '/xdeas-user-v2/account/terminal/loginByAccount', // 账号密码登录
    'updateForgotAccountPassword':proxyStr + '/xdeas-user-v2/v3/account/updateForgotAccountPassword', // 修改密码
    // 'selectDevices':proxyStr + '/xdeas-engineroom/engineroom/device/business/query/selectDevicesPage', //获取机房下的设备
    'selectDeviceInfoV2':proxyStr + '/xdeas-engineroom/engineroom/device/terminal/query/selectDeviceInfoV2', //查询设备详情
    'getSeriesData':proxyStr + '/xdeas-datahub/v1/deviceChart/getSeriesData', //获取数据
    'getChartDefinitions':proxyStr + '/xdeas-datahub/v1/deviceChart/getChartDefinitions', //获取设备指定场景的空图表
    'selectCalculationInfosWithConsume':proxyStr + '/xdeas-calculation/common/v3/calculation/oneDayData', //根据计量id数组查询计量详情
    // 'selectCalculationInfosWithConsume':proxyStr + '/xdeas-calculation/calculation/terminal/query/selectCalculationInfosWithConsumeV2', //根据计量id数组查询计量详情
    'selectCaculatoinCharts_v2':proxyStr + '/xdeas-calculation/common/v3/calculation/batchDailyStatistics', //批量查询计量统计图表
    'selectCaculatoinCharts':proxyStr + '/xdeas-calculation/statistics/terminal/query/batchSelectCalculationChart', //批量查询计量统计图表
    'selectAlertEvents':proxyStr + '/xdeas-datahub/v1/alertManage/selectAlertEvents', //查询告警列表
    'selectMaterials':proxyStr + '/xdeas-engineroom/engineroom/material/business/query/selectMaterialsPage', //获取设备资料
    'saveMaterial':proxyStr + '/xdeas-engineroom/engineroom/material/terminal/command/saveMaterial', //获取设备资料
    'delMaterial':proxyStr + '/xdeas-engineroom/engineroom/material/terminal/command/delMaterial', //删除设备资料
    'saveTable':proxyStr + '/xdeas-tables/table/saveTable', // 保存表格
    'selectTables':proxyStr + '/xdeas-tables/table/selectTables', // 保存表格
    'selectOrgAccountByOrganizationId':proxyStr + '/xdeas-user-v2/v4/account/selectOrgAccountByOrganizationId', // 查询所有成员
    'saveRecord':proxyStr + '/xdeas-tables/table/record/saveRecord', // 表格保存记录
    'selectRecords':proxyStr + '/xdeas-tables/table/record/selectRecords', // 查询记录列表
    'selectRecordDetail':proxyStr + '/xdeas-tables/table/record/selectRecordDetail', // 查询记录详情
    'delRecord':proxyStr + '/xdeas-tables/table/record/delRecord', // 删除记录
    'delTable':proxyStr + '/xdeas-tables/table/delTable', // 删除表格
    'selectTableDetail':proxyStr + '/xdeas-tables/table/selectTableDetail', // 查询表格详情
    'selectAuthEnum':proxyStr + '/xdeas-tables/table/selectAuthEnum', // 查询权限枚举值
    'selectAuthByTableId':proxyStr + '/xdeas-tables/table/selectAuthByTableId', // 查询表格权限
    'saveTableAuth':proxyStr + '/xdeas-tables/table/saveTableAuth', // 查询表格权限
    'exportRecords':proxyStr + '/xdeas-tables/table/record/exportRecords', // 查询表格权限
    'selectEngineRoomDeviceByOrganizationId':proxyStr + '/xdeas-engineroom/engineroom/device/business/query/selectEngineRoomDeviceByOrgIdFromDeviceHubBus', // 查询机房和设备列表
    'selectElectricChars':proxyStr + '/xdeas-engineroom/engineroom/device/terminal/query/selectElectricChars',//查询电表的图表
    'exportElectricChars':proxyStr + '/xdeas-engineroom/engineroom/device/business/query/exportElectricChars',//导出电表图表

    'selectAlertList':proxyStr + '/xdeas-datahub/v1/alertConfig/selectAlertList', // 查询告警规则列表
    'deviceDataItem':proxyStr + '/xdeas-datahub/v2/dataItem/deviceDataItem', // 获取设备的数据项
    'addAlert':proxyStr + '/xdeas-datahub/v1/alertConfig/addAlert', // 新增自定义告警
    'updateAlert':proxyStr + '/xdeas-datahub/v1/alertConfig/updateAlert', // 更新自定义告警
    'selectAlert':proxyStr + '/xdeas-datahub/v1/alertConfig/selectAlert', // 查询自定义告警
    'deleteAlert':proxyStr + '/xdeas-datahub/v1/alertConfig/deleteAlert', // 删除自定义告警
    'selectAlertEventsToday':proxyStr + '/xdeas-datahub/v1/alertManage/selectAlertEventsToday', // 获取今日告警数
    'selectAlertEventsCount':proxyStr + '/xdeas-datahub/v1/alertManage/selectAlertEventsCount', // 查询告警事件数
    'selectAlertEventDetail':proxyStr + '/xdeas-datahub/v1/alertManage/selectAlertEventDetail', // 查询告警事件详情
    'pageAlertLog':proxyStr + '/xdeas-datahub/v1/alertManage/pageAlertLog', // 分页查询告警,比APP端多个告警名称搜索
    'updateAlertValid':proxyStr + '/xdeas-datahub/v1/alertConfig/updateAlertValid', // 单独设置告警规则启用停用
    'selectOrganizationEverHasBeenOpenedServiceByOrganizationId':proxyStr + '/xdeas-organization-v2/v3/additionService/selectOrganizationEverHasBeenOpenedServiceByOrganizationId', // 查询团队增值服务是否开启
    'selectEngineroomList':proxyStr + '/xdeas-engineroom/engineroom/room/business/selectEngineroomList', // 查询机构区域列表

    // 智能计量的接口---start
    'smartCalculationsForWeb':proxyStr + '/xdeas-calculation/web/v3/calculation/smartCalculations', // web的智能计量的计量列表接口
    'readingChangeRecordPage':proxyStr + '/xdeas-calculation/web/v3/calculation/readingChangeRecordPage', // web抄表记录列表分页数据接口
    'saveManualMeterReadingRecord':proxyStr + '/xdeas-calculation/common/v3/calculation/saveManualMeterReadingRecord', // 保存抄表记录
    'saveMeterReplacingRecord':proxyStr + '/xdeas-calculation/common/v3/calculation/saveMeterReplacingRecord', // 保存换表记录
    'saveRechargeRecord':proxyStr + '/xdeas-calculation/common/v3/calculation/saveRechargeRecord', // 保存充值记录
    'dailyStatistics':proxyStr + '/xdeas-calculation/common/v3/calculation/dailyStatistics', // 计量日统计图表数据接口
    'hourlyStatistics':proxyStr + '/xdeas-calculation/common/v3/calculation/hourlyStatistics', // 计量实时统计图表数据接口
    'monthlyStatistics':proxyStr + '/xdeas-calculation/common/v3/calculation/monthlyStatistics', // 计量月统计图表数据接口
    'smartCalculationDetail':proxyStr + '/xdeas-calculation/common/v3/calculation/smartCalculationDetail', // 智能计量的计量详情接口
    'meterReplacingRecordDetail':proxyStr + '/xdeas-calculation/common/v3/calculation/meterReplacingRecordDetail', // 获取换表记录详情接口
    'readingRecordDetail':proxyStr + '/xdeas-calculation/common/v3/calculation/readingRecordDetail', // 获取读表记录详情接口
    'rechargeRecordDetail':proxyStr + '/xdeas-calculation/common/v3/calculation/rechargeRecordDetail', // 获取预充记录详情接口
    'deleteDeleteMeterReadingRecord':proxyStr + '/xdeas-calculation/deleteDeleteMeterReadingRecord', // 删除读表记录
    'deleteMeterReplacingRecord':proxyStr + '/xdeas-calculation/deleteMeterReplacingRecord', // 删除换表记录
    'deleteRechargeRecordParam':proxyStr + '/xdeas-calculation/deleteRechargeRecordParam', // 删除充值记录

    // 智能计量的接口---end
    
    'saveEngineroomV4':proxyStr + '/xdeas-engineroom/engineroom/room/business/saveEngineroomV4', // 新增,编辑区域
    'orderByEngineroom':proxyStr + '/xdeas-engineroom/engineroom/room/business/orderByEngineroom', // 同级区域拖拉排序
    'delEngineroomV4':proxyStr + '/xdeas-engineroom/engineroom/room/business/delEngineroomV4', // 删除区域V4
    'selectMaterialsPage':proxyStr + '/xdeas-engineroom/engineroom/material/business/query/selectMaterialsPage', // 获取设备资料
    'areaSaveMaterial':proxyStr + '/xdeas-engineroom/engineroom/material/business/command/saveMaterial', // 保存资料
    'areaDelMaterial':proxyStr + '/xdeas-engineroom/engineroom/material/business/command/delMaterial', // 删除资料
    'selectEngineRoomDeviceByOrgIdV2':proxyStr + '/xdeas-engineroom/engineroom/device/business/query/selectEngineRoomDeviceByOrgIdFromDeviceHubBusWithRoom', // 获取所有区域包括所有设备


    'selectCollectorByOrganization':proxyStr + '/xdeas-devices/selectCollectorByOrganization', // 根据团队以及分类查询采集器
    'selectCollectorByOrganizationV2':proxyStr + '/xdeas-devices/v2/selectCollectorByOrganization', // 根据团队以及分类查询采集器V2
    'selectCalculationDataItemCollector':proxyStr + '/xdeas-devices/selectCalculationDataItemCollector', // 查询计量的数据映射关系
    'bindCollector':proxyStr + '/xdeas-datahub/v1/calculation/bindCollector', // 计量的数据项id绑定采集器
    'saveCalculation':proxyStr+'/xdeas-calculation/common/v3/calculation/saveCalculation',//保存计量V3
    'saveCalculationV4': proxyStr + '/xdeas-calculation/common/v4/calculation/saveCalculation',// 保存计量V4
    'updateCalculation': proxyStr + '/xdeas-calculation/common/v4/calculation/updateCalculation', // 更新计量
    'calculationDetail':proxyStr+'/xdeas-calculation/common/v3/calculation/calculationDetail',//计量详情
    'calculationDetailV4':proxyStr+'/xdeas-calculation/common/v4/calculation/calculationDetail',//计量详情v4
    'manageCalculationPage':proxyStr + '/xdeas-calculation/web/v3/calculation/manageCalculationPage',//计量列表
    'delCalculation':proxyStr + '/xdeas-calculation/calculation/terminal/command/delCalculation',//删除计量
    'optionalElementsOfFormula':proxyStr + '/xdeas-calculation/common/v3/calculation/optionalElementsOfFormula',//计量公式组件可以选择的元素
    'beAssociated':proxyStr + '/xdeas-calculation/common/v3/calculation/beAssociated',//计量被关联到哪些公式计量和图表中
    'updateOrder':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/updateOrder',// 更新监测点排序
    'updateInfo':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/updateInfo',// 更新监测点信息
    'createSupervisePoint':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/createSupervisePoint',// 创建监测点
    'addCalculationPlan':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/addCalculationPlan',// 新增方案到监测点
    'removeCalculationPlan':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/removeCalculationPlan',// 从监测点移除方案

    // 计量报表
    'selectMeterReportDetailPage':proxyStr + '/xdeas-calculation/web/v1/calculation/report/query/selectReportDetailPage',// 计量报表明细分页查询
    'exportMeterReportDetail':proxyStr + '/xdeas-calculation/web/v1/calculation/report/query/exportReportDetail',// 导出计量报表明细
    'selectMeterReportList':proxyStr + '/xdeas-calculation/web/v1/calculation/report/query/selectReportList',// 计量报表配置列表
    'delMeterReport':proxyStr + '/xdeas-calculation/web/v1/calculation/report/command/delReport',// 删除计量报表配置
    'saveMeterReport':proxyStr + '/xdeas-calculation/web/v1/calculation/report/command/saveReport',// 保存计量报表配置
    'selectMeterReportDetail':proxyStr + '/xdeas-calculation/web/v1/calculation/report/query/selectReportDetail',// 计量报表详情查询

    // 能源监测 ----- start
    'selectSupervisePointByOrganizationId':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/selectSupervisePointByOrganizationId',//获取监测点树
    'selectTreeSelected':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/selectTreeSelected',//获取上一次勾选的监测点树
    'selectSupervisePointManageByOrganizationId':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/selectSupervisePointManageByOrganizationId',//获取管理监测点树
    'pageCalculation':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/pageCalculation',//监测点分页查询计量
    'pageCalculationPlan':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/pageCalculationPlan',//监测点分页查询计量方案
    'cacheTreeSelected':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/cacheTreeSelected',//监测点分页查询计量方案
    'energyProducerCalculationCard':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyProducerCalculationCard',//产出/消耗总量卡片
    'energyTotalConsumerChart':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyTotalConsumerChart',// 消耗总量统计图
    'energyConsumerDoughnut':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyConsumerDoughnut',// 消耗圆角环形图
    'energyMixedLineAndBarChart':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyMixedLineAndBarChart',// 单耗线柱混合图
    'energyTotalProducerChart':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyTotalProducerChart',// 产出总量统计图
    'selectTargetValue':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/selectTargetValue',// 查询监测点目标值
    'updateSuperviseTargetValue':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/updateSuperviseTargetValue',// 更新监测点目标值以及选择的项
    'deleteSupervisePoint':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/deleteSupervisePoint',// 删除监测点
    'energyConsumerCalculationCard':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyConsumerCalculationCard',// 消耗总量卡片
    'energyTotalConsumerLineChart':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyTotalConsumerLineChart',// 监测点总消耗线图
    'energyTotalConsumerCarbonExhaustChart':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyTotalConsumerCarbonExhaustChart',// 消耗总量碳排放统计图
    'energyTotalConsumerStructureDoughnut':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyTotalConsumerStructureDoughnut',// 总能耗结构图
    'energyTotalConsumerCard':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyTotalConsumerCard',// 总能耗卡片
    'energyTotalConsumerHourlyLineChart':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyTotalConsumerHourlyLineChart',// 实时趋势图
    'energyConsumerAnalyzeChart':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyConsumerAnalyzeChart',// 能耗分析
    'getDisableSupervisePoint':proxyStr + '/xdeas-calculation/web/v1/supervisePoint/getDisableSupervisePoint',// 获取设备分析监测点不可选
    'energyTotalConsumerLineChartExport':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyTotalConsumerLineChartExport',// 导出监测点总消耗线图
    
    //    大屏
    // 'energyMixedLineAndBarChart':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/energyMixedLineAndBarChart',// 单耗线柱混合图
    'screenInferiority':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/screenInferiority',// 次级统计
    'screenMiddleQuery':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/screenMiddleQuery',// 大屏中部
    'screenElectricRank':proxyStr + '/xdeas-calculation/web/v1/supervisePointStatistic/screenElectricRank',// 用电排行
    'sumByDayOrMonth':proxyStr + '/xdeas-datahub/v1/alertCount/sumByDayOrMonth',// 告警分析（按告警名分组统计）
    'countDeviceAlertNum':proxyStr + '/xdeas-datahub/v1/alertCount/countDeviceAlertNum',// 设备告警数（topN）
    
    'selectAlertLogPage':proxyStr + '/xdeas-calculation/web/v1/alertLog/query/selectAlertLogPage',// 计量告警记录分页查询列表
    'selectAlertLogDetails':proxyStr + '/xdeas-calculation/web/v1/alertLog/query/selectAlertLogDetails',// 计量告警记录详情查询
    'selectAlertConfigPage':proxyStr + '/xdeas-calculation/web/v1/alertConfig/query/selectAlertConfigPage',// 计量告警规则分页查询列表
    'meterUpdateAlertValid':proxyStr + '/xdeas-calculation/web/v1/alertConfig/command/updateAlertValid',// 启用/停用计量告警规则
    'delAlertConfig':proxyStr + '/xdeas-calculation/web/v1/alertConfig/command/delAlertConfig',// 删除计量告警规则
    'saveAlertConfig':proxyStr + '/xdeas-calculation/web/v1/alertConfig/command/saveAlertConfig',// 保存计量告警规则
    'selectNoReadAlert':proxyStr + '/xdeas-calculation/web/v1/alertRead/query/selectNoReadAlert',// 查询是否出现未读新告警信息
    'selectNewestCalculationAlertLogList':proxyStr + '/xdeas-calculation/web/v1/alertLog/query/selectNewestAlertLogList',// 查询n条最新计量告警记录
    'selectEngineRoomCalculationTree':proxyStr + '/xdeas-calculation/web/v1/calculation/tree/query/selectEngineRoomCalculationTree',// 查询计量区域树

    // 首页的 接口----------------start---------------------
    
    'selectDisplayBoxs':proxyStr + '/xdeas-user-v2/v1/displayBox/selectDisplayBoxs',// 查询个人展示框配置
    'selectDisplayBoxsItems':proxyStr + '/xdeas-user-v2/v1/displayBox/selectDisplayBoxsItems',// 查询个人展示框下级明细配置（目前为数据总览）
    'saveBoxs':proxyStr + '/xdeas-user-v2/v1/displayBox/saveBoxs',// 保存展示框配置
    'saveBoxItems':proxyStr + '/xdeas-user-v2/v1/displayBox/saveBoxItems',// 保存展示框下级明细配置


    
    'countDevicesByOrg':proxyStr + '/xdeas-devicehub-business/app/v1/businessdevice/orgDeviceNum',// 统计团队设备总数
    'todayAlertNum':proxyStr + '/xdeas-datahub/v1/alertCount/todayAlertNum',// 今日告警
    'currentMonthAlertNum':proxyStr + '/xdeas-datahub/v1/alertCount/currentMonthAlertNum',// 当月告警
    'alertingDeviceNum':proxyStr + '/xdeas-datahub/v1/alertCount/alertingDeviceNum',// 告警中设备
    'countByTime':proxyStr + '/xdeas-calculation/common/v3/calculation/countByTime',// 首页数据总览计量统计
    'recentAlerts':proxyStr + '/xdeas-datahub/v1/alertCount/recentAlerts',// 告警信息
    'countAlertByDayOrMonth':proxyStr + '/xdeas-datahub/v1/alertCount/countAlertByDayOrMonth',// 告警统计
    'selectDeviceByOrgId':proxyStr + '/xdeas-monitor/monitor/device/business/query/selectDeviceByOrgId',// 监控视频 查询机构设备列表
    'todoCount':proxyStr + '/xdeas-task/v2/task/todoCount',// 查询待办任务数量
    'organizationTodoCount':proxyStr + '/xdeas-task/v2/task/organizationTodoCount',// 查询团队待办任务数量
    'selectItemLastRange':proxyStr + '/xdeas-user-v2/v1/displayBox/selectItemLastRange',// 查询明细配置上一次选择的时间范围（目前为数据总览）

    // 首页的 接口----------------end---------------------
    'selectAlertConfigDetails':proxyStr + '/xdeas-calculation/web/v1/alertConfig/query/selectAlertConfigDetails',// 计量告警规则详情查询
    'selectPushLogsPages':proxyStr + '/xdeas-message/v2/message/pushLog/query/selectPushLogsPages',// selectPushLogsPages

    'selectSupervisePointReportByUserId':proxyStr + '/xdeas-calculation/web/v1/supervisePointReport/selectSupervisePointReportByUserId',// 查询用户的监测点报告
    'deleteSupervisePointReport':proxyStr + '/xdeas-calculation/web/v1/supervisePointReport/deleteSupervisePointReport',// 删除监测点报告
    'energyPreCalculationConsumerTable':proxyStr + '/xdeas-calculation/web/v1/supervisePointReport/energyPreCalculationConsumerTable',// 查询报表数据
    'selectSupervisePointReportById':proxyStr + '/xdeas-calculation/web/v1/supervisePointReport/selectSupervisePointReportById',// 查询监测点报告详情
    'createSupervisePointReport':proxyStr + '/xdeas-calculation/web/v1/supervisePointReport/createSupervisePointReport',// 创建监测点报告
    'updateSupervisePointReport':proxyStr + '/xdeas-calculation/web/v1/supervisePointReport/updateSupervisePointReport',// 更新监测点报告
    'energyPreCalculationConsumerTableExport':proxyStr + '/xdeas-calculation/web/v1/supervisePointReport/energyPreCalculationConsumerTableExport',// 查询报表数据
    'selectOperateLogs':proxyStr + '/xdeas-user-v2/v1/operateLog/selectOperateLogs',// 查询日志列表
    // ------- 电能优化报告 start-------
    'queryOverviewReport':proxyStr + '/xdeas-optimization/v1/report/queryOverviewReport',// 查询优化建议总览报告
    'queryDemandReport':proxyStr + '/xdeas-optimization/v1/report/queryDemandReport',// 查询需量管理报告
    'queryEnergyOptimizationReport':proxyStr + '/xdeas-optimization/v1/report/queryEnergyOptimizationReport',// 能效提升优化报告
    'queryEnergyStorageReport':proxyStr + '/xdeas-optimization/v1/report/queryEnergyStorageReport',// 储能提升优化报告
    'queryPowerFactorReport':proxyStr + '/xdeas-optimization/v1/report/queryPowerFactorReport',// 查询功率因数报告
    'queryElectricQualityReport':proxyStr + '/xdeas-optimization/v1/report/queryElectricQualityReport',// 查询电能质量报告
    'insertStorageConfig':proxyStr + '/xdeas-optimization/v1/system/insertStorageConfig',// 设置储能评估配置
    'queryStorageConfig':proxyStr + '/xdeas-optimization/v1/system/queryStorageConfig',// 查询用电信息储能评估配置
    'queryReportedYearAndMonth':proxyStr + '/xdeas-optimization/v1/report/queryReportedYearAndMonth',// 查询优化建议报告可选年月
    'judgeConfiged':proxyStr + '/xdeas-optimization/v1/report/judgeConfiged',// 判断是否已配置电能
    // ------- 电能优化报告 end-------
    'queryElementConfigs':proxyStr + '/xdeas-optimization/v1/system/queryElementConfigs',// 查询电能指标配置
    'insertElementConfigs':proxyStr + '/xdeas-optimization/v1/system/insertElementConfigs',// 保存电能指标配置
    'insertGlobalConfigs':proxyStr + '/xdeas-optimization/v1/system/insertGlobalConfigs',// 保存用电信息配置
    'queryGlobalConfigs':proxyStr + '/xdeas-optimization/v1/system/queryGlobalConfigs',// 查询用电信息配置
    'queryAccountOrg':proxyStr + '/xdeas-organization-v2/org/queryAccountOrg',// 根据账号id查询此账号关联的所有团队信息
    'updateAccountAppBoundOrg':proxyStr + '/xdeas-user-v2/account/updateAccountAppBoundOrg',// 更新账号绑定团队
    'orgAuthedUnRelatedDevices':proxyStr + '/xdeas-devicehub-business/web/business/v1/businessdevice/orgAuthedUnRelatedDevices',// 已授权未关联基础设备列表
    'queryReportList': proxyStr + '/xdeas-optimization/v1/energyReport/queryReportList',
    'queryCategory': proxyStr + '/xdeas-optimization/v1/energyReport/queryCategory',
    'queryReportDetails': proxyStr + '/xdeas-optimization/v1/energyReport/queryReportDetails',
    'queryPageStatus': proxyStr + '/xdeas-optimization/v1/energyReport/queryPageStatus',//查询报告状态
    'queryReportStatus': proxyStr + '/xdeas-optimization/v1/energyReport/queryReportStatus',//查询报告状态
    

    // restFul 接口
    'baseDevice':proxyStr + '/xdeas-devicehub/web/v1/base-device/',// 基础设备详情
    'businessdevice':proxyStr + '/xdeas-devicehub-business/web/business/v1/businessdevice/',// 设备详情
    'deviceType':proxyStr + '/xdeas-devicehub/web/v1/device-type/',// 设备类型
    'organization':proxyStr + '/xdeas-devicehub/web/v1/organization/',// 团队
    'electrcityMater':proxyStr + '/xdeas-devicehub-business/web/business/v1/electricity-meter/',// 电表
    'commonDevice':proxyStr + '/xdeas-devicehub-business/web/business/v1/common-device/',// 基础设备
    'ai360Alarm':proxyStr + '/xdeas-monitor/monitor/ai360/alarm/',// 360视频告警
    'calculation':proxyStr + '/xdeas-calculation/calculation/',// web计量

    // ---------- 计量类型start ---------------
    'pageCalculationTypeCandidate': proxyStr + '/xdeas-calculation/web/v1/calculationTypeCandidate/pageCalculationTypeCandidate', // 分页查询计量类型候选web
    'modifyNameUnitAndActiveStatus': proxyStr + '/xdeas-calculation/web/v1/modifyNameUnitAndActiveStatus', // 修改名字单位状态
    'changeActiveStatus': proxyStr + '/xdeas-calculation/web/v1/changeActiveStatus', // 更改激活状态
    'createCalculationTypeCandidate': proxyStr + '/xdeas-calculation/web/v1/createCalculationTypeCandidate', // 创建计量类型
    'deleteCalculationTypeCandidate': proxyStr + '/xdeas-calculation/web/v1/deleteCalculationTypeCandidate', // 删除计量类型
    'selectCalculationTypeCandidate': proxyStr + '/xdeas-calculation/web/v1/calculationTypeCandidate/selectCalculationTypeCandidate', // 查询团队下的计量类型无分页
    'selectCalculationByOrganizationForHomePage': proxyStr + '/xdeas-calculation/selectCalculationByOrganizationForHomePage', // 查询团队下的计量类型无分页
    // ---------- 计量类型end ------------
    
//    数据看板
    'deviceDataBoard':proxyStr + '/xdeas-data-board/web/v1/deviceDataBoard',
    
};
