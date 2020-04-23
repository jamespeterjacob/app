function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

var setCurrency = function (tempStr) {
    //if (/[^0-9\.]/.test(s)) return "invalid value";
    var s = tempStr.toString().replace(/^(\d*)$/, "$1.");
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    s = s.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(s))
        s = s.replace(re, "$1,$2");
    s = s.replace(/,(\d\d)$/, ".$1");
    return s.replace(/^\./, "0.")
}

function GetDateDiff(startTime, endTime, diffType) {
    //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
    startTime = startTime.replace(/\-/g, "/");
    endTime = endTime.replace(/\-/g, "/");

    //将计算间隔类性字符转换为小写
    diffType = diffType.toLowerCase();
    var sTime = new Date(startTime);      //开始时间
    var eTime = new Date(endTime);  //结束时间
    //作为除数的数字
    var divNum = 1;
    switch (diffType) {
        case "second":
            divNum = 1000;
            break;
        case "minute":
            divNum = 1000 * 60;
            break;
        case "hour":
            divNum = 1000 * 3600;
            break;
        case "day":
            divNum = 1000 * 3600 * 24;
            break;
        default:
            break;
    }
    return (eTime.getTime() - sTime.getTime()) / parseInt(divNum);
}

function noNumbers(event) {
    var e = event || evt; // for trans-browser compatibility
    var charCode = e.which || e.keyCode;
    if ((charCode >= 34 && charCode <= 40) || charCode == 45 || charCode == 46) {
        return true;
    } else if (charCode >= 96 && charCode <= 105) {
        return true;
    } else if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;

}

function toDecimal(x, decimals) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return false;
    }
    var decimalsNumber = 10;
    for (var i = 0; i < decimals; i++) {
        decimalsNumber = decimalsNumber * 10;
    }
    var f = Math.round(x * decimalsNumber) / decimalsNumber;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0 && decimals > 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + decimals) {
        s += '0';
    }
    return s;
}

Array.prototype.contains = function (elem) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == elem) {
            return true;
        }
    }
    return false;
}

function newGuid() {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
            guid += "-";
    }
    return guid;
}