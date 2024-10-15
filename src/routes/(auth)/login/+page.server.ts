import { superValidate } from "sveltekit-superforms";
import type { PageServerLoad } from "./$types";
import { loginSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters"
import { fail, redirect, type Actions } from "@sveltejs/kit";


export const load: PageServerLoad = async () => {

    return {
        form: await superValidate(zod(loginSchema))
    }

}

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(loginSchema))
        if (!form.valid) {
            return fail(400, { form })
        }

        // logic untuk login
        console.log(form.data)

        return redirect(302, "/")

    }
}
