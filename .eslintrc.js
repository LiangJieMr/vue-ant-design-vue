/** @format */

module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  extends: ["plugin:vue/recommended", "plugin:import/errors"],
  plugins: ["vue", "import", "prettier"],
  settings: {
    "import/resolver": {
      webpack: {
        //此处config对应webpack.config.js的路径，路径是vue-cli3默认的路径
        config: "./node_modules/@vue/cli-service/webpack.config.js"
      }
    }
  },
  rules: {
    /** js相关规则*/
    camelcase: 0, //强制驼峰法命名
    eqeqeq: 0, //强制全等( === 和 !==)
    indent: "off", //缩进风格(强制使用一致的缩进)
    "no-console": 1, //不允许出现console语句
    "no-unused-vars": 1, //禁止出现未使用过的变量
    "no-redeclare": 1, //禁止多次声明同一变量
    "no-use-before-define": 1, //禁止在变量定义之前使用它们
    "no-plusplus": "off", //允许使用++，--
    "no-underscore-dangle": 0, // 允许在标识符中使用下划线
    "no-param-reassign": 0, // 禁止对 function 的参数进行重新赋值
    "no-nested-ternary": 0, // 禁止嵌套三元表达式
    "no-else-return": 0, //禁止 if 语句中 return 语句之后有 else 块
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-shadow": [
      1,
      {
        //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        allow: ["resolve", "reject", "done", "cb"]
      }
    ],
    "prefer-rest-params": 1, //要求使用剩余参数而不是 arguments
    "prefer-arrow-callback": 0, //要求回调函数使用箭头函数
    "prefer-const": 1, //首选const
    semi: 1, // 使用分号, 默认true

    /**import相关规则*/
    "import/order": [
      "error",
      {
        "newlines-between": "always", //禁止导入组之间的新行
        groups: ["builtin", "external", "sibling", "internal"], //分组排序
        alphabetize: {
          order: "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: false /* ignore case. Options: [true, false] */
        }, //每个组中的顺序进行排序
        pathGroups: [
          {
            pattern: "[v|m]**",
            group: "external",
            position: "before"
          },
          {
            pattern: "@/**",
            group: "external",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ["builtin"]
      }
    ],
    /** prettier相关规则*/
    "prettier/prettier": [
      1,
      {
        printWidth: 120, //列宽度
        tabWidth: 2, // 使用 2 个空格缩进
        semi: true, // 行尾需要有分号
        singleQuote: false, // 使用双引号
        trailingComma: "none", // 末尾不需要逗号
        bracketSpacing: true, // 大括号内的首尾需要空格{ foo: bar }
        jsxBracketSameLine: true, // jsx 标签的反尖括号不需要换行
        arrowParens: "avoid", // 箭头函数，只有一个参数的时候，如果可能的话，省去parens
        rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
        rangeEnd: Infinity, // 每个文件格式化的范围是文件的全部内容
        proseWrap: "preserve", // 使用默认的折行标准
        requirePragma: false, // 不需要写文件开头的 @prettier
        useTabs: false, // 不使用缩进符，而使用空格
        quoteProps: "as-needed", // 对象的 key 仅在必要时用引号
        jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
        insertPragma: false, // 不需要自动在文件开头插入 @prettier
        htmlWhitespaceSensitivity: "ignore", // 根据显示样式决定 html 要不要折行

        endOfLine: "lf" // 换行符使用 lf
      }
    ],

    /** vue相关规则*/
    "vue/attribute-hyphenation": ["error", "always"], //Vue模板的自定义组件上使用连字符属性名称
    "vue/max-attributes-per-line": "off", //每行强制使用属性个数
    "vue/html-self-closing": [
      "error",
      {
        html: { normal: "never", void: "always" },
        svg: "never",
        math: "never"
      }
    ], //开启自我关闭风格
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "always"
      }
    ], //标签的右括号之前需要或不允许使用空格
    "vue/singleline-html-element-content-newline": [
      "error",
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ["div", "span", "a"]
      }
    ], //在单行元素的内容之前和之后需要换行
    "vue/component-tags-order": [
      "error",
      {
        order: ["template", "script", "style"]
      }
    ], //强制组建标签顺序
    "vue/attributes-order": [
      "error",
      {
        order: [
          "GLOBAL",
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
          "UNIQUE"
        ],
        alphabetical: false
      }
    ], //强制标签属性顺序
    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "mixins",
          "components",
          "emits",
          "props",
          "data",
          "filters",
          "computed",
          "watch",
          "beforeCreate",
          "created",
          "activated",
          "beforeMount",
          "mounted",
          "methods",
          "beforeUpdate",
          "updated",
          "beforeUnmount",
          "unmounted",
          "deactivated"
        ]
      }
    ], //强制组件中的属性顺序
    "vue/mustache-interpolation-spacing": ["error", "always"], //表达式和大括号之间应留一个空格
    "vue/prop-name-casing": ["error", "camelCase"], //强制props为驼峰式
    // "vue/component-definition-name-casing": ["error", "PascalCase"], //将组件name强制为PascalCase
    "vue/no-spaces-around-equal-signs-in-attribute": ["error"], //禁止属性中等号周围的空格
    "vue/v-bind-style": ["error", "shorthand"], //该规则强制执行v-bind指令样式用简写形式
    "vue/v-on-style": ["error", "shorthand"], //强制v-on指令样式用简写形式
    "vue/this-in-template": ["error", "never"], //禁止this在模板中使用
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: true, //检查已经注册的组件
        ignores: []
      }
    ], //对模板中的组件命名样式强制使用特定的大小写

    "vue/match-component-file-name": [
      "error",
      {
        extensions: ["vue"],
        shouldMatchCase: false
      }
    ], //组件名的name 必须和文件名匹配
    "vue/no-potential-component-option-typo": [
      "error",
      {
        presets: ["vue"],
        custom: [],
        threshold: 1
      }
    ], //禁止在组件属性中输入错误
    "vue/no-static-inline-styles": [
      "error",
      {
        allowBinding: true
      }
    ], //禁止静态内联style属性
    "vue/no-unused-properties": [
      "error",
      {
        groups: ["props", "data", "computed", "methods", "setup"]
      }
    ], //禁止使用未使用的属性
    "vue/no-useless-v-bind": [
      "error",
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ], //禁止不必要的v-bind指令
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 0,
        switchCase: 1,
        ignores: ["switch", "case"]
      }
    ], //强制一致的缩进 <script>
    "vue/v-on-function-call": ["error", "never"], //在v-on指令中没有参数的方法调用后强制或禁止括号
    "vue/no-lone-template": [
      0,
      {
        ignoreAccessible: true
      }
    ], //禁止不必要的 <template>
    "vue/custom-event-name-casing": "off",
    "vue/require-explicit-emits": "off", //不需要emits名称触发的选项$emit()
    "vue/no-v-html": "off"
  }
};
