class WeaponType < ApplicationRecord
  validate :name
  belongs_to :weapon
end
