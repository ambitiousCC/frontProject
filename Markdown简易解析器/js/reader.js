window.onload = function () {
    var filein = document.getElementById('file1'),
        showbox = document.getElementById('show');
    //监听change事件
    filein.addEventListener('change', function () {
        //获取文件引用
        var file = filein.files[0];
        //读取文件
        var reader = new FileReader();
        //设置一个回调函数，等待读取结束后调用
        reader.onload = function (e) {
            var data = e.target.result; //注意在这里还没有调用哦
            showbox.innerHTML = data;
        };
        //以url方式读取文件
        reader.readAsText(file, 'utf-8');
    });

}
/**
 * 注意处理的是数据不用显示在页面上
 */