
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 'CMIE9210XKJR23X', make: 'Cadillac', model: 'ATS', mileage: 0 },
        { vin: 'CMIE9210XKJR23Y', make: 'Cadillac', model: 'CT6', mileage: 0 },
        { vin: 'CMIE9210XKJR23Z', make: 'Cadillac', model: 'CT4', mileage: 0 },
        { vin: 'CMIE9210XKJR23F', make: 'Cadillac', model: 'CT6-V', mileage: 0 },
        { vin: 'CMIE9210XKJR23A', make: 'Cadillac', model: 'CT5', mileage: 0 }
      ]);
    });
};
