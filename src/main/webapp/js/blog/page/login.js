/**
 * Created by lixuhui on 2018/9/19.
 */

function login() {
    var username = $("#username").val();
    var password = $("#password").val();
    // md5够了
    password = $.md5(password);

    $.ajax({
        url: "/blog/login",
        type: 'POST',
        data: {
            username: username,
            password: password
        },
        dataType: "json",
        success: function (data) {
            if (data.code == 0) {
                window.location.href = "/blog/";
            } else {
                alert("code:" + data.code + ", msg:" + data.msg);
            }
        },
        error: function(){
            alert("系统异常");
        }
    });
}

function logout() {

    $.ajax({
        url: "/blog/logout",
        type: 'POST',
        dataType: "json",
        success: function (data) {
            if (data.code == 0) {
                window.location.href = "/blog/";
            } else {
                alert("code:" + data.code + ", msg:" + data.msg);
            }
        },
        error: function(){
            alert("系统异常");
        }
    });
}
