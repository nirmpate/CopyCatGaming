class AddElementDamage < ActiveRecord::Migration[6.0]
  def change
    add_column :weapons, :element_damage, :float
  end
end
