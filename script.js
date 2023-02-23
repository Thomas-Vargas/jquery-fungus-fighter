$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
 let fungusHP = 100;
 let playerAP = 100;

function onReady() { 
    renderAll();  
    $('.attack-btn').on('click', attack);
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function renderApText() {
    if (playerAP < 0) {
        playerAP = 0;
    } 

    $('.ap-text').html(`
        <p>${playerAP} AP</p>
    `);
}

function renderFungusHP() {
    if (fungusHP < 0) {
        fungusHP = 0;
    } 

    $('.hp-text').html(`
        <p>${fungusHP} HP</p>
    `);
}

function attack() {
    //console.log($(this).hasClass('arcane-sceptre'))

    if ($(this).hasClass('arcane-sceptre')) {
        if (playerAP >= 12) {
            playerAP -= 12;
            fungusHP -= 14;
        } else {
            alert('Not enough AP!');
        }

        renderAll();
        isFungusDead();
        doIHaveAP();
    }
    if ($(this).hasClass('entangle')) {
        if (playerAP >= 23) {
            playerAP -= 23;
            fungusHP -= 9;
        } else {
            alert('Not enough AP!');
        }

        renderAll();
        isFungusDead()
        doIHaveAP();
    }
    if ($(this).hasClass('dragon-blade')) {
        if (playerAP >= 38) {
            playerAP -= 38;
            fungusHP -= 47;
        } else {
            alert('Not enough AP!');
        }
        
        renderAll();
        isFungusDead();
        doIHaveAP();
    }
    if ($(this).hasClass('star-fire')) {
        if (playerAP >= 33) {
            playerAP -= 33;
            fungusHP -= 25;
        } else {
            alert('Not enough AP!');
        }

        renderAll();
        isFungusDead();
        doIHaveAP();
    }
    
}

function renderAll() {
    renderApText();
    renderFungusHP();
}

function isFungusDead() {
    if (fungusHP === 0) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
    }
}

function doIHaveAP() {
    if (playerAP === 0 || playerAP < 12) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('jump');
        $('.attack-btn').attr('disabled', true)
    }
}