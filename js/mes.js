function saveval() {
    var nb = 0;
    nb++;
    if ($("#ms1").val() && $("#ms2").val() && $("#ms3").val() != "") {
        $(".bd1 .bd2:nth-child(3)").append("<div  class='valdiv' id='" + nb + "' draggable='true' ondragstart='drag(event)' id='drag1'><div>" + $("#ms1").val() + "</div><div>" + $("#ms3").val() + "</div><div>日期：" + $("#ms2").val() + "</div></div>")
        bd3();

        $("#ms1,#ms3").val("")
        $("#addval,#addval +div").fadeToggle(100);
        $("#ms2").val(ymd);
    } else {
        alert("請確認標題與內容是否輸入完畢。")
    }
};
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = "#" + ev.dataTransfer.getData("Text");
    $(".valdiv").css("width", "auto").css("height", "100px");
    $(".valdiv").find("div:nth-child(1)").css("text-align", "center").css("font-size", "70px");
    $(".valdiv").find("div:nth-child(2),div:nth-child(3)").css("display", "none");
    $(data).remove();
    bd3();
}
function bd3() {
    $(".bd3").text("待處理：" + $("#len > div").length);
}
$(function () {
    bd3();
    var date = new Date();
    var ymd = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() <= 9 ? '0' + date.getDate() : date.getDate());
    $("#ms2").val(ymd)

    $(".bd1 .bd2:nth-child(2),#addval").click(function () {
        $("#addval,#addval +div").fadeToggle(300);
    });
    $(".valdiv").live("click", function () {
        if ($(this).css("height") == "100px") {
            $(".valdiv").css("width", "auto").css("height", "100px")
            $(".valdiv").find("div:nth-child(1)").css("text-align", "center").css("font-size", "70px")
            $(".valdiv").find("div:nth-child(2),div:nth-child(3)").css("display", "none")
            $(this).css("width", "100%").css("height", "250px")
            $(this).find("div:nth-child(1)").css("font-size", "60px").css("text-align", "left")
            $(this).find("div:nth-child(2),div:nth-child(3)").css("display", "block")
        } else {
            $(this).css("width", "auto").css("height", "100px");
            $(this).find("div:nth-child(1)").css("text-align", "center").css("font-size", "70px")
            $(this).find("div:nth-child(2),div:nth-child(3)").css("display", "none")
        };
    });
});
