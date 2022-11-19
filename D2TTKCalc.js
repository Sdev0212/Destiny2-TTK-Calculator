// weapon stats and data as objects

const autoRifleData = {
    adaptive: {RPM: 600, bodyDMG: 14.3, critDMG: 22.8},
    rapidfire: {RPM: 720, bodyDMG: 13.4, critDMG: 20.1},
    highimpact: {RPM: 360, bodyDMG: 22.0, critDMG: 35.2},
    precision: {RPM: 450, bodyDMG: 20, critDMG: 31}
}

const sidearmData = {
    adaptive: {RPM: 300, bodyDMG: 36, critDMG: 50.5},
    surosRapidfire: {RPM: 450, bodyDMG: 25, critDMG: 35.1},
    lightweight: {RPM: 360, bodyDMG: 31, critDMG: 43.5},
    precision: {RPM: 257, bodyDMG: 40, critDMG: 56.1},
    adaptiveBurst: {RPM: 491, bodyDMG: 20, critDMG: 32},
    aggressiveBurst: {RPM: 325, bodyDMG: 32, critDMG: 44.9},
}

const smgData = {
    lightweight: {RPM: 900, bodyDMG: 10.9, critDMG: 17.9},
    adaptive: {RPM: 900, bodyDMG: 11.3, critDMG: 16.2},
    aggressive: {RPM: 720, bodyDMG: 15, critDMG: 21.6},
    precision: {RPM: 600, bodyDMG: 17, critDMG: 23.8},
}

const hcData = {
    adaptive: {RPM: 140, bodyDMG: 46.5, critDMG: 69.8},
    aggressive: {RPM: 120, bodyDMG: 50, critDMG: 79.9},
    precision: {RPM: 180, bodyDMG: 40, critDMG: 60},
}

const pulserifleData = {
    rapidfire: {RPM: 540, bodyDMG: 14, critDMG: 23.7},
    lightweight: {RPM: 450, bodyDMG: 16, critDMG: 26.4},
    adaptive: {RPM: 390, bodyDMG: 19, critDMG: 31.4},
    highimpact: {RPM: 340, bodyDMG: 22, critDMG: 35.2},
    aggressive: {RPM: 450, bodyDMG: 15.5, critDMG: 26.3},
}

const scoutData = {
    rapidfire: {RPM: 257, bodyDMG: 28, critDMG: 46.9},
    lightweight: {RPM: 200, bodyDMG: 31, critDMG: 54.1},
    precision: {RPM: 180, bodyDMG: 38, critDMG: 60.7},
    highimpact: {RPM: 150, bodyDMG: 40, critDMG: 70},
}


// Create constants for elements
const supertypes = document.querySelectorAll(['.supertype']);

const archetypeContainer = document.getElementById('archetypeContainer')

// create new divs for weapon archetypes when clicking a supertype
// also remove old divs if any existed

supertypes.forEach((button) => 
    button.addEventListener('click', () => createDivs(button.id))
)


function createDivs(archetype) {
    const archetypeContainer = document.getElementById('archetypeContainer')
    document.querySelectorAll('.archetypeButton').forEach(e => e.remove())
    if(archetype == 'autorifle'){
        for(let i = 0; i < Object.keys(autoRifleData).length; i++) {
            const button = document.createElement('button');
            button.classList.add('archetypeButton', 'autorifle', `${i}`)
            button.textContent= Object.keys(autoRifleData)[i]
            archetypeContainer.appendChild(button)
        }
    } 
    else if(archetype == 'sidearm'){
        for(let i = 0; i < Object.keys(sidearmData).length; i++) {
            const button = document.createElement('button');
            button.classList.add('archetypeButton', 'sidearm', `${i}`)
            button.textContent= Object.keys(sidearmData)[i]
            archetypeContainer.appendChild(button)
        }
    }
    else if(archetype == 'smg'){
        for(let i = 0; i < Object.keys(smgData).length; i++) {
            const button = document.createElement('button');
            button.classList.add('archetypeButton', 'smg', `${i}`)
            button.textContent= Object.keys(smgData)[i]
            archetypeContainer.appendChild(button)
        }
    }
    else if(archetype == 'handcannon'){
        for(let i = 0; i < Object.keys(hcData).length; i++) {
            const button = document.createElement('button');
            button.classList.add('archetypeButton', 'handcannon', `${i}`)
            button.textContent= Object.keys(hcData)[i]
            archetypeContainer.appendChild(button)
        }
    }
    else if(archetype == 'pulseRifle'){
        for(let i = 0; i < Object.keys(pulserifleData).length; i++) {
            const button = document.createElement('button');
            button.classList.add('archetypeButton', 'pulseRifle', `${i}`)
            button.textContent= Object.keys(pulserifleData)[i]
            archetypeContainer.appendChild(button)
        }
    }
    else if(archetype == 'scoutRifle'){
        for(let i = 0; i < Object.keys(scoutData).length; i++) {
            const button = document.createElement('button');
            button.classList.add('archetypeButton', 'scoutRifle', `${i}`)
            button.textContent= Object.keys(scoutData)[i]
            archetypeContainer.appendChild(button)
        }
    }

}



