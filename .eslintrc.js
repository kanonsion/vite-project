module.exports = {
  root: true,
  // 预定义一些全局变量
  // parser: 'vue-eslint-parser',
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  rules: {
    // 使用 mapMutations/mapActions/mapGetters/mapState 时，使用 vx 前缀
    semi: ['error', 'never'],
    // 使用 this.$refs.xx 调用方法，此方法需要 ref 前缀
    // 'elfin/ref-prefix': ['error'],
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'no-debugger': 'warn',
    'vue/no-v-model-argument': 'off',
    'vue/script-indent': ['error', 4, {
      baseIndent: 1,
      switchCase: 1,
    }],
    'vue/html-indent': ['error', 4, { baseIndent: 1 }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'never',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'directives',
          'components',
          'extends',
          'mixins',
          'data',
          'props',
          'computed',
          'filters',
          'methods',
          'watch',
          ['template', 'render'],
          'LIFECYCLE_HOOKS',
          'errorCaptured',
        ],
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'CONDITIONALS',
          'LIST_RENDERING',
          'RENDER_MODIFIERS',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'DEFINITION',
          'GLOBAL',
          'UNIQUE',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
      },
    ],
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: 2,
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: false
    //     }
    //   }
    // ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never',
      },
    ],
    'vue/no-parsing-error': [
      'error',
      {
        'invalid-first-character-of-tag-name': false,
      },
    ],
    'vue/no-unused-components': 'warn',
    'no-unused-vars': 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/test?(s)/**/*.{spec,test}.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
