import sql from 'better-sqlite3'
const db = sql('meals.db')
const getMeals = () => {

    return db.prepare('SELECT * FROM meals').all();
}
export default getMeals