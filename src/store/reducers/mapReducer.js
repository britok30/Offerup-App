import constants from '../constants'

let initialState = {
  currentLocation: {
    lat: 40.7224017,
    lng: -73.9896719
  }
};

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);
  switch (action.type) {
    case constants.LOCATION_CHANGED:
      console.log("LOCATION_CHANGED " + JSON.stringify(action));
      updated["currentLocation"] = action.data;
      return updated;
    default:
      return updated;
  }
};
