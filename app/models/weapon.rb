class Weapon < ApplicationRecord
  validates :element, acceptance: { accept: ['fire', 'ice', 'physical'],
    message: "%{value} can only be 'fire', 'ice', 'physical'" }

  belongs_to :character

  has_one :weapon_type

  accepts_nested_attributes_for :weapon_type, allow_destroy: true

end
