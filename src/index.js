require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

const DISCORD_TOKEN = process.env.DISCORD_BOT_TOKEN;
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        data: {
            info: "Hiiruki's API Endpoint",
            web: "https://hiiruki.moe",
            github: "https://github.com/hiiruki",
        },
        success: true,
        
    });
});

app.get('/discord', async (req, res) => {
    try {
        await axios.get('https://discord.com/api/v10/users/@me', {
            headers: {
                Authorization: `Bot ${DISCORD_TOKEN}`,
            },
        });

        // Req to Discord API is successful, return success: true
        res.json({
            data: {
                info: 'API for fetch Discord user data. Find out more here: https://github.com/hiiruki/discord-api',
                usage: 'https://api.hiiruki.moe/discord/{user_id}',
            },
            success: true,
        });
    } catch (error) {
        console.error(error);

        // If the request fails, return success: false
        res.json({
            data: {
                info: 'API for fetch Discord user data. Find out more here: https://github.com/hiiruki/discord-api',
                usage: 'https://api.hiiruki.moe/discord/{user_id}',
            },
            success: false,
        });
    }
});

app.get('/discord/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        // Fetch user data from Discord API
        const response = await axios.get(`https://discord.com/api/v10/users/${userId}`, {
            headers: {
                Authorization: `Bot ${DISCORD_TOKEN}`,
            },
        });

        // Respond with user data
        res.json(response.data);
    } catch (error) {
        console.error(error);

        if (error.response && error.response.status === 404) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.status(500).json({ error: 'Failed to fetch user data' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
