module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :characters, [Types::CharacterType], null: false
    def characters
      Character.all
    end

    field :character, Types::CharacterType, null: false do
      argument :id, ID, required: true
    end
    def character(id:)
      Character.find(id)
    end

    field :attacks, [Types::AttackType], null: false
    def attacks
      Attack.all
    end

  end
end
