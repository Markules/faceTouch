const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const request = require("request");
const config = require("config");

const Language = require("../models/Language");

// @route GET api/language
// @desc  Get all languages 
// @access Public
router.get("/", async (req, res) => {
    try {
      const languages = await Language.find();
      res.json(languages);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });


// @route GET api/language/:lang
// @desc  Get language by it's name 
// @access Public
router.get("/:lang", async (req, res) => {
    const lang = req.params.lang
    try {
      const userLanguage = await Language.findOne({ language: lang  });
      res.json(userLanguage);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
  module.exports = router;