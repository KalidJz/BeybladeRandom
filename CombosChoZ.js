function discoGenerado() {
    let disco = [
        "00",
        "1'",
        "8'",
        "10",
        "11",
        "12",
        "13",
        "Aero'",
        "Zenith"
    ];

    let randomIndex = Math.floor(Math.random() * disco.length);


    return disco[randomIndex];
}


function generarLayer() {
    let layers = [
        "Archer Hercules",
        "Air Knight",
        "Bloody Longinus",
        "Buster Xcalibur",
        "Cho-Z Achilles",
        "Cho-Z Spriggan",
        "Cho-Z Valkyrie",
        "Crash Ragnaruk",
        "Dead Hades",
        "Dead Phoenix",
        "Emperor Forneus",
        "Geist Fafnir",
        "Hazard Kerbeus",
        "Hell Salamander",
        "Left Apollos",
        "Orb Egis",
        "Revive Phoenix",
        "Right Artemis",
        "Amaterios",
        "Vise Leopard",
        "Winning Valkyrie",
        "Z Achilles"
    ];

    let randomIndex = Math.floor(Math.random() * layers.length);


    return layers[randomIndex];
}


function generarFrames(discoGenerado) {

    if (discoGenerado === "Zenith" || discoGenerado === "Aero'") {
        return " ";
    }

    let frames = [
        "Angle",
        "Dagger",
        "Expand",
        "Lift",
        "Proof",
        "Reach",
        "Turn",
        "Wall"
    ];

    let randomIndex = Math.floor(Math.random() * frames.length);


    return frames[randomIndex];
}

function generarDrivers() {
    let drivers = [
        "Absorb",
        "Accel'",
        "Anchor",
        "Blow'",
        "Destroy'",
        "Dimension",
        "Eternal",
        "Evolution",
        "Friction",
        "Fusion'",
        "Hunter'",
        "Jolt",
        "Jolt'",
        "Merge'",
        "Operate",
        "Quest",
        "Sword",
        "Volcanic",
        "Volcanic'",
        "Xtend",
        "Xtend+",
        "Xtreme'",
        "Yard",
        "Zephyr'",
        "Zeta'"
    ];

    let randomIndex = Math.floor(Math.random() * drivers.length);


    return drivers[randomIndex];
}
