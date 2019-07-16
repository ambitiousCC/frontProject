/*
 * @Author: cuiqin 
 * @Date: 2019-01-18 16:35:00 
 * @Last Modified by: cuiqin
 * @Last Modified time: 2019-01-23 21:32:19
 */
window.onload = function () {
    //nav-top35 50 30 35 14 42 40
    var navLiWidth = [50, 80, 60, 50, 80, 70, 63];
    var navUl = document.getElementById('nav-auto-inner-ul');
    var navLi = navUl.getElementsByTagName('li');
    var navLiChecked = document.getElementsByClassName('nav-auto-inner-ul-li-checked');
    var liBg = document.getElementById('nav-auto-bottom-bg');
    var i = 0;

    navLi[0].style.marginLeft = '140px';
    for (i = 0; i < navLiChecked.length; i++) {
        navLiChecked[i].style.borderBottom = '1px solid #8b5cdd';

    }
    for (i = 1; i < navLi.length - 1; i++) {
        navLi[i].style.marginLeft = '40px';
    }
    for (i = 0; i < navLi.length - 1; i++) {
        navLi[i].style.width = navLiWidth[i] + 'px';
        navLi[i].style.cursor = 'pointer';
    }

    for (i = 0; i < navLi.length - 1; i++) {
        navLi[i].onmouseover = function () {
            //-1就没有class名
            if (this.className.indexOf('nav-auto-inner-ul-li-checked') == -1) {
                liBg.style.left = this.offsetLeft + 'px';
                startMove0(liBg, {
                    width: this.offsetWidth
                });
            }
        }
        navLi[i].onmouseout = function () {
            startMove0(liBg, {
                width: 0
            })
        }

    }

    // nav-left-logo
    var fa = document.getElementsByClassName('fa');
    var faCircle = document.getElementsByClassName('fa-genderless');
    for (i = 0; i < fa.length; i++) {
        fa[i].style.cursor = 'pointer';
    }
    for (i = 0; i < faCircle.length; i++) {}


    //nav-top btn
    var oBtnBanner = document.getElementsByClassName('btn-banner')[0];
    var oBtnBack = document.getElementsByClassName('btn-bg')[0];

    var iframe0 = document.getElementById('iframe0');

    var navLeft = document.getElementsByClassName('nav-left')[0];
    var navTop = document.getElementsByClassName('nav-top')[0];
    var main = document.getElementsByClassName('main')[0];



    //iframe1 引入动画

    oBtnBanner.style.cursor = 'pointer';
    oBtnBanner.onmouseover = function () {
        this.style.border = '2px solid #8b5cdd';
        this.style.color = '#fff';
        startMove0(oBtnBack, {
            marginTop: 0,
            height: 83
        });

    }

    oBtnBanner.onmouseout = function () {
        this.style.border = '2px solid #dccef5';
        this.style.color = '#8d5cdd';
        startMove0(oBtnBack, {
            marginTop: 83,
            height: 0
        });

    }

    oBtnBanner.onclick = function () {
        startMove0(iframe0, {
            marginTop: 0
        }, function () {
            var conBody = window.frames["iframe_0"].document.getElementById('contact-bd');

            startMove0(conBody, {
                opacity: 100
            });
        });

        iframe0.style.height = '100%';
        navLeft.style.display = 'none';
        navTop.style.display = 'none';
        main.style.display = 'none';
    }




    //main-body
    var lineBack = document.getElementsByClassName('main-guild-inner-bg');
    var line = document.getElementsByClassName('main-guild-inner-line');
    var mainChinese = document.getElementsByClassName('main-guild-inner-lists');
    var mainCnA = document.getElementsByClassName('main-guild-inner-list-link');

    for (i = 0; i < line.length; i++) {
        line[i].style.top = (lineBack[0].offsetHeight / 2 - 1) + 'px';
    }

    for (var i = 0; i < mainChinese.length; i++) {
        // 闭包我需要的i值
        (function (i) {
            mainChinese[i].onmouseover = function () {
                startMove0(line[i], {
                    width: 30
                });
                startMove0(this, {
                    marginLeft: 40
                });
                startMove0(mainCnA[i], {
                    opacity: 100
                })
            }
            mainChinese[i].onmouseout = function () {
                startMove0(line[i], {
                    width: 0
                });
                startMove0(this, {
                    marginLeft: 22
                });
                startMove0(mainCnA[i], {
                    opacity: 50
                })
            }
        })(i);
    }


    //main-guild-inner-lists
    var mainLiWidth = [70, 55, 100, 45];

    for (i = 0; i < mainChinese.length; i++) {
        mainChinese[i].style.width = mainLiWidth[i] + 'px';
    }

    //main-banner-inner-list
    var mainBannerImg = document.getElementsByClassName('main-banner-images');

    for (i = 0; i < mainBannerImg.length; i++) {
        mainBannerImg[i].style.width = document.body.offsetWidth / 2 + 'px';
    }


    mainBanner();

    maBaOn();




    var mainGuildList = document.getElementsByClassName('main-guild-inner-list');
    var mBaLiTxt = document.getElementsByClassName('main-banner-inner-list-txt');
    var mBaLiH2 = document.getElementsByClassName('main-banner-inner-list-txt-title');
    var mBaLiSpan = document.getElementsByClassName('main-banner-inner-list-txt-content');

    for (i = 0; i < mainGuildList.length; i++) {

        (function (i) {
            var mainBanner = document.getElementById('main-banner');

            mainGuildList[i].onmouseover = function () {
                startMove3(this);
                startMove1(mainBanner, {
                    width: 55,
                    marginLeft: 45,
                    marginTop: -1
                }, function () {
                    mBaLiTxt[i].style.background = 'rgba(3,3,3,0.5)';
                    startMove0(mBaLiH2[i], {
                        opacity: 100
                    }, function () {
                        startMove0(mBaLiSpan[i], {
                            opacity: 100
                        });
                    });
                });
            }

            mainGuildList[i].onmouseout = function () {
                clearInterval(this.timer);
                startMove1(mainBanner, {
                    width: 50,
                    marginLeft: 50,
                    marginTop: 0
                }, function () {

                    mBaLiTxt[i].style.background = 'rgba(3,3,3,0.1)';
                    startMove0(mBaLiH2[i], {
                        opacity: 0
                    }, function () {
                        startMove0(mBaLiSpan[i], {
                            opacity: 0
                        });
                    });

                });
            }
        })(i)
    }





    compare0();
    //compare1();

}

