const fetch = require("node-fetch");

const initPolling = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();

        console.log("get result initial poling", data);
        // здесь можно добавить проверку - если тренировка уже сгенерирована то и не начинать поллинг
        polling(data);
    }
    catch(err) {
        console.log("init polling error: ", err);
    } 
      
}

const polling = (data) => {
    // doing something with data
    console.log("start poling");
    let counter = 0;

    const pollingRequest = async () => {
        console.log("checking server. ", counter);
        
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();

            console.log("result checking: ", data);
            if (counter === 2 && data.id === 1) {
                console.log("status is generated");
                clearInterval(interval);
            }
            counter++;
        } catch(err) {
            console.log("check error: ", err);
            clearInterval(interval);
        }
    }

    const interval = setInterval(pollingRequest, 5000);
}


initPolling();