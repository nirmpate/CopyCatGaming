module Types
  class BaseEnum < GraphQL::Schema::Enum
    enum Elements {
      FIRE
      PHYSICAL
      ICE
    }
  end
end
