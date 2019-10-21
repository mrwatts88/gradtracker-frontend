export function authHeader() {
    const userToken = localStorage.getItem('userToken');

    if (userToken) return { Authorization: userToken };
    else return {};
}
