// eslint-disable-next-line import/no-unused-modules
require('@rushstack/eslint-patch/modern-module-resolution')

const OFF = 0
const WARN = 1
const ERROR = 2

const INDENT_SPACES = 2
const IsI18N = false

const { peerDependencies } = require('./package.json')

const isProduction = () => process.env.NODE_ENV === 'production'

/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  ignorePatterns: [
    '.output',
    '.nuxt',
    'node_modules',
    'dist',
    'dist-ssr',
    'package-lock.json',
    'yarn.lock',
    '*.local'
  ],

  env: {
    browser: true,
    node   : true
  },
  parser       : require.resolve('vue-eslint-parser'),
  parserOptions: {
    parser      : require.resolve('@typescript-eslint/parser'),
    ecmaFeatures: { impliedStrict: true },
    ecmaVersion : 2022,
    vueFeatures : { filter: false }
  },
  settings: { 'import/resolver': { typescript: {}}},
  extends : [
    'eslint:all',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:vue-scoped-css/all',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended'
  ],
  rules: {
    // Switching rules
    'no-console': [ERROR,
      {
        allow: isProduction()
          ? ['warn', 'error']
          : ['warn', 'error', 'debug', 'table', 'log']
      }],
    'no-debugger'        : isProduction() ? ERROR : WARN,
    'no-warning-comments': isProduction() ? ERROR : WARN,

    // Custom rules
    // eslint-disable-next-line sort-keys
    'accessor-pairs'       : [ERROR, { enforceForClassMembers: false }],
    'array-bracket-newline': [WARN, { multiline: true }],
    'array-callback-return': [ERROR, { checkForEach: true }],
    'array-element-newline': [WARN, 'consistent'],
    'arrow-parens'         : [WARN, 'as-needed'],
    'brace-style'          : [WARN,
      '1tbs',
      { allowSingleLine: true }],
    'capitalized-comments'          : [WARN, 'always'],
    'comma-dangle'                  : [WARN, 'never'],
    'complexity'                    : [ERROR, { max: 2 }],
    'consistent-this'               : [ERROR, 'self'],
    'curly'                         : [WARN, 'multi', 'consistent'],
    'dot-location'                  : [ERROR, 'property'],
    'eol-last'                      : [WARN, 'always'],
    'func-names'                    : [ERROR, 'as-needed'],
    'function-call-argument-newline': [ERROR, 'consistent'],
    'grouped-accessor-pairs'        : [ERROR, 'getBeforeSet'],
    'indent'                        : [WARN, INDENT_SPACES],
    'key-spacing'                   : [WARN, { align: 'colon' }],
    'keyword-spacing'               : [WARN,
      {
        overrides: {
          'for'  : { after: false },
          'if'   : { after: false },
          'while': { after: false }
        }
      }],
    'lines-around-comment': [WARN,
      {
        allowArrayEnd     : true,
        allowArrayStart   : true,
        allowBlockStart   : true,
        allowClassStart   : true,
        allowObjectEnd    : true,
        allowObjectStart  : true,
        beforeBlockComment: true,
        beforeLineComment : true
      }],
    'max-len': [WARN,
      {
        ignoreUrls            : true,
        ignoreStrings         : true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals  : true,
        tabWidth              : INDENT_SPACES
      }],
    'max-lines-per-function': [ERROR,
      {
        max           : 20,
        skipBlankLines: true,
        skipComments  : true
      }],
    'max-nested-callbacks': [ERROR, { max: 2 }],
    'multiline-ternary'   : [WARN, 'always-multiline'],
    'new-cap'             : [ERROR, { capIsNew: false }],
    'no-else-return'      : [ERROR, { allowElseIf: false }],
    'no-implicit-coercion': [ERROR, { boolean: false }],
    'no-magic-numbers'    : [ERROR,
      { ignore: [0, 1, 2, 24, 60, 1000, 1024, 3600] }],
    'no-multiple-empty-lines': [WARN,
      {
        max   : 1,
        maxBOF: 0,
        maxEOF: 0
      }],
    'no-restricted-exports': [ERROR, { restrictedNamedExports: ['default'] }],
    'no-restricted-globals': [ERROR,
      'document',
      'window',
      'navigator',
      'module',
      'require'],
    'no-restricted-imports': [ERROR, {
      patterns: [
        './assets/*',
        './components/*',
        './constants/*',
        './pages/*',
        './store/*',
        './utils/*'
      ],
      paths: [
        // Node.js core imports
        'assert',
        'buffer',
        'child_process',
        'cluster',
        'crypto',
        'dgram',
        'dns',
        'domain',
        'events',
        'freelist',
        'fs',
        'http',
        'https',
        'module',
        'net',
        'os',
        'path',
        'punycode',
        'querystring',
        'readline',
        'repl',
        'smalloc',
        'stream',
        'string_decoder',
        'sys',
        'timers',
        'tls',
        'tracing',
        'tty',
        'url',
        'util',
        'vm',
        'zlib'
      ]
    }],
    'no-return-assign'           : [ERROR, 'always'],
    'no-unsafe-optional-chaining': [ERROR,
      { disallowArithmeticOperators: true }],
    'no-unused-expressions': [ERROR,
      {
        allowShortCircuit: true,
        allowTernary     : true
      }],
    'object-curly-newline': [WARN, { multiline: true }],
    'object-curly-spacing': [WARN,
      'always',
      { objectsInObjects: false }],
    'object-property-newline': [WARN, { allowAllPropertiesOnSameLine: true }],
    'object-shorthand'       : [ERROR,
      'always',
      { avoidExplicitReturnArrows: true }],
    'one-var'                        : [ERROR, 'never'],
    'operator-linebreak'             : [WARN, 'before'],
    'padded-blocks'                  : [WARN, 'never'],
    'padding-line-between-statements': [WARN,
      { blankLine: 'always', next: '*', prev: 'import' },
      { blankLine: 'any', next: 'import', prev: 'import' },
      { blankLine: 'never', next: '*', prev: 'singleline-let' },
      { blankLine: 'always', next: 'return', prev: '*' }],
    'quote-props': [WARN, 'consistent'],
    'quotes'     : [WARN, 'single'],
    'semi'       : [WARN, 'never'],
    'sort-keys'  : [WARN,
      'asc',
      {
        caseSensitive: true,
        natural      : true
      }],
    'space-before-function-paren': [WARN,
      {
        anonymous : 'never',
        asyncArrow: 'always',
        named     : 'never'
      }],
    'space-unary-ops': [WARN,
      {
        nonwords: false,
        words   : true
      }],
    'spaced-comment': [WARN,
      'always',
      {
        block: {
          balanced  : true,
          exceptions: ['*']
        },
        line: {
          exceptions: ['-'],
          markers   : ['/']
        }
      }],

    // Off rules
    // eslint-disable-next-line sort-keys
    'default-case'           : OFF,
    'guard-for-in'           : OFF,
    'id-length'              : OFF,
    'no-continue'            : OFF,
    'no-multi-spaces'        : OFF,
    'no-plusplus'            : OFF,
    'no-ternary'             : OFF,
    'no-underscore-dangle'   : OFF,
    'no-useless-computed-key': OFF,
    'sort-imports'           : OFF,

    // Import rules
    // eslint-disable-next-line sort-keys
    'import/exports-last'              : WARN,
    'import/first'                     : WARN,
    'import/newline-after-import'      : WARN,
    'import/no-cycle'                  : ERROR,
    'import/no-deprecated'             : WARN,
    'import/no-dynamic-require'        : ERROR,
    'import/no-extraneous-dependencies': ERROR,
    'import/no-mutable-exports'        : ERROR,
    'import/no-relative-parent-imports': ERROR,
    'import/no-self-import'            : ERROR,
    'import/no-unused-modules'         : [WARN,
      {
        missingExports: true,
        unusedExports : true
      }],
    'import/no-useless-path-segments': ERROR,
    'import/order'                   : ERROR,

    // Vue Uncategorized rules
    'vue/block-tag-newline': [WARN,
      {
        singleline   : 'always',
        multiline    : 'always',
        maxEmptyLines: 1
      }],
    'vue/comment-directive': [WARN,
      { reportUnusedDisableDirectives: true }],
    'vue/component-api-style'              : ERROR,
    'vue/component-name-in-template-casing': [WARN,
      'PascalCase',
      { registeredComponentsOnly: false }],
    'vue/component-options-name-casing': WARN,
    'vue/custom-event-name-casing'     : WARN,
    'vue/first-attribute-linebreak'    : [WARN,
      {
        singleline: 'beside',
        multiline : 'below'
      }],
    'vue/html-comment-content-newline': WARN,
    'vue/html-comment-content-spacing': WARN,
    'vue/html-comment-indent'         : [WARN, INDENT_SPACES],
    'vue/match-component-file-name'   : [ERROR,
      {
        extensions     : ['vue'],
        shouldMatchCase: true
      }],
    'vue/max-len': [WARN,
      {
        ignoreUrls               : true,
        ignoreStrings            : true,
        ignoreTemplateLiterals   : true,
        ignoreRegExpLiterals     : true,
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents   : true,
        tabWidth                 : INDENT_SPACES
      }],
    'vue/new-line-between-multi-line-property': WARN,
    'vue/next-tick-style'                     : OFF,
    'vue/no-bare-strings-in-template'         : IsI18N ? ERROR : OFF,
    'vue/no-boolean-default'                  : [ERROR, 'default-false'],
    'vue/no-child-content'                    : ERROR,
    'vue/no-duplicate-attr-inheritance'       : ERROR,
    'vue/no-empty-component-block'            : ERROR,
    'vue/no-expose-after-await'               : ERROR,
    'vue/no-loss-of-precision'                : ERROR,
    'vue/no-multiple-objects-in-class'        : ERROR,
    'vue/no-potential-component-option-typo'  : [ERROR,
      {
        presets  : ['vue', 'vue-router'],
        threshold: 2
      }],
    'vue/no-reserved-component-names': [ERROR,
      { disallowVue3BuiltInComponents: true }],
    'vue/no-restricted-block'            : OFF,
    'vue/no-restricted-call-after-await' : OFF,
    'vue/no-restricted-component-options': [ERROR,
      {
        name   : 'init',
        message: 'Use "beforeCreate" instead.'
      },
      {
        name   : '/^(?:at|de)tached/',
        message: '"attached" and "detached" is deprecated.'
      }],
    'vue/no-restricted-custom-event': [ERROR,
      {
        event  : 'input',
        message: 'If you intend a prop for v-model, it should be \'update:modelValue\' in Vue 3.',
        suggest: 'update:modelValue'
      }],
    'vue/no-restricted-props': [ERROR,
      {
        name   : 'value',
        message: 'If you intend a prop for v-model, it should be \'modelValue\' in Vue 3.',
        suggest: 'modelValue'
      }],
    'vue/no-restricted-static-attribute': [ERROR,
      {
        key    : '/align|alink|background|bgcolor|border|clear|color|compact|height|hspace|language|link|noshade|nowrap|size|sizes|start|text|vlink|vspace|width/',
        message: 'This attribute is deprecated.'
      },
      {
        element: 'li',
        key    : '/type|value/',
        message: 'This attribute is deprecated. See https://www.w3docs.com/learn-html/deprecated-html-attributes.html'
      },
      {
        element: 'html',
        key    : 'manifest',
        message: 'This attribute is obsolete. Use <link rel="manifest"> instead.'
      }],
    'vue/no-restricted-v-bind'    : ERROR,
    'vue/no-static-inline-styles' : ERROR,
    'vue/no-template-target-blank': ERROR,
    'vue/no-undef-components'     : ERROR,
    'vue/no-undef-properties'     : ERROR,
    'vue/no-unsupported-features' : [ERROR,
      { version: peerDependencies.vue }],
    'vue/no-unused-properties': [ERROR,
      {
        groups  : ['props', 'data', 'computed', 'methods', 'setup'],
        deepData: true
      }],
    'vue/no-useless-mustaches'         : ERROR,
    'vue/no-useless-v-bind'            : ERROR,
    'vue/no-v-text-v-html-on-component': ERROR,
    'vue/object-shorthand'             : [ERROR,
      'always',
      { avoidExplicitReturnArrows: true }],
    'vue/padding-line-between-blocks' : WARN,
    'vue/prefer-separate-static-class': ERROR,
    'vue/quote-props'                 : [WARN, 'consistent'],
    'vue/require-direct-export'       : OFF,
    'vue/require-name-property'       : ERROR,
    'vue/script-indent'               : [WARN, INDENT_SPACES],
    'vue/static-class-names-order'    : OFF,
    'vue/v-for-delimiter-style'       : ERROR,
    'vue/v-on-event-hyphenation'      : [ERROR,
      'always',
      { autofix: true }],
    'vue/v-on-function-call': [ERROR,
      'never',
      { ignoreIncludesComment: true }],
    'vue/valid-next-tick': OFF
  },
  overrides: [
    {
      files: ['.eslintrc.*'],
      rules: {
        'array-bracket-newline': [WARN, 'consistent'],
        'max-lines'            : OFF,
        'no-restricted-globals': [ERROR, 'document', 'window', 'navigator'],
        'sort-keys'            : [WARN, 'asc', { minKeys: 10 }]
      }
    },
    {
      files: ['*.vue'],
      rules: {
        'indent'       : OFF,
        'max-len'      : OFF,
        'sort-keys'    : OFF,
        'vue/sort-keys': WARN
      }
    }
  ]
}
