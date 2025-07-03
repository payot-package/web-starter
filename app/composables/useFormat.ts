import type { ConfigType } from 'dayjs';

export function useFormat() {
  const { $dayjs } = useNuxtApp();
  const dateformat = (date: ConfigType, format: string) => $dayjs(date).format(format);

  return {
    dateformat,
    date: (date: ConfigType) => dateformat(date, 'YYYY-MM-DD'),
    time: (date: ConfigType) => dateformat(date, 'HH:mm'),
    datetime: (date: ConfigType) => dateformat(date, 'YY-MM-DD HH:mm'),
    
    phone: (phone: string) => phone.replace(/(\d{3})-?(\d{4})-?(\d{4})/, '$1-$2-$3'),
    phone_hidden: (phone: string) => phone.replace(/(\d{3})-?(\d{4})-?(\d{4})/, '$1-****-$3'),
  };
};