class Weapon < ApplicationRecord
  validates :element, acceptance: { accept: ['fire', 'ice', 'physical'],
    message: "%{value} can only be 'fire', 'ice', 'physical'" }

  belongs_to :character
  belongs_to :weapon_type
end
