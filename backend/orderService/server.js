import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import stateMiddleware from './middleware/stateMiddleware.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(stateMiddleware);

app.use('/cart', orderRoutes);

// Basic order endpoints
app.get('/orders', (req, res) => {
    const state = req.getState();
    res.json({
        orders: state.orders,
        orderCount: state.orderCount,
        status: state.status
    });
});

app.post('/orders', (req, res) => {
    try {
        const order = req.body;
        req.addOrder(order);
        res.status(201).json({ message: 'Order added successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/orders/:orderId', (req, res) => {
    try {
        req.removeOrder(req.params.orderId);
        res.json({ message: 'Order removed successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Order Service listening on port ${port}`);
});