import { isNil } from 'lodash';

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  if (!phoneNumber) {
    return false;
  }
  return phoneNumber.match(/\d/g)?.length === 10;
};
export const getNameString = (firstName: string, middleName: string, lastName: string): string => {
  return `${firstName || ''} ${middleName ? `${middleName} ` : ''}${lastName || ''}`;
};
export const getNameStringByUserInfo = (driverProfile: any): string => {
  const { firstName, middleName, lastName } = driverProfile || {};
  return `${firstName || ''} ${middleName ? `${middleName} ` : ''}${lastName || ''}`;
};
export const validateEmail = (email) => {
  if (!email) {
    return false;
  }
  const regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return regex.test(email);
};
export const convertToLetterAndSpaceOnly = (text) => {
  return text?.replace(/[^A-Za-z\s]/g, '') || '';
};

export const convertObjectToArray = (data: any) => {
  const results: any = [];

  if (data) {
    for (const key in data) {
      const value = data[key];
      results.push({
        key,
        value,
      });
    }
  }

  return results;
};
export const numberFormat = (number: number) => {
  if (!number) {
    return '';
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
export function numberWithCommas(value, thousandComma, floatSymbol) {
  if (value !== null && value !== undefined && !isNaN(value)) {
    const [currency, cents] = value.toString().split('.');
    if (cents === undefined) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandComma || ',');
    } else {
      return `${currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandComma || ',')}${
        floatSymbol || '.'
      }${cents || ''}`;
    }
  }
  return '0';
}

export const addThousandSeparator = (value: any, fixed?: number): string => {
  if (isNaN(value)) {
    return '-';
  }
  if (fixed) {
    value = parseFloat(value).toFixed(fixed);
  } else {
    value = parseFloat(value);
  }
  return numberWithCommas(value, ',', '.');
};

export function getColorFromString(stringInput) {
  const h = [...stringInput].reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  const s = 95;
  const l = 35 / 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0'); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function transformArrayToOject(listItems: object[], key: string) {
  return listItems.reduce((result, item) => {
    // ignore this item
    if (isNil(item) || !item) {
      return result;
    }
    Object.assign(result, { [item[key]]: item });
    return result;
  }, {});
}
