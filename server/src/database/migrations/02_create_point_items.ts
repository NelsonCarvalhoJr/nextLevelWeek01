import Knex from 'knex'

// Commit
export async function up(knex: Knex) {
	return knex.schema.createTable('point_items', table => {
		table.increments('id').primary()
		table.integer('point_id')
			.notNullable()
			.references('id')
			.inTable('points')
		table.integer('item_id')
			.notNullable()
			.references('id')
			.inTable('items')
		table.foreign('point_id').references('points.id')
		table.foreign('item_id').references('items.id')
	})
}

// Rollback
export async function down(knex: Knex) {
	return knex.schema.dropTable('point_items')
}