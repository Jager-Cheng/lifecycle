// 设置环境变量切换开发模式和生产模式
let api = {};
let ip = '';

if (process.env.NODE_ENV === 'production') {
    ip = '/CCD/';
} else {
    ip = 'http://192.168.120.26:8200/CCD/';
}

api = {
    getConfigurations: ip + 'documentscatter/getConfigurations.do', // 获取配置
    searchList: ip + 'documentscatter/searchList.do', // 查询患者列表
    getDeptList: ip + 'documentscatter/ipad/getDeptList.do', // 查询科室列表
    search: ip + 'documentscatter/search.do', // 查询文档信息
    getAppTimeLineData: ip + 'documentscatter/getAppTimeLineData.do', // 手机端获取时间轴信息
    getAppDocList: ip + 'documentscatter/getAppDocList.do', // 手机端获取分类/手机端获取无时间轴数据
    getTimeLineData: ip + 'documentscatter/getTimeLineData.do', // 查询时间轴信息
    getTimeLineDetail: ip + 'documentscatter/getTimeLineDetail.do', // 查询时间轴对应患者信息
    searchDetail: ip + 'documentscatter/searchDetail.do', // 查询患者荷载对应列表

    medicaladvicepage: ip + 'document/medicaladvicepage.do', // 查询医嘱列表
    showInfo: ip + 'document/showInfo.do', // 获取报告详情
    getLisHistory: ip + 'document/getLisHistory.do', // 获取检验报告历史
    openFile: ip + 'document/openFile.do', // 获取PDF
    generatePicDoc: ip + 'document/generatePicDoc.do?xmlPath=', // 获取图片
    pdfIp: ip + 'pdf/', // pdf服务器地址
    errPdf: ip + 'pdf/error.pdf', // pdf异常地址

    showInfoByPLT: ip + 'document/showInfoByPLT.do', // 获取处方诊断详情
    showChufang: ip + 'document/showChufang.do', // 获取处方数据
    getMedicalAdviceFlowInfos: ip + 'document/getMedicalAdviceFlowInfos.do', // 获取医嘱闭环
    getSeriesList: ip + 'dicom/getSeriesList.do', // 获取影像列表
    getFlowInfos: ip + 'documentscatter/getFlowInfos.do' // 获取检查流程
};

export default api;
