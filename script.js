$(() => {
    $('#back-to-top').onclick(() => {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});