$(function () {
    // $(".toggle-mnu").click(function() {
    // 	$(this).toggleClass("on");
    // 	$(".menu").slideToggle();
    // 	return false;
    // });
    var $self = this;

    this.openPopup = function (selector) {
       setTimeout(function(){
          $('body').addClass('overflow_hidden');
          $(selector).addClass('active');
       }, 1000);
    };

    this.closePopup = function (selector) {
        $('body').removeClass('overflow_hidden');
        $(selector).removeClass('active');
    };

    // $('.ul_nav a').each(function(){
    //     $(this).click(function(e){
    //         e.preventDefault();
    //     });
    // });

    $('#feedback').click(function () {
        var a = $(this).outerWidth();
        $('#run-div').animate({
            'left': '0%',
            // 'width': '140px'
            'width': a
        });
    });

    $('.link-head-login').click(function () {
        var a = $(this).outerWidth();
        $('#run-div').animate({
            'left': '54%',
            // 'width': '70px',
            'width': a
        });
    });

    // is_dirty
    // is_invalid
    // is_valid

    $('.mdl-textfield__input').each(function () {
        $(this).on("focus", function (e) {
            var mdlTextfield = $(this).parent();
            $(mdlTextfield).addClass('mdl-textfield_active');

            if ($(this).hasClass('is_dirty')) {

            }
        });
    });
    $('.mdl-textfield__input').each(function () {
        $(this).on("blur", function (e) {
            var mdlTextfield = $(this).parent();
            if ($(this).val() == 0) {
                $(mdlTextfield).removeClass('mdl-textfield_active');
                // $(mdlTextfield).addClass('is_dirty');
            }
        });
    });


///// don't touch it!!! final parenthesis
});

