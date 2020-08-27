export const TOKEN_KEY = '@todolist_token'
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const login = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem('user', JSON.stringify(user))
}
export const getUser = () => localStorage.getItem('user')
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem('user')
}
