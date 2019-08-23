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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.selectCharacter.bind(this, null)}>
            Back
        </button>

        <div className="rounded overflow-hidden shadow-lg mt-8 px-6 py-4 flex mb-4">
            <div className="w-1/4">
                <h1 className="font-bold text-xl mb-2 capitalize">{props.character.name}</h1>
                <p> Level: { props.character.level }</p>
                <p className="capitalize"> Weapon: { props.character.weapon.weaponType.name } </p>
            </div>
            
            <table className="w-1/2">
                <thead>
                    <tr>
                        <th className="px-4 py-4"></th>
                        <th className="px-4 py-4">Minimum Damage</th>
                        <th className="px-4 py-4">Maximum Damage</th>
                        <th className="px-4 py-4">DPS</th>
                    </tr>
                </thead>
                <tbody>

                    {table.map(attack => {
                        return (
                        <tr>
                            <th className="px-4 py-4">{attack.name}</th>
                            <th className="px-4 py-4"> {parseFloat(attack.minDamage.toFixed(3))}</th>
                            <th className="px-4 py-4"> {parseFloat(attack.maxDamage.toFixed(3))}</th>
                            <th className="px-4 py-4"> {attack.aps}</th>
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