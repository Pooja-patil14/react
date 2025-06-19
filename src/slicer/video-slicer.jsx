
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     Videos: [],
//     VideosCount: 0
// }

// const videoSlicer = createSlice({
//     name: 'VideoSlice',
//     initialState,
//     reducers: {
//         addToViewLater: (state, action)=> {
//             state.Videos.push(action.payload);
//             state.VideosCount = state.Videos.length;
//         }
//     }
// })

// export const {addToViewLater} = videoSlicer.actions;
// export default videoSlicer.reducer;
// video-slicer.js

import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: []
  },
  reducers: {
    addToViewLater: (state, action) => {
      state.videos.push(action.payload);
    }
  }
});

export const { addToViewLater } = videoSlice.actions;
export default videoSlice.reducer;
