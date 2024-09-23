export default oauthGoogleEventHandler({
  async onSuccess(event, { user, tokens }) {
    console.log(user);
    await setUserSession(event, {
      user: {
        id: user.id,
        email: user.email,
        urlPhoto: user.picture,
        name: String(user.name).trim(),
      },
    });
    return sendRedirect(event, "/");
  },
  onError(event, error) {
    console.log("Erro google auth", error);
    return sendRedirect(event, "/");
  },
});
