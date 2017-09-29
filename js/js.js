$(function () {
    var d = $(window).height() / 5 + 100
    $(window).scroll(function () {
        if ($(window).scrollTop() + 100 >= $(window).height()) {
            $(".back").css("opacity", "1");
        } else {
            $(".back").css("opacity", "0")
        }
        if ($(window).scrollTop() >= d) {
            $(".back2").css("opacity", "1");
        } else {
            $(".back2").css("opacity", "0")
        }
    });
    if ($(window).width() <= 1100) {
        $(".p1-2-1 div").css("font-size", "16px")
        $(".back2-1").css("font-size", "18px")

    } else {
        $(".p1-2-1 div").css("font-size", "30px")
        $(".back2-1").css("font-size", "26px")

    };

    $("#phowidth img").each(function () {
        var dh = $("#phowidth").css("height");
        var dw = $("#phowidth").css("width");
        $(".p2-1 ,.p2-2").css("height", dh);
        $(".p2-1,.p2-2").css("width", dw);
        $(this).css("height", dh);
        $(this).css("width", dw);
    });
    $("#P2 img").each(function () {
        var demow = $("#demod").css("width");
        var demoh = $("#demod").css("height");
        $(this).css("height", demoh);
        $(this).css("width", demow);
    });
    $(".p1-2-1").css("width", $(".p1-2").css("width"))

    $("#1a,#2a,#3a").hover(function () {
        var x = "#" + $(this).attr("id") + " +div"
        $(x).css("top", "60px")
        $(x).css("opacity", "1")
        $(".p1-2-1 div").css("margin", "5% 0 0 5%")
    }, function () {
        var x = "#" + $(this).attr("id") + " ~div"
        $(x).css("top", "0px")
        $(x).css("opacity", "0")
        $(".p1-2-1 div").css("margin","0 -25% 0 15%")

    });
    $("a[href]").click(function () {
        var x = "#ta" + $(this).attr("t")
        var z = $(this).attr("href");

        $("html,body").animate({
            scrollTop: $(z).offset().top
        }, "show");

        $(x).attr("checked", "checked")
        return false;
    });

    $("#back1,#back2,#back3").hover(function () {
        var x = $(this).find("div").length
        if (x <= 1) x++;
        x = x * 10 + "0%"
        $(this).find("div").css("opacity", "1")
        $(this).animate({ height:x },100)
        $(this).css("background","#aaa")
    }, function () {
        $(this).find("div").css("opacity", "0")
        $(this).animate({ height: "auto" }, 100)
        $(this).css("background", "rgba(0, 0, 0,0)")
    });
});
