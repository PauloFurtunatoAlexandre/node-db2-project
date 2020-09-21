exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("cars")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("cars").insert([
                {
                    id: 4,
                    vin: "4Y1SGS5848G211473",
                    make: "VW",
                    mileage: 38723,
                    transmission: "auto",
                    title: "clean",
                },
                {
                    id: 5,
                    vin: "4Y1SGS5JH8G211414",
                    make: "Toyota",
                    mileage: 48262,
                    transmission: "auto",
                    title: "savage",
                },
                {
                    id: 6,
                    vin: "4Y1SGS584KI2113625",
                    make: "GM",
                    mileage: 45983,
                    transmission: "manual",
                    title: "clean",
                },
                {
                    id: 7,
                    vin: "4Y1LKS5848G211947",
                    make: "Jeep",
                    mileage: 4857,
                    transmission: "auto",
                    title: "clean",
                },
                {
                    id: 8,
                    vin: "Y51SGS5848G211498",
                    make: "VW",
                    mileage: 9485,
                    transmission: "manual",
                    title: "clean",
                },
            ]);
        });
};
