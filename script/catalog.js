export const catalog = () => {

    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    const btnClose = document.querySelector('.btn-close');
    const subCatalog = document.querySelector('.subcatalog');
    const subCatalogHeader = document.querySelector('.subcatalog-header');
    const btnReturn = document.querySelector('.btn-return');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.insertAdjacentElement('beforeend', overlay);

    const openMenu = function() {
        catalog.classList.add('open');
        overlay.classList.add('active');
    }

    const closeMenu = function() {
        closeSubMenu();
        catalog.classList.remove('open');
        overlay.classList.remove('active');
    }

    const openSubMenu = (e) => {
        e.preventDefault();
        const target = e.target;
        const itemList = target.closest('.catalog-list__item');
        if(itemList){
            subCatalogHeader.innerHTML = itemList.innerHTML;
            subCatalog.classList.add('subopen');
        }
    }

    const closeSubMenu = (e) => {
        subCatalog.classList.remove('subopen');
    }

    btnBurger.addEventListener('click', openMenu);
    btnClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    catalog.addEventListener('click', openSubMenu);
    btnReturn.addEventListener('click', closeSubMenu);

    document.addEventListener('keydown', (e)=> {
        if(e.code === 'Escape') {
            closeMenu();
        }
    })
}