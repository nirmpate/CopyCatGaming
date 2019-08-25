class WeaponType < ApplicationRecord
  validates :damage_range, inclusion: { in: %w(low average high),
    message: "%{value} is not a valid size" }

  has_many :weapons
end
