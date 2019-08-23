module Types
    class CharacterType < BaseObject
      field :id, ID, null: false
      field :name, String, null: false
      field :level, Integer, null: false
      field :weapon, WeaponType, null: false
    end
  end