class ChangeDamageRange < ActiveRecord::Migration[6.0]
  def change
    change_column :weapon_types, :damage_range, :integer
  end
end
