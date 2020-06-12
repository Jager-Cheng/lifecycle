module.exports = {
    env: { // 定义一组预定义的全局变量
        browser: true // 浏览器环境中的全局变量
    },
    parserOptions: { // 解析器配置
        parser: 'babel-eslint',
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/base'
    ],
    plugins: [ // 插件
        'vue'
    ],
    rules: {
        /*
         * 以下为代码风格相关规则
         */

        /* 缩进相关规则 */
        indent: [1, 4, { // 使用4个空格缩进 switch-case中case要缩进
            SwitchCase: 1
        }],

        /* 分号相关规则 */
        semi: [1, 'always'], // 语句末尾强制使用分号 忽略花括号的最后一个分号
        'semi-spacing': [1, { // 强制分号后有空格，禁止分号前有空格
            before: false,
            after: true
        }],
        'semi-style': 1, // 分号应该出现在句尾

        /* 逗号相关规则 */
        'comma-dangle': [1, 'never'], // 数组和对象键值对最后一个逗号
        'comma-spacing': [1, { // 逗号之前禁止使用空格，逗号之后需要使用空格
            before: false,
            after: true
        }],

        /* 空格相关规则 */
        'key-spacing': [1, { // 对象键值对 冒号前不需要空格 冒号后需要空格
            beforeColon: false,
            afterColon: true
        }],
        'no-multi-spaces': 1, // 禁止出现多个空格
        'no-trailing-spaces': 1, // 禁止行尾空格
        'no-whitespace-before-property': 1, // 禁止属性前有空白
        'space-before-blocks': [1, 'always'], // 要求语句块之前的空格
        'space-before-function-paren': [1, 'never'], // 紧致函数圆括号之前禁止有空格
        'space-in-parens': 1, // 禁止在圆括号内使用空格
        'space-infix-ops': 1, // 要求操作符周围有空格
        'space-unary-ops': [1, { // 单词类一元操作符之后需要空格 非单词类一元操作符之前之后不需要空格
            words: true, // 单词类一元操作符new、delete、typeof、void...
            nonwords: false // 非单词类一元操作符-、+、--、++、!、!!...
        }],
        'spaced-comment': [1, 'always', { // 强制在注释中 // 或 /* 使用一致的空格
            line: {
                exceptions: ['-', '+'],
                markers: ['/']
            },
            block: {
                exceptions: ['*'],
                markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!'],
                balanced: true
            }
        }],
        'array-bracket-spacing': 1, // 禁止在数组 '[' 后 和 ']' 前使用空格
        'block-spacing': [1, 'always'], // 强制在左花括号和同一行上的下一个 token 之间有一致的空格，强制右花括号和在同一行的前一个 token 之间有一致的空格，
        'computed-property-spacing': [1, 'never'], // 禁止在计算属性中使用空格
        'func-call-spacing': 1, // 禁止在函数标识符和其调用之间有空格
        // 'keyword-spacing': [1, { // 强制在关键字前后使用一致的空格
        //     before: false,
        //     after: true,
        //     overrides: {
        //         'else': {
        //             before: true
        //         },
        //         'while': {
        //             before: true
        //         },
        //         'catch': {
        //             before: true
        //         },
        //         'finally': {
        //             before: true
        //         },
        //         'from': {
        //             before: true
        //         },
        //         'as': {
        //             before: true
        //         }
        //     }
        // }],
        'object-curly-spacing': [1, 'never'], // 禁止在对象的'{'后和'}'前出现空格
        'switch-colon-spacing': 1, // 强制在 switch 的冒号后有空格，禁止在 switch 的冒号前有空格

        /* 空行相关规则 */
        'eol-last': [1, 'always'], // 强制非空文件末尾保留一行空行
        'lines-around-comment': [1, { // 强制注释前添加一行空行
            beforeBlockComment: true,
            beforeLineComment: true,
            allowBlockStart: true,
            allowObjectStart: true,
            allowArrayStart: true,
            allowClassStart: true
        }],
        'lines-between-class-members': 1, // 强制类成员之间有一行空行
        'no-multiple-empty-lines': [1, { // 最多两个连续空行
            max: 2
        }],
        'padding-line-between-statements': [1, { // 强制函数声明后添加空行
            blankLine: 'always',
            prev: 'var',
            next: '*'
        }, { // 强制"像块的语句"后添加空行 如{}, if (a) {}, while (a) {}
            blankLine: 'always',
            prev: 'block-like',
            next: '*'
        }],

        /* 换行相关规则 */
        'one-var-declaration-per-line': 1, // 强制每个变量初始化语句换行
        'operator-linebreak': [1, 'after'], // 强制把换行符放在操作符后面
        'comma-style': 1, // 强制把换行符放在逗号后
        'brace-style': [1, '1tbs'], // 强制大括号使用one true brace style风格，即将大括号放在控制语句或声明语句同一行的位置

        /* 注释相关规则 */
        // 'multiline-comment-style': 1, // 禁止使用连续的行注释来表示块注释。另外，要求块注释的每行之前有一个 *
        // 'require-jsdoc': [1, { // 要求采用jsdoc方式给函数等添加注释
        //     require: {
        //         FunctionDeclaration: true,
        //         MethodDefinition: true,
        //         ClassDeclaration: true,
        //         ArrowFunctionExpression: true,
        //         FunctionExpression: true
        //     }
        // }],

        /* 引号相关规则 */
        quotes: [1, 'single'], // js中必须单引号

        /* 变量命名相关规则 */
        camelcase: [1, { // 标准变量采用驼峰式命名(对象属性除外)
            properties: 'never'
        }],
        'new-cap': 1, // 要求构造函数首字母大写
        'id-blacklist': [1, 'break', 'case', 'catch', 'continue', 'default', 'delete', 'do', 'else', 'finally', 'for', 'function', 'if', 'in', 'instanceof', 'new', 'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'abstract', 'boolean', 'byte', 'char', 'class', 'const', 'debugger', 'double', 'enum', 'export', 'extends', 'final', 'float', 'goto', 'implements', 'import', 'int', 'interface', 'long', 'native', 'package', 'private', 'protected', 'public', 'short', 'static', 'super', 'synchronized', 'throws', 'transient', 'volatile'], // 禁止使用关键字或保留字作为变量名
        // 'dollar-sign/dollar-sign': [2, 'ignoreProperties'], // jquery对象必须以'$'开头命名

        /* 变量声明相关规则 */
        // 'vars-on-top': 1, // 要求将变量声明放在它们作用域的顶部
        // 'one-var': [1, 'consecutive'], // 每个作用域允许出现一个变量声明，但对连续的变量声明要求合并为单个声明

        /* 函数相关规则 */
        'wrap-iife': [1, 'inside'], // 立即执行函数外必须包一层括号
        'func-names': [1, 'never'], // 不要给inline function命名

        /* 数组、对象相关规则 */
        'quote-props': [1, 'as-needed', { // 对象字面量属性名称 当为关键字或数字时使用引号, 否则不使用引号
            keywords: true,
            unnecessary: false,
            numbers: true
        }],
        'object-curly-newline': [1, { // 非空对象要求换行
            ObjectExpression: {
                minProperties: 1
            }
        }],
        'object-property-newline': 1, // 对象不同属性放在不同行上

        /* 括号相关规则 */
        curly: [1, 'all'], // 控制语句中即使只有一行也要使用大括号

        /* jshint相关规则 */
        eqeqeq: 1, // 强制使用 === 和 !==
        'no-use-before-define': [1, { // 禁止变量和类先使用后声明
            functions: false,
            classes: true,
            variables: true
        }],
        // 'no-new': 1, // 不要在一句代码中单单使用构造函数，记得将其赋值给某个变量
        'no-extra-parens': 1, // 禁止不必要的括号
        'no-unused-vars': 0, // 不检查 定义未使用变量
        'no-undef': 0, // 不可以使用未定义变量
        'no-console': 0, // 不可以cosole
        'no-extend-native': 0, // 禁止扩展原生类型
        'no-debugger': 1, // 存在debugger时会提示
        'no-loop-func': 1, // 禁止在循环中声明函数
        'no-array-constructor': 1, // 禁用Array构造函数,
        'no-new-object': 1, // 禁用Object构造函数
        'no-new-func': 1, // 禁用Function构造函数
        'no-new-wrappers': 1, // 禁止对 String，Number 和 Boolean 使用 new 操作符

        /* 杂项相关规则 */
        'linebreak-style': 0, // 换行符统一用'LF'
        'consistent-this': [1, '_this', 'that', 'self'], // 对上下文this的引用只能使用'_this', 'that', 'self'其中一个来命名
        'no-empty-function': 1 // 禁止出现空函数
    }
};
