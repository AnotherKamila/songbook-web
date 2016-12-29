module.exports = {
    "env": {
        "browser": true,
        "es6":     true,
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
        },
        "sourceType": "module",
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "no-console":      ["off"],
        "comma-dangle":    ["error", "always-multiline"],
        "indent":          ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes":          ["error", "single"],
    },
};
