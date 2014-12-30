class CreateAwards < ActiveRecord::Migration
  def change
    create_table :awards do |t|
      t.string :award, null: false
      t.string :title, null: false
      t.date :date, index: true, null: false

      t.timestamps null: false
    end
  end
end
