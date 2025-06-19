
// import { configureStore } from "@reduxjs/toolkit";
// import {videoSlicer} from '../slicer/video-slicer'


// export default configureStore({
//     reducer: { store: videoSlicer  }
// })


// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../slicer/video-slicer';

const store = configureStore({
  reducer: {
    video: videoReducer // ✅ NOT "store": ...
  }
});

export default store;
