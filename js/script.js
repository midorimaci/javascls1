var product = prompt('Why do you like to order?');
console.log( 'You chosed:', product);

    switch(product){
        case 'Oranges':
            console.log('Oranges are 0,59pounds');
            break;
        case 'Banans':
            console.log('Banans are 1.23pounds');
            break;
        case 'Cheries':
            console.log('Cheries are 4,54pounds');
            break;
        default:
            console.log("Sorry " + product + " doesn`t exist");     

}