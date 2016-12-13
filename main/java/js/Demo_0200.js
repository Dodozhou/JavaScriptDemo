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
    /*slideDown()slideUp()slideToggle()有两个参数
     * 1、speed
     * 2、callback
     * */
    $("#bt4").click(function () {
        $("#p1").slideDown(1000);
    });
    $("#bt5").click(function () {
        $("#p1").slideUp(2000);
    });
    $("#bt6").click(function () {
        $("#p1").slideToggle(3000);
    });
    /**
     * fadeIn()fadeOut()fadeTo()
     * 前两个有speed和callback参数
     * fadeTo()还有另一个参数：opacity
     * opacity参数规定减弱到给定的不透明度
     */
    $("#bt7").click(function () {
        $("#p1").fadeIn(1000);
    });
    $("#bt8").click(function () {
        $("#p1").fadeOut(2000);
    });
    $("#bt9").click(function () {
        $("#p1").fadeTo(2000, 0.25);
    });
    /**
     * animate：自定义动画
     * $(selector).animate({params},[duration],[easing],[callback])
     * params是关键参数，它定义了产生动画的属性。可以同时设置多个此类属性
     * animate({width:"70%"，opacity:0.4,marginLeft:"0.6in",fontSize:"3em"})
     * duration参数设置动画的时间，其值有："slow","fast","normal"或毫秒
     */
    $("#bt10").click(function () {
        $("#p1").animate({height: 300}, "slow");
        $("#p1").animate({width: 300}, "slow");
        $("#p1").animate({height: 100}, "slow");
        $("#p1").animate({width: 100}, "slow");

    });
})