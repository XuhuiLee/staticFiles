/**
 * Created by lixuhui on 2018/9/14.
 */

function submitArticle(id) {
    var title = $("#title").val();
    var content = ue_content.getContent();
    var tag = $("#tag").val();

    var jsonData = {
        id: id,
        title: title,
        content: content,
        tag: tag
    };

    url = id > 0 ? "/blog/article/update" : "/blog/article/save";

    $.ajax({
        url: url,
        type: 'POST',
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(jsonData),
        dataType: "json",
        success: function (data) {
            if (data.code == 0) {
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

function selectTag(tagId, tagName) {
    $("#tag").val(tagId);
    $("#tag").html(
    '<span class="am-icon-bookmark"></span> ' +
        tagName +
        ' <span class="am-icon-caret-down"></span>');
    $("#tag_dropdown").dropdown('close');
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