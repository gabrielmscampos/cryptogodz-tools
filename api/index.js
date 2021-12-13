import express from 'express';

import { getEngageCooldown } from './game/combat.js';

const PORT = 3000;
const app = express();

// reportFile endpoint
app.get("/engage-cd", async (req, res) => {

    const currentDate = new Date();
    console.log(`[${currentDate}] /engage-cd`);

    const walletAddress = req.query.address;
    const result = await getEngageCooldown(walletAddress);
    res.status(200).send({
        cooldown: result
    });
});

// starting application
app.listen(PORT, () => {
    console.log('Server running on port %d', PORT);
});
