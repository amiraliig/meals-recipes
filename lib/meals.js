import fs from 'node:fs/promises'
import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db')

const getMeals = () => {
    return db.prepare('SELECT * FROM meals').all()
}

const getMeal = (slug) => {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

const saveMeal = async (meal) => {
    meal.slug = slugify(meal.title, { lower: true })
    meal.instructions = xss(meal.instructions)

    const extension = meal.image.name.split('.').pop()
    console.log(meal.image)
    console.log("extention" + extension)
    const fileName = `${meal.slug}.${extension}`
    const filePath = `public/images/${fileName}`

    const bufferedImage = await meal.image.arrayBuffer()
    await fs.writeFile(filePath, Buffer.from(bufferedImage))

    db.prepare(`
    INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(
        meal.title,
        meal.summary,
        meal.instructions,
        meal.name,
        meal.email,
        `/images/${fileName}`,
        meal.slug
    )
}

export { getMeals, getMeal, saveMeal }
