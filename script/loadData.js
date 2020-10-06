import {getData} from './getData.js';

const wishList  = ['idd005', 'idd035', 'idd045', 'idd055'];

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
    console.log(location);
    if(location.search) {
            
        const search = decodeURI(location.search);        
        const prop = search.split('=')[0].slice(1);        
        const value = search.split('=')[1];

        if(prop === 's'){
            getData.search(value, (data) => console.log(data));
        } else if (prop === 'wishlist'){
            //отбираем по id нужные ел-ты из БД json
            getData.wishList(wishList, (data)=> {console.dir({whishList: data})});
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, (data) => console.log(data));
        }
    }
    //определяем значение из гет-запроса
    if(location.hash) {
        getData.item(location.hash.substring(1), (data) => console.log(data));
    }

    //данные для корзины
    if(location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }

    getData.catalog((data) => console.log(data));
    getData.subCatalog('Декор', (data) => console.log(data));
};