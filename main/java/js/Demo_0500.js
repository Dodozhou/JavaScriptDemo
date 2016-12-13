/*
 * Created by hp on 2016/12/12.
 */
$(document).ready(function () {
    $("#bt1").click(function () {
        /*当本地文件访问远程服务器时，会遇到跨域问题！！！！！！
         * 不过挂到云服务器上之后就不会了
         * 此方法是将data作为参数传递的，即url后跟?*****
         * $("#div1").load("http://localhost:8888/a.txt");
         */


        //AJAX的get方法实例
        /* $.get("http://localhost:8888/a.json",function (data,status) {
         $("#div1").html(data.username+"     "+status);
         });*/


        //post请求测试通过
        /* $.post("http://localhost:8888/appuser","{'method':'login','username':'zhouzhou','password':'123'}",function (data,status) {
         //data.msg始终未undefined，而data却又有，哎，坑爹的ajax
         $("#div1").html(data+"    "+status);
         });*/


        $.ajax("http://localhost:8888/appuser", {
            type: "post",//请求方式
            data: "{'method':'login','username':'zhouzhou','password':'123'}",
            dataType: "json",//返回参数的类型
            contentType: "utf-8",//发送请求的编码方式
            success: function (data) {
                // alert(data);
                // var ajaxobj=eval("("+data+")");
                //var ajaxobj=$.parseJSON(data);
                //当服务器端直接返回的是json字符串时，不用解析，可以直接.用,一解析，反而错了
                //alert(data.msg);
                $("#div1").html("msg:" + data.msg + "     state:" + data.state);
            },
            error: function (XMLHTTPRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
                $("#div1").html(textStatus);
            }

        });


        //这种方式只能是get方式请求，并且请求的a.json里面的json数据可以不用解析直接用
        /*$.getJSON("http://localhost:8888/a.json",function (data) {
         $("#div1").html(data.username+"       "+data.password);
         })*/

    });
});