// event listener for archetype selection, finds data required for calcs

archetypeContainer.addEventListener('click', function(e){
    if(e.target && e.target.matches('button.archetypeButton')){
        weapon = [e.target.classList[1], + e.target.classList[2]]
        findWeaponData(weapon)
    } 
})





// find weapon data

function findWeaponData (array) {
    let critDamage;
    let bodyShotDamage;
    let rpm;
    let a = array[1]
    if (array[0] == 'autorifle'){
        critDamage = Object.values(autoRifleData)[a].critDMG
        bodyShotDamage = Object.values(autoRifleData)[a].bodyDMG
        rpm = Object.values(autoRifleData)[a].RPM
    }
    else if (array[0] == 'sidearm'){
        critDamage = Object.values(sidearmData)[a].critDMG
        bodyShotDamage = Object.values(sidearmData)[a].bodyDMG
        rpm = Object.values(sidearmData)[a].RPM
    }
    else if (array[0] == 'smg'){
        critDamage = Object.values(smgData)[a].critDMG
        bodyShotDamage = Object.values(smgData)[a].bodyDMG
        rpm = Object.values(smgData)[a].RPM
    }
    else if (array[0] == 'handcannon'){
        critDamage = Object.values(hcData)[a].critDMG
        bodyShotDamage = Object.values(hcData)[a].bodyDMG
        rpm = Object.values(hcData)[a].RPM
    }
    else if (array[0] == 'pulseRifle'){
        critDamage = Object.values(pulserifleData)[a].critDMG
        bodyShotDamage = Object.values(pulserifleData)[a].bodyDMG
        rpm = Object.values(pulserifleData)[a].RPM
    }
    else if (array[0] == 'scoutRifle'){
        critDamage = Object.values(scoutData)[a].critDMG
        bodyShotDamage = Object.values(scoutData)[a].bodyDMG
        rpm = Object.values(scoutData)[a].RPM
    }

    calculateTimeToKill(critDamage, bodyShotDamage, rpm);
}




// time to kill calculation

function calculateTimeToKill (critDamage, bodyShotDamage, rpm){
let remainingHealth = 194;
let startingHealth = 194;
let numCrits = 0;
let numBodyShots = 0;
let numberOfShots = 0;
    for (let numberOfShots = 0;  remainingHealth >= 0; numberOfShots++){
        if(bodyShotDamage >= remainingHealth || (critDamage < remainingHealth && 2 * bodyShotDamage >= remainingHealth)){
            numBodyShots++
            remainingHealth -= bodyShotDamage
        } else {
            numCrits++
            remainingHealth -= critDamage
        }
    }
    numberOfShots = numBodyShots + numCrits
    let shots = [numberOfShots, numBodyShots, numCrits]
    let timeToKill = Math.round((shots[0] - 1)/(rpm/60) * 100) / 100
    let bodyshotsToKill = Math.ceil(startingHealth/bodyShotDamage)
    let bodyshotTTK = Math.round((bodyshotsToKill - 1) / (rpm / 60)*100)/100

    postResult(timeToKill, shots, bodyshotTTK)
}


function postResult(timeToKill, shots, bodyshotTTK) {
    const TTK = document.getElementById('optimalTTK')
    const STK = document.getElementById('shotsToKill')
    const bodyTTK = document.getElementById('bodyshotTTK')
    TTK.textContent = `${timeToKill} seconds`
    STK.textContent = `${shots[0]} shots, ${shots[2]} Crits, ${shots[1]} Body`
    bodyTTK.textContent = `${bodyshotTTK} seconds`
}
