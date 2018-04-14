// Begin UMD prefix
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.  Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.streamingPercentiles = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
// End UMD prefix

