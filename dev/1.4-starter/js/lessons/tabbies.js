// const Tabbies = () => {
//     console.log("Tabbies file");
// }
// export default Tabbies;

const Tabbies = () => {
    window.addEventListener("DOMContentLoaded", () => {
        const tabs = document.querySelectorAll('[role="tab"]');
        const tabList = document.getElementById('tablist');
        const tabsPanels = document.getElementById('tabPanel');

        // Add a click event handler to each tab
        tabs.forEach(tab => {
            tab.addEventListener("click", changeTabs);
        });

        let tabFocus = 0;

        tabList.addEventListener("keydown", e => {
            // Watch for which keys are pressed
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                tabs[tabFocus].setAttribute("tabindex", -1);
                
                // Move Right
                if (e.key === 'ArrowRight') {
                    tabFocus++;
                    console.log("Right")

                    if (tabFocus >= tabs.length) {
                        tabFocus = 0;
                    }

                    // Move left
                } else if (e.key === 'ArrowLeft') {
                    tabFocus--;
                    console.log("Left")
                    // If we're at the start, move to the end
                    if (tabFocus < 0) {
                        tabFocus = tabs.length - 1;
                    }

                }
            }
            tabsPanels.children[tabFocus].setAttribute("tabindex", 0);
            tabs[tabFocus].focus();

        });
    });

    function changeTabs(e) {
        console.log("Change Tab")
        const target = e.target;
        const parent = target.parentNode;
        const tabsPanels = document.querySelector('[aria-label="Panels"]');

        // Remove all current selected tabs
        parent
            .querySelectorAll('[aria-selected="true"]')
            .forEach(tabButton => tabButton.setAttribute("aria-selected", false));
        
        // Set this tab as selected
        target.setAttribute("aria-selected", true);

        // Hide all tab panels
        tabsPanels
            .querySelectorAll('[role="tabpanel"]')
            .forEach(panel => panel.setAttribute("hidden", true));
        
        // Show the selected panel
        tabsPanels
            .querySelector(`#${target.getAttribute("aria-controls")}`)
            .removeAttribute("hidden");
            
    }
}

export default Tabbies;

