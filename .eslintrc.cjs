module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime"
    ],
    "overrides": [
        {
            files: [
                "**/__tests__/**/*.+(ts|tsx|js)",
                "**/?(*.)+(spec|test).+(ts|tsx|js"
            ],
            extends: [
                "plugin:jest-dom/recommended",
                "plugin:testing-library/react"
            ]
        }
    ],
    "ignorePatterns": [
        "vite.config.ts",
        "vitest.setup.ts"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "jest-dom",
        "testing-library"
    ],
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
    }
}
