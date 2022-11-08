const express = require("express");
const mongoose = require("mongoose");

const { organizationModel } = require("../schema/organization-schema")

export function setupOrganizationEndpoints(app) {
    app.get("/api/organizations", async(req, res) => {
        const allUsers = await organizationModel.find()
    })

    app.get("/api/organizations/:id", async(req, res) => {
        const { id } = req.params;
        const allUsers = await organizationModel.findById(id)
    })
}