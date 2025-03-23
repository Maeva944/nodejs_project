const pool = require('../db/db');

class Coach {
    static async getAllCoaches() {
        const result = await pool.query('SELECT * FROM coach');
        return result.rows;
    }

    static async getCoachById(id) {
        const result = await pool.query('SELECT * FROM coach WHERE id = $1', [id]);
        return result.rows[0];
    }

    static async createCoach(nom, prenom, email, specialite) {
        const result = await pool.query(
            'INSERT INTO coach (nom, prenom, email, specialite) VALUES ($1, $2, $3, $4) RETURNING *',
            [nom, prenom, email, specialite]
        );
        return result.rows[0];
    }

    static async updateCoach(id, nom, prenom, email, specialite) {
        const result = await pool.query(
            'UPDATE coach SET nom = $1, prenom = $2, email = $3, specialite = $4 WHERE id = $5 RETURNING *',
            [nom, prenom, email, specialite, id]
        );
        return result.rows[0];
    }

    static async deleteCoach(id) {
        await pool.query('DELETE FROM coach WHERE id = $1', [id]);
        return { message: 'Coach supprimé avec succès' };
    }
}

module.exports = Coach;
