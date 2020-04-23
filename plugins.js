// Avoid `console` errors in browsers that lack a console.
/*
window.log = function f(){ 
    log.history = log.history || []; 
    log.history.push(arguments); 
    if(this.console) { 
        var args = arguments, newarr; 
        args.callee = args.callee.caller; 
        newarr = [].slice.call(args); 
        if (typeof console.log === 'object') 
            log.apply.call(console.log, console, newarr); 
        else console.log.apply(console, newarr);
    }
};
// HTML5 Boilerplate
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}
*/
var log = function (text) {
    // if (!window.console) window.console = {};
    // if (!window.console.log) window.console.log = function () { };
    "use strict";

    if (typeof (console) !== "undefined" && console.log !== undefined) {
        try {
            console.log.apply(console, arguments);
        } catch (e) {
            var log = Function.prototype.bind.call(console.log, console);
            log.apply(console, arguments);
        }
    }
}


// Check the device is mobile
function isMobile() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
function isMobileOrTablet() {
    var check = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        check = true;
    }
    return check;
}
function isIE() {
    var isMSIE = /*@cc_on!@*/0;
    if (isMSIE) {
        return true;
    } else {
        return false;
    }
}
function versionIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}
function isAndroid() {
    if (navigator.userAgent.match(/(Android)/)) {
        return true;
    } else {
        return false;
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var BrowserDetect =
{
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
    },

    searchString: function (data) {
        for (var i = 0 ; i < data.length ; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) != -1) {
                return data[i].identity;
            }
        }
    },

    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },

    dataBrowser:
    [
        { string: navigator.userAgent, subString: "Chrome", identity: "Chrome" },
        { string: navigator.userAgent, subString: "MSIE", identity: "Explorer" },
        { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
        { string: navigator.userAgent, subString: "Safari", identity: "Safari" },
        { string: navigator.userAgent, subString: "Opera", identity: "Opera" }
    ]

};
BrowserDetect.init();


if (!Date.prototype.toISOString) {

    (function () {

        function pad(number) {
            var r = String(number);
            if (r.length === 1) {
                r = '0' + r;
            }
            return r;
        }

        Date.prototype.toISOString = function () {
            return this.getUTCFullYear()
                + '-' + pad(this.getUTCMonth() + 1)
                + '-' + pad(this.getUTCDate())
                + 'T' + pad(this.getUTCHours())
                + ':' + pad(this.getUTCMinutes())
                + ':' + pad(this.getUTCSeconds())
                + '.' + String((this.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5)
                + 'Z';
        };

    }());
}


function floodlight(type, cat) {
    var axel = Math.random() + "";
    var a = axel * 10000000000000000;
    var flDiv = document.body.appendChild(document.createElement("div"));
    flDiv.setAttribute("id", "DCLK_FLDiv1");
    flDiv.style.position = "absolute";
    flDiv.style.top = "0";
    flDiv.style.left = "0";
    flDiv.style.width = "1px";
    flDiv.style.height = "1px";
    flDiv.style.display = "none";
    //flDiv.innerHTML='<iframe id="DCLK_FLIframe1" src="https://ad.doubleclick.net/ddm/activity/src=5537717;type=' + type + ';cat=' + cat + ';ord=' + a + '?" width="1" height="1" frameborder="0"><\/iframe>';
    flDiv.innerHTML = '<iframe id="DCLK_FLIframe1" src="https://ad.doubleclick.net/ddm/activity/src=5537717;type=' + type + ';cat=' + cat + ';ord=1;num=' + a + '?" width="1" height="1" frameborder="0"><\/iframe>';
}


//dccTag('https://4499836.fls.doubleclick.net/activityi;src=4499836;type=mpfwh0;cat=128_m0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;');
function dccTag(url) {
    var axel = Math.random() + "";
    var a = axel * 10000000000000;
    var iframe = document.createElement('iframe');
    iframe.style.display = "none";
    iframe.frameborder = "0";
    iframe.width = "0px";
    iframe.height = "0px";
    iframe.src = url + 'ord=' + a + '?';
    document.body.appendChild(iframe);
}

function sizmekTag(url) {
    var ebSession = '[SessionID]';
    var ebRand = Math.random() + '';
    ebRand = ebRand * 1000000;

    var iframe = document.createElement('iframe');
    iframe.frameborder = "0";
    iframe.width = "0px";
    iframe.height = "0px";
    iframe.src = url + '&amp;rnd=' + ebRand + '&amp;Session=' + ebSession;
    document.body.appendChild(iframe);

    //var taglink = url + '&amp;rnd=' + ebRand + '&amp;Session='+ebSession;
    //document.write('<scr'+'ipt src="' + taglink +'"></scr' + 'ipt>');
}

function ebConversionTracker(conv) {
    var ebConversionImg = new Image();
    var ebConversionURL = "//bs.serving-sys.com/Serving/ActivityServer.bs?";
    ebConversionURL += "cn=as&ActivityID=" + conv + "&ns=1";
    ebConversionImg.src = ebConversionURL;
}

function googleRemarketingTag(id) {
    var image = new Image(1, 1);
    image.src = '//googleads.g.doubleclick.net/pagead/viewthroughconversion/' + id + '/?value=0&guid=ON&script=0';
}

function googleRemarketingEventTag(id, label) {
    var image = new Image(1, 1);
    //image.src = '//googleads.g.doubleclick.net/pagead/viewthroughconversion/' + id + '/?value=0&guid=ON&script=0';
    if (label != "") {
        image.src = '//www.googleadservices.com/pagead/conversion/' + id + '/?label=' + label + '&guid=ON&script=0';
    } else {
        image.src = '//googleads.g.doubleclick.net/pagead/viewthroughconversion/' + id + '/?value=0&guid=ON&script=0';
    }
}

function fbConversionTracker(id) {
    // 	<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=471413536358794&ev=PageView&noscript=1" />
    var ebSession = '[SessionID]';
    var ebRand = Math.random() + '';
    ebRand = ebRand * 1000000;
    var rand = Math.floor(Math.random() * 1000000);

    var image = new Image(1, 1);
    image.src = '//www.facebook.com/tr?id=' + id + '&ev=PageView&noscript=1&v=' + rand;
    log('fbConversionTracker');

    /*
	var iframe = document.createElement('iframe');
	iframe.frameborder = "0";
	iframe.width = "0px";
	iframe.height = "0px";
	iframe.src = '//www.facebook.com/tr?id=' + id + '&ev=PageView&noscript=1';
	document.body.appendChild(iframe);
	*/
}



/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011��2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function (a) { function f(a, b) { if (!(a.originalEvent.touches.length > 1)) { a.preventDefault(); var c = a.originalEvent.changedTouches[0], d = document.createEvent("MouseEvents"); d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d) } } if (a.support.touch = "ontouchend" in document, a.support.touch) { var e, b = a.ui.mouse.prototype, c = b._mouseInit, d = b._mouseDestroy; b._touchStart = function (a) { var b = this; !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown")) }, b._touchMove = function (a) { e && (this._touchMoved = !0, f(a, "mousemove")) }, b._touchEnd = function (a) { e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1) }, b._mouseInit = function () { var b = this; b.element.bind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), c.call(b) }, b._mouseDestroy = function () { var b = this; b.element.unbind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), d.call(b) } } }(jQuery);

/*
Modernizr.addTest("boxsizing", function() {
	return Modernizr.testAllProps("boxSizing") && (document.documentMode === undefined || document.documentMode > 7);
});
*/