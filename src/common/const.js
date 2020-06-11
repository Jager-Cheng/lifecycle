/**
 * @desc 全局变量
 * @date 2020-01-02
 * @author Chang-Jin
 */
let CONST = Object.create(null);

// 不同的荷载类型映射到不同的组件 (这里是从pad上复制来的, mobile上不一定有这些控件)
const componentMap = CONST.componentMap = {
    'payLoadType.baseInfo': 'BaseInfo', // 基本信息
    'payLoadType.recipe': 'Record', // 门诊处方
    'payLoadType.InHospitalInfo': 'Record', // 住院资料
    'payLoadType.DischargeInformation': 'Record', // 出院资料
    // 'payLoadType.healthCheck': 'HealthCheck', // 体检
    'payLoadType.chafangjilu': 'Record', // 查房记录
    'payLoadType.Progress': 'Record', // 病程记录
    'payLoadType.anesthesia': 'Record', // 麻醉记录
    'payLoadType.Operation': 'Record', // 手术记录
    'payLoadType.HLRecord': 'HLRecord', // 护理记录
    // 'payLoadType.discussion': 'Discussion', // 病例讨论
    'payLoadType.otherRecords': 'Record', // 其他记录
    'payLoadType.JianCha': 'JianCha', // 检查
    'payLoadType.JianYan': 'JianYan', // 检验
    'payLoadType.medicaladvice': 'Order' // 医嘱
};

export {componentMap};

export default CONST;
