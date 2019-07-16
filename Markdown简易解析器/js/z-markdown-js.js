var choseBtn = document.getElementById('chosebtn');
var choseTrue = document.getElementById('filechose');

choseBtn.addEventListener('click', () => { //执行函数
    choseTrue.click()
})

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
    '</html>';

var filein = document.getElementById('filechose'),
    showbox = document.getElementById('show');
//监听change事件获取文件数据
filein.addEventListener('change', function () {
    //获取文件引用
    var file = filein.files[0];
    //读取文件
    var reader = new FileReader();
    //设置一个回调函数，等待读取结束后调用
    reader.onload = function (e) {
        var data = e.target.result;
        showbox.innerHTML = data; //调用
    };
    reader.readAsText(file, 'utf-8');
});

function rec() { //点击的关键函数
    alert("转换完毕");
    var textarea = document.getElementById('show'); //隐藏的数据转换
    textarea.value = main(textarea.value);
}

function main(evt) {
    evt = evt.replace(/\t+/g, " ") //把讨厌的\t替换掉
    var char = evt.split("\n");
    var matchArry = [];
    var html = '';
    var len = char.length;

    for (var i = 0; i < len; i++) {
        //数组储存模板
        matchArry = char[i].match(/^#\s/) ||
            char[i].match(/^##\s/) ||
            char[i].match(/^\*{3,}/) ||
            char[i].match(/^\-{3,}/)

        if (matchArry && matchArry[0]) { //关键地方,判断继续进行
            if (matchArry[0]) {
                switch (matchArry[0]) { //输入了空的字符串和不匹配字符串则会报错
                    case '# ':
                        html += '<h1>' + add(char[i].substring(2)) + '</h1>';
                        break;
                    case '## ':
                        html += '<h2>' + add(char[i].substring(3)) + '</h2>';
                        break;
                    case char[i].match(/^\*{3,}/) && char[i].match(/^\*{3,}/)[0]:
                        html += char[i].replace(/^\*{3,}/g, '<hr>');
                        break;
                    case char[i].match(/^\-{3,}/) && char[i].match(/^\-{3,}/)[0]:
                        html += char[i].replace(/^\-{3,}/g, '<hr>');
                        break;
                    default:

                        break;
                }
            }
        } else {
            html += '<p>' + add(char[i]) + '</p>';
            continue;
        }
    }
    return html;
}

function add(str) {
    str = str.replace(/\s/g, '&nbsp;');

    //图片与链接

    var img = str.match(/!\[.*\]\(.*\)/g);
    var re1 = /\(.*\)/;
    var re2 = /\[.*\]/;
    if (img) {
        for (i = 0, len = img.length; i < len; i++) {
            var url = img[i].match(re1)[0];
            var title = img[i].match(re2)[0];
            str = str.replace(img[i], '<img src="' + url.substring(1, url.length - 1) + '" alt="' +
                title.substring(1, title.length - 1) + '">');
        }
    }

    var a = str.match(/\[.*\]\(.*\)/g);
    if (a) {
        for (i = 0, len = a.length; i < len; i++) {
            var url = a[i].match(re1)[0];
            var title = a[i].match(re2)[0];
            str = str.replace(a[i], '<a href="' + url.substring(1, url.length - 1) + '">' + title.substring(
                1, title.length - 1) + '</a>');
        }
    }
    return str;
}


function click(obj) { //新建鼠标事件
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(
        "click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null
    );
    obj.dispatchEvent(evt); //下载
}

function exportRaw(name, data) {
    var urlObject = window.URL || window.webkitURL || window; //获取窗口url

    var exportBlob = new Blob([data]); //数据容器

    var saveLink = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    saveLink.href = urlObject.createObjectURL(exportBlob); //保存的链接中的url来源
    saveLink.download = name; //指定文件名称.类型
    click(saveLink);
}

var linkClick = document.getElementById('demo');
linkClick.onclick = function () {
    var textareaAfter = document.getElementById('show');
    htmlData = head + textareaAfter.value + foot;
    exportRaw('test.html', htmlData); //在这里导出js合成的数据
}