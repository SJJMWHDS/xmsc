window.onload=function () {



    // 返回顶部
    let back=document.querySelector(".bar");
    back.onclick=function () {
        animate(document.body, {scrollTop: 0}, 500);
        animate(document.documentElement, {scrollTop: 0}, 500)
    }



    // 选项卡
    let fu = document.querySelectorAll(".slip .box ");
    let son = document.querySelectorAll(".slip .box .children ");
    let con = document.querySelectorAll(".slip .menu .box .children li");
    let kon = document.querySelectorAll(".slip .menu .box .children span");
    console.log(fu, son, kon);
    for (let i = 0; i < fu.length; i++) {
        fu[i].onmouseenter = function () {
            for (let j = 0; j < son.length; j++) {
                son[j].style.display = "none";
            }
            son[i].style.display = "block";
        }
        fu[i].onmouseleave = function () {
            son[i].style.display = "none";
        }
    }
    for (let i = 0; i < kon.length; i++) {
        con[i].onmouseenter = function () {
            for (let j = 0; j < kon.length; j++) {
                kon[j].style.color = "#000";
                }
                kon[i].style.color = "#ff6b00";
            }
            con[i].onmouseleave = function () {
            kon[i].style.color = "#000";
            }
    }


            // 内容轮播1
            let oneimgs = document.querySelectorAll(".content .content-list .one .banner .master");
            let onedots = document.querySelectorAll(".content .content-list .one .dot li");
            let oneleftbtn = document.querySelectorAll(".content .content-list .one .leftbtn")[0];
            let onerightbtn = document.querySelectorAll(".content .content-list .one .rightbtn")[0];
            let onewidths = parseInt(getComputedStyle(oneimgs[0], null).width);
            let onenow = 0;
            let onenext = 0;
            let oneflag = true;
            for (let i = 0; i < onedots.length; i++) {
                onedots[i].onclick = function () {
                    for (let j = 0; j < onedots.length; j++) {
                        onedots[j].classList.remove("active");
                        oneimgs[j].style.left = onewidths + "px";
                    }
                    onedots[i].classList.add("active");
                    oneimgs[i].style.left = "0";
                    onenow = onenext;
                }
            }
            oneimgs[0].style.left = "0";
            onedots[0].classList.add("active");

            function onemove() {
                onenext++;
                if (onenext == 4) {
                    onenext = 3;
                }
                oneimgs[onenext].style.left=onewidths+"px";
                oneimgs[onenow].style.left=-onewidths+"px";
                oneimgs[onenext].style.left="0";
                onedots[onenow].classList.remove("active");
                onedots[onenext].classList.add(("active"));
                onenow = onenext;
            }

            onerightbtn.onclick = function () {
                onemove();
            }

            function onemoveL() {
                onenext--;
                if (onenext < 0) {
                    onenext = 0;
                }
                oneimgs[onenext].style.left=-onewidths+"px";
                oneimgs[onenow].style.left=onewidths+"px";
                oneimgs[onenext].style.left="0";
                onedots[onenow].classList.remove("active");
                onedots[onenext].classList.add(("active"));
                onenow = onenext;
            }

            oneleftbtn.onclick = function () {
                onemoveL();
            }


            // 内容轮播2
            let senimgs = document.querySelectorAll(".content .content-list .sen .banner .master");
            let sendots = document.querySelectorAll(".content .content-list .sen .dot li");
            let senleftbtn = document.querySelectorAll(".content .content-list .sen .leftbtn")[0];
            let senrightbtn = document.querySelectorAll(".content .content-list .sen .rightbtn")[0];
            let senwidths = parseInt(getComputedStyle(senimgs[0], null).width);
            let sennow = 0;
            let sennext = 0;
            let senflag = true;
            for (let i = 0; i < sendots.length; i++) {
                sendots[i].onclick = function () {
                    for (let j = 0; j < sendots.length; j++) {
                        sendots[j].classList.remove("active");
                        senimgs[j].style.left = senwidths + "px";
                    }
                    sendots[i].classList.add("active");
                    senimgs[i].style.left = "0";
                    sennow = sennext;
                }
            }
            senimgs[0].style.left = "0";
            sendots[0].classList.add("active");

            function senmove() {
                sennext++;
                if (sennext == 4) {
                    sennext = 3;
                }
                senimgs[sennext].style.left=senwidths+"px";
                senimgs[sennow].style.left=-senwidths+"px";
                senimgs[sennext].style.left="0";
                sendots[sennow].classList.remove("active");
                sendots[sennext].classList.add(("active"));
                sennow = sennext;
            }

            senrightbtn.onclick = function () {
                senmove();
            }

            function senmoveL() {
                sennext--;
                if (sennext < 0) {
                    sennext = 0;
                }
                senimgs[sennext].style.left=-senwidths+"px";
                senimgs[sennow].style.left=senwidths+"px";
                senimgs[sennext].style.left="0";
                sendots[sennow].classList.remove("active");
                sendots[sennext].classList.add(("active"));
                sennow = sennext;
            }

            senleftbtn.onclick = function () {
                senmoveL();
            }


            // 内容轮播3
            let sanimgs = document.querySelectorAll(".content .content-list .san .banner .master");
            let sandots = document.querySelectorAll(".content .content-list .san .dot li");
            let sanleftbtn = document.querySelectorAll(".content .content-list .san .leftbtn")[0];
            let sanrightbtn = document.querySelectorAll(".content .content-list .san .rightbtn")[0];
            let sanwidths = parseInt(getComputedStyle(sanimgs[0], null).width);
            let sannow = 0;
            let sannext = 0;
            let sanflag = true;
            for (let i = 0; i < sandots.length; i++) {
                sandots[i].onclick = function () {
                    for (let j = 0; j < sandots.length; j++) {
                        sandots[j].classList.remove("active");
                        sanimgs[j].style.left = sanwidths + "px";
                    }
                    sandots[i].classList.add("active");
                    sanimgs[i].style.left = "0";
                    sannow = sannext;
                }
            }
            sanimgs[0].style.left = "0";
            sandots[0].classList.add("active");

            function sanmove() {
                sannext++;
                if (sannext == 4) {
                    sannext = 3;
                }
                sanimgs[sannext].style.left=sanwidths+"px";
                sanimgs[sannow].style.left=-senwidths+"px";
                sanimgs[sannext].style.left="0";
                sandots[sannow].classList.remove("active");
                sandots[sannext].classList.add(("active"));
                sannow = sannext;
            }

            sanrightbtn.onclick = function () {
                sanmove();
            }

            function sanmoveL() {
                sannext--;
                if (sannext < 0) {
                    sannext = 0;
                }
                sanimgs[sannext].style.left=-sanwidths+"px";
                sanimgs[sannow].style.left=sanwidths+"px";
                sanimgs[sannext].style.left="0";
                sandots[sannow].classList.remove("active");
                sandots[sannext].classList.add(("active"));
                sannow = sannext;
            }

            sanleftbtn.onclick = function () {
                sanmoveL();
            }


            // 内容轮播4
            let forimgs = document.querySelectorAll(".content .content-list .for .banner .master");
            let fordots = document.querySelectorAll(".content .content-list .for .dot li");
            let forleftbtn = document.querySelectorAll(".content .content-list .for .leftbtn")[0];
            let forrightbtn = document.querySelectorAll(".content .content-list .for .rightbtn")[0];
            let forwidths = parseInt(getComputedStyle(forimgs[0], null).width);
            let fornow = 0;
            let fornext = 0;
            let forflag = true;
            for (let i = 0; i < fordots.length; i++) {
                fordots[i].onclick = function () {
                    for (let j = 0; j < fordots.length; j++) {
                        fordots[j].classList.remove("active");
                        forimgs[j].style.left = forwidths + "px";
                    }
                    fordots[i].classList.add("active");
                    forimgs[i].style.left = "0";
                    fornow = fornext;
                }
            }
            forimgs[0].style.left = "0";
            fordots[0].classList.add("active");

            function formove() {
                fornext++;
                if (fornext == 4) {
                    fornext = 3;
                }
                forimgs[fornext].style.left=forwidths+"px";
                forimgs[fornow].style.left=-forwidths+"px";
                forimgs[fornext].style.left="0";
                fordots[fornow].classList.remove("active");
                fordots[fornext].classList.add(("active"));
                fornow = fornext;
            }

            forrightbtn.onclick = function () {
                formove();
            }

            function formoveL() {
                fornext--;
                if (fornext < 0) {
                    fornext = 0;
                }
                forimgs[fornext].style.left=-forwidths+"px";
                forimgs[fornow].style.left=forwidths+"px";
                forimgs[fornext].style.left="0";
                fordots[fornow].classList.remove("active");
                fordots[fornext].classList.add(("active"));
                fornow = fornext;
            }

            forleftbtn.onclick = function () {
                formoveL();
            }


            // 为你推荐
            let tjr = document.querySelectorAll(".recommend .arrow .arrow-r");
            let tjl = document.querySelectorAll(".recommend .arrow .arrow-l");
            let tjhd = document.querySelector(".recommend .container ul");
            let tjw = parseInt(getComputedStyle(tjhd, null).width) / 5;
            let tjtime = 0;
            console.log(tjl);
            console.log(tjr, tjl, tjhd, tjw);
            tjr[0].onclick = function () {
                tjtime++;
                if (tjtime == 5) {
                    tjtime = 4;
                }
                tjhd.style.transform = `translate(-${tjw * tjtime}px)`;
            }
            tjl[0].onclick = function () {
                tjtime--;
                if (tjtime <= 0) {
                    tjtime = 0;
                }
                tjhd.style.transform = `translate(-${tjw * tjtime}px)`;
            }


            // 小米闪购
            let sgr = document.querySelectorAll(".flashover .arrow .arrow-r");
            let sgl = document.querySelectorAll(".flashover .arrow .arrow-l");
            let sghd = document.querySelector(".flashover .lasttime .warp ul");
            let sgw = parseInt(getComputedStyle(sghd, null).width) / 2;
            let sgtime = 0;
            console.log(sgr, sgl, sghd, sgw);
            sgr[0].onclick = function () {
                sgtime++;
                if (sgtime == 2) {
                    sgtime = 1;
                }
                sghd.style.transform = `translate(-${sgw * sgtime}px)`;
            }
            sgl[0].onclick = function () {
                sgtime--;
                if (sgtime == -1) {
                    sgtime = 0;
                }
                sghd.style.transform = `translate(-${sgw * sgtime}px)`;
            }


            // 家电
            let jdfu = document.querySelectorAll(".household .top .house");
            let jdson = document.querySelectorAll(".household .bdd ");
            console.log(jdfu, jdson);
            for (let i = 0; i < jdfu.length; i++) {
                jdfu[i].onmouseenter = function () {
                    for (let j = 0; j < jdson.length; j++) {
                        jdson[j].style.display = "none";
                    }
                    jdson[i].style.display = "block";
                }
            }


            // banner轮播
            let imgs = document.querySelectorAll(".banner img");
            let dots = document.querySelectorAll(".slip .dot li");
            let banner = document.querySelectorAll(".slip")[0];
            let leftbtn = document.querySelectorAll(".leftArrow")[0];
            let rightbtn = document.querySelectorAll(".rightArrow")[0];
            let widths = parseInt(getComputedStyle(imgs[0], null).width);
            let now = 0;
            let next = 0;
            let flag = true;
            console.log(widths);
            for (let i = 0; i < dots.length; i++) {
                dots[i].onclick = function () {
                    for (let j = 0; j < dots.length; j++) {
                        dots[j].classList.remove("active");
                        imgs[j].style.left = widths + "px";
                    }
                    dots[i].classList.add("active");
                    imgs[i].style.left = "0";
                    now = next;
                }
            }
            imgs[0].style.left = "0";
            dots[0].classList.add("active");
            let t = setInterval(move, 2000);

            function move() {
                next++;
                if (next == dots.length) {
                    next = 0;
                }
                imgs[next].style.left = widths + "px";
                animate(imgs[now], {left: -widths});
                animate(imgs[next], {left: 0}, function () {
                    flag = true;
                });
                dots[now].classList.remove("active");
                dots[next].classList.add(("active"));
                now = next;
            }

            rightbtn.onclick = function () {
                if (!flag) {
                    return;
                }
                flag = false;
                move();
            }

            function moveL() {
                next--;
                if (next < 0) {
                    next = dots.length - 1;
                }
                imgs[next].style.left = -widths + "px";
                animate(imgs[now], {left: widths});
                animate(imgs[next], {left: 0}, function () {
                    flag = true;
                });
                dots[now].classList.remove("active");
                dots[next].classList.add(("active"));
                now = next;
            }

            leftbtn.onclick = function () {
                if (!flag) {
                    return;
                }
                flag = false;
                moveL();
            }
            banner.onmouseenter = function () {
                clearInterval(t);
            }
            banner.onmouseleave = function () {
                t = setInterval(move, 2000);
            }
        }