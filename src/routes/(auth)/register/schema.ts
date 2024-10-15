import { z } from "zod"

export const registerSchema = z.object({
    email: z.string({ message: "Email is not valid" }).email({ message: "Email is not valid" }),
    name: z.string({ message: "Name is not valid" }).min(1, { message: "Name is not valid" }),
    password: z.string({ message: "Password is not valid" }).min(8, { message: "Password is too short, minimum 8 characters" }),
    passwordConfirm: z.string({ message: "Confirm password is not valid" }).min(8, { message: "Confirm password is too short, minimum 8 characters" })
}).refine((d) => {
    if (d.password !== d.passwordConfirm) {
        return false
    }
    return true
}, { message: "Confirm password missmatch", path: ["passwordConfirm"] })

export type RegisterSchema = typeof registerSchema
