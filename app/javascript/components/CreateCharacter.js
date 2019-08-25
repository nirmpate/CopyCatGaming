import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
const CREATE_CHARACTER = gql`
    mutation CreateCharacter(
        $name: String!,
        $level: Int!,
        $damageMin: Int!,
        $damageMax: Int!,
        $strength: Int!,
        $element: String!,
        $elementDamage: Float!,
        $weaponName: String!,
        $aps: Float!,
        $damageRange: String!
    ) { createCharacter(
        name: $name,
        level: $level,
        damageMin: $damageMin,
        damageMax: $damageMax,
        strength: $strength,
        element: $element,
        elementDamage: $elementDamage,
        weaponName: $weaponName,
        aps: $aps,
        damageRange: $damageRange
    )
    {
        character {
        id
        name
        level
        weapon{
            id
            damageMin
            damageMax
            strength
            element
            elementDamage
            weaponType {
                id
                name
                aps
                damageRange
            }
        }
        }
        errors
    }
}
    `;

class CreateCharacter extends Component {

    state = {
        name: '', 
        level: 0, 
        damageMin: 0, 
        damageMax: 0, 
        strength: 0, 
        element: 'physical',
        weaponName: 'mace',
        aps: 1,
        damageRange: 'low',
        elementDamage: 0,
        showWeaponDamage: false
      }
      
      setWeapon(e) {
        
        switch (e.target.value.toLowerCase()) {
            case 'mace':
                this.setState({ weaponName: e.target.value, aps: 1, damageRange: 'low'})
                break;
            case 'axe':
                this.setState({ weaponName: e.target.value, aps: 1.2, damageRange: 'average'})
                break;
            case 'sword':
                this.setState({ weaponName: e.target.value, aps: 1.4, damageRange: 'high'})
                break;
            default:
                this.setState({ weaponName: e.target.value, aps: 1, damageRange: 'low'})
                return;
        }
      }

      validateWeaponDamage(e) {
        let num = parseInt(e.target.value, 10);
        if (num >= 5 && num <= 15 || num === 0) {
            this.setState({ weaponDamage: num/100 })
            this.setState({})
        }
      }

      onSubmit = (e, createCharacter) => {
          e.preventDefault();
          const {showWeaponDamage, ...formData } = this.state;
          console.log(formData)
          createCharacter({ variables: formData });
          this.setState({
            name: '', 
            level: 0, 
            damageMin: 0, 
            damageMax: 0, 
            strength: 0, 
            element: 'physical',
            weaponName: 'mace',
            aps: 1,
            damageRange: 'low',
            elementDamage: 0,
            showWeaponDamage: false
        });
      }

    render() {
        return (
            <Mutation
                mutation={CREATE_CHARACTER}
                update={this.props.onCreateCharacter}>
                { createCharacterMutation => (
                    <form className="px-8 pt-6 pb-8 mb-4 w-auto" onSubmit={e => this.onSubmit(e, createCharacterMutation)}>
                    <h1 className="mb-3 text-xl">Create new user</h1>
                    <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="mb-4 w-full md:w-1/2 px-3 mb-6">
                        <label>Name</label>
                        <input
                        className="border rounded w-full py-2 px-3"
                        type="text"
                        value={ this.state.name }
                        placeholder="Name"
                        required={true}
                        onChange={e => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="mb-4 w-full md:w-1/2 px-3 mb-6">
                        <label>Character Level</label>
                        <input
                        className="border rounded w-full py-2 px-3"
                        type="number"
                        value={this.state.level}
                        placeholder="0"
                        required={true}
                        onChange={e => this.setState({ level: parseInt(e.target.value, 10) })} />
                    </div>
                    <div className="mb-6 w-full md:w-1/2 px-3 mb-6">
                        <label>Max Character Damage</label>
                        <input
                        className="border rounded w-full py-2 px-3"
                        type="number"
                        value={this.state.damageMax}
                        placeholder="0"
                        required={true}
                        onChange={e => this.setState({ damageMax: parseInt(e.target.value, 10) })} />
                    </div>

                    <div className="mb-4 w-full md:w-1/2 px-3 mb-6">
                        <label>Minimum Character Damage</label>
                        <input
                        className="border rounded w-full py-2 px-3"
                        type="number"
                        placeholder="0"
                        value={this.state.damageMin}
                        required={true}
                        onChange={e => this.setState({ damageMin: parseInt(e.target.value, 10) })} />
                    </div>

                    <div className="mb-6 md:w-1/2 px-3 mb-6">
                        <label>Character Strength</label>

                        <input
                        className="border rounded w-full py-2 px-3"
                        type="number"
                        value={this.state.strength}
                        required={true}
                        placeholder="0"
                        onChange={e => this.setState({ strength: parseInt(e.target.value, 10) })} />
                    </div>

                    <div className="mb-4 w-full md:w-1/2 px-3 mb-6">
                    <label>Weapon Type</label>
                    <select
                        className="border rounded w-full py-2 px-3"
                        required={true}
                        value={this.state.weaponName}
                        placeholder="mace"
                        onChange={e => this.setWeapon(e)} >
                            <option value="mace">Mace</option>
                            <option value="axe">Axe</option>
                            <option value="sword">Sword</option>
                        </select>
                    </div>

                    <div className="mb-4 w-full md:w-1/2 px-3 mb-6">
                        <label>Does Weapon have element damage?</label>
                        <input
                            type="radio"
                            className="border rounded py-2 px-3 ml-3 mr-1"
                            name="weaponDamage"
                            id="no"
                            value="no"
                            onChange={() => this.setState({ elementDamage: 0, showWeaponDamage: false })} />
                            <label htmlFor="no">No</label>
                        <input
                            type="radio"
                            className="border rounded py-2 px-3 ml-3 mr-1"
                            name="weaponDamage"
                            id="yes"
                            value="yes"
                            onChange={() => this.setState({showWeaponDamage: true})} />
                            <label htmlFor="yes">Yes</label>
                                             {this.state.showWeaponDamage ? (
                            <div className="mt-6">
                                <label>Weapon Element Damage</label>
        
                                <input
                                className="border rounded w-full py-2 px-3"
                                type="number"
                                required={true}
                                min="5"
                                max="15"
                                placeholder="5-15"
                                onChange={e => this.setState({elementDamage: e.target.value/100})} />
                                </div>
                            ) : null}
                    </div>

   


                    <div className="mb-4 w-full md:w-1/2 px-3 mb-6">
                        <label>Weapon Element</label>
                        <select
                            className="border rounded w-full py-2 px-3"
                            required={true}
                            value={this.state.element}
                            placeholder="physical"
                            onChange={e => this.setState({ element: e.target.value })} >
                            <option value="physical">Physical</option>
                            <option value="fire">Fire</option>
                            <option value="ice">Ice</option>
                        </select>
                    </div>
                    </div>
 
                    <button
                        className="bg-green-500 text-white py-2 px-4 rounded"
                        type="submit">
                        Create
                    </button>
                    </form>
                )}
            </Mutation>
        );
    }
}

export default CreateCharacter