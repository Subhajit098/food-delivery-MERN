const express = require("express");
require("dotenv").config();
const router = express.Router();
const user = require("../models/User");
const { body, validationResult } = require("express-validator");

const jwt=require("jsonwebtoken");

const bcrypt = require("bcryptjs");

express().use(express.json());
express().use(express.urlencoded({ extended: true }));


router.post("/createuser", [
    body("name")
        .isLength({ max: 300 }),
    body("email","check email").isEmail(),
    body("password")
        .isLength({ max: 18 })
],
    async (req, res) => {

        // making the validation checks before sending the req
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt=await bcrypt.genSalt(10);
        let securePassword = await bcrypt.hash(req.body.password,salt);

        try {
            await user.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
                location: req.body.location
            }).then(res.json({ success: true }));
        }

        catch (err) {
            console.log(err.message);
            res.json({ success: false });
        }
    })

router.post("/loginuser",
    [
        body("email")
        .isEmail(),
        body("password")
            .isLength({ max: 18 })
    ]
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let userEmail = req.body.email;
            const userData = await user.findOne({email:userEmail});

            if (!userData) {
                console.log(userData);
                 return res.status(400).json({ errors: "Try logging with valid credentials,1" });
                 
            }

           const pswrdCompare = await bcrypt.compare(req.body.password,userData.password); 

            if (!pswrdCompare) {
                console.log(userData);
                return res.status(400).json({ errors: "Try logging with valid credentials,2"});
            }

            const data={
                user:{
                    id:userData.id
                }
            }

            const authToken=jwt.sign(data,process.env.JWT_SECRET);

            return res.json({ success: true ,authToken:authToken});

        }

        catch (err) {
            console.log(err.message);
            res.json({ success: false });
        }
    })

module.exports = router;