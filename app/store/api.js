export async function loginUser(name) {
    const response = await fetch(`/api/users/login?name=${name}`);

    if (response.status === 400) {
        throw new Error('Bad login request');
    }
    else if (response.status === 403) {
        throw new Error('Login error');
    }
    else if (response.status === 500) {
        throw new Error('Server error');
    }
    else {
        return response.json();
    }
}

export async function getRooms(apiKey) {
    const response = await fetch('/api/rooms', {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    });
    return response.json();
}

export async function getOneRoom(apiKey, roomId) {
    const response = await fetch(`/api/rooms/${roomId}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    });
    return response.json();
}

async function getOneLightState(apiKey, id) {
    const response = await fetch(`/api/lights/${id}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        }
    });
    const light = await response.json();
    return { [light.id]: light.state.on };
}

export async function getLightStates(apiKey, ...lightIds) {
    const lightStates = await Promise.all(lightIds.map(i => getOneLightState(apiKey, i)));
    return lightStates.reduce((acc, light) => ({ ...acc, ...light }), {});
}
