       window.onload = function () {
       	    var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var container = document.getElementById('container');
            var list = document.getElementById('list');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var timer;
            function fic(offset/*offset() 方法返回或设置匹配元素相对于文档的偏移（位置*/) {
                var newLeft = parseInt(list.style.left) + offset;
                list.style.left = newLeft + 'px';
                if (newLeft > -600) {
                    list.style.left = -3000 + 'px';
                }
                if (newLeft < -3000) {
                    list.style.left = -600 + 'px';
                }
            }
            function play() {
            	timer = setInterval(function () {
                    next.onclick();
                }, 2000)
            }
            function stop() {
                clearInterval(timer);
            }
            function buttonsShow() {
                for (var i = 0; i < buttons.length; i++) {
                    if (buttons[i].className == "on") {
                        buttons[i].className = "";
                    }
                }
                buttons[index - 1].className = "on";
            }
            prev.onclick = function () {
                index -= 1;
                if (index < 1) {
                    index = 5
                }
                buttonsShow();
                fic(600);
            };
            next.onclick = function () {
                index += 1;
                if (index > 5) {
                    index = 1
                }
                fic(-600);
                buttonsShow();
            };
            for (var i = 0; i < buttons.length; i++) {
                (function (i) {
                    buttons[i].onclick = function () {
                        var clickIndex = parseInt(this.getAttribute('index'));
                        var offset = 600 * (index - clickIndex);
                        fic(offset);
                        index = clickIndex;
                        buttonsShow();
                    }
                })(i)
            }
            container.onmouseover = stop;
            container.onmouseout = play;
            /*鼠标移入，移出即显示或不显示相应效果*/
            play();
        }