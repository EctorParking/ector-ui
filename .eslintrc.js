
module.exports = {

    extends: 'airbnb',

    rules: {

        "react/jsx-filename-extension": [
            1, 
            { "extensions": [".js", ".jsx"] }
        ],

        // Airbnb linter warnings fix
        "func-names": [
            'error', 
            'never'
        ], 

        'no-unused-vars': [
            'error',
            {
                args: 'none',
            },
        ],

        "no-console": 0,

        // Indent with 4 spaces
        "indent": ["error", 2],

        // Indent JSX with 4 spaces
        "react/jsx-indent": ["error", 2],

        // Indent props with 4 spaces
        "react/jsx-indent-props": ["error", 2],
    },

    parser: 'babel-eslint',

    globals: {
        React: false,
    },

}
