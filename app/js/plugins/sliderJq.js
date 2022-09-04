(function ($) {
    $.fn.sliderj = function () {
        const $self = $(this)
        const $button = $self.find('.js-text-button')
        const $content = $self.find('.js-text-answer')

        const init = function () {
            $button.click(function () {
                if ($button.hasClass('active')) {
                    $button.css({ transform: 'rotate(' + 0 + 'deg)' })
                    $button.removeClass('active')
                } else {
                    $button.addClass('active')
                    $button.css({ transform: 'rotate(' + 180 + 'deg)' })
                }
                $content.slideToggle()
            })
        }
        init()
    }

    $('.js-text-slider').each(function () {
        console.log($(this))
        $(this).data('sliderj', $(this).sliderj());
    });
})(jQuery);