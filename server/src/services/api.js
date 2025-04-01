const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
require('dotenv').config();

const app = express();
app.use(express.json());

const pool = new Pool({
    user: 'your_user',
    host: 'localhost',
    database: 'properties_db',
    password: 'your_password',
    port: 5432,
});

// Validation schemas
const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    user_type: Joi.string().valid('buyer', 'seller', 'agent').required(),
    password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

// GET all properties
app.get('/properties', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM properties');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET specific property by ID
app.get('/properties/:id', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM properties WHERE property_id = $1', [req.params.id]);
        if (result.rows.length === 0) return res.status(404).json({ message: 'Property not found' });
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new property listing
app.post('/properties', async (req, res) => {
    try {
        const { description, price, address, city, state, zip_code, property_type, bedrooms, bathrooms, square_feet, agent_id, seller_id, status } = req.body;
        const result = await pool.query(
            'INSERT INTO properties (description, price, address, city, state, zip_code, property_type, bedrooms, bathrooms, square_feet, agent_id, seller_id, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
            [description, price, address, city, state, zip_code, property_type, bedrooms, bathrooms, square_feet, agent_id, seller_id, status]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// User registration
app.post('/register', async (req, res) => {
    try {
        const { error } = registerSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const { name, email, phone, user_type, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (name, email, phone, user_type, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, email, phone, user_type, hashedPassword]
        );
        res.status(201).json({ message: 'User registered successfully', user: result.rows[0] });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// User login
app.post('/login', async (req, res) => {
    try {
        const { error } = loginSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.details[0].message });

        const { email, password } = req.body;
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (result.rows.length === 0) return res.status(401).json({ message: 'Invalid email or password' });

        const user = result.rows[0];
        if (!(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: 'Invalid email or password' });

        const token = jwt.sign({ userId: user.user_id }, process.env.JWT_SECRET || 'fallback_secret_key', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
