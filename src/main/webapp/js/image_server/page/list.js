/**
 * Created by lixuhui on 2019/2/12.
 */
function listDir(dirName) {
    $.ajax({
        url: "/img/dir/" + dirName,
        type: 'GET',
        dataType: "json",
        success: function (data) {
            if (data.code == 0) {
                showPics(dirName, data.data);
            } else {
                alert("code:" + data.code + ", msg:" + data.msg);
            }
        },
        error: function(){
            alert("系统异常");
        }
    });
}

function showPics(dirName, data) {
    var html = "";
    for (var pic of data) {
        html += '<li><a href="#">' +
            '<img class="am-img-thumbnail am-img-bdrs" src="/img/pic/' + pic + '"/>' +
            '</a></li>';
    }
    $('#' + dirName).html(html);
}