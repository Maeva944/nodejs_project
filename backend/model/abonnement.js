const express = require('express');
const Abonnement = require('../model/abonnement');

const router = express.Router();

// Récupérer tous les abonnements
router.get('/subscriptions', async (req, res) => {
    try {
        const subscriptions = await Abonnement.getAllSubscriptions();
        res.json(subscriptions);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des abonnements' });
    }
});

// Récupérer les abonnés d'un abonnement spécifique
router.get('/subscriptions/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const subscribers = await Abonnement.getSubscribersById(id);
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des abonnés' });
    }
});

// Récupérer tous les abonnés avec leur abonnement
router.get('/subscribers', async (req, res) => {
    try {
        const subscribers = await Abonnement.getAllSubscribers();
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs abonnés' });
    }
});

module.exports = router;
