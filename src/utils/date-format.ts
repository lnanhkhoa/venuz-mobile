import momentTimezone from 'moment-timezone';
import moment from 'moment';

/**
 * Date format
 */
export const DATE_FORMAT = {
  /**
   * MMM DD , YYYY hh:mma
   * Ex : Oct 21 , 2021 1:00pm
   */
  DATE_TIME_1: 'MMM DD , YYYY hh:mm A',

  /**
   * DD MMM YYYY, HH:mm
   * Ex : 21 Oct 2021 10:00
   */
  DATE_TIME_2: 'DD MMM YYYY, HH:mm',

  /**
   * dddd, DD MMM, YYYY
   * Ex : Tuesday, 21 Oct, 2021
   */
  DAY_DATE_MONTH_YEAH: 'dddd, DD MMM, YYYY',

  /**
   * DD MMM D, HH:mm a
   * Ex : Wed Jan 5,  7:15 PM
   */
  DATE_TIME_3: 'ddd MMM D, hh:mm A',

  TIME_1: 'HH:mm',
};

export const convertPHTimeFromFirestore = (seconds: any, format: string) => {
  if (!seconds) {
    return '';
  }

  const time = moment(seconds * 1000, 'x');
  return momentTimezone(time)
    .tz('Asia/Manila')
    .format(format || DATE_FORMAT.DATE_TIME_2);
};

export const convertPHTimeFromDate = (value: any, format: string) => {
  if (!value) {
    return '';
  }

  return momentTimezone(value)
    .tz('Asia/Manila')
    .format(format || DATE_FORMAT.DATE_TIME_2);
};
