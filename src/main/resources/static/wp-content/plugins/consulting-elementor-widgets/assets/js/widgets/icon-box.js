class ConsultingIconBox extends elementorModules.frontend.handlers.Base {
    onInit() {
        let buttons = document.querySelectorAll(".icon-box-tab-link");
        buttons.forEach((button) => {
            button.addEventListener("click", function(evt){
                let tab = this.getAttribute("tabid");
                let i, icon_box_tab_content, icon_box_tab_links;
                icon_box_tab_content = document.querySelectorAll(".icon-box-tab-content");
                for (i = 0; i < icon_box_tab_content.length; i++) {
                    icon_box_tab_content[i].style.display = "none";
                }
                let icon_box_tab_link = document.querySelectorAll(".icon-box-tab-link");
                for (i = 0; i < icon_box_tab_link.length; i++) {
                    icon_box_tab_link[i].className = icon_box_tab_link[i].className.replace(" active", "");
                }
                document.getElementById(tab).style.display = "flex";
                evt.currentTarget.className += " active";
            });
        })
    }
}

jQuery(window).on('elementor/frontend/init', () => {
    const addHandler = ($element) => {
        elementorFrontend.elementsHandler.addHandler(ConsultingIconBox, {
            $element,
        });
    };
    elementorFrontend.hooks.addAction('frontend/element_ready/stm_icon_box.default', addHandler);
});