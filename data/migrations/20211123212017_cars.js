
exports.up = function(knex) {
  return knex.schema
  .createTable('cars', table =>{
      table.increments('car_id')
      table.string('car_image', 32).notNullable()
      table.string('car_make', 32).notNullable()
      table.string('car_model', 32).notNullable()
      table.integer('car_milage', 32).notNullable()
      table.string('car_fuel', 32).notNullable()
      table.integer('car_doors', 32).notNullable()
      table.string('car_color', 32).notNullable()
  })
  .createTable('car_images', table =>{
      table.increments('car_images_id')
      table.integer('car_id')
      .notNullable()
      .references('car_id')
      .inTable('cars')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
  .createTable('users', table => {
      table.increments('user_id')
      table.string('username')
      table.string('password',256).notNullable();
      table.string('role')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('car_images')
  .dropTableIfExists('cars')
};
