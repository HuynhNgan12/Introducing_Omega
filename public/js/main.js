/*
	Helios by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
const icon = document.querySelector(".bi-telephone-fill");
const tooltip = document.querySelector(".tooltip");

icon.addEventListener("mouseover", () => {
    tooltip.style.display = "block";
});

icon.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
});
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("sendButton");
    const successMessage = document.getElementById("successMessage");
    const inputFields = document.querySelectorAll(".inputName, .inputAddress");
    inputFields.forEach(function (input) {
        input.addEventListener("focus", function () {
            // Ẩn placeholder khi ô input được tương tác (focus)
            input.setAttribute("placeholder", "");
        });

        input.addEventListener("blur", function () {
            // Nếu ô input mất trạng thái tương tác (blur) và không có dữ liệu,
            // hiển thị lại placeholder
            if (input.value.length === 0) {
                input.setAttribute(
                    "placeholder",
                    input.getAttribute("data-placeholder")
                );
            }
        });

        // Lưu giá trị placeholder gốc vào thuộc tính data-placeholder
        input.setAttribute(
            "data-placeholder",
            input.getAttribute("placeholder")
        );
    });
    let timeoutId = null;

    // Kiểm tra trạng thái thông báo từ Local Storage
    const isMessageVisible = localStorage.getItem("messageVisible") === "true";
    if (isMessageVisible) {
        successMessage.style.display = "block";
    }

    btn.addEventListener("click", function () {
        // Hiển thị thông báo thành công
        successMessage.style.display = "block";

        // Hủy bỏ timeout hiện tại (nếu có)
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }

        // Đặt thời gian để thông báo biến mất sau 3 giây
        timeoutId = setTimeout(function () {
            successMessage.style.display = "none";
            timeoutId = null;

            // Lưu trạng thái thông báo vào Local Storage khi nó biến mất
            localStorage.setItem("messageVisible", "false");
        }, 3000);

        // Xóa nội dung khung nhập sau khi gửi
        inputFields.forEach(function (input) {
            input.value = "";
        });

        // Lưu trạng thái thông báo vào Local Storage khi nó hiển thị
        localStorage.setItem("messageVisible", "true");
    });
});

$(function () {
    $(".owl-carousel").sortable({
        axis: "x",
        scroll: false,
        cursor: "move",
    });
});

(function ($) {
    var $window = $(window),
        $body = $("body"),
        settings = {
            // Carousels
            carousels: {
                speed: 4,
                fadeIn: true,
                fadeDelay: 250,
            },
        };

    // Breakpoints.
    breakpoints({
        wide: ["1281px", "1680px"],
        normal: ["961px", "1280px"],
        narrow: ["841px", "960px"],
        narrower: ["737px", "840px"],
        mobile: [null, "736px"],
    });

    // Play initial animations on page load.
    $window.on("load", function () {
        window.setTimeout(function () {
            $body.removeClass("is-preload");
        }, 100);
    });

    // Dropdowns.
    $("#nav > ul").dropotron({
        mode: "fade",
        speed: 350,
        noOpenerFade: true,
        alignment: "center",
    });

    // Scrolly.
    $(".scrolly").scrolly();

    // Nav.

    // Button.
    $(
        '<div id="navButton">' +
            '<a href="#navPanel" class="toggle"></a>' +
            "</div>"
    ).appendTo($body);

    // Panel.
    $(
        '<div id="navPanel">' +
            "<nav>" +
            $("#nav").navList() +
            "</nav>" +
            "</div>"
    )
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            target: $body,
            visibleClass: "navPanel-visible",
        });

    // Carousels.
    $(".carousel").each(function () {
        var $t = $(this),
            $forward = $('<span class="forward"></span>'),
            $backward = $('<span class="backward"></span>'),
            $reel = $t.children(".reel"),
            $items = $reel.children("article");

        var pos = 0,
            leftLimit,
            rightLimit,
            itemWidth,
            reelWidth,
            timerId;

        // Items.
        if (settings.carousels.fadeIn) {
            $items.addClass("loading");

            $t.scrollex({
                mode: "middle",
                top: "-20vh",
                bottom: "-20vh",
                enter: function () {
                    var timerId,
                        limit =
                            $items.length -
                            Math.ceil($window.width() / itemWidth);

                    timerId = window.setInterval(function () {
                        var x = $items.filter(".loading"),
                            xf = x.first();

                        if (x.length <= limit) {
                            window.clearInterval(timerId);
                            $items.removeClass("loading");
                            return;
                        }

                        xf.removeClass("loading");
                    }, settings.carousels.fadeDelay);
                },
            });
        }

        // Main.
        $t._update = function () {
            pos = 0;
            rightLimit = -1 * reelWidth + $window.width();
            leftLimit = 0;
            $t._updatePos();
        };

        $t._updatePos = function () {
            $reel.css("transform", "translate(" + pos + "px, 0)");
        };

        // Forward.
        $forward
            .appendTo($t)
            .hide()
            .mouseenter(function (e) {
                timerId = window.setInterval(function () {
                    pos -= settings.carousels.speed;

                    if (pos <= rightLimit) {
                        window.clearInterval(timerId);
                        pos = rightLimit;
                    }

                    $t._updatePos();
                }, 10);
            })
            .mouseleave(function (e) {
                window.clearInterval(timerId);
            });

        // Backward.
        $backward
            .appendTo($t)
            .hide()
            .mouseenter(function (e) {
                timerId = window.setInterval(function () {
                    pos += settings.carousels.speed;

                    if (pos >= leftLimit) {
                        window.clearInterval(timerId);
                        pos = leftLimit;
                    }

                    $t._updatePos();
                }, 10);
            })
            .mouseleave(function (e) {
                window.clearInterval(timerId);
            });

        // Init.
        $window.on("load", function () {
            reelWidth = $reel[0].scrollWidth;

            if (browser.mobile) {
                $reel
                    .css("overflow-y", "hidden")
                    .css("overflow-x", "scroll")
                    .scrollLeft(0);
                $forward.hide();
                $backward.hide();
            } else {
                $reel.css("overflow", "visible").scrollLeft(0);
                $forward.show();
                $backward.show();
            }

            $t._update();

            $window
                .on("resize", function () {
                    reelWidth = $reel[0].scrollWidth;
                    $t._update();
                })
                .trigger("resize");
        });
    });
})(jQuery);
