module.exports = {
    plugins: [
        require("postcss-import")({
            plugins: [
                require("stylelint")
            ]
        }),
        require("postcss-cssnext"),
        require("postcss-url"),
        require("postcss-reporter")({ clearReportedMessages: true })
    ],
};