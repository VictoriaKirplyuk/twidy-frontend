const stylelintConfig = {
    extends: "stylelint-config-standard-scss",
    plugins: ["stylelint-order"],
    rules: {
        "order/order": [
            "custom-properties",
            "declarations"
        ],
        "order/properties-alphabetical-order": true,
        "selector-class-pattern": null,
        "no-descending-specificity": null,
        "property-no-vendor-prefix": [true, {"ignoreProperties": ["background-clip"]}],
        "property-no-unknown": null
    },
    ignoreFiles: [],
};

export default stylelintConfig;

