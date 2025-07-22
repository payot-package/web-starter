import type { ConfigType } from "dayjs";

export function useFormat() {
  const { $dayjs } = useNuxtApp();
  const date = (value: ConfigType) => $dayjs(value).format("YYYY-MM-DD");
  const time = (value: ConfigType) => $dayjs(value).format("HH:mm:ss");
  const datetime = (value: ConfigType) => $dayjs(value).format("YYYY-MM-DD HH:mm:ss");

  const phone = (value: string) => value.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3");
  const phone_hidden = (value: string) => value.replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-****-$3");

  const amount = (value: number | string) => {
    return z.coerce.number().parse(value).toLocaleString();
  }

  return { date, time, datetime, phone, phone_hidden, amount };
}

export type FormatType = keyof ReturnType<typeof useFormat>;
export type FormatArgumentsType<T extends FormatType> = Parameters<ReturnType<typeof useFormat>[T]>[0];