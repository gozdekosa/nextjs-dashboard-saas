import {z} from "zod";

export const RegisterSchema = z.object({
    email: z.string().min(1, "Email zorunludur").email("Geçerli email giriniz"),
    password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
});

export type RegisterFormData = z.infer<typeof RegisterSchema>;