/**
 * Created by lixuhui on 2018/9/14.
 */

function submit(id) {
    var title = $("#title").val();
    var content = ue_content.getContent();
    var tag = 1;

    var jsonData = {
        id: id,
        title: title,
        content: content,
        tag: tag
    };

    url = id ? "/blog/article/update" : "/blog/article/save";

    $.ajax({
        url: url,
        type: 'POST',
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(jsonData),
        dataType: "json",
        success: function (data) {
            if (data.code == 0) {
                alert(data.msg);
                window.location.href = "/blog/article/" + data.data;
            } else {
                alert("code:" + data.code + ", msg:" + data.msg);
            }
        },
        error: function(){
            alert("系统异常");
        }
    });
}

var ue_content;
$(function () {
    ue_content = UE.getEditor('editor_content', {
        initialFrameHeight: document.body.offsetHeight * 4 / 5,
        initialFrameWidth: $('#title').width,
        initialStyle:'p{line-height:1.5em;font-size: 15px; }',
        toolbars: [[
            'fontsize', 'bold', 'italic', 'underline', 'forecolor', 'backcolor', '|', 'upimg'
        ]],
        labelMap:{
            'upimg':'插入图片'
        },
        fontsize:[10, 11, 12, 14, 16, 18, 20, 24, 36],
    });
});