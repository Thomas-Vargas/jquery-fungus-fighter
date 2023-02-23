$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let playerAP = 100;
let regenHealth = false;
let interval;

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

    //update progress bar
    $('#ap-meter').val(`${playerAP}`);
}

function renderFungusHP() {
    if (fungusHP < 0) {
        fungusHP = 0;
    } 

    if (fungusHP < 50 && regenHealth !== true) {
        regenHealth = true;
        regenerateHealth();
    }


    $('.hp-text').html(`
        <p>${fungusHP} HP</p>
    `);

    $('#hp-meter').val(`${fungusHP}`)
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
    }
    if ($(this).hasClass('entangle')) {
        if (playerAP >= 23) {
            playerAP -= 23;
            fungusHP -= 9;
        } else {
            alert('Not enough AP!');
        }
    }
    if ($(this).hasClass('dragon-blade')) {
        if (playerAP >= 38) {
            playerAP -= 38;
            fungusHP -= 47;
        } else {
            alert('Not enough AP!');
        }
    }
    if ($(this).hasClass('star-fire')) {
        if (playerAP >= 33) {
            playerAP -= 33;
            fungusHP -= 25;
        } else {
            alert('Not enough AP!');
        }
    }

    isFungusDead();
    doIHaveAP();
    renderAll();
}

function isFungusDead() {
    console.log(fungusHP)
    if (fungusHP <= 0) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('dead');
        clearInterval(interval)
    }
}

function doIHaveAP() {
    if (playerAP === 0 || playerAP < 12) {
        $('.freaky-fungus').removeClass('walk');
        $('.freaky-fungus').addClass('jump');
        $('.attack-btn').attr('disabled', true);
        clearInterval(interval)
    }
}

function regenerateHealth() {
        let regenInterval = setInterval(function() {
            fungusHP++
            console.log(fungusHP)

            $('.hp-text').html(`<p>${fungusHP} HP</p>`);
    
            $('#hp-meter').val(`${fungusHP}`);
        }, 1000)

        interval = regenInterval;
}

function renderAll() {
    renderApText();
    renderFungusHP();
}