export const signup = ({email, username, password}) => {
    return $.ajax({
        method: "POST",
        url: `/api/users`,
        data: { user: {email, username, password} }
    })
};

export const login = ({username, password}) => {
    return $.ajax({
        method: "POST",
        url: `/api/session`,
        data: { user: {username, password} }
    })
};

export const logout = () => {
    return $.ajax({
        method: "DELETE",
        url: `/api/session`,
    })
};