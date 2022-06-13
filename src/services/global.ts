import { LoadingHandle } from 'components';

export class AstractTarget<T> {
  target: T;
  defaultValue?: T;
  constructor(defaultVal?: T) {
    this.defaultValue = defaultVal;
  }

  set(arg: T | null) {
    if (arg) {
      this.target = arg;
    }
  }

  get(): T {
    return this.target;
  }
}

const GlobalLoading = new AstractTarget<LoadingHandle>();

export const GlobalLib = {
  GlobalLoading,
};
