/**
 * Created by hp on 2016/12/12.
 */
$(document).ready(function () {
    $("#b1").click(function () {
        $("#p").html("p的值被改变了哦");
        $("#p1").prepend("这是预设的值");
        $("#p2").before("这是before函数设置的值")
        $("#p3").after("这是after函数设置的值")
    });
    $("#b1").dblclick(function () {
        $("#p4").append("这是追加的内容");
    });
});
