function discoGenerado(nombreLayer) {
    let disco;

    if (nombreLayer === "Nightmare Longinus") {
        return " ";
    }

    disco = Math.floor(Math.random() * 10);

    if(disco < 9)
    {
        return disco;
    }
    else
    {
        return "Outer";
    }
}


function generarLayer() {
    let layers = [
        "Alter Chronos",
        "Arc Bahamut",
        "Beat Kukulcan",
        "Blast Jinnius",
        "Blaze Ragnaruk",
        "Deep Chaos",
        "Drain Fafnir",
        "Duo Apollos",
        "Duo Artemis",
        "Duo Aeclipse",
        "Galaxy Zeus",
        "God Valkyrie",
        "Guardian Kerbeus",
        "Killer Deathscyther",
        "Kreis Satan",
        "Legend Spriggan",
        "Maximun Garuda",
        "Nightmare Longinus",
        "Orichalcum",
        "Screw Trident",
        "Shelter Regulus",
        "Sieg Xcalibur",
        "Spriggan Requiem",
        "Strike God Valkyrie",
        "Twin Nemesis"
    ];

    let randomIndex = Math.floor(Math.random() * layers.length);


    return layers[randomIndex];
}


function generarFrames(discoGenerado) {

    if (discoGenerado === "Outer") {
        return " ";
    }

    let frames = [
        "Bump",
        "Cross",
        "Flow",
        "Glaive",
        "Hit",
        "Meteor",
        "Star",
        "Under",
        "Vortex"
    ];

    let randomIndex = Math.floor(Math.random() * frames.length);


    return frames[randomIndex];
}

function generarDrivers() {
    let drivers = [
        "Atomic",
        "Bearing",
        "Destroy",
        "Flugel",
        "Guard",
        "Hunter",
        "Iron",
        "Loop",
        "Merge",
        "Nothing",
        "Octa",
        "Planet",
        "Reboot",
        "Tower",
        "Ultimate Reboot",
        "Wedge",
        "Zeta",
        "Unite"
    ];

    let randomIndex = Math.floor(Math.random() * drivers.length);


    return drivers[randomIndex];
}
