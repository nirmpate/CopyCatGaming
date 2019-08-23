class Weapon < ApplicationRecord
  belongs_to :character
  has_one :weapon_type
end
