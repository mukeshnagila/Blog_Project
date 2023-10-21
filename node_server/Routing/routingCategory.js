const Controller = require("../Controller/controllerCategory");

const routingCategory = require("express").Router();
    
    routingCategory.get("/data", Controller);

module.exports = routingCategory;