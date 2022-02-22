//오브젝트 표현법
let car = {
    name : "sonata",
    ph : 200,
    start : () => {
        console.log("engine start");
    },
    stop : () => {
        console.log("engine stop");
    }
}

console.log(car.name +" "+ car.ph);
car.start();