// weapon stats and data as objects

const autoRifleData = {
    adaptive: {RPM: 600, bodyDMG: 14.3, critDMG: 22.8, isBurst: false},
    rapidfire: {RPM: 720, bodyDMG: 13.4, critDMG: 20.1, isBurst: false},
    highimpact: {RPM: 360, bodyDMG: 22.0, critDMG: 35.2, isBurst: false},
    precision: {RPM: 450, bodyDMG: 20, critDMG: 31, isBurst: false}
}

const sidearmData = {
    adaptive: {RPM: 300, bodyDMG: 36, critDMG: 50.5, isBurst: false},
    surosRapidfire: {RPM: 450, bodyDMG: 25, critDMG: 35.1, isBurst: false},
    lightweight: {RPM: 360, bodyDMG: 31, critDMG: 43., isBurst: false},
    precision: {RPM: 257, bodyDMG: 40, critDMG: 56.1, isBurst: false},
    adaptiveBurst: {RPM: 491, bodyDMG: 20, critDMG: 32, isBurst: true, burstCount: 3, burstDelay: 0.233, rpmInBurst: 900},
    aggressiveBurst: {RPM: 325, bodyDMG: 32, critDMG: 44.9, isBurst: true, burstCount: 2, burstDelay: 0.267, rpmInBurst: 600},
}

const smgData = {
    lightweight: {RPM: 900, bodyDMG: 10.9, critDMG: 17.9, isBurst: false},
    adaptive: {RPM: 900, bodyDMG: 11.3, critDMG: 16.2, isBurst: false},
    aggressive: {RPM: 720, bodyDMG: 15, critDMG: 21.6, isBurst: false},
    precision: {RPM: 600, bodyDMG: 17, critDMG: 23.8, isBurst: false},
}

const hcData = {
    adaptive: {RPM: 140, bodyDMG: 46.5, critDMG: 69.8, isBurst: false},
    aggressive: {RPM: 120, bodyDMG: 50, critDMG: 79.9, isBurst: false},
    precision: {RPM: 180, bodyDMG: 40, critDMG: 60, isBurst: false},
}

const pulserifleData = {
    rapidfire: {RPM: 540, bodyDMG: 14, critDMG: 23.7, isBurst: true, burstCount: 3, burstDelay: 0.2, rpmInBurst: 900},
    lightweight: {RPM: 450, bodyDMG: 16, critDMG: 26.4, isBurst: true, burstCount: 3, burstDelay: 0.267, rpmInBurst: 900},
    adaptive: {RPM: 390, bodyDMG: 19, critDMG: 31.4, isBurst: true, burstCount: 3, burstDelay: 0.33, rpmInBurst: 900},
    highimpact: {RPM: 340, bodyDMG: 22, critDMG: 35.2, isBurst: true, burstCount: 3, burstDelay: 0.4, rpmInBurst: 900},
    aggressive: {RPM: 450, bodyDMG: 15.5, critDMG: 26.3, isBurst: true, burstCount: 4, burstDelay: 0.33, rpmInBurst: 900},
}

const scoutData = {
    rapidfire: {RPM: 257, bodyDMG: 28, critDMG: 46.9, isBurst: false},
    lightweight: {RPM: 200, bodyDMG: 31, critDMG: 54.1, isBurst: false},
    precision: {RPM: 180, bodyDMG: 38, critDMG: 60.7, isBurst: false},
    highimpact: {RPM: 150, bodyDMG: 40, critDMG: 70, isBurst: false},
}

// declare variables

let critDamage;
let bodyShotDamage;
let rpm;
let burstCount;
let burstDelay;
let resilienceValue = 0;
let health = 194;

// Create constants for elements
const supertypes = document.querySelectorAll(['.supertype']);

const archetypeContainer = document.getElementById('archetypeContainer')

const calcButton = document.getElementById('calculateTTK')

const resilience = document.getElementById('resilienceValue')

const supertypeContainer = document.getElementById('supertypeContainer')

console.log(resilience)

// create new divs for weapon archetypes when clicking a supertype
// also remove old divs if any existed


    
supertypes.forEach((button) => 
button.addEventListener('click', () => {
    createDivs(button.id)
}))




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
    const archetypeButtons = document.querySelectorAll('button.archetypeButton')
    archetypeButtons.forEach((btn) => {
        btn.classList.remove("selected")
    })

    if(e.target && e.target.matches('button.archetypeButton')){
        weapon = [e.target.classList[1], + e.target.classList[2]]
        e.target.classList.add("selected")
        findWeaponData(weapon)
    } 
})

