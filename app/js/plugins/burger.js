(function ($) {
    $.fn.burgerWork = function () {
        const $self = $(this);
        const $wrapper = $self.find(".js-navigation-wrapper");
        const $content = $self.find(".js-navigation-content");
        const $button = $self.find(".js-navigation-buttons");
        const init = function () {
            $button.click(function () {
                $button.addClass('navigation-buttons--active')
                $wrapper.slideToggle()
            })
        }
        init()
    }

    $('.js-navigator-wrapper').each(function () {
        $(this).data('burgerWork', $(this).burgerWork());
    });
})(jQuery);