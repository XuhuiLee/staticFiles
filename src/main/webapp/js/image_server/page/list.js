/**
 * Created by lixuhui on 2019/2/12.
 */
function listDir(dirName) {
    var $ul = $('#' + dirName);
    if ($ul.html().trim().length == 0) {
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
    } else {
        if ($ul.is(":hidden")) {
            $ul.show();
        } else {
            $ul.hide();
        }
    }
}

function showPics(dirName, data) {
    var html = "";
    var $ul = $('#' + dirName);
    for (var pic of data) {
        html += '<li><a href="/img/pic/' + pic + '" target="_blank">' +
            '<img class="am-img-thumbnail am-img-bdrs" src="/img/pic/' + pic + '"/>' +
            '</a></li>';
    }
    $ul.html(html);
    $ul.show();
}