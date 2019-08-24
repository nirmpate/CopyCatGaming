module Mutations
    class CreateCharacter < BaseMutation
      # arguments passed to the `resolved` method
      argument :name, String, required: true
      argument :level, Integer, required: true
      argument :damage_min, Integer, required: true
      argument :damage_max, Integer, required: true
      argument :strength, Integer, required: true
      argument :element, String, required: true
      argument :element_damage, Float, required: true
      argument :weapon_name, String, required: true
      argument :aps, Float, required: true
      argument :damage_range, String, required: true

      field :character, Types::CharacterType, null: false
      field :errors, [String], null: false
      # return type from the mutation
  
      def resolve(
        name:, 
        level:, 
        damage_min:, 
        damage_max:, 
        strength:, 
        element:,
        weapon_name:,
        element_damage:,
        aps:,
        damage_range:
      )
      character = Character.create!(
        name: name,
        level: level,
        weapon_attributes: {
          damage_min:damage_min, 
          damage_max: damage_max, 
          strength: strength, 
          element: element, 
          element_damage: element_damage, 
          weapon_type_attributes: {
              name: weapon_name, 
              aps: aps, 
              damage_range: damage_range
          }
        } 
      )
        if character.save
            {
                character: character,
                errors: []
            }
        else 
            {
                character: nil,
                errors: character.errors.full_messages
            }
        end
      end
    end
  end