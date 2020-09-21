exports.up = function (knex) {
    return knex.schema.createTable("cars", (tbl) => {
        tbl.increments("id");
        tbl.string("vin", 128).unique().notNullable();
        tbl.string("make").notNullable();
        tbl.float("mileage");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cars");
};
