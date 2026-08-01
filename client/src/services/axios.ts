import { create } from "axios"

const api = create({
  baseURL: import.meta.env.VITE_BACKEND_URL ?? "http://localhost:3000"
})
export default api
