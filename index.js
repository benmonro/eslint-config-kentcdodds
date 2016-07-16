module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "import",
    "babel",
  ],
  "rules": {
    "quotes": [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    "no-use-before-define": [2, "nofunc"],
    "no-unused-expressions": 0,
    "strict": 0,
    "new-cap": 0, // set by babe/new-cap
    "comma-dangle": [2, "always-multiline"],
    "max-statements": [2, 30],
    "max-len": [2, 120, 2],
    "max-depth": [2, 4],
    "max-nested-callbacks": [2, 5],
    "indent": [2, 2, {"SwitchCase": 1}],
    "brace-style": [2, "1tbs"],
    "spaced-line-comment": 0,

    // possible errors
    "array-callback-return": 2,
    // This makes me think of how IfStatements should always have BlockStatements
    "arrow-body-style": 0, // this is nice, but not useful all the time.
    "arrow-parens": 0, // babel/arrow-parens
    "arrow-spacing": [2, {"before": true, "after": true}],
    "block-scoped-var": 2,
    "block-spacing": 2,
    "callback-return": 0, // see known limitations: http://eslint.org/docs/rules/callback-return it's just annoying...
    "global-require": 1, // sometimes this is ok. We shouldn't break a build
    "handle-callback-err": 2,
    "init-declarations": 0,
    "space-infix-ops": 2,
    "no-cond-assign": 2,
    "no-confusing-arrow": [2, {"allowParens": true}],
    "no-console": 2,
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-empty-function": 0, // we're all grown ups here...
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-duplicate-imports": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-empty-pattern": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 0,
    "no-extra-label": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-process-env": 0,
    "no-regex-spaces": 2,
    "no-reserved-keys": 0,
    "no-self-assign": 2,
    "no-sparse-arrays": 2,
    "no-unexpected-multiline": 2,
    "no-unmodified-loop-condition": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unused-labels": 2,
    "no-useless-call": 2,
    "require-yield": 2,
    "unicode-bom": [2, "never"],
    "use-isnan": 2,
    "valid-jsdoc": [2, {"requireReturn": false}],
    "valid-typeof": 2,

    // best practices
    "accessor-pairs": 2,
    "no-var": 2,
    "prefer-const": 2,
    "complexity": [2, 5],
    "consistent-return": 2,
    "curly": 2,
    "default-case": 2,
    "dot-notation": 2,
    "dot-location": [2, "property"],
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-div-regex": 2,
    "no-else-return": 0,
    "no-labels": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-implicit-coercion": 0,
    "no-implicit-globals": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0, // sometimes this is ok (foo.length - 1 == index of last one)
    "no-mixed-operators": 0,
    "no-mixed-requires": 0,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-param-reassign": 0,
    "no-path-concat": 2,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-prototype-builtins": 0,
    "no-redeclare": 2,
    "no-restricted-globals": 2,
    "no-restricted-syntax": [2, "WithStatement"],
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-sync": 0,
    "no-throw-literal": 2,
    "no-useless-computed-key": 2,
    "no-useless-concat": 2,
    "no-useless-constructor": 2,
    "no-useless-escape": 2,
    "no-useless-rename": 2,
    "no-void": 2,
    "no-warning-comments": [2, {"terms": ["fixme"], "location": "anywhere"}],
    "no-whitespace-before-property": 2,
    "no-with": 0,
    "radix": 2,
    "vars-on-top": 2,
    "wrap-iife": [2, "inside"],
    "yoda": 2,

    // variables
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-shadow-restricted-names": 2,
    "no-shadow": 2,
    "no-undef-init": 2,
    "no-undef": 2,
    "no-undefined": 0,
    "no-unused-vars": [2, {"args": "after-used"}],

    // stylistic
    "array-bracket-spacing": 0, // babel/array-bracket-spacing
    "camelcase": [2, {"properties": "always"}],
    "comma-spacing": [2, {"before": false, "after": true}],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "consistent-this": 0, // Too many use-cases for reassigning "this" to different values
    "eol-last": 2,
    "func-names": 2,
    "func-style": [2, "declaration"],
    "id-blacklist": 2,
    "id-length": 0, // when using short composable functions, using single-letter variables is fine
    "id-match": [2, "^(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*$"], // camelCase, PascalCase, __filename, CONST_VALUE
    "jsx-quotes": [2, "prefer-double"],
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
    "keyword-spacing": [2, {"before": true, "after": true}],
    "lines-around-comment": 0,
    "linebreak-style": [2, "unix"],
    "max-lines": [2, {"max": 500, "skipBlankLines": false, "skipComments": false}],
    "max-statements-per-line": [2, {"max": 1}],
    "multiline-ternary": 0,
    "new-parens": 2,
    "newline-after-var": 0,
    "newline-before-return": 0,
    "newline-per-chained-call": 0,
    "no-array-constructor": 2,
    "no-case-declarations": 2,
    "no-class-assign": 2,
    "no-continue": 2,
    "no-inline-comments": 0,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": 0,
    "no-negated-condition": 2,
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-symbol": 2,
    "no-spaced-func": 2,
    "no-ternary": 0,
    "no-trailing-spaces": [2, {"skipBlankLines": true}],
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "object-curly-spacing": 0, // babel/object-curly-spacing
    "object-curly-newline": 0, // couldn't figure out how to configure it the way I want :-(
    "object-property-newline": 0,
    "one-var": [2, {"uninitialized": "always", "initialized": "never"}],
    "one-var-declaration-per-line": 2,
    "operator-assignment": 0, // readability on a case-by-case basis
    "operator-linebreak": [2, "after"],
    "padded-blocks": 0,
    "prefer-arrow-callback": [2, {"allowNamedFunctions": true, "allowUnboundThis": true}],
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "quote-props": [2, "as-needed"],
    "require-jsdoc": 0,
    "rest-spread-spacing": [2, "never"],
    "semi-spacing": [2, {"before": false, "after": true}],
    "semi": [2, "never"],
    "sort-vars": 0,
    "sort-imports": 0,
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-unary-ops": [2, {"words": true, "nonwords": false}],
    "spaced-comment": 0,
    "template-curly-spacing": [2, "never"],
    "wrap-regex": 0,
    "yield-star-spacing": [2, {"before": false, "after": true}],
    "constructor-super": 2,
    "generator-star-spacing": 0, // babel/generator-star-spacing
    "no-this-before-super": 2,
    "object-shorthand": 0, // babel/object-shorthand
    "max-params": [2, 5],
    "no-bitwise": 2,
    "no-plusplus": 0,

    // not applicable for a config preset (should be configured only in projects)
    "no-restricted-imports": 0,
    "no-restricted-modules": 0,
    "prefer-reflect": 0, // maybe one day

    "import/no-unresolved": 2,
    "import/named": 2,
    "import/default": 2,
    "import/namespace": 2,
    "import/export": 2,
    "import/no-named-as-default": 2,
    "import/imports-first": 2,
    "import/no-duplicates": 2,
    "import/extensions": 2,
    "import/newline-after-import": 2,
    "import/no-amd": 2,
    "import/no-commonjs": 0,
    "import/no-deprecated": 1, // this is an in progress rule
    "import/no-extraneous-dependencies": 2,
    "import/no-mutable-exports": 2,
    "import/no-named-as-default-member": 2,
    "import/no-namespace": 0,
    "import/no-nodejs-modules": 0,
    "import/no-restricted-paths": 0,
    "import/order": [1, {"groups": ["builtin", ["external", "internal"], "parent", ["sibling", "index"]]}],
    "import/prefer-default-export": 1,

    // babel plugin
    //   better than eslint's version
    "babel/array-bracket-spacing": [2, "never"],
    "babel/arrow-parens": [2, "as-needed"],
    "babel/generator-star-spacing": [2, "after"],
    "babel/object-curly-spacing": [2, "never"],
    "babel/object-shorthand": [2, "properties"], // methods are optional so you can specify a name if you want
    "babel/new-cap": [2, {
      "newIsCap": true,
      "capIsNew": true,
    }],
    //   no eslint version
    "babel/flow-object-type": 0, // no opinion
    "babel/func-params-comma-dangle": [2, "only-multiline"],
    "babel/no-await-in-loop": 2, // I don't use async/await, but sounds like a good idea to have on.

  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {"experimentalObjectRestSpread": true},
  },
  "globals": {},
}
