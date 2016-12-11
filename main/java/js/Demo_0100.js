/**
 * Created by hp on 2016/12/11.
 */
/*所有的事件函数都在文档自身的“事件处理器”内部进行定义*/
$(document).ready(function () {
    /*jQuery的点击事件click函数*/
    $("button").click(function () {
        /*内部调用css方法修改css属性*/
        $("p").css("background-color", "yellow");
    });
});
