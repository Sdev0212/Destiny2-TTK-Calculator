// weapon stats and data as an object

const autoRifleData = {
    'adaptive': {RPM: 600, bodyDMG: 14.3, critDMG: 22.8},
    'rapidfire': {RPM: 720, bodyDMG: 13.4, critDMG: 20.1}
}


// Create constants for elements
const supertypes = document.querySelectorAll(['.supertype']);
console.log(supertypes)



// create new divs for weapon archetypes when clicking a supertype
// also remove old divs if any existed

supertypes.forEach((button) => 
    button.addEventListener('click', () => createDivs(button.id))
)

console.log(Object.keys(autoRifleData).length)

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

// time to kill calculations

function calculateShotsToKill (bodyShotDamage, critDamage){
    for (let numberOfShots = 0;  remainingHealth >= 0; numberOfShots++){
        if(bodyShotDamage >= remainingHealth || (critDamage < remainingHealth && 2 * bodyShotDamage >= remainingHealth)){
            numBodyShots++
            remainingHealth -= bodyShotDamage
        } else {
            numCrits++
            remainingHealth -= critDamage
        }
    }
    return shots = [numberOfShots, numBodyShots, numCrits]
}

function calculateTimeToKill (shots, rpm){
    timeToKill = (shots[1] - 1) / (rmp/60)
    return timeToKill
}