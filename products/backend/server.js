const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Food = require("./models/Food");
const User = require("./models/User");
const Address = require("./models/Address");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/foodDB")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
       
        
/* ---------------- HOME ---------------- */
app.get("/", (req, res) => {
    res.send("Backend Running");
});

/* ---------------- FOODS ---------------- */
app.get("/foods", async(req, res) => {
    const foods = await Food.find();
    res.json(foods);
});

app.get("/foods/:id", async(req, res) => {
    try {
        const food = await Food.findById(req.params.id);

        if (!food) {
            return res.status(404).json({ message: "Food not found" });
        }

        res.json(food);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/* ---------------- SIGNUP ---------------- */
app.post("/signup", async(req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: "Signup Successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/* ---------------- LOGIN (ONLY ONE) ---------------- */
app.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        const token = jwt.sign({ id: user._id },
            "foodDeliverySecret", { expiresIn: "7d" }
        );

        res.json({
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/* ---------------- ADDRESS ---------------- */
app.post("/address", async(req, res) => {
    try {
        const address = await Address.create(req.body);

        res.status(201).json({
            message: "Address Saved",
            address,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/* ---------------- GET ADDRESS ---------------- */
app.get("/address/:email", async(req, res) => {
    try {
        const address = await Address.findOne({
            userEmail: req.params.email,
        });

        res.json(address);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/* ----- SERVER ------- */
app.listen(5000, () => {
    console.log("Server Started on port 5000");
});