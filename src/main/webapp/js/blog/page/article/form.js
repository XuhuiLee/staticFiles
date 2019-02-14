/**
 * Created by lixuhui on 2018/9/14.
 */

function submitArticle(id) {
    var title = $("#title").val();
    var markdown = editor_content.getMarkdown();
    var content = editor_content.getHTML();
    var tag = $("#tag").val();

    var jsonData = {
        id: id,
        title: title,
        content: content,
        tag: tag,
        markdown: markdown
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

var editor_content;
$(function() {
    editor_content = editormd({
        id : "editormd",
        height : 500,
        path : "/sf/editormd/lib/",
        saveHTMLToTextarea : true,
        imageUpload       : true,
        imageFormats      : ["jpg", "jpeg", "gif", "png", "bmp"],
        imageUploadURL    : "/img/upload/editormd-image-file"
    });

    $("#editormd").on('paste', function (ev) {
        var items = (event.clipboardData || event.originalEvent.clipboardData).items;
        for (var index in items) {
            var item = items[index];
            if (item.kind === 'file') {
                var blob = item.getAsFile();
                var reader = new FileReader();
                reader.onload = function (event) {
                    var base64 = event.target.result;
                    $.ajax({
                        url: "/img/upload/base64",
                        type: 'POST',
                        data: {
                            picBase64: base64
                        },
                        dataType: "json",
                        success: function (data) {
                            if (data.code == 0) {
                                editor_content.insertValue('![](/img/pic/' + data.data + ')');
                            } else {
                                alert("code:" + data.code + ", msg:" + data.msg);
                            }
                        },
                        error: function(){
                            alert("系统异常");
                        }
                    });
                };
                reader.readAsDataURL(blob);
            }
        }
    });
});