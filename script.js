//Get to DOM elements
const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

var popup = document.getElementById('popup');



// Loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        //Loop through each option image again
        optionImages.forEach((image2, index2) => {
            //If the current index doesnt match the clicked indes
            //remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active");
        });

        popup.style.display = "block";

        //set a timeout to delay the result display
        let time = setTimeout(() => {
            //get the source of the clicked option image
            let imageSrc = e.target.querySelector("img").src;
            //set the user image to the clicked option
            userResult.src = imageSrc;


            //generate a ramdom number between 0 and 2
            let ramdomNumber = Math.floor(Math.random() * 3);
            //create an array of cpu image options
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            //set the CPU result to the generated option
            cpuResult.src = cpuImages[ramdomNumber];

            //assign a letter value to the cpu option (R-Rock, P-Paper, S-Scissors)
            let cpuValue = ["R", "P", "S"][ramdomNumber];
            //Assign a letter value to the clicked option (based on index)
            let userValue = ["R", "P", "S"][index];

            //create an object with all possible outcomes
            let outcomes = {
                //RR: "Draw",
                RP: "CPU",
                RS: "User",
                //PP: "Draw",
                PR: "User",
                PS: "CPU",
                //SS: "Draw",
                SR: "CPU",
                SP: "User",
            };

            //look up the outcome value based on user and cpu options 
            let outComeValue = outcomes[userValue + cpuValue];
            //Display the result
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`
            console.log(outComeValue);

            popup.style.display = "none";

        }, 500)
        
    });
});




//console.log(gameContainer, userResult, cpuResult, result, optionImages);
//video @ 12:16