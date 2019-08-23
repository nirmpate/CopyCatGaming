class CreateWeaponTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :weapon_types do |t|
      t.belongs_to :weapon, null: false, foreign_key: true
      t.string :name
      t.decimal :aps
      t.float :damage_range

      t.timestamps
    end
  end
end
