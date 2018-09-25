/**
 * Created by Lee on 2018/9/20.
 */

function submitTag() {
    var id = $("#tag_form_id").val();
    var parentId = $("#tag_form_parent_id").val();
    var name = $("#tag_form_name").val();


    var jsonData = {
        id: id,
        parentId: parentId,
        name: name
    };

    url = id > 0 ? "/blog/tag/update" : "/blog/tag/save";

    $.ajax({
        url: url,
        type: 'POST',
        contentType: "application/json; charset=UTF-8",
        data: JSON.stringify(jsonData),
        dataType: "json",
        success: function (data) {
            if (data.code == 0) {
                window.location.href = "/blog/list/" + data.data;
            } else {
                alert("code:" + data.code + ", msg:" + data.msg);
            }
        },
        error: function(){
            alert("系统异常");
        }
    });
}

function editTag(id, name, parentId, parentName) {
    $("#tag_form_name").val(name);
    selectFormTag(parentId, parentName);
    showSign(id);
}

function selectFormTag(tagId, tagName) {
    $("#tag_form_parent_id").val(tagId);
    $("#tag_form_parent_id").html(
        '<span class="am-icon-bookmark"></span> ' +
        tagName +
        ' <span class="am-icon-caret-down"></span>');
    $("#tag_form_dropdown").dropdown('close');
}

function showSign(tagId){
    $("#tag_form_id").val(tagId);
    if (tagId == 0) {
        $("#tag_form_name").val("");
        selectFormTag(0, "父级Tag：无");
    }
    $("#tag_form_wrap").toggle();
}

$(function () {
    var top = (document.body.offsetHeight - $("#tag_form").height()) / 4;
    var left = (document.body.offsetWidth - $("#tag_form").width()) / 2;

    $("#tag_form").css("top", top);
    $("#tag_form").css("left", left);
});