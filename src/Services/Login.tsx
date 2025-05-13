export const Login = (formData: FormData) => {
    return new Promise((resolve) => setTimeout(() => {
        console.log("Login data:", Object.fromEntries(formData.entries()));
        return resolve(true);
    }, 5000));
}