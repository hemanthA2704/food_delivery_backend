const {DataTypes} = require("sequelize") ;
const sequelize = require("../db") ;

const Org = require("./orgModel") ;

const Item = require("./itemModel") ;


const Pricing = sequelize.define("Pricing" ,{
    org_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Org,
          key: 'id'
        }
      },
      item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Item,
          key: 'id'
        }
      },
      zone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      base_distance_in_km: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      km_price: {
        type: DataTypes.JSON,
        allowNull: false
      },
      fix_price: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
})

module.exports = Pricing ;