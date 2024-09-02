// Function to check if both input fields are filled
function checkInput() {
    var yourName = document.getElementById("yourName").value;
    var theirName = document.getElementById("theirName").value;

    // Show the button if both names are entered
    if (yourName && theirName) {
        document.getElementById("calculateButton").style.display = "block";
    } else {
        document.getElementById("calculateButton").style.display = "none";
    }
}

// Function to calculate the LoveScore
function calculateLoveScore() {
    // Get the names from the input fields
    var yourName = document.getElementById("yourName").value;
    var theirName = document.getElementById("theirName").value;

    var loveScore;

    // Special condition for specific names
    if (yourName === "Moirangthem Erudite" && theirName === "Mangalleibi Kongbam") {
        loveScore = 100;
    } else if (yourName === "Mangalleibi Kongbam" && theirName === "Moirangthem Erudite") {
        loveScore = 100;
    }
    else if (yourName === "Mangalleibi kongbam" && theirName === "Moirangthem erudite") {
        loveScore = 100;
    }
    else if (yourName === "Moirangthem erudite" && theirName === "Mangalleibi kongbam") {
        loveScore = 100;
    }
    else if (yourName === "mangalleibi kongbam" && theirName === "moirangthem erudite") {
        loveScore = 100;
    }
    else if (yourName === "mangalleibi kongbam" && theirName === "erudite moirangthem") {
        loveScore = 100;
    }
    else if (yourName === "Mangalleibi Kongbam" && theirName === "Erudite Moirangthem") {
        loveScore = 100;
    }
    else {
        // Generate a random LoveScore
        loveScore = Math.random() * 100;
        loveScore = Math.floor(loveScore) + 1;
    }

    var message = "";

    // Determine the message based on the LoveScore
    if(loveScore < 30){
        message = "Your LoveScore is " + loveScore + ". Dr Love na noi ani nganlikanda thaptokhwro, thungnaba gi chance nemmi hai!";
    } else if(loveScore >= 30 && loveScore < 60){
        message = "Your LoveScore is " + loveScore + ". Dr Love na haibada, noi ani si thungnabasu yai, saonadanaba hotnou.";    
    } else if(loveScore >= 60 && loveScore <90){
        message = "Your LoveScore is " + loveScore + ". Dr Love na nakhoi ani yam nungshinei, yamna su channei, thungnaba oisasu hairi!";
    } else if(loveScore >= 90){
        message = "Your LoveScore is " + loveScore + ". Dr Love ei esa su noi ani gi nungshinaba siD fngngkte, noi ani soidana thungnarani, Wish You Advanced happy Married Life!!";
    }

    // Display the result
    document.getElementById("result").innerHTML = message;
}
