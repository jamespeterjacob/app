$(function () {
    var menuID = null;
    if (ClientLanguageJS.LanguagePrefix == "en") {
        $(".headMenu").find("a").css("letter-spacing", "0px");
        //$(".headMenu").find("a").css("font-size","");
    }
    $('.headMenu').find('a').mouseover(function () {
        //alert($(this).find('img').attr('src').indexOf('_on.gif') != -1);
        var thisMenuID = $(this).attr('id');
        if ($(this).find('img').attr('src').indexOf('_on.gif') != -1) {
            menuID = $(this).attr("id");
        } else {
            $(this).find('img').attr('src', 'https://www.aromebakery.com.hk/Areas/Client/Content/Images/common/' + thisMenuID + "_" + ClientLanguageJS.LanguagePrefix + '_on.gif');
        }
    });
    $('.headMenu').find('a').mouseout(function () {
        var thisMenuID = $(this).attr('id');
        if (thisMenuID != menuID) {
            $(this).find('img').attr('src', 'https://www.aromebakery.com.hk/Areas/Client/Content/Images/common/' + thisMenuID + "_" + ClientLanguageJS.LanguagePrefix + '_off.gif');
        }
    });
    $(".changeLanguage").click(function () {
        var language = $(this).text();
        var changeLanguage = "zh-hant";
        if (language == "ENG") {
            changeLanguage = "en-us";
        }
        $.ajax({
            url: '/Client/HelperResource/ChangeLanguage',
            data: { "language": changeLanguage },
            async: false,
            type: 'post',
            success: function (data) {

            }
        });
        document.location.reload();
    });
    $("#cartGoods").text(getGoodsCount());
    setCopyrightDateTime();
});

function getGoodsCount() {
    var count = 0;
    var cartID = $.cookies.get('shoppingCartID');
    var objArray = new Array();
    if (cartID != null) {
        $.ajax({
            url: '/Client/Ordering/GetShoppingCartCount',
            data: {},
            async: false,
            type: 'post',
            dataType: 'text',
            success: function (msg) {
                count = msg;
            }
        });
    }
    return count;
}

function updateClick(itemID) {
    $.ajax({
        url: '/client/Item/UpdateClick',
        data: { "id": itemID },
        async: true,
        type: 'post'
    });
}

function setCopyrightDateTime() {
    $.ajax({
        url: "/Client/Ordering/FetchCurrentDateTime",
        async: false,
        dataType: 'text',
        success: function (msg) {
            if ($.trim(msg).length > 0) {
                var strMsg = msg.replace(/-/g, "/");
                var dateTimeNow = new Date(strMsg);
                $(".copyright").find(".copyrightDateTime").text("©" + dateTimeNow.getFullYear());
            }
        }
    });
}