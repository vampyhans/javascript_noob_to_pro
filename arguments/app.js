const morning = function(name, time){
    console.log(`good ${time} ${name}`);
};

/*const day = function(){
    return 'good day';
};*/

//arrow function

const day = () => 'good day';
result = day();

//passing arguments

morning('hansa', 'morning');

console.log(result);