class CreateAttacks < ActiveRecord::Migration[6.0]
  def change
    create_table :attacks do |t|
      t.decimal :attack_multiplier
      t.string :elemental_damage

      t.timestamps
    end
  end
end
