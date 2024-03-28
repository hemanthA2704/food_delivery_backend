// 
require("dotenv").config() ;
const express = require("express") ;
const app = express() ;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const Org = require("./models/orgModel");
const Pricing = require("./models/pricingModel");
const Item = require("./models/itemModel");
   


app.get("/price" , async function(req,res) {
    const orgs = await Org.findAll() ;
    const pricings = await Pricing.findAll() ;
    const items = await Item.findAll() ;
    const catelog = { Organizations : orgs , Items : items , Prices : pricings }
    res.json(catelog) ;
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
                    res.json({total_price : fix_price})
                } else {
                    var total_price = fix_price ;
                    total_price += (total_distance-base)*(km_price[item_type]) ;
                    res.json({total_price}) ;
                }
            } else {
                res.json("OOPS !! The requested item is not available")
            }
        })

      } catch (error) {
        res.status(400);
        res.send("Invalid request !")
        console.error('Error:', error);
      } 
})
   

app.listen(3000 , function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Server started running on port 3000.");
    }
})