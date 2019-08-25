class RemoveBelongsToWeaponTypes < ActiveRecord::Migration[6.0]
  def change
    remove_column :weapon_types, :belongs_to
  end
end
