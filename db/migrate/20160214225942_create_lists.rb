class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.text :description

      t.timestamps null: false
    end

    add_index :lists, :title
  end
end
