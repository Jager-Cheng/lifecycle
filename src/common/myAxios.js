/*************
 * @desc 封装axios
 * @date 2019-09-04
 * @author Chang-Jin
 *************/

import Qs from 'qs';
import Axios from 'axios';

// 修改Axios的默认Content-Type为formdata形式 Chang-Jin 2019-09-04
const axios = Axios.create({
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

// 添加拦截函数对请求参数做stringify处理
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    config.data = Qs.stringify(config.data);

    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default axios;
