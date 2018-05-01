module.exports = {
    rules: {
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'color-named': 'always-where-possible',
        'color-no-invalid-hex': true,

        'font-family-name-quotes': 'always-where-recommended',
        'font-family-no-duplicate-names': true,

        'font-weight-notation': 'named-where-possible',
        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-newline-before': 'never-multi-line',
        'function-comma-space-after': 'always',
        'function-comma-space-before': 'never',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never',
        'function-url-no-scheme-relative': true,
        'function-url-quotes': ['always', { except: ['empty'] }],
        'function-url-scheme-whitelist': [],
        'function-whitespace-after': 'always',

        'number-leading-zero': 'always',
        'number-max-precision': 3,
        'number-no-trailing-zeros': true,

        'string-no-newline': true,
        'string-quotes': 'single',

        'length-zero-no-unit': true,

        'time-min-milliseconds': 100,

        'unit-case': 'lower',
        'unit-no-unknown': true,
        // TODO: disallow 'px'
        'unit-whitelist': [
            'em', 'rem',
            'px',
            'vh', 'vw',
            '%',
            'deg',
            'ms', 's',
        ],

        'value-keyword-case': 'lower',
        'value-no-vendor-prefix': true,
        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,

        'shorthand-property-no-redundant-values': true,

        'property-case': 'lower',
        'property-no-unknown': true,
        'property-no-vendor-prefix': true,

        'keyframe-declaration-no-important': true,

        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        // TODO
        // 'declaration-no-important': true,

        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        // TODO
        // 'declaration-block-properties-order': [ 'display' ],
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-trailing-semicolon': 'always',

        'block-no-empty': true,

        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,

        indentation: 4,
        'no-duplicate-selectors': true,
        'max-line-length': 79,
        // TODO
        //'no-descending-specificity': true,
        'no-empty-source': true,
        'no-eol-whitespace': true,
        'no-extra-semicolons': true,
        'no-missing-end-of-source-newline': true,
    },
}


