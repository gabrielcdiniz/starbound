import { z } from 'zod';

export const ListItemsAddSchema = z.object({
  name: z.string().trim().min(1, { message: 'Required' }),
  price: z
    .string()
    .min(1, { message: 'Required' })
    .refine(
      (v) => {
        const parsed = parseFloat(v.replace(/[R\$\s.]/g, '').replace(',', '.'));

        return parsed > 0;
      },
      { message: 'GreaterThan' },
    ),
  quantity: z.number().min(1, { message: 'Required' }).positive(),
});

export type ListItemsAddSchemaType = z.infer<typeof ListItemsAddSchema>;
