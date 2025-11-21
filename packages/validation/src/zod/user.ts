import { z } from "zod";

export const UserSignupSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
    name: z.string().min(2).optional()
});

export const UserSigninSchema = z.object({
    email: z.email(),
    password: z.string().min(1)
});

export type UserSignupInput = z.infer<typeof UserSignupSchema>;
export type UserSigninInput = z.infer<typeof UserSigninSchema>;