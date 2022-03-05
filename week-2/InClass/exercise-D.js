function saymessage(message) {
    if (message === 'happy') {
        return "Good job, you're doing great!"
    } else if (message === "sad") {
        return "Every cloud has a silver lining"
    } else if (typeof message === "number") {
        return "Beep beep boop"
    }
}

console.log(saymessage("sad"))