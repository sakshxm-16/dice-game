// Create a function to refresh the dice images and display the result 
function shuffleDices() {
    // 1. Generate random numbers for two dice rolls
    var p1 = Math.floor(Math.random() * 6) + 1;
    var p2 = Math.floor(Math.random() * 6) + 1;

    // 2. Update the dice images based on the random numbers
    document.querySelector(".img1").setAttribute("src", `./assets/images/dice${p1}.png`);
    document.querySelector(".img2").setAttribute("src", `./assets/images/dice${p2}.png`);

    // 3. Determine the winner and update the heading
    if (p1 > p2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
    } else if (p2 > p1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "It's a Draw! 🤝";
    }
}