/**
 * Created by hp on 2016/12/11.
 */
$(document).ready(function () {
    /*hide() show() toggle()函数有两个参数。
     *1、speed：控制隐藏和出现的速度
     * 可选值有"slow""fast""normal"或nilliseconds毫秒数
     * 2、callback 回调函数
     */
    $("#bt1").click(function () {
        $("#p1").hide("slow");
    });
    $("#bt2").click(function () {
        $("#p1").show(1000);
    });
    $("#bt3").click(function () {
        $("#p1").toggle(2000);
    });

    $("#bt4").click(function () {
        $("#p1").slideDown();
    });
    $("#bt5").click(function () {
        $("#p1").slideUp();
    });
    $("#bt6").click(function () {
        $("#p1").slideToggle();
    });
    $("#bt7").click(function () {
        $("#p1").fadeIn();
    });
    $("#bt8").click(function () {
        $("#p1").fadeOut();
    });
    $("#bt9").click(function () {
        $("#p1").fadeToggle();
    });
    $("#bt10").click(function () {
        $("#p1").animate();
    });
})