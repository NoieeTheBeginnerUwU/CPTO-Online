

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
    }else if(input == "where can i buy angko?"){
        return ""
    }else if(input == "where can i buy sinantol?"){
        return ""
    }else if(input == "where can i buy ginumis?"){
        return ""
    } else if(input == "where can i buy empanada?"){
        return ""
    } else if(input == "where can i buy kinakaw?"){
        return ""
    } else if(input == "where can i buy pili roll?"){
        return ""
    } else if(input == "where can i buy pili tart?"){
        return ""
    } else if(input == "where can i buy pandecillos?"){
        return ""
    } else if(input == "where can i buy dinailan?"){
        return ""
    } else if(input == "where can i buy tinumok?"){
        return ""
    }else if(input == "how much is angko?"){
        return ""
    }else if(input == "how much is sinantol?"){
        return ""
    }else if(input == "how much is ginumis?"){
        return ""
    }else if(input == "how much is empanada?"){
        return ""
    }else if(input == "how much is kinakaw?"){
        return ""
    }else if(input == "how much is pili roll?"){
        return ""
    }else if(input == "how much is pili tart?"){
        return ""
    }else if(input == "how much is pandecillos?"){
        return ""
    }else if(input == "how much is dinailan?"){
        return ""
    }else if(input == "how much is tinumok?"){
        return ""
    }     else {
        return "Sorry i did not quite get that, if you have specific questions please refer to the CPTO facebook account https://www.facebook.com/<br>GoCamNorte or CPTO gmail come2camnorte@gmail.com ";
    }

}
