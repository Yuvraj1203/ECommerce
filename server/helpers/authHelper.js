import bcrypt from 'bcrypt';

const HashPassword = async(password) => {
    try {
        const hashedPassword = await bcrypt.hash(password,10);
        return hashedPassword;
    } catch (error) {
        console.log(error," =>=>=> while hashing password")
    }
}

const comparePassword = async(password,hashedPassword) => bcrypt.compare(password,hashedPassword);

export {HashPassword, comparePassword};