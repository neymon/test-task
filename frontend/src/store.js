import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './behaviour/reducer';


export default configureStore({
  reducer: { data: dataReducer }
});
