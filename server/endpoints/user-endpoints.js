const express = require("express");
const mongoose = require("mongoose");

const { userModel } = require("../schema/user-schema")

export function setupUserEndpoints(app) {
    app.get("/api/users", async(req, res) => {
        const allUsers = await userModel.find()

    })

    app.get("/api/users/:id", async(req, res) => {
        const { id } = req.params;
        const allUsers = await userModel.findById(id)
        
    })
}