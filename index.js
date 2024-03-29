// 
require("dotenv").config() ;
const express = require("express") ;
const app = express() ;
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc") ;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const Org = require("./models/orgModel");
const Pricing = require("./models/pricingModel");
const Item = require("./models/itemModel");
   
const options = {
    definition : {
        openapi : "3.0.0" ,
        info : {
            title : "Food delivery system" ,
            version : "1.0.0" ,
            description :  "Food delivery system mainly focussing on dynamic pricing calculation of items based on zone and item types ."
        } ,
        servers : [
            {
                url : "http://localhost:3000" ,
            } 
        ] 
    },
    apis :["index.js"]
}

const specs = swaggerJsDoc(options)




/**
 * @swagger
 * components:
 *      schemas: 
 *          Request:
 *              type: object
 *              required:
 *                  - zone
 *                  - organization_id
 *                  - total_distance
 *                  - item_type
 *              properties:
 *                  zone:
 *                      type: string
 *                      description: Zone of the organization
 *                  organization_id:
 *                      type: string
 *                      description: unique id of the organization
 *                  total_distance:
 *                      type: float
 *                      description: total distance
 *                  item_type:
 *                      type: string
 *                      description: wherther the item is perishable or not
 *              example:
 *                  zone: "central" 
 *                  organization_id: "005"
 *                  total_distance: 10
 *                  item_type: "perishable"
 *          Response:
 *              type: object
 *              required:
 *                  - total_price
 *              properties:
 *                  total_price:
 *                        type: integer
 *                        description: Total delivery price of the item
 *              example:
 *                  total_price:1900
 *          Catelog:
 *              type: object
 *              required:
 *                  - Organizations
 *                  - Items
 *                  - Prices
 *              properties:
 *                  Organizations:
 *                      type: Array
 *                      description: List of all the available organizations
 *                  Items:
 *                      type: Array
 *                      description: List of all the items
 *                  Prices:
 *                      type : Array
 *                      description: Pricing for the items based on zone and type.
 *              example:
 *                  Organizations : [{ name: "Organization A" }]
 *                  Items : [{ type: "perishable", description: 'Apple' }]
 *                  Prices : [{ org_id: 1, item_id: 1, zone: "central", base_distance_in_km: 5, km_price: { "perishable" : 150 , "non-perishable" : 100}, fix_price: 1000 }]
*/         

/**
 * @swagger
 * tags:
 *   name: Prices
 *   description: All APIs regarding catelog and delivery prices.
 */

/**
 * @swagger
 * /price:
 *  post:
 *      summary: Returns the total price for delivery.
 *      tags: [Prices]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/Request'
 *      responses:
 *          200:
 *              description: Price calculated!!
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/Response'
 *          400:
 *              description: Invalid request!!
 *          500:
 *              description: Server error!!
 *          
*/


/**
 * @swagger
 * /price:
 *  get:
 *      summary: Returns the list of all organizations,items and price structures.
 *      tags: [Prices]
 *      responses:
 *          200:
 *              description: A catelog page
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref : '$components/schemas/Catelog'
 *          400:
 *              description: Invalid request!!
 *          500:
 *              description: Server errro!!
 *      
 */




app.get("/price" , async function(req,res) {
    const orgs = await Org.findAll() ;
    const pricings = await Pricing.findAll() ;
    const items = await Item.findAll() ;
    const catelog = { Organizations : orgs , Items : items , Prices : pricings }
    res.status(200).json(catelog) ;
})

app.post("/price" , async function(req, res) {
    // console.log(req.body) ; 
    try {
        const {zone , organization_id : org_id , total_distance , item_type } = req.body ;

        Pricing.findAll({where : {zone , org_id : parseInt(org_id)}}).then(function(results){
            if (results.length) {
                const [{dataValues}] = results ;
    
                const { base_distance_in_km : base , km_price , fix_price} = dataValues ;
    
                if (total_distance <= base ){
                    res.status(200).json({total_price : fix_price})
                } else {
                    var total_price = fix_price ;
                    total_price += (total_distance-base)*(km_price[item_type]) ;
                    res.status(200).json({total_price}) ;
                }
            } else {
                res.status(400).json("OOPS !! The requested item is not available")
            }
        })

      } catch (error) {
        res.status(400).send("Invalid request !")
        console.error('Error:', error);
      } 
})
   
app.use("/",swaggerUI.serve , swaggerUI.setup(specs)) ;


app.get("*" , function(req,res){
    res.status(400).send("This is a invalid request");
})




app.listen(3000 , function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Server started running on port 3000.");
    }
})