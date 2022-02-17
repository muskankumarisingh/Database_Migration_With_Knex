exports.up = function(knex) {
	knex.schema.hasTable("new_data").then(function (exists) {
	if (!exists) {
		return knex.schema.createTable("new_data", function (table) {
			table.increments("userId").primary();
			table.string("email").unique().comment('email field');
			table.string("userName");
			table.string("profile_picture_url");
            table.text('password'); 
		});
	}
});
};
exports.down = function(knex) {
    return knex.schema.dropTable("new_data");
};