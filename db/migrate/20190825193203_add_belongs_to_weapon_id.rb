class AddBelongsToWeaponId < ActiveRecord::Migration[6.0]
  def change
    add_reference :weapons, :weapon_type, foreign_key: true
    add_index :weapons, :weapon_id
  end
end
