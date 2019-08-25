# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
WeaponType.create!(name: 'mace', aps: 1, damage_range: 'high')
WeaponType.create!(name: 'axe', aps: 1.2, damage_range: 'average')
WeaponType.create!(name: 'sword', aps: 1.4, damage_range: 'low')

Character.create!(name: 'Lena the Warrior', 
    level: 10, 
    weapon_attributes: {
        damage_min:50, 
        damage_max: 65, 
        strength: 20, 
        element: 'fire', 
        element_damage: 0.1, 
        weapon_type: WeaponType.find_by(name: 'axe')
    },

)

attacks = Attack.create([
    {name: 'Plain-Old Punch', aps_multiplier: 1, dmg_multiplier: 1, element: 'physical'},
    {name: 'Firemost Smite', aps_multiplier: 1.2, dmg_multiplier: 0.9, element: 'fire'},
    {name: 'Frosty Cleave', aps_multiplier: 0.9, dmg_multiplier: 1.2, element: 'ice'}
    ])

