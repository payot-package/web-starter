import dayjs from 'dayjs';
import ko from 'dayjs/locale/ko';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

import toArray from 'dayjs/plugin/toArray';
import ArraySupport from 'dayjs/plugin/arraySupport';

dayjs.locale(ko);

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

dayjs.extend(toArray);
dayjs.extend(ArraySupport);

export default defineNuxtPlugin(() => {

  return {
    provide: {
      dayjs,
    },
  }
})