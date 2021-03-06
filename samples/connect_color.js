/*
 *  SEE "iotdb.js" for the best way to use this
 *  Connect to a Hue and cycle through colors
 */

"use strict";

var HueLightBridge = require('../HueLightBridge').Bridge;

var bridge_exemplar = new HueLightBridge();
bridge_exemplar.discovered = function (bridge) {
    console.log("+ got one\n ", bridge.meta());
    bridge.pulled = function (state) {
        console.log("+ state-change\n ", state);
    };
    bridge.connect({});

    var count = 0;
    var colors = ["#FF0000", "#00FF00", "#0000FF", "#00FFFF", "#FF00FF", "#FFFF00", "#FFFFFF", "#000000"];
    setInterval(function () {
        bridge.push({
            color: colors[count++ % colors.length]
        }, function () {});
    }, 2500);
};
bridge_exemplar.discover();
