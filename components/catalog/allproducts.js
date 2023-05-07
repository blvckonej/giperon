class allProducts {
    render() {
        let allHtmlCatalog = '';

        CATALOG.forEach(({id, name, img, descr, className, backClassName, fullImageClass}) => {
            allHtmlCatalog += `
            <div class="catalog__card-block">
            <div class="catalog__card-img ${fullImageClass}"></div>
            <div class="catalog__card-container">
                <p class="catalog__card-title">${name} </p>
                <div class="catalog__card-border"></div>
                <p class="catalog__card-descr">${descr}</p>
            </div>
        </div>
            `
        })
        const htmlRender = `

        ${allHtmlCatalog}
         
        `;

        ROOT_CATALOG.innerHTML = htmlRender;
    }
}

const catalogPage = new allProducts();
catalogPage.render();