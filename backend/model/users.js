const pool = require('../db/db');

class Users{
    static async getAllUsers(){
        const result = await pool.query('SELECT * FROM users');
        return result.rows
    }

    static async getUserById(id){
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
        return result.rows[0]
    }

    static async createUser({ nom, prenom, poids, taille, email, date_naissance }){
        const result = await pool.query(
            'INSERT INTO users (nom, prenom, poids, taille, email, date_naissance) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [nom, prenom, poids, taille, email, date_naissance]
        )
        return result.rows[0];
    }

    static async updateUser(id, {nom, prenom, poids, taille, email, date_naissance}){
        const result = await pool.query(
            'UPDATE users SET nom = $1, prenom = $2, poids = $3, taille = $4, email = $5, date_naissance = $6 WHERE id = $7 RETURNING *' [nom, prenom, poids, taille, email, date_naissance]
        )
    }

    static async deleteUser(id){
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
    }
}