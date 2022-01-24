$(function () {
    var rangePercent = $('[type="range"]').val();
    $('[type="range"]').on("change input", function () {
        rangePercent = $('[type="range"]').val();
        $("h4").html(rangePercent + "<span></span>");
        $('[type="range"], h4>span').css(
            "filter",
            "hue-rotate(-" + (rangePercent+5) + "deg)"
        );
        $("h4").css({
            transform: "translateX(-60%) scale(" + (1 + rangePercent / 100) + ")",
            left: rangePercent + "%"
        });
    });
});
