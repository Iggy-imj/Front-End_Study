function feeling(temperature) {
    if(temperature < 0) {
        console.log("Холодно!");
    } else if(temperature >= 0 && temperature <= 20) {
        console.log("Прохладно");
    } else if(temperature >= 21 && temperature <= 30) {
        console.log("Тепло");
    } else {
        console.log("Жарко!");
    }
}

feeling(-2);
feeling(5);
feeling(21);
feeling(35);