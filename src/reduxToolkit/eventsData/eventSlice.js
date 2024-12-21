import {createSlice} from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    eventData: [],
    likedEvents: [],
  },
  reducers: {
    storeEvents(state, action) {
      let data = action.payload?.events;
      state.eventData = data;
    },
    likeEvent(state, action) {
      const event = action.payload;
      const tempEvent = [...state.likedEvents];
      state.eventData.map(item => {
        if (item.event_date_id === event) {
          tempEvent.push(item);
        }
      });
      state.likedEvents = tempEvent;
    },
    unlikeEvent(state, action) {
      const event = action.payload;
      const tempEvent = [...state.likedEvents];
      state.likedEvents = tempEvent.filter(
        item => item?.event_date_id !== event,
      );
    },
  },
});

export const {storeEvents, likeEvent, unlikeEvent} = eventSlice.actions;
export default eventSlice.reducer;
