var taskcnt = 0;
var comp = 0;

function add(e) {
    taskcnt++;      // 할 일 개수 증가

    var task = $("<div class='task'></div>");
    var cont = $("<span class='content'></span>");
    var chkbox = $("<input type='checkbox' class='chk'>");

    cont.append($(".txtb").val());

    var img = $("<img src='./image/checked.png' class='check-icon icon-img' id='checked-icon' onclick=''><img src='./image/unchecked.png' class='uncheck-icon icon-img' id='uncheck' onclick=''>");

    var check = img.click(function() {

        var checked = $(this).parent().children(".chk");

        if(!checked.prop('checked')) {
            checked.prop('checked', true);
        } else {
            checked.prop('checked', false);
        }

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

    cancel();
};

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

});