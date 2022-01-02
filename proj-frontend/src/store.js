import { configureStore} from '@reduxjs/toolkit';

import fishReducer from './fish/reducers';

export default configureStore({
    reducer: {
        fish: fishReducer,
    }
});