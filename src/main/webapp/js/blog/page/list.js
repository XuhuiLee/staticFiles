/**
 * Created by lixuhui on 2019/4/23.
 */
$(function() {
    initPageBtn();
});

function initPageBtn() {
    var total = $('#totalPage').text();
    var page = $('#pageNo').text();
    total = eval(total);
    page = eval(page);
    var prev = page - 1 < 1 ? 1 : page - 1;
    var next = page + 1 > total ? total : page + 1;
    var showBtnNum = 5;
    var beforeBtnNum = 2;
    var afterBtnNum = 2;


    var html = "";
    if (page != 1) {
        html += getGoToBtnStr("上一页", prev);
    }
    if (total <= showBtnNum) {
        for (var i = 1; i <= total; i++) {
            if (i == page) {
                html += getCurrentBtnStr(i);
            } else {
                html += getGoToBtnStr(i, i);
            }
        }
    } else {
        if (page <= beforeBtnNum + 1) {
            for (var i = 1; i <= page + afterBtnNum; i++) {
                if (i == page) {
                    html += getCurrentBtnStr(i);
                } else {
                    html += getGoToBtnStr(i, i);
                }
            }
            html += getEmptyBtnStr();
            html += getGoToBtnStr(total, total);
        } else if (page >= total - afterBtnNum - 1) {
            html += getGoToBtnStr(1, 1);
            html += getEmptyBtnStr();
            for (var i = page - beforeBtnNum; i <= total; i++) {
                if (i == page) {
                    html += getCurrentBtnStr(i);
                } else {
                    html += getGoToBtnStr(i, i);
                }
            }
        } else {
            html += getGoToBtnStr(1, 1);
            html += getEmptyBtnStr();
            for (var i = page - beforeBtnNum; i <= page + afterBtnNum; i++) {
                if (i == page) {
                    html += getCurrentBtnStr(i);
                } else {
                    html += getGoToBtnStr(i, i);
                }
            }
            html += getEmptyBtnStr();
            html += getGoToBtnStr(total, total);
        }
    }
    if (page < total) {
        html += getGoToBtnStr("下一页", next);
    }

    $("#pager").html(html);
}

function getGoToBtnStr(name, page) {
    return '<botton type="botton" class="pager-btn am-btn am-btn-primary am-margin-horizontal-xs am-radius" onclick="goTo(' + page + ')">' + name + '</botton>';
}

function getCurrentBtnStr(name) {
    return '<botton type="botton" class="pager-btn am-btn am-btn-primary am-margin-horizontal-xs am-radius am-active">' + name + '</botton>';
}

function getEmptyBtnStr() {
    return '<botton type="botton" class="pager-btn am-btn am-btn-primary am-margin-horizontal-xs am-radius">...</botton>';
}

function goTo(page) {
    window.location.href = "/blog/list?page=" + page;
}