function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Goodbye! ";
    }else if(input == "i love you"){
        return "i'm taken, sorry."
    }else if(input == "thank you"){
        return "Glad we could help."
    }else if(input == "nigga"){
        return "bro racism is not cool."
    }else if(input == "google"){
        return window.location.replace("https://www.google.com/")
    }   else {
        return "";
    }

}