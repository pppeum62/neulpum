function login() {
    $('.signup-area').css('display', 'none');
    $('.login-area').css('display', 'inline');

    $('.signup-area').css('opacity', '0');
    $(".login-area").delay(0).animate({ opacity: 1 }, 600);

    $('.line').css('transform', 'translateX(0%)');
}

function sign() {
    $('.login-area').css('display', 'none');
    $('.signup-area').css('display', 'inline');

    $('.login-area').css('opacity', '0');
    $(".signup-area").delay(0).animate({ opacity: 1 }, 600);

    $('.line').css('transform', 'translateX(102%)');
}