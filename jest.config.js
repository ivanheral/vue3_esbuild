module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.ts?$": "ts-jest",
        ".*\\.(vue)$": "vue-jest"
    },
    globals: {
        "ts-jest": {
            diagnostics: false
        }
    },
    moduleFileExtensions: ["js",
        "ts",
        "json",
        "vue"
    ],
    testRegex: "/__tests__/.*(\\.|/)(test|spec)\\.ts$",
    testURL: "http://localhost/"
};