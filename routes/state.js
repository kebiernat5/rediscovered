const express = require("express");
const db = require("../models");
require("dotenv").config();
const router = express.Router();

var CloudmersiveValidateApiClient = require('cloudmersive-validate-api-client');
var defaultClient = CloudmersiveValidateApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = process.env.VALIDATE_API_KEY;



 // ParseAddressRequest | Input parse request
router.post("/api/state", (req,res)=>{
    var apiInstance = new CloudmersiveValidateApiClient.AddressApi();

    var input = new CloudmersiveValidateApiClient.ParseAddressRequest();
    apiInstance.addressParseString(input, (error, data, response)=> {
        if (error) {
          console.error(error);
        } else {
          console.log('API called successfully. Returned data: ' + data);
          res.json(data)
        }
      })
})
module.exports = router;