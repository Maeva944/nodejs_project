const pool = require('../db');

class CoursCollectif {
    static async getAllCourses() {
        const result = await pool.query('SELECT * FROM cours_collectif');
        return result.rows;
    }

    static async getCoursesByClub(id_club) {
        const result = await pool.query('SELECT * FROM cours_collectif WHERE id_club = $1', [id_club]);
        return result.rows;
    }

    static async getCoursesByDate(date) {
        const result = await pool.query('SELECT * FROM cours_collectif WHERE date = $1', [date]);
        return result.rows;
    }

    static async addCourse(nom, description, max_participant, id_club) {
        const result = await pool.query(
            'INSERT INTO cours_collectif (nom, description, max_participant, id_club) VALUES ($1, $2, $3, $4) RETURNING *',
            [nom, description, max_participant, id_club]
        );
        return result.rows[0];
    }
}

module.exports = CoursCollectif;
