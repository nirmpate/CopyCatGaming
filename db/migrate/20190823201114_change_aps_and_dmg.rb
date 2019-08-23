class ChangeApsAndDmg < ActiveRecord::Migration[6.0]
  def change
    rename_column :attacks, :attack_multiplier, :aps_multiplier
    rename_column :attacks, :elemental_damage, :dmg_multiplier

    change_column :attacks, :aps_multiplier, :decimal
    change_column :attacks, :dmg_multiplier, :decimal
  end
end
