class ConsultingServices extends elementorModules.frontend.handlers.Base {
    onInit() {
        let $ = jQuery;

        $('.stm_services.style_3').each(function() {
            var perRow = $(this).attr('data-per-row');
            $(this).owlCarousel({
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1024: {
                        items: perRow
                    },
                    1110: {
                        items: perRow
                    }
                }
            });
        });

        $('.stm_services.style_7').each(function() {
            $(this).owlCarousel({
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
        })
    }
}

jQuery(window).on('elementor/frontend/init', () => {
    const addHandler = ($element) => {
        elementorFrontend.elementsHandler.addHandler(ConsultingServices, {
            $element,
        });
    };
    elementorFrontend.hooks.addAction('frontend/element_ready/stm_services.default', addHandler);
});