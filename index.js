
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let input = require('readline-sync');
let astronautCount = Number(input.question("How many astronauts will there be participating in this mission?"));
console.clear();
let astronautstatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = '100%';
let weatherStatus = 'clear';
console.log(`-------------------------------------
> LC04 - LAUNCH CHECKLIST
-------------------------------------
Date: ${date}
Time: ${time}

-------------------------------------
> ASTRONAUT INFO
-------------------------------------
* count: ${astronautCount}
* status: ${astronautstatus}

-------------------------------------
>FUEL DATA
-------------------------------------
* Fuel temp celsius: ${fuelTempCelsius} C
* Fuel level: ${fuelLevel}

-------------------------------------
> MASS DATA
-------------------------------------
* Crew mass: ${crewMassKg} kg
* Fuel mass: ${fuelMassKg} kg
* Shuttle mass: ${shuttleMassKg} kg
* Total mass: ${totalMassKg} kg

-------------------------------------
> FLIGHT PLAN
-------------------------------------
*weather: ${weatherStatus}

-------------------------------------
> OVERALL STATUS
-------------------------------------
* Clear for takeoff: YES
`);
