class Attack < ApplicationRecord
    validates :element, acceptance: { accept: ['fire', 'ice', 'physical'] }
end
