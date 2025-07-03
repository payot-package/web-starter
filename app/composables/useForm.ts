import { z } from 'zod/v4';
import type { ZodObject } from 'zod/v4';

export type FormOption<Schema extends ZodObject> = {
  schema: Schema;
  default: z.input<Schema>;
  onSubmit: (data: z.infer<Schema>) => Promise<void>;
  onError?: (error: FormErrorEvent) => void;
}

export function useForm<Schema extends ZodObject>(option: FormOption<Schema>) {
  const state = reactive(option.default);
  const onSubmit = async (event: FormSubmitEvent<z.infer<Schema>>) => {
    await option.onSubmit(event.data)
  };
  const onError = (event: FormErrorEvent) => option.onError?.(event);

  return { schema: option.schema, state, onSubmit, onError };
}