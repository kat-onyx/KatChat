export const fetchChannels = () => {
    return $.ajax({
        method: "GET",
        url: `/api/channels`
    })
}

export const fetchChannel = (channel) => {
    return $.ajax({
        method: "GET",
        url: `/api/channels/${channel.id}`
    })
}

export const createChannel = (channel) => {
    return $.ajax({
        method: "POST",
        url: `/api/channels/`,
        data: { channel }
    })
}

export const deleteChannel = (channel) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/channels/${channel.id}`
    })
}

export const updateChannel = (channel) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/channels/${channel.id}`,
        data: { channel }
    })
}