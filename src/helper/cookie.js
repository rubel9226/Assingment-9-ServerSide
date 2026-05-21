const setAccessTokenCookie = (res, accessToken) => {
    res.cookie('accessToken', accessToken, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 15 minutes
        httpOnly: true,
        secure: false,
        sameSite: 'lax'
    });
}

module.exports = {
    setAccessTokenCookie,
}