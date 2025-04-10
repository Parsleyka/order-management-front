import config from '../config/configs'

export default async function (route, method, data) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (data) {
        options.body = JSON.stringify(data)
    }

    try {
        const response = await fetch(`http://${config.apiUrl}:${config.apiPort}${route}`, options)

        return await response.json()
    } catch (error) {
        return { success: false, error: error }
    }
}