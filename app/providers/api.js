import axios from "axios";

export default {
  user: {
    login: credentials =>
      axios.post("/auth", { credentials }).then(res => res.data.user),
    signup: user =>
      axios.post("/user", { user }).then(res => res.data.user),
    confirm: token =>
      axios.post("/auth/confirm", { token }).then(res => res.data.user),
    resetPasswordRequest: email =>
      axios.post("/auth/reset_password_request", { email }),
    validateToken: token => axios.post("/auth/validate_token", { token }),
    resetPassword: data => axios.post("/auth/reset_password", { data })
  },
  books: {
    search: query => axios.get(`/books/search?q=${query}`),
    fetchAll: () => axios.get("/books").then(res => res.data.books),
    create: book =>
      axios.post("/books", { book }).then(res => res.data.book),
    delete: id => axios.delete(`/books/${id}`)
  }
};
