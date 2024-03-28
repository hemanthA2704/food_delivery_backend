// seedDatabase.js
const Org = require('../models/orgModel');
const Item = require('../models/itemModel');
const Pricing = require('../models/pricingModel');
const sequelize = require('../db');

const seedDatabase = async () => {
  try {
    // Sync models with the database
    await sequelize.sync({ force: true });

    // Insert sample data into Organization table
    await Org.bulkCreate([
      { name: "Organization A" },
      { name: "Organization B" },
      { name: "Organization C" },
      { name: "Organization D" },
      { name: "Organization E" },
      { name: "Organization F" },
      { name: "Organization G" },
      { name: "Organization H" },
      { name: "Organization I" },
      { name: "Organization J" },
      { name: "Organization K" },
      { name: "Organization L" },
      { name: "Organization M" },
      { name: "Organization N" },
      { name: "Organization O" },
      { name: "Organization P" },
      { name: "Organization Q" },
      { name: "Organization R" },
      { name: "Organization S" },
      { name: "Organization T" },
      { name: "Organization U" },
      { name: "Organization V" }
    ]);

    // Insert sample data into Item table
    await Item.bulkCreate([
      { type: "perishable", description: 'Apple' },
      { type: "non-perishable", description: 'Bread' },
      { type: "perishable", description: 'Banana' },
      { type: "non-perishable", description: 'Pasta' },
      { type: "perishable", description: 'Orange' },
      { type: "non-perishable", description: 'Rice' },
      { type: "perishable", description: 'Strawberry' },
      { type: "non-perishable", description: 'Cereal' },
      { type: "perishable", description: 'Watermelon' },
      { type: "non-perishable", description: 'Canned Soup' },
      { type: "perishable", description: 'Grapes' },
      { type: "non-perishable", description: 'Canned Beans' },
      { type: "perishable", description: 'Peach' },
      { type: "non-perishable", description: 'Peanut Butter' },
      { type: "perishable", description: 'Kiwi' },
      { type: "non-perishable", description: 'Granola Bars' },
      { type: "perishable", description: 'Mango' },
      { type: "non-perishable", description: 'Potato Chips' },
      { type: "perishable", description: 'Pineapple' },
      { type: "non-perishable", description: 'Chocolate' }
    ]);

    await Pricing.bulkCreate([
        // Organization A pricing
        { org_id: 1, item_id: 1, zone: "central", base_distance_in_km: 5, km_price: { "perishable" : 150 , "non-perishable" : 100}, fix_price: 1000 },
        // Organizatn B pricing
        { org_id: 2, item_id: 1, zone: "central", base_distance_in_km: 5, km_price:{ "perishable" : 200 , "non-perishable" : 100} , fix_price: 1200 },
        // Orn C pricing
        { org_id: 3, item_id: 1, zone: "central", base_distance_in_km: 5, km_price:{ "perishable" : 180 , "non-perishable" : 130} , fix_price: 1100 },
        // Orn D pricing
        { org_id: 4, item_id: 1, zone: "central", base_distance_in_km: 5, km_price:{ "perishable" : 170 , "non-perishable" : 120} , fix_price: 1050 },
        // Orn E pricing
        { org_id: 5, item_id: 1, zone: "central", base_distance_in_km: 5, km_price:{ "perishable" : 150 , "non-perishable" : 140}, fix_price: 1150 },
        // Orn F pricing
        { org_id: 6, item_id: 1, zone: "central", base_distance_in_km: 5, km_price:{ "perishable" : 350 , "non-perishable" : 250} , fix_price: 1020 },
        // Orn G pricing
        { org_id: 7, item_id: 1, zone: "central", base_distance_in_km: 5, km_price:{ "perishable" : 230 , "non-perishable" : 170} , fix_price: 1120 },
        // Orn H pricing
        { org_id: 8, item_id: 1, zone: "central", base_distance_in_km: 5, km_price:{ "perishable" : 190 , "non-perishable" : 130} , fix_price: 1080 },
        // Orn I pricing
        { org_id: 9, item_id: 1, zone: "central", base_distance_in_km: 5, km_price:{ "perishable" : 155 , "non-perishable" : 100} , fix_price: 1170 },
        // Orn J pricing
        { org_id: 10, item_id: 1, zone: "central", base_distance_in_km: 5, km_price:{ "perishable" : 165 , "non-perishable" : 140} , fix_price: 1040 },
        // Orn K pricing
        { org_id: 11, item_id: 1, zone: "central", base_distance_in_km: 5, km_price:{ "perishable" : 245 , "non-perishable" : 130} , fix_price: 1100 },
        // Orn L pricing
        { org_id: 12, item_id: 1, zone: "central", base_distance_in_km: 5, km_price: { "perishable" : 250 , "non-perishable" : 200}, fix_price: 1050 },
        // Orn M pricing
          { 
            org_id: 13, 
            item_id: 1, 
            zone: "central", 
            base_distance_in_km: 5, 
            km_price: { "perishable": 190, "non-perishable": 180 }, 
            fix_price: 1150 
          },
          { 
            org_id: 14, 
            item_id: 2, 
            zone: "north", 
            base_distance_in_km: 7, 
            km_price: { "perishable": 200, "non-perishable": 170 }, 
            fix_price: 1200 
          },
          { 
            org_id: 15, 
            item_id: 1, 
            zone: "south", 
            base_distance_in_km: 6, 
            km_price: { "perishable": 210, "non-perishable": 160 }, 
            fix_price: 1250 
          },
          { 
            org_id: 16, 
            item_id: 2, 
            zone: "east", 
            base_distance_in_km: 8, 
            km_price: { "perishable": 220, "non-perishable": 150 }, 
            fix_price: 1300 
          },
          { 
            org_id: 17, 
            item_id: 1, 
            zone: "west", 
            base_distance_in_km: 5, 
            km_price: { "perishable": 230, "non-perishable": 140 }, 
            fix_price: 1350 
          },
          { 
            org_id: 18, 
            item_id: 2, 
            zone: "central", 
            base_distance_in_km: 6, 
            km_price: { "perishable": 240, "non-perishable": 130 }, 
            fix_price: 1400 
          },
          { 
            org_id: 19, 
            item_id: 1, 
            zone: "north", 
            base_distance_in_km: 7, 
            km_price: { "perishable": 250, "non-perishable": 120 }, 
            fix_price: 1450 
          },
          { 
            org_id: 20, 
            item_id: 2, 
            zone: "south", 
            base_distance_in_km: 8, 
            km_price: { "perishable": 260, "non-perishable": 110 }, 
            fix_price: 1500 
          },
          { 
            org_id: 21, 
            item_id: 1, 
            zone: "east", 
            base_distance_in_km: 5, 
            km_price: { "perishable": 270, "non-perishable": 100 }, 
            fix_price: 1550 
          },
          { 
            org_id: 22, 
            item_id: 2, 
            zone: "west", 
            base_distance_in_km: 6, 
            km_price: { "perishable": 280, "non-perishable": 90 }, 
            fix_price: 1600 
          }
    ])
    console.log('Sample data inserted successfully.');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    // Close Sequelize connection
    await sequelize.close();
  }
};


module.exports = seedDatabase ;
