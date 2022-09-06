{
    //extends用于引入某配置作为基础配置，然后再在后续的rules中对其进行扩展
    "extends": "eslint:recommended",
    //如果你想使用插件中的环境变量，请先把插件名写入"plugins"数组中，然后再在"env":{}中以"插件名/插件中的需引入的环境名"的方式进行指定。
    "plugins": ["example"],
    "env": {
    //An environment defines global variables that are predefined.
    //定义env会带进来一些全局变量
    "browser": true,
    "node": true,
    "es6":true,
    "mocha":"true",
    "qunit":true,
    "jquery":true,
    "mongo":true,
    //通过插件名命名空间引入插件中的环境
    "example/custom": true
    },
    "globals": {
    // globals are the additional global variables your script accesses during execution.
    // 即插件在执行过程中用到的其它全局变量
    "angular": true,
    },
    "rules": {
    //which rules are enabled and at what error level.
    //这里指定用哪些规则进行eslint检查以及每个规则的错误级别：0或者off表示规则关闭，出错也被忽略；1或者warn表示如果出错会给出警告；2或者error表示如果出错会报出错误
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
    },
    //parser指定解析器，默认的为espree，可选的还有Esprima、Babel-ESLint。
    //babel-eslint is a wrapper around the Babel parser that makes it compatible with ESLint.
    //babel-eslint是一个Babel parser的包装器，这个包装器使得Babel parser可以和ESLint协调工作
    "parser": "babel-eslint",
    "parserOptions": {
    //ecmaVersion指定ECMAScript的版本，可选值有3\5\6\7，默认是5
    "ecmaVersion": 6,
    //sourceType指定被检查的文件是什么扩展名的，可选项"script"和"module"，默认是"script"。"module"是ES6的。
    "sourceType": "module",
    //ecmaFeatures指定你想使用哪些额外的语言特性
    "ecmaFeatures": {
    "jsx": true
    }
    },
    }