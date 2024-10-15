import { superValidate } from "sveltekit-superforms";
import type { Actions, PageServerLoad } from "./$types";
import { registerSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import { fail, redirect } from "@sveltejs/kit";


export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(registerSchema))
    }
}

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(registerSchema))
        if (!form.valid) {
            return fail(400, { form })
        }

        // logic untuk register
        console.log(form.data)

        return redirect(302, "/login")

    }
}
