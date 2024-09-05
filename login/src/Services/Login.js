const baseUrl = 'https://user-admin.onrender.com/'

export default async function Login(username, password) {
    const response = await fetch(baseUrl + "auth/realms/trip-planner/protocol/openid-connect/token",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'grant_type': 'password',
                'client_id': 'trip-planner-client',
                'username': username,
                'password': password
            })
        });
        
    const data = await response.json();
    return data;
}
