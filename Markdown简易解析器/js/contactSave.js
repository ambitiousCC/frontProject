var htmlData = "";
var head = "";
var foot = "";
var newData = "";
head = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
    '<title>Document</title>' +
    '<link href="http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet">' +
    '<link href="http://apps.bdimg.com/libs/bootstrap/css/bootstrap.min.css" rel="stylesheet">' +
    '</head>' +
    '<body>' +
    '<div class="container">' +
    '<div class="row-fluid">'
'<div class="span12">';
foot = '</div>' +
    '</div>' +
    '</div>' +
    '</body>' +
    '</html>'
newData = '';
htmlData = head + newData + foot;

function fakeClick(obj) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent( //鼠标事件
        "click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null
    );
    obj.dispatchEvent(evt);
}

function exportRaw(name, data) {
    var urlObject = window.URL || window.webkitURL || window;

    var exportBlob = new Blob([data]); //新的数据储存在其中

    var saveLink = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    saveLink.href = urlObject.createObjectURL(exportBlob);
    saveLink.download = name;
    fakeClick(saveLink);
}

var A = document.getElementById('demo');
A.onclick = function () {
    exportRaw('test.html', htmlData); //在这里导出js合成的数据
}


/**
 * 注意在主页面中添加a标签操作导出
 */