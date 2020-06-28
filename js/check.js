var taskcnt = 0;
var comp = 0;
var cnt = 0;

$(".txtb").on("keyup", function(e) {
    // 13은 엔터를 의미
    if(e.keyCode == 13 && $(".txtb").val() != "") {
        taskcnt++;      // 할 일 개수 증가
        console.log($(".tasknum").text());
        // document.querySelector(".tasknum").textContent = taskcnt;

        var task = $("<div class='task'></div>");
        var cont = $("<span class='content'></span>");
        var chkbox = $("<input type='checkbox' class='chk'>");

        cont.append($(".txtb").val());

        // console.log(comp / taskcnt);
        // setGaugeValue(gaugeElement, comp / taskcnt);

        var img = $("<img src='./image/checked.png' class='check-icon icon-img' id='checked-icon' onclick=''><img src='./image/unchecked.png' class='uncheck-icon icon-img' id='uncheck' onclick=''>");

        var check = img.click(function() {
            
            var checked = $(this).parent().children(".chk");

            if(!checked.prop('checked')) {
                checked.prop('checked', true);
            } else {
                checked.prop('checked', false);
            }
            
            // document.querySelector(".compnum").textContent = comp;

            // setGaugeValue(gaugeElement, comp / taskcnt);

            var p = $(this).parent();

            p.fadeOut(function() {
                p.remove();

                $(".comp").append(p);
                p.fadeIn();

                p.children('.check-icon').css('display', 'none');
                p.children('.uncheck-icon').css('display', 'inline');
            });
        });

        task.append(chkbox, img, cont);

        $(".notcomp").append(task);
        $(".txtb").val("");
    }
});

$(document).on("click", "#uncheck", function(e) {
    var p = $(this).parent();
    var checked = $(this).parent().children(".chk");

    checked.prop('checked', false);
    comp--;     // 완료한 할 일 개수 감소

    p.children('.check-icon').css('display', 'inline');
    p.children('.uncheck-icon').css('display', 'none');

    var p = $(this).parent();
    p.fadeOut(function() {
        p.remove();

        $(".notcomp").append(p);
        p.fadeIn();
    
    });

    // document.querySelector(".compnum").textContent = comp;
    // setGaugeValue(gaugeElement, comp / taskcnt);

});

$(document).on("click", "#checked-icon", function(e) {
    var p = $(this).parent();
    var checked = $(this).parent().children(".chk");

    checked.prop('checked', true);
    comp++;     // 완료한 할 일 개수 증가

    p.children('.check-icon').css('display', 'none');
    p.children('.uncheck-icon').css('display', 'inline');

    var p = $(this).parent();
    p.fadeOut(function() {
        p.remove();

        $(".comp").append(p);
        p.fadeIn();
    
    });

    // document.querySelector(".compnum").textContent = comp;
    // setGaugeValue(gaugeElement, comp / taskcnt);

});