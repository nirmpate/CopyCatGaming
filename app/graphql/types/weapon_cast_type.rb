module Types
    class WeaponCastType < BaseObject
      field :id, ID, null: false
      field :name, String, null: false
      field :aps, Float, null: false
      field :damage_range, String, null: false
    end
  end