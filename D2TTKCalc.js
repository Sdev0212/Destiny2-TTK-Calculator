// weapon stats and data as objects

const autoRifleData = {
    adaptive: {RPM: 600, bodyDMG: 14.3, critDMG: 22.8},
    rapidfire: {RPM: 720, bodyDMG: 13.4, critDMG: 20.1},
    highimpact: {RPM: 360, bodyDMG: 22.0, critDMG: 35.2},
    precision: {RPM: 450, bodyDMG: 20, critDMG: 31}
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
            button.classList.add('archetypeButton')
            button.textContent= Object.keys(autoRifleData)[i]
            archetypeContainer.appendChild(button)
        }
    }
}

// event listener for archetype selection

archetypeContainer.addEventListener('click', function(e){
    if(e.target && e.target.matches('button.archetypeButton')){
        console.log('hit')
    } else console.log('miss')
})


// time to kill calculation

function calculateTimeToKill (critDamage, bodyShotDamage, rpm){
let remainingHealth = 200;
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
    let timeToKill = (shots[0] - 1)/(rpm/60)
    console.log(shots)
    console.log(timeToKill)
}

