class RemoveForeignKeyWeaponTypes < ActiveRecord::Migration[6.0]
  def change
    remove_index :weapon_types, :weapon_id
  end
end
