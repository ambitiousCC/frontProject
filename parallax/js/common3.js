/*
 * @Author: cuiqin 
 * @Date: 2019-01-23 11:51:10 
 * @Last Modified by: cuiqin
 * @Last Modified time: 2019-01-23 21:15:29
 */

//入场动画
var conBody = document.getElementById('contact-bd');
var conBtn = document.getElementsByClassName('contact-btn')[0];
var cbdHidden = document.getElementsByClassName('cbd-tip-textarea-hidden');
var cbdInput = document.getElementById('cbd-tip-textarea-hidden-post');
var cbdTipBtn = document.getElementsByClassName('cbd-tip-btn')[0];

var i = 0;

if (conBody.style['opacity'] == 0) {
    startMove0(conBtn, {
        marginTop: 0
    });
    startMove0(cbdTipBtn, {
        bottom: -20
    }, function () {
        startMove0(cbdInput, {
            opacity: 100
        }, function () {

            startMove0(conBody, {
                opacity: 100
            });

        });
        for (i = 0; i < cbdHidden.length; i++) {
            startMove0(cbdHidden[i], {
                opacity: 100
            });
        };
    });
}


//contact-body
document.getElementById('cbd-main-banner-tel-email').getElementsByTagName('p')[0].style.marginTop = '30px';
document.getElementById('cbd-main-banner-pos-position').getElementsByTagName('p')[0].style.marginTop = '30px';
document.getElementById('cbd-main-banner-tel-position').getElementsByTagName('p')[0].style.marginTop = '30px';



//对按钮动画
var oBtn = document.getElementsByClassName('btn-banner');
var oBg = document.getElementsByClassName('btn-bg');


var i = 0;

for (i = 0; i < oBtn.length; i++) {
    oBtn[i].style.cursor = 'pointer';
}
oBtn[1].onmouseover = function () {
    this.style.border = '2px solid #333';
    startMove0(oBg[1], {
        marginTop: 0,
        height: 83
    });
}
oBtn[1].onmouseout = function () {
    this.style.border = '2px solid #787385';
    startMove0(oBg[1], {
        marginTop: 83,
        height: 0
    });
}

oBtn[1].onclick = function () {
    document.body.style.height = '1000px';
    startMove0(conBody, {
        opacity: 0
    }, function () {


        startMove0(conBody, {
            opacity: 0
        }, function () {
            startMove0(cbdInput, {
                opacity: 0
            }, function () {
                for (i = 0; i < cbdHidden.length; i++) {
                    startMove0(cbdHidden[i], {
                        opacity: 0
                    });
                }

                startMove0(cbdTipBtn, {
                    bottom: 0
                }, function () {
                    //在这获取父页面 对它在主页面的位置进行修改
                    var conBtn = document.getElementsByClassName('contact-btn')[0];

                    conbody.style.height = '1000px';
                    startMove0(conBtn, {
                        marginTop: -20
                    }, function () {

                        if (conBody.style['opacity'] == 0) {
                            //
                            //iframe的执行需要本地的·服务器·localhost亲测未知
                            var navLeft = window.parent.document.getElementsByClassName('nav-left')[0];
                            var main = window.parent.document.getElementsByClassName('main')[0];
                            var navTop = window.parent.document.getElementsByClassName('nav-top')[0];

                            navLeft.style.display = 'block';
                            navTop.style.display = 'block';
                            main.style.display = 'block';

                            startMove0(conbody, {
                                marginTop: -1000
                            });

                        }
                    });
                });
            });
        });

    });
}

oBtn[0].onmouseover = function () {
    this.style.border = '2px solid #8d53dd';
    this.style.color = '#8d53dd';
    startMove0(oBg[0], {
        marginTop: 0,
        height: 83
    });
}
oBtn[0].onmouseout = function () {
    this.style.border = '2px solid #8d53dd';
    this.style.color = '#fff';
    startMove0(oBg[0], {
        marginTop: 83,
        height: 0
    });
}
oBtn[2].onmouseover = function () {
    this.style.border = '2px solid #fff';
    this.style.color = '#8d53dd';
    startMove0(oBg[2], {
        marginTop: 0,
        height: 83
    });
}
oBtn[2].onmouseout = function () {
    this.style.border = '2px solid #787385';
    this.style.color = '#fff';
    startMove0(oBg[2], {
        marginTop: 83,
        height: 0
    });
}





//准确型（px）运动函数
function startMove0(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bStop = true; //所有值都已经到达
        for (var attr in json) {
            //去当前值
            var iCur = 0;

            if (attr == 'opacity') {
                iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                iCur = parseInt(getStyle(obj, attr));
            }

            //算速度
            var iSpeed = (json[attr] - iCur) / 5;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            //检测停止
            if (iCur != json[attr]) {
                bStop = false;
            }

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')'; //优先级
                obj.style.opacity = (iCur + iSpeed) / 100;
            } else {
                obj.style[attr] = iCur + iSpeed + 'px ';
            }
        }

        if (bStop) {
            clearInterval(obj.timer);

            if (fn) {
                fn();
            }
        }
    }, 30)
}