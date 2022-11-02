const express = require("express");
const mongoose = require("mongoose");

const { applicationModel } = require("../schema/application-schema")

function setupApplicationEndpoints(app) {
    app.get("/api/applications", async(req, res) => {
        const allUsers = await applicationModel.find()

    })

    app.get("/api/applications/:id", async(req, res) => {
        const { id } = req.params;
        const allUsers = await applicationModel.findById(id)
        
    })
}