class Character < ApplicationRecord
    validates :name, presence: true
    validates :level, length: { in: 1..90 }
    has_one :weapon
end
