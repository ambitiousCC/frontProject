/***
 * 正则表达式部分,需要的是接过读取文件数据，并按照表达式处理数据再传递到一个新的变量
 */

//利用data
//json构造方法函数
var newData;
var userData = {
    write: function () {
        newData.innerHTML = data.main(data.value);
    },
    main: function (evt) {
        var char = evt.split('\n');
        var matchArr;
        var html = '';
        var len = char.length;

        //
        for (var i = 0; i < len; i++) {
            //数组储存模板
            matchArr =
                //1~6级标签
                char[i].match(/^#\s/) ||
                char[i].match(/^##\s/) ||
                //文章结构
                char[i].match(/^\*{3,}/) ||

                if (matchArr) {
                    switch (matchArr[0]) {
                        case '# ':
                            html += '<h1>' + this.format(char[i].substring(2)) + '</h1>';
                            break;
                        case '## ':
                            html += '<h2>' + this.format(char[i].substring(3)) + '</h2>';
                            break;
                        case char[i].match(/^\*{3,}/) && char[i].match(/^\*{3,}/)[0]:
                            html += char[i].replace(/^\*{3,}/g, '<hr>');
                            break;
                        default:
                            break;
                    }
                } else {
                    html += '<p>' + this.format(char[i]) + '</p>';
                }

        }
        return html;
    },
    //每读取前都要经历add部分的检查语法
    add: function (str) {
        str = str.replace(/\s/g, '&nbsp;');
        //图片与链接

        var img = str.match(/!\[.*\]\(.*\)/g);
        var re1 = /\(.*\)/;
        var re2 = /\[.*\]/;
        if (img) {
            for (i = 0, len = img.length; i < len; i++) {
                var url = img[i].match(re1)[0];
                var title = img[i].match(re2)[0];
                str = str.replace(img[i], '<img src=' + url.substring(1, url.length - 1) + ' alt=' + title.substring(1, title.length - 1) + '>');
            }
        }

        var a = str.match(/\[.*\]\(.*\)/g);
        if (a) {
            for (i = 0, len = a.length; i < len; i++) {
                var url = a[i].match(re1)[0];
                var title = a[i].match(re2)[0];
                str = str.replace(a[i], '<a href=' + url.substring(1, url.length - 1) + '>' + title.substring(1, title.length - 1) + '</a>');
            }
        }
        return str;
    }
}