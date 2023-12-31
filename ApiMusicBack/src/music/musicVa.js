import {z} from "zod";

const idSchema = z.object({
    id: z.string().uuid()
  });
  
  export function validateId(object) {
    return idSchema.safeParse(object);
  }