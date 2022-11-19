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
