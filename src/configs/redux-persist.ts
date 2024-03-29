// import immutablePersistenceTransform from '../services/immutable-persistence-transfrom';
import AsyncStorage from '@react-native-async-storage/async-storage';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: __DEV__ ? 'test_1.0' : 'prod_1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    // blacklist: ["login", "search", "nav"],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    whitelist: ['user'],
    // transforms: [immutablePersistenceTransform],
  },
};

export default REDUX_PERSIST;
