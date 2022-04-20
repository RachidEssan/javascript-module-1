function createShoutyGreeting() {
    const greeting = 'HELLO';
    const mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];
    for (var i = 0; i < mentors.length; i++) {
        message = `${greeting} ${mentors[i].toUpperCase()}`
        console.log(message)
    }    
}

createShoutyGreeting()