import bcrypt from "bcryptjs";

export async function verifyPassword(plain: string, hashed: string) {
    return bcrypt.compare(plain, hashed);
}
