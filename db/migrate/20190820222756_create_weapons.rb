class CreateWeapons < ActiveRecord::Migration[6.0]
  def change
    create_table :weapons do |t|
      t.belongs_to :character, null: false, foreign_key: true
      t.integer :damage_min
      t.integer :damage_max
      t.integer :strength
      t.string :element

      t.timestamps
    end
  end
end
