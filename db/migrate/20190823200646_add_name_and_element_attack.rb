class AddNameAndElementAttack < ActiveRecord::Migration[6.0]
  def change
    add_column :attacks, :element, :string
    add_column :attacks, :name, :string
  end
end
