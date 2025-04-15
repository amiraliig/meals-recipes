'use server';

import { saveMeal } from "@/lib/meals";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

const isInValidText = (text) => {
    return !text || text.trim() === ""
}
async function sharemeal(prevstate, formData) {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        email: formData.get('email'),
        name: formData.get('name'),
        instructions: formData.get('instructions'),
        image: formData.get('image')
    }

    if (isInValidText(meal.title) ||
        isInValidText(meal.summary) ||
        isInValidText(meal.email) ||
        isInValidText(meal.name) ||
        isInValidText(meal.instructions)
     
    ) {
        return {
            massage: "Invalid Input"
        }
    }

    await saveMeal(meal)
    revalidatePath('/meals')

    redirect('/meals')
}

export default sharemeal
