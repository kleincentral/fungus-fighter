// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let playerAP = 100;


function onAttack(event, apCost, damage) {
    console.log(`Your attack cost ${apCost} and did ${damage} damage!`)
    playerAP -= apCost
    fungusHP -= damage

    if (fungusHP <= 0){
        fungusHP=0;
        document.getElementById('fungus-animation').classList.replace('walk', 'dead')
    }
    if (playerAP <= apCost){
        playerAP=0
        let allButton = document.querySelectorAll('.attack-btn');
        for (i=0; i<allButton.length; i++) {
            allButton[i].setAttribute('disabled', '')
        }
        document.getElementById('fungus-animation').classList.replace('walk', 'jump')
    }
    update()

}





function update() {
    document.getElementById('ap').innerHTML = playerAP+' AP'
    document.getElementById('hp').innerHTML = fungusHP+' HP'
    console.log(playerAP)

}


function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()