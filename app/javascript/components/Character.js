import React from 'react'

const character = (props) => {

    // calculate strength of character based on level and strength
    const strengthAggregation = ((props.character.level * 10) + props.character.weapon.strength) / 100;

    const setDamage = (val, type) => {
        // Set weaponDamage based on attack's damage multiplier
        const weaponDamage = val * type.dmgMultiplier;

        // Aggregate damage with characters Strength and level stats
        const damageAggregator = strengthAggregation * weaponDamage;

        //add Element damage if attack and weapon elements match
        if (type.element === props.character.weapon.element) {
            const elementMultiplier = props.character.weapon.elementDamage * damageAggregator
            return damageAggregator + elementMultiplier
        }
        return damageAggregator
    }

    const setAps = (data, attack) => {
        const weaponDamageRange = props.character.weapon.weaponType.damageRange;
        let aps;
        // set aps to damage based on weapons damage range
        switch (weaponDamageRange) {
            case 'low':
                aps = data.minDamage
                break;
            case 'average':
                aps = (data.minDamage + data.maxDamage) / 2
                break;
            case 'high':
                aps = data.maxDamage
                break;
        }
        // add on weapons specfic attack speed percentage
        aps = aps * props.character.weapon.weaponType.aps
        // add on attacks specific attack speed percentage
        aps = aps * attack.apsMultiplier;

        return parseFloat(aps.toFixed(3))
    }

    // Create table for each attack object
    const table = props.attacks.map((attack)=> {
        return {
            type: attack.name,
            get minDamage() {
                return setDamage(props.character.weapon.damageMin, attack)
            },
            get maxDamage() {
                return setDamage(props.character.weapon.damageMax, attack)
            },
            get aps() {
                return setAps(this, attack)
            }
        }
    })
    return (
        <div>
        <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded m-4" onClick={props.selectCharacter.bind(this, null)}>
            Back
        </button>

        <div className="rounded overflow-hidden shadow-lg px-2 mt-4 md:mt-8 md:px-6 py-4 flex mb-4 flex-wrap">
            <div className="w-full md:w-1/4">
                <h1 className="font-bold text-xl mb-2 capitalize">{props.character.name}</h1>
                <p> Level: { props.character.level }</p>
                <p className="capitalize"> Weapon: { props.character.weapon.weaponType.name } </p>
                <p>Element: {props.character.weapon.element}</p>
                <p>Element Damage: {props.character.weapon.elementDamage}</p>

            </div>
            
            <table className="w-full md:w-1/2">
                <thead>
                    <tr>
                        <th className="px-4 pb-4 border border-solid border-transparent"></th>
                        <th className="px-4 py-4 bg-green-400 border-green-400 border border-solid">Minimum Damage</th>
                        <th className="px-4 py-4 bg-green-400 border-green-400 border border-solid">Maximum Damage</th>
                        <th className="px-4 py-4 bg-green-400 border-green-400 border border-solid">DPS</th>
                    </tr>
                </thead>
                <tbody>

                    {table.map((attack,i) => {
                        return (
                        <tr key={i}>
                            <th className="px-4 py-4 bg-green-200">{attack.type}</th>
                            <th className="px-4 py-4 border-solid border border-black"> {parseFloat(attack.minDamage.toFixed(3))}</th>
                            <th className="px-4 py-4 border-solid border border-black"> {parseFloat(attack.maxDamage.toFixed(3))}</th>
                            <th className="px-4 py-4 border-solid border border-black"> {attack.aps}</th>
                        </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
        </div>
    )
}

export default character