import {getData} from './getData.js';

const wishList  = ['idd005', 'idd035', 'idd045', 'idd055'];

const generateGoodsPage = () => {

    if(location.pathname.includes('goods') && location.search) {

        const mainHeader = document.querySelector('.main-header');
        const goodsList = document.querySelector('.goods-list');

        const generateCards = (data) => {
            goodsList.textContent = '';

            data.forEach(item => {
                goodsList.insertAdjacentHTML('afterbegin', `
                    <li>${item.name}</li>
                `);
            });
        }
            
        const search = decodeURI(location.search);        
        const prop = search.split('=')[0].slice(1);        
        const value = search.split('=')[1];

        if(prop === 's'){
            getData.search(value, generateCards);
            mainHeader.textContent = `Поиск: ${value}`;
        } else if (prop === 'wishlist'){
            //отбираем по id нужные ел-ты из БД json
            getData.wishList(wishList, generateCards);
            mainHeader.textContent = `Список желаний`;
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, generateCards);
            mainHeader.textContent = value;
        }
    }
}

export default generateGoodsPage;