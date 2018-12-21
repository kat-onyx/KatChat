export const fetchUsers = serverId => {
    return $.ajax({
        method: 'GET',
        url: `api/users`,
        data: { serverId }
    })
}

export const fetchUser = user => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${user.id}`,
    })
}

export const updateUser = user => {
    return $.ajax({
        method: 'PATCH',
        url: `api/users/${user.id}`,
        data: { user }
    })
}