import z from "zod";

export const msgShema = z.object({
  user: z.string().min(1),
  message: z.string(),
  date: z.date()
})
