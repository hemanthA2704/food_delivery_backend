// 
const request = require("supertest");
const app = require("../src/index") ;

require("dotenv").config();

describe("GET /price", () => {
    it("should return a json object having catelog details.", async () => {
      const res = await request(app).get("/price");
      expect(res.statusCode).toBe(200);
      expect(res.body).tobe(Array)
    });
  });

describe("POST /price", () => {
    it("should calculate the delivery price of the product", async () => {
      const res = await request(app).post("/price").send({
        "zone": "central", 
        "organization_id": "005",
        "total_distance": 10,
        "item_type": "perishable"
    });
      expect(res.statusCode).toBe(200);
      expect(res.body.total_price).toBe(1900);
    });
  }); 
  