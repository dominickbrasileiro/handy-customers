class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :phone_number
      t.timestamp :birth_date
      t.boolean :active, :default => true

      t.timestamps
    end
  end
end