// Event listeners 

calcButton.addEventListener('click', () => {
    calculateTimeToKill()
})

resilience.addEventListener('input', () => {
    resilienceValue = parseFloat(resilience.value)
    calculateHealth(resilienceValue)
})  

// find weapon data

function findWeaponData (array) {
    isBurst = false;
    let a = array[1]
    if (array[0] == 'autorifle'){
        critDamage = Object.values(autoRifleData)[a].critDMG
        bodyShotDamage = Object.values(autoRifleData)[a].bodyDMG
        rpm = Object.values(autoRifleData)[a].RPM
    }
    else if (array[0] == 'sidearm'){
        isBurst = Object.values(sidearmData)[a].isBurst
        critDamage = Object.values(sidearmData)[a].critDMG
        bodyShotDamage = Object.values(sidearmData)[a].bodyDMG
        if(isBurst){
            rpm = Object.values(sidearmData)[a].rpmInBurst
            burstDelay = Object.values(sidearmData)[a].burstDelay
            burstCount = Object.values(sidearmData)[a].burstCount
        } else {
            rpm = Object.values(sidearmData)[a].RPM
        }
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
        isBurst = Object.values(pulserifleData)[a].isBurst
        critDamage = Object.values(pulserifleData)[a].critDMG
        bodyShotDamage = Object.values(pulserifleData)[a].bodyDMG
        if(isBurst){
            rpm = Object.values(pulserifleData)[a].rpmInBurst
            burstDelay = Object.values(pulserifleData)[a].burstDelay
            burstCount = Object.values(pulserifleData)[a].burstCount
        } else {
            rpm = Object.values(pulserifleData)[a].RPM
        }    }
    else if (array[0] == 'scoutRifle'){
        critDamage = Object.values(scoutData)[a].critDMG
        bodyShotDamage = Object.values(scoutData)[a].bodyDMG
        rpm = Object.values(scoutData)[a].RPM
    }
}

// health calculation

function calculateHealth (resilienceValue) {
    switch (resilienceValue) {
        case 0:
            health = 185;
            break;                                  
        case 1:
            health = 186;
            break;                                  
        case 2:
            health = 187;
            break;                                  
        case 3:
            health = 188;
            break;                                  
        case 4:
            health = 189;
            break;                                  
        case 5:
            health = 190;
            break;                                  
        case 6:
            health = 192;
            break;                                  
        case 7:
            health = 194;
            break;                                  
        case 8:
            health = 196;
            break;                                  
        case 9:
            health = 198;
            break;                                  
        case 10:
            health = 200;
            break;                                                
    }
    return health;
}


// time to kill calculation

function calculateTimeToKill (){
    console.log(health)
let remainingHealth = health;
let startingHealth = health;
let numCrits = 0;
let numBodyShots = 0;
let numberOfShots = 0;
let timeToKill;
let bodyshotTTK;
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

    if(isBurst) {
        let burstsToKill = Math.ceil(shots[0] / burstCount)
        timeToKill = Math.round(((((burstsToKill - 1) * burstDelay) + ((shots[0]-burstsToKill))/(rpm/60)))*100)/100
        let bodyshotsToKill = Math.ceil(startingHealth/bodyShotDamage)
        let bodyBurstsToKill = Math.ceil(bodyshotsToKill / burstCount)
        bodyshotTTK = Math.round(((((bodyBurstsToKill - 1) * burstDelay) + ((bodyshotsToKill-bodyBurstsToKill))/(rpm/60)))*100)/100

    } else {
        timeToKill = Math.round((shots[0] - 1)/(rpm/60) * 100) / 100
        let bodyshotsToKill = Math.ceil(startingHealth/bodyShotDamage)
        bodyshotTTK = Math.round((bodyshotsToKill - 1) / (rpm / 60)*100)/100
    }


    postResult(timeToKill, shots, bodyshotTTK)
}


function postResult(timeToKill, shots, bodyshotTTK) {
    const TTK = document.getElementById('optimalTTK')
    const STK = document.getElementById('shotsToKill')
    const bodyTTK = document.getElementById('bodyshotTTK')
    TTK.textContent = `Optimal TTK: ${timeToKill} seconds`
    STK.textContent = `Shots needed: ${shots[0]} total, ${shots[2]} Crits, ${shots[1]} Body`
    bodyTTK.textContent = `Bodyshot TTK: ${bodyshotTTK} seconds`
}
