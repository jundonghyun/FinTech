let car1 = {
    name : "sonata",
    ph : 200,
    start : () => {
        console.log("engine start");
    },
    stop : () => {
        console.log("engine stop");
    }
}

let car2 = {
    name : "bmw",
    ph : 500,
    start : () => {
        console.log("engine start");
    },
    stop : () => {
        console.log("engine stop");
    }
}

let car3 = {
    name : "tesla",
    ph : 650,
    start : () => {
        console.log("engine start");
    },
    stop : () => {
        console.log("engine stop");
    }
}

let car = [car1, car2, car3];

car.map((cars) => {
    if(cars.name === "bmw"){
        console.log("BMW차량이 있습니다");
    }
});

for(i of car){
    if(i.name == "bmw"){
        console.log("존재");
    }
}

//car 배열안에 bmw가 존재할경우 BMW차량이 있습니다 메시지 출력