import { cloneDeep, merge } from 'lodash';
import { consoleTransport, fileAsyncTransport, logger, configLoggerType } from 'react-native-logs';

const ENABLE_LOG_SAVE_TO_FILE = true;
const ENABLE_LOG_REMOTE = false;
const ENABLE_LOG_RESPONSE_API = true;

const defaultConfig: configLoggerType = {
  severity: __DEV__ ? 'debug' : 'error',
  transport: (props: any) => {
    if (__DEV__) {
      consoleTransport(props);
    }
    ENABLE_LOG_SAVE_TO_FILE && fileAsyncTransport(props);
    ENABLE_LOG_REMOTE && remoteLoggingTransport();
  },
  transportOptions: {
    color: 'web',
  },
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  async: ENABLE_LOG_SAVE_TO_FILE || ENABLE_LOG_REMOTE,
  dateFormat: 'time',
  printLevel: true,
  printDate: true,
  enabled: true,
};

const remoteLoggingTransport = () => {
  // Do here whatever you want with the log message, such as save log to cloud server, realtime database,...
  // message log: props.msg
};

const debug = (alias: string, value: any = '', options = {}) => {
  let config = merge(cloneDeep(defaultConfig), options);
  const log = logger.createLogger(config);
  log.debug(alias, value);
};

const info = (alias: string, value: any = '', options = {}) => {
  let config = merge(cloneDeep(defaultConfig), options);
  const log = logger.createLogger(config);
  log.info(alias, value);
};

const warn = (alias: string, value: any = '', options = {}) => {
  let config = merge(cloneDeep(defaultConfig), options);
  const log = logger.createLogger(config);
  log.warn(alias, value);
};

const error = (alias: string, value: any = '', options = {}) => {
  let config = merge(cloneDeep(defaultConfig), options);
  const log = logger.createLogger(config);
  log.error(alias, value);
};

export const LogServiceLib = {
  debug,
  info,
  warn,
  error,
  ENABLE_LOG_RESPONSE_API,
};
