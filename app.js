let role = "admin";


if (role === "admin") {
    console.log(`Привет ${role}! Добро пожаловать на панель управления.`);
} else if (role === "user") {
    console.log(`Привет ${role}! Рад видеть тебя снова.`);
} else if (role === "guest") {
    console.log(`Привет ${role}! Пожалуйста, зарегистрируйся.`);
} else {
    console.log("Привет! Ну и кто ты такой?");
}

role = "CEO";

switch (role) {
    case "admin":
    case "administrator":
        console.log(`Привет ${role}! Добро пожаловать на панель управления.`);
        break
    case "CEO":
    case "CTO":
        console.log(`Привет ${role}! Рад видеть тебя в руководстве.`);
        break
    case "user":
        console.log(`Привет ${role}! Рад видеть тебя снова.`);
        break
    case "guest":
        console.log(`Привет ${role}! Пожалуйста, зарегистрируйся.`);
        break
    default:
        console.log("Привет! Ну и кто ты такой?");
}

const bmvX3 = 100000;
const audiA4 = 80000;
const budget = 20000;

//let message = "";
// if (bmvX3 <= budget) {
//     message = "Вы можете позволить себе BMW X3";
// } else if (audiA4 <= budget) {
//     message = "Вы можете позволить себе Audi A4";
// } else {
//     message = "У вас недостаточно средств на покупку автомобиля";
// }

//let message = "";
let message = bmvX3 <= budget ?  "Вы можете позволить себе BMW X3" : "У вас недостаточно средств на покупку автомобиля";


console.log(message);