//顶部消失动画 
function compare0() {
    var navTop = document.getElementsByClassName('nav-top')[0];
    var iCur = 0;


    iCur = document.documentElement.scrollTop || document.body.scrollTop;

    if (iCur > 0) {
        navTop.style.opacity='0';
    } else {
        navTop.style.opacity='1';
    }

}




var iframe0 = document.getElementById('iframe0');
var iwindow = iframe0.contentWindow || iframe0.contentDocument;
var idoc = iwindow.document;
iframe0.height = idoc.body.offsetHeight;




//main-banner图片变形
function mainBanner() {
    var mainBanner = document.getElementById('main-banner');

    mainBanner.onmouseover = function () {
        startMove1(mainBanner, {
            width: 55,
            marginLeft: 45,
            marginTop: -1
        });
    }
    mainBanner.onmouseout = function () {
        startMove1(mainBanner, {
            width: 50,
            marginLeft: 50,
            marginTop: 0
        });
    }
}




//main-banner接触动画
function maBaOn() {
    var mBaLiTxt = document.getElementsByClassName('main-banner-inner-list-txt');
    var mBaLiH2 = document.getElementsByClassName('main-banner-inner-list-txt-title');
    var mBaLiSpan = document.getElementsByClassName('main-banner-inner-list-txt-content');

    var line = document.getElementsByClassName('main-guild-inner-line');
    var mainChinese = document.getElementsByClassName('main-guild-inner-lists');
    var mainCnA = document.getElementsByClassName('main-guild-inner-list-link');


    for (i = 0; i < mBaLiTxt.length; i++) {
        (function (i) {
            mBaLiTxt[i].onmouseover = function () {
                this.style.background = 'rgba(3,3,3,0.5)'
                startMove0(mBaLiH2[i], {
                    opacity: 100
                }, function () {
                    startMove0(mBaLiSpan[i], {
                        opacity: 100
                    });
                });

                startMove0(line[i], {
                    width: 30
                });
                startMove0(mainChinese[i], {
                    marginLeft: 40,
                });
                startMove0(mainCnA[i], {
                    opacity: 100
                })

            }



            //为甚么这里调换函数执行顺序有值执行不了？？
            mBaLiTxt[i].onmouseout = function () {
                this.style.background = 'rgba(3,3,3,0.1)';
                startMove0(mBaLiH2[i], {
                    opacity: 0
                }, function () {
                    startMove0(mBaLiSpan[i], {
                        opacity: 0
                    });
                });

                startMove0(line[i], {
                    width: 0
                });
                startMove0(mainChinese[i], {
                    marginLeft: 22,
                });
                startMove0(mainCnA[i], {
                    opacity: 50
                })

            }
        })(i);

    }
}




//iframe1 引入动画


//这里的动画载入以后会卡死
//针对main - guild

// function mainGuildOn(num) {
//     //需要变量
//     var line = document.getElementsByClassName('main-guild-inner-line');
//     var mainChinese = document.getElementsByClassName('main-guild-inner-lists');
//     var mainCnA = document.getElementsByClassName('main-guild-inner-list-link');
//     startMove0(line[num], {
//         width: 30
//     });
//     startMove0(mainChinese[num], {
//         marginLeft: 40
//     });
//     startMove0(mainCnA[num], {
//         opacity: 100
//     });
// }

// function mainGuildOut(num) {
//     //需要变量
//     var line = document.getElementsByClassName('main-guild-inner-line');
//     var mainChinese = document.getElementsByClassName('main-guild-inner-lists');
//     var mainCnA = document.getElementsByClassName('main-guild-inner-list-link');
//     startMove0(line[num], {
//         width: 0
//     });
//     startMove0(mainChinese[num], {
//         marginLeft: 22
//     });
//     startMove0(mainCnA[num], {
//         opacity: 50
//     });
// }

// //判断显示

// function compare() {
//     //*计算目标
//     //页面可见高
//     var iCurBodyHeight = document.body.clientHeight;
//     //盒子的总高
//     var mainBannerHeight = document.getElementById('main-banner').offsetHeight;
//     //移动图片的高
//     var oHeight = mainBannerHeight / 4;
//     //需要居中时top
//     var oMargin = (iCurBodyHeight - oHeight) / 2;

//     //移动盒子的对应至最顶部的高

//     //要重新获取一次值
//     var iTargetNeeds0 = getElementToPageTop(document.getElementById('main-banner-inner-lists0'));
//     var iTargetNeeds1 = getElementToPageTop(document.getElementById('main-banner-inner-lists1'));
//     var iTargetNeeds2 = getElementToPageTop(document.getElementById('main-banner-inner-lists2'));
//     var iTargetNeeds3 = document.documentElement.scrollHeight;

//     //需要被卷走的距离
//     var iTarget0 = Math.floor(iTargetNeeds0 * 110 / 100) - oMargin; //执行
//     var iTarget1 = Math.floor(iTargetNeeds1 * 110 / 100) - oMargin; //执行
//     var iTarget2 = Math.floor(iTargetNeeds2 * 110 / 100) - oMargin; //执行

//     //判断
//     var iCur = document.documentElement.scrollTop || document.body.scrollTop;
//     var i = 0;

//     if (iCur <= iTarget0) {
//         mainGuildOn(0);
//         for (i = 0; i < 4; i++) {
//             if (i = 0) {
//                 break;
//             } else {
//                 mainGuildOut(i);
//             }
//         }
//     } else if (iCur > iTarget0 && iCur <= iTarget1) {
//         mainGuildOn(1);
//         for (i = 0; i < 4; i++) {
//             if (i = 1) {
//                 break;
//             } else {
//                 mainGuildOut(i);
//             }
//         }
//     } else if (iCur > iTarget1 && iCur <= iTarget2) {
//         mainGuildOn(2);
//         for (i = 1; i < 4; i++) {
//             if (i = 2) {
//                 break;
//             } else {
//                 mainGuildOut(i);
//             }
//         }
//     } else if (iCur > iTarget2) {
//         mainGuildOn(3);
//         for (i = 1; i < 4; i++) {
//             if (i = 3) {
//                 break;
//             } else {
//                 mainGuildOut(i);
//             }
//         }
//     }

// }
//全局按钮


//获取目标元素到顶部的高度
function getElementToPageTop(el) {
    if (el.parentElement) {
        return this.getElementToPageTop(el.parentElement) + el.offsetTop
    }
    return el.offsetTop
}

//获取元素的样式属性值
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
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
//可以添加修改的百分比型（%）运动函数
function startMove1(obj, json, fn) {
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
            var iTarget = json[attr];
            var bodyWith = document.body.offsetWidth;
            var bodyHeight = document.body.offsetHeight;
            var newTarget = 0;


            if (attr == 'marginLeft' || attr == 'width') {
                newTarget = Math.floor(bodyWith * iTarget / 100);
            } else if (attr == 'marginTop') {
                newTarget = Math.floor(bodyHeight * iTarget / 100);
            } else {
                newTarget = iTarget;
            }

            var iSpeed = (newTarget - iCur) / 5;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            //检测停止
            if (iCur !== newTarget) {
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
            if (attr == 'marginLeft' || attr == 'width') {
                var numBefore = parseInt(getStyle(obj, attr));
                var numAfter = Math.floor(numBefore / bodyWith * 100);

                obj.style[attr] = numAfter + '%';

            } else {
                clearInterval(obj.timer);
            }

            if (fn) {
                fn();
            }
        }
    }, 30)
}

//针对上下移动的函数
function startMove3(obj, fn) {
    //获取当前的位置
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var iCur = 0;

        iCur = document.documentElement.scrollTop || document.body.scrollTop; //注意检查这里的

        //*计算目标
        //页面可见高
        var iCurBodyHeight = document.body.clientHeight;
        //盒子的总高
        var mainBannerHeight = document.getElementById('main-banner').offsetHeight;
        //移动图片的高
        var oHeight = mainBannerHeight / 4;
        //需要居中时top
        var oMargin = (iCurBodyHeight - oHeight) / 2;
        //目标
        var iTarget = 0;
        var iTargetNeeds = 0;

        //移动盒子的对应至最顶部的高

        //要重新获取一次值
        var mainGuildList = document.getElementsByClassName('main-guild-inner-list');


        if (obj == mainGuildList[0]) { //算法出错
            iTargetNeeds = getElementToPageTop(document.getElementById('main-banner-inner-lists0'));
        } else if (obj == mainGuildList[1]) {
            iTargetNeeds = getElementToPageTop(document.getElementById('main-banner-inner-lists1'));
        } else if (obj == mainGuildList[2]) {
            iTargetNeeds = getElementToPageTop(document.getElementById('main-banner-inner-lists2'));
        } else if (obj == mainGuildList[3]) {
            iTargetNeeds = document.documentElement.scrollHeight;
        }


        //需要被卷走的距离
        iTarget = Math.floor(iTargetNeeds * 110 / 100) - oMargin; //执行



        //计算速度
        var iSpeed = (iTarget - iCur) / 8;
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

        //检测停止 
        if (iTarget != 0) {
            bStop = false;
        }

        document.documentElement.scrollTop += iSpeed; //执行一次以后成为固定值，这里怎么使其能够改变，

        if (bStop) {
            clearInterval(obj.timer);

            if (fn) {
                fn();
            }
        }
    }, 30)
}
//判断h滑动条位置的