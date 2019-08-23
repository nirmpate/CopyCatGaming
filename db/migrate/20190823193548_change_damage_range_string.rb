class ChangeDamageRangeString < ActiveRecord::Migration[6.0]
  def change
    change_column :weapon_types, :damage_range, :string
  end
end
