let price,discount,saved,priceWithDiscout;
price = +prompt('Price of goods','');
discount = +prompt('Discount on the product','');
if ( isNaN(price)|| isNaN(discount) && typeof price !== 'number' && typeof discount !== 'number'
    || price < 0 || 0 > discount ) {
    alert('Invalid input data');
}else if (discount <= 100 && price < 9999999){
    priceWithDiscout = price - price * discount / 100;
    saved = price - priceWithDiscout;
    alert(' Price without discount : ' + price +
        '\n Discount : '+ discount +
        '\n Price with discount : ' + +priceWithDiscout.toFixed(2)+
        '\n Saved : '+ +saved.toFixed(2));
}else {
    alert('Invalid input data');
}