import { object, string } from "zod";

export const SignInSchema = object({
    email: string().email("Email ínvalido"),
    password: string().min(6, "A senha precisa conter no mínimo 6 caracteres!")
    .max(32,"A senha deve conter no máximo 32 caracteres!"),
    
});

export const RegisterSchema = object({
    name: string().min(1, "Digite pelo menos um caracter para o nome!"),
    email: string().email("Email ínvalido"),
    password: string().min(6, "A senha precisa conter no mínimo 6 caracteres!").max(32, "A senha deve conter no máximo 32 caracteres!"),
    ConfirmPassword: string().min(6, "A senha precisa conter no mínimo 6 caracteres!").max(32, "A senha deve conter no máximo 32 caracteres!")

}).refine((data) => data.password === data.ConfirmPassword, {
    message: "As senhas não são iguais!",
    path: ["ConfirmPassword"],
})