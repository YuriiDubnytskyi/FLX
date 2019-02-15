let data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];
//-------------1--------------
function findTypes(){
    let array =[];
    for(let i = 0;i < arguments.length;i++){
        array.push(typeof arguments[i]);
    }
    return array;
}
console.log(findTypes('number',66,null));
//-------------2--------------

function executeforEach(array,func){
    for(let i = 0;i<array.length;i++){
        func(array[i]);
    }
}
executeforEach([1,2,3], function(el){
 console.log(el)
});
//-------------3--------------

function mapArray(array,func) {
    let arrayNew =[];
    executeforEach(array,el => arrayNew.push(func(el)));
    return arrayNew;
}
console.log(mapArray([2, 5, 8], function(el) {
 return el + 3
}));

//-------------4--------------

function filterArray(array,func) {
    let arrayNew =[];
    executeforEach(array,el => {
        if(func(el)){
            arrayNew.push(el)
        }
    });
    return arrayNew;
}
console.log(filterArray([2, 5, 8], function(el) {
 return el > 3
}));
//-------------5--------------
function getAmountOfAdultPeople(data) {
    let people = 0;
    filterArray(data,function(el) {
        if(el.age > 18){
            people++
        }
    });
    return people;
}
console.log(getAmountOfAdultPeople(data));
//---------------6---------------
function getGreenAdultBananaLovers(data){
    let arrayPeple = [];
    filterArray(data,function(el){
        if(el.age > 18 && el.eyeColor === 'green' && el.favoriteFruit === 'banana'){
            arrayPeple.push(el.name)
        }
    });
    return arrayPeple
}
console.log(getGreenAdultBananaLovers(data));
//---------------7------------
function keys(obj) {
    let newObj = [];
    for (let key in obj){
        newObj.push(key)
    }
    return newObj
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));
//-----------8------------
function values(obj) {
    let newObj = [];
    for (let key in obj){
        newObj.push(obj[key])
    }
    return newObj
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));
//----------9-------------
function showFormattedDate(date) {
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return 'Date: ' + date.getDate() + ' of ' + month[date.getMonth()] + ', ' + date.getFullYear()
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));
//----------10----------
function isEvenYear(date) {
    return date.getFullYear()%2===0
}
console.log(isEvenYear(new Date('2019-01-27T01:10:00')));
//--------------11--------
function isEvenMonth(date) {
    return (date.getMonth()+1)%2===0
}
console.log(isEvenMonth(new Date('2019-02-27T01:10:00')));