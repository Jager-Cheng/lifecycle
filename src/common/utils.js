// 为Promise添加一个end方法 不管成功还是失败都会走到这里 Chang-Jin 2019-11-08
Promise.prototype.end = function(cb) {
    let P = this.constructor;

    return this.then(
        value => P.resolve(cb()).then(() => value),
        reason => P.resolve(cb()).then(() => {
            throw reason;
        })
    );
};

const utils = {
    // 获取数据类型
    type(o) {
        return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
    },

    // 是否为空对象
    isEmptyObject(o) {
        for (let k in o) {
            return false;
        }

        return true;
    },

    // 深拷贝
    deepCopy(o) {
        let copy;

        if (o instanceof Array) {
            copy = [];

            o.forEach((item, index) => {
                copy[index] = this.deepCopy(item);
            });

            return copy;
        } else if (o instanceof Object) {
            copy = {};

            for (let k in o) {
                copy[k] = this.deepCopy(o[k]);
            }

            return copy;
        } else {
            return o;
        }
    },

    // 修改对象属性名
    objectUnify(o, map) {
        const type = Object.prototype.toString.call(o).slice(8, -1);

        if (type === 'Object') {
            Object.keys(map).forEach(k => {
                o[map[k]] = o[k];
            });
        }

        if (type === 'Array') {
            o.forEach(item => {
                this.objectUnify(item, map);
            });
        }

        return o;
    },

    // 数据适配器
    dataAdapter(type) {
        const that = this;
        const adapter = {
            /**
             * 把返回数据中的的null, 'null', undefined, 'undefined'转换为''或者sign
             *
             * @param {*} data 需要转换的数据
             * @param {String} sign 转换为其他标识
             * @returns
             */
            toEmpty(data, sign) {
                sign = sign || '';

                const type = that.type(data);

                if (type === 'null') {
                    return sign;
                }

                if (type === 'undefined') {
                    return sign;
                }

                if (type === 'boolean') {
                    return data;
                }

                if (type === 'number') {
                    return data;
                }

                if (type === 'string') {
                    return data === 'undefined' || data === 'null' ? sign : data;
                }

                if (type === 'array') {
                    data.forEach(el =>
                        el = that.dataAdapter('toEmpty')(el, sign)
                    );
                }

                if (type === 'object') {
                    for (let k in data) {
                        data[k] = that.dataAdapter('toEmpty')(data[k], sign);
                    }
                }

                return data;
            }
        };

        return adapter[type];
    },

    /**
     * 一维数组转二维
     *
     * @param {Array} originArr 原始数组
     * @param {Number} innerLength 内部数组长度
     * @returns
     */
    complexArr(originArr, innerLength) {
        let _arr = [];

        originArr.forEach((item, index) => {
            let arrIndex = Math.floor(index / innerLength);

            _arr[arrIndex] ? _arr[arrIndex] : _arr[arrIndex] = [];
            _arr[arrIndex].push(item);
        });

        return _arr;
    },

    /**
     * 从url中获取值
     *
     * @param {String} name 键
     * @returns 值
     */
    getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');

        var r = window.location.search.substr(1).match(reg);

        if (r !== null) {
            return decodeURI(r[2]);
        }

        return '';
    }
};

export default utils;
