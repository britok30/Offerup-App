import constants from '../constants'

let initialState = {
  all: [
    {
      id: 1,
      key: "1",
      price: 90,
      defaultAnimation: 2,
      label: "Nike Jordans",
      position: { lat: 40.7224017, lng: -73.9896719 }
    },
    {
      id: 2,
      key: "2",
      defaultAnimation: 2,
      label: "iPhone XS Max",
      price: 750,
      position: { lat: 40.71224017, lng: -73.9896719 }
    },
    {
      id: 3,
      key: "3",
      price: 400,
      defaultAnimation: 2,
      label: "60 Inch 4K TV",
      position: { lat: 40.70224017, lng: -73.9796719 }
    },
    {
      id: 4,
      key: "4",
      price: 80,
      defaultAnimation: 2,
      label: "Lawn Mower",
      position: { lat: 40.7236528, lng: -74.0050567 }
    },
    {
      id: 5,
      key: "5",
      price: 20,
      defaultAnimation: 2,
      label: "Books",
      position: { lat: 40.7505189, lng: -74.0014333 }
    },
    {
      id: 6,
      key: "6",
      price: 12000,
      defaultAnimation: 2,
      label: "2015 Honda Accord",
      position: { lat: 40.7507242, lng: -73.9916026 }
    }
  ]
};

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);
  switch (action.type) {
    case constants.ITEM_ADDED:
      console.log("ITEM ADDED: " + JSON.stringify(action.data));
      let all = Object.assign([], updated.all)
      all.push(action.data)
      updated['all'] = all


      return updated;
    default:
      return updated;
  }
};
