import {getData} from './getData.js';

const cartList = [
    {
        id: 'idd015',
        count: 3
    },
    {
        id: 'idd035',
        count: 2
    },
    {
        id: 'idd016',
        count: 4
    },
];

export const loadData = () => {
    // console.log(location);
    
    //определяем значение из гет-запроса
    if(location.hash) {
        getData.item(location.hash.substring(1), (data) => console.log(data));
    }

    //данные для корзины
    if(location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }

    // getData.catalog((data) => console.log(data));   
};