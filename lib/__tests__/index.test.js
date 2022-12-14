(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports, require("../index"));
    else if (typeof define === "function" && define.amd) define([
        "exports",
        "../index"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.indexTest = {}, global.index);
})(this, function(exports, _index) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    _index = _interopRequireDefault(_index);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    test('randomCSSVariable', ()=>{
        expect(_index.default).toBeDefined();
    });
});
