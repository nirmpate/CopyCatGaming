module Types
    class AttackType < BaseObject
      field :id, ID, null: false
      field :name, String, null:false
      field :aps_multiplier, Float, null:false
      field :dmg_multiplier, Float, null:false
      field :element, String, null:false
    end
  end