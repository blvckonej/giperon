class Products {
    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, img, descr, className, backClassName}) => {
            htmlCatalog += `
            <div class="services__block-flip" >
                <div class="services__block-product front ${className}">
                    <p class="services__block-subtitle">${name}</p>
                    <a href="#" class="services__block-link">Узнать подробности <img src="./img/rarrow.svg" alt="Arrow icon"></a>
                </div>
                <div class="services__block-backproduct ${backClassName} back">
                    <p class="services__block-subtitle">${name}</p>
                    <p class="services__block-backdescr">${descr}</p>
                    <a href="#" class="services__block-link">Узнать подробности <img src="./img/blackarrow.svg" alt="Arrow icon"></a>
                </div>
            </div>
            `
        })
        const htmlRender = `

        ${htmlCatalog}
         
        `;

        ROOT_PRODUCTS.innerHTML = htmlRender;
    }
}

const productsPage = new Products();
productsPage.render();