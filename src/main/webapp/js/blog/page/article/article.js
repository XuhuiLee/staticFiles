/**
 * Created by lixuhui on 2018/11/14.
 */
$(function() {
    var testEditormdView = editormd.markdownToHTML("editormd-view", {
        htmlDecode      : "style,script,iframe",  // you can filter tags decode
        emoji           : true,
        taskList        : true,
        tex             : true,  // 默认不解析
        flowChart       : true,  // 默认不解析
        sequenceDiagram : true,  // 默认不解析
    });
});