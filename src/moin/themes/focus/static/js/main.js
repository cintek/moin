function translate() {
    import("../translations.js").then((file) => {
        const elementsToTranslate = document.querySelectorAll('[data-i18n]')
        for (let a = 0; a < elementsToTranslate.length; a++) {
            const element = elementsToTranslate[a];
            let message = '';
            if (element.dataset && element.dataset.i18n) {
                let lang = navigator.language || navigator.userLanguage
                if (lang.includes("-")) {
                    lang = lang.split("-")[0]
                }
                message = file.translations[lang][element.dataset.i18n]
            }
            if (message.length > 0) {
                element.textContent = message
            }
        }
    })
}

window.onload = function () {
    translate()
    const headers = []
    const h1 = document.querySelectorAll("#moin-content-data h1")
    const h2 = document.querySelectorAll("#moin-content-data h2")
    const h3 = document.querySelectorAll("#moin-content-data h3")
    const h4 = document.querySelectorAll("#moin-content-data h4")
    const h5 = document.querySelectorAll("#moin-content-data h5")
    const h6 = document.querySelectorAll("#moin-content-data h6")

    h1.forEach(element => {
        headers.push(element)
    });
    h2.forEach(element => {
        headers.push(element)
    });
    h3.forEach(element => {
        headers.push(element)
    });
    h4.forEach(element => {
        headers.push(element)
    });
    h5.forEach(element => {
        headers.push(element)
    });
    h6.forEach(element => {
        headers.push(element)
    });

    // Transform headers to permalinks and make anchor symbols only
    // appearing when users hover over a header
    for (const header of headers) {
        for (const child of header.children) {
            if (child.classList.contains('moin-permalink')) {
                header.addEventListener ('click', () => {
                    child.click()
                })
                header.addEventListener('pointerenter', () => {
                    child.style.display = 'inline-block'
                })
                header.addEventListener('pointerleave', () => {
                    child.style.display = 'none'
                })
                header.classList.add('clickable-header')
            }
        }
    }

    // Close menu in top bar when user clicks on something else
    const topbarMenu = document.getElementById('top-bar-menu')

    topbarMenu.addEventListener('click', (event) => {
        event.stopPropagation()
    })
    
    document.body.addEventListener('click', () => {
        const topbarMenuSwitch = document.getElementById('top-bar-menu-switch')
        if (topbarMenuSwitch.checked) {
            topbarMenuSwitch.click()
        }
    })
}