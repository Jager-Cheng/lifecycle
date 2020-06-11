/*************
 * @desc 定义全局过滤器 (公用的才在这里定义)
 * @date 2019-09-05
 * @author Chang-Jin
 *************/
const filters = {
    // 日期转化为xxxx年xx月xx日格式
    dateFormat(val) {
        val = val || '';

        const dateUnitArr = ['年', '月', '日', '时', '分', '秒'],
            dateArr = val.split('-');

        let result = '';

        dateArr.forEach((item, index) => {
            result += item + dateUnitArr[index];
        });

        return result;
    },
    ymd: function(time, type) {
        if (!time) {
            return '';
        }

        if (type === 'date') {
            return (time.substring(0, 4).length === 4 ? time.substring(0, 4) : '') +
            (time.substring(4, 6).length === 2 ? '-' + time.substring(4, 6) : '') +
            (time.substring(6, 8).length === 2 ? '-' + time.substring(6, 8) : '');
        }

        if (type === 'time') {
            return (time.substring(8, 10).length === 2 ? '' + time.substring(8, 10) : '') +
            (time.substring(10, 12).length === 2 ? ':' + time.substring(10, 12) : '') +
            (time.substring(12, 14).length === 2 ? ':' + time.substring(12, 14) : '');
        }

        if (type === 'dateTime') {
            if (time.indexOf('-') > -1) {
                return time;
            }

            return (time.substring(0, 4).length === 4 ? time.substring(0, 4) : '') +
            (time.substring(4, 6).length === 2 ? '-' + time.substring(4, 6) : '') +
            (time.substring(6, 8).length === 2 ? '-' + time.substring(6, 8) : '') +
            (time.substring(8, 10).length === 2 ? '  ' + time.substring(8, 10) : '') +
            (time.substring(10, 12).length === 2 ? ':' + time.substring(10, 12) : '') +
            (time.substring(12, 14).length === 2 ? ':' + time.substring(12, 14) : '');
        }
    },

    // null undefined 转空
    toEmpty(val, sign) {
        sign = sign || '';

        if (val === null || val === 'null' || val === 'undefined' || val === undefined) {
            return sign;
        }

        return val;
    }
};

export default filters;
