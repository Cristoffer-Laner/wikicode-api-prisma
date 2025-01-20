import { publicationSchema } from "validators/publication/publicationSchema";
import { z } from "zod";

export type CreatePublicationDTO = z.infer<typeof publicationSchema>