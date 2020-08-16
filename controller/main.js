const express = require('express');
const main = express.Router();
const fs = require('fs')
const request = require('request')

main.get('/', (req, res) => {
    res.render('home.ejs')
})

main.get('/resume', (req, res) => {
    res.render('resume.ejs')
})

main.get('/about', (req, res) => {
    res.render('about.ejs')
})

main.get('/projects', (req, res) => {
    res.render('projects.ejs')
})


module.exports = main