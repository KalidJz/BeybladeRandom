function generardiscos() {
    let discos = [
        "Aero",
        "Armed",
        "Boost",
        "Bumper",
        "Central",
        "Down",
        "Force",
        "Gravity",
        "Heavy",
        "Infinity",
        "Jerk",
        "Knuckle",
        "Limited",
        "Magnum",
        "Nine",
        "Oval",
        "Polish",
        "Quarter",
        "Ring",
        "Spread",
        "Triple",
        "Upper",
        "Vertical",
        "Wing",
        "Yell"
    ];

    let randomIndex = Math.floor(Math.random() * discos.length);


    return discos[randomIndex];
}


function generarLayer() {
    let layers = [
        "Amaterios",
        "Chaos",
        "Deathscyther",
        "Evil-eye",
        "Horusood",
        "Kerbeus",
        "Minoboros",
        "Neptune",
        "Odin",
        "Ragnaruk",
        "Spriggan",
        "Trident",
        "Unicorn",
        "Valkyrie",
        "Wyvern",
        "Xcalibur",
        "Yggdrasil",
        "Acid Anubis",
        "Beast Behemoth	",
        "Dark Deathscyther",
        "Exceed Evil-eye",
        "Fang Fenrir",
        "Gigant Gaia",
        "Holy Horusood",
        "Inferno Ifrit",
        "Jail Jormungand",
        "Kaiser Kerbeus",
        "Lost Longinus",
        "Mad Minoboros",
        "Nova Neptune",
        "Obelisk Odin",
        "Psychic Phantom",
        "Quad Quetzalcoatl",
        "Rising Ragnaruk",
        "Storm Spriggan",
        "Unlock Unicorn",
        "Victory Valkyrie",
        "Wild Wyvern",
        "Xeno Xcalibur",
        "Yaeger Yggdrasil",
        "Zillion Zeus",
    ];

    let randomIndex = Math.floor(Math.random() * layers.length);


    return layers[randomIndex];
}


function generarDrivers() {
    let drivers = [
        "Accel",
        "Assault",
        "Bite",
        "Blow",
        "Claw",
        "Cycle",
        "Defense",
        "Edge",
        "Fusion",
        "Gyro",
        "Hold",
        "Impact",
        "Jaggy",
        "Liner",
        "Massive",
        "Needle",
        "Orbit",
        "Press",
        "Revolve",
        "Spiral",
        "Survive",
        "Trans",
        "Unite",
        "Variable",
        "Weight",
        "Xtreme",
        "Yielding",
        "Zephyr"
    ];

    let randomIndex = Math.floor(Math.random() * drivers.length);


    return drivers[randomIndex];
}
