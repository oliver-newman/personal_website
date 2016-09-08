$(document).keydown(function (e) {

    // Handle only [J] and [K]...
    if (e.keyCode < 74 || e.keyCode > 75) {
        return false;
    }

    // Find the "active" container.
    var active = $('div.active').removeClass('active');
    var newActive;

    // Handle [J] event.
    if (e.keyCode == 74) {
        newActive = active.next('div');

        //if (newActive.index() == -1) {
        //    newActive = $('div', container).last();
        //}
    }
    // Handle [K] event.
    else if (e.keyCode == 75) {
        newActive = active.prev('div');

        //if (newActive.index() == -1) {
        //    newActive = $('div', container).first();
        //}
    }

    if (newActive !== undefined) {
        newActive.addClass('active');
        $(document).scrollTop(newActive.position().top);
    }
});
