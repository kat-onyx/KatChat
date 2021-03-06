export const fetchMessages = (channelId) => {
    return $.ajax({
        method: "GET",
        url: `api/messages`,
        data: { channelId }
    })
}

export const fetchMessage = (message) => {
    return $.ajax({
        method: "GET",
        url: `/api/messages/${message.id}`
    })
}

export const createMessage = (message) => {
    return $.ajax({
        method: "POST",
        url: `/api/messages`,
        data: { message }
    })
}

export const updateMessage = (message) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/messages/${message.id}`,
        data: { message }
    })
}

export const destroyMessage = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/messages/${id}`,
        data: { id }
    })
}