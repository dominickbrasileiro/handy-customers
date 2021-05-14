class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.boolean :active, :default => true

      t.timestamps
    end
  end
end
