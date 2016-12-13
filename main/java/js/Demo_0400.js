/*
 * Created by hp on 2016/12/12.
 */
$(document).ready(function () {
    $("#bt1").click(function () {
        /*当本地文件访问远程服务器时，会遇到跨域问题！！！！！！
         * 不过挂到云服务器上之后就不会了
         * 此方法是将data作为参数传递的，即url后跟?*****
         */
        $("#div1").load("http://localhost:8888/a.txt");

    });
})
