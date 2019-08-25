class RemoveWeaponIdWeaponTypes < ActiveRecord::Migration[6.0]
  def change
    remove_column :weapon_types, :weapon_id

  end
end
