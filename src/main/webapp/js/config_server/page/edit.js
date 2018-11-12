/**
 * Created by lixuhui on 2018/9/14.
 */
function submitConfig() {
    var name = $("#name").val();
    var content = $("#content").val();
    var profiles = $("#profiles").val();

    var jsonData = {
        name: name,
        content: content,
        profiles: profiles
    };

    $.ajax({
        url: "/config/save",
        type: 'POST',
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(jsonData),
        dataType: "json",
        success: function (data) {
            if (data.code == 0) {
                window.location.href = "/config";
            } else {
                alert("code:" + data.code + ", msg:" + data.msg);
            }
        },
        error: function(){
            alert("系统异常");
        }
    });
}