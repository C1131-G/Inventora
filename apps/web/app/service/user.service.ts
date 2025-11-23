import { userDal } from "@repo/db";
import {UserSignupInput} from "@repo/validation";

export const userService = {
    create : async (data : UserSignupInput) => {
            return await userDal.create(data)
    },

    getByEmail : async (email:string) => {
        return await userDal.getByEmail(email);
    }
}