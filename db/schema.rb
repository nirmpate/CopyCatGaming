# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_23_201114) do

  create_table "attacks", force: :cascade do |t|
    t.decimal "aps_multiplier"
    t.decimal "dmg_multiplier"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "element"
    t.string "name"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "weapon_types", force: :cascade do |t|
    t.integer "weapon_id", null: false
    t.string "name"
    t.decimal "aps"
    t.string "damage_range"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["weapon_id"], name: "index_weapon_types_on_weapon_id"
  end

  create_table "weapons", force: :cascade do |t|
    t.integer "character_id", null: false
    t.integer "damage_min"
    t.integer "damage_max"
    t.integer "strength"
    t.string "element"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.float "element_damage"
    t.index ["character_id"], name: "index_weapons_on_character_id"
  end

  add_foreign_key "weapon_types", "weapons"
  add_foreign_key "weapons", "characters"
end
