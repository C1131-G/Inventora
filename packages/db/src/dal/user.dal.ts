import {prisma} from "../client";
import {UserSignupInput} from "@repo/validation";

export const userDal = {
    create : async (data : UserSignupInput) => {
        return prisma.user.create({
            data: {
                email: data.email,
                password: data.password,
                name: data.name
            }
        });
    },

    getByEmail : async (email:string) => {
        return prisma.user.findUnique({where:{email}})
    }
}