module Types
    class WeaponType < BaseObject
      field :id, ID, null: false
      field :damage_min, Integer, null: false
      field :damage_max, Integer, null: false
      field :strength, Integer, null:false
      field :element, String, null:true
      field :element_damage, Float, null:true
      field :weapon_type, WeaponCastType, null: false
    end
  end