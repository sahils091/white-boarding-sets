//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.

// WRITE YOUR CODE BELOW

const serve = (main, side, drink) => { 
    let menu = generateMenu();
    let orderPrice = 0;
  
    for (let i =0; i < menu.length; i++) {
        if (menu[i].name === main) {
            orderPrice += menu[i].price;

        }else if (menu[i].name === side) {
            orderPrice += menu[i].price;
       
        }else if(menu[i].name === drink) {
            orderPrice += menu[i].price;
           
        }
    }
    console.log(`Your Order is Ready. The Order is ${main}, ${side} and  ${drink}. The total price is $ ${orderPrice}` );

}



const cook = (main, side, drink) => {
    let menu = generateMenu();
    let orderTime = 0;
    let mainDish = {};
    let sideDish = {};
    let drinkDish = {};
    for (let i =0; i < menu.length; i++) {
        if (menu[i].name === main) {
            orderTime += menu[i].time
            mainDish = menu[i];
        }else if (menu[i].name === side) {
            orderTime += menu[i].time
            sideDish = menu[i];
        }else if(menu[i].name === drink) {
            orderTime += menu[i].time
            drinkDish = menu[i];
        }
    }
    console.log(`Hello, your Food will be Ready in ${orderTime} minutes`)
    window.alert(`Hello, your Food will be Ready in ${orderTime} minutes`);

     setTimeout(()=>{
         serve(main, side, drink)
     }, orderTime*1000);




}

const order = (main, side, drink) => {
    if (main && side && drink) {
     return   cook(main,side, drink)
    }else {
        return " Not a complete Meal PLease order Again "
    }
 
}

order('Lobster','Wild Rice','Wine')




// function that returns a menu array, no need to modify this function
function generateMenu (){
    return [{
        name:'Steak',
        time:5,
        price:40
    },{
        name:'Burger',
        time:4,
        price:15
    },{
        name:'Shawarma',
        time:4,
        price:20
    },{
        name:'Pizza',
        time:3,
        price:10
    },{
        name:'Sushi',
        time:3,
        price:15
    },{
        name:'Lobster',
        time:5,
        price:50
    },{
        name:'Carpaccio',
        time:5,
        price:25
    },{
        name:'Chicken',
        time:4,
        price:10
    },{
        name:'Wild Rice',
        time:2,
        price:5
    },{
        name:'Fries',
        time:1,
        price:5
    },{
        name:'Baked Potato',
        time:1,
        price:5
    },{
        name:'Salad',
        time:1,
        price:5
    },{
        name:'Coffee',
        time:1,
        price:0
    },{
        name:'Tea',
        time:1,
        price:0
    },{
        name:'Pop',
        time:1,
        price:0
    },{
        name:'Beer',
        time:1,
        price:5
    },{
        name:'Wine',
        time:1,
        price:10
    }]
}
