import { z } from "zod";

export const loginSchema = z.object({
    email: z.string({ message: "Email is not valid" }).email({ message: "Email is not valid" }),
    password: z.string({ message: "Password is not valid" }).min(8, { message: "Password is too short, minimum 8 characters" })
})

export type LoginSchema = typeof loginSchema
