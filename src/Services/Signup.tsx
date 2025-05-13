export const Signup = async (formData: FormData) => {
    return new Promise((resolve) => setTimeout(() => {
        console.log("Signup data:", Object.fromEntries(formData.entries()));
        return resolve(false);
    }, 5000));
}