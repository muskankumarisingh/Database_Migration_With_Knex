exports.up = function(knex) {
	knex.schema.hasTable("Megha").then(function (exists) {
	if (!exists) {
		return knex.schema.createTable("Megha", function (table) {
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
    return knex.schema.dropTable("Megha");
};