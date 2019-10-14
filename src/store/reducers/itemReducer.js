import constants from "../constants";

let initialState = {
  all: [
    {
      id: "1",
      price: 90,
      name: "Nike Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      position: { lat: 40.7224017, lng: -73.9896719 },
      seller: {
        username: "john_doe",
        image:
          "https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/public/images/avatar/large/chris.jpg?raw=true"
      }
    },
    {
      id: "2",
      name: "iPhone X",
      price: 750,
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
      position: { lat: 40.71224017, lng: -73.9896719 },
      seller: {
        username: "elon_musk",
        image:
          "https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/public/images/avatar/large/daniel.jpg?raw=true"
      }
    },
    {
      id: "3",
      price: 1700,
      name: "Macbook Pro",
      image:
        "https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1879&q=80",
      position: { lat: 40.70224017, lng: -73.9796719 },
      seller: {
        username: "jeff_bezos",
        image:
          "https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/public/images/avatar/large/justen.jpg?raw=true"
      }
    },
    {
      id: "4",
      price: 80,
      name: "Home Pod",
      image:
        "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      position: { lat: 40.7236528, lng: -74.0050567 },
      seller: {
        username: "bill_gates",
        image:
          "https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/public/images/avatar/large/matt.jpg?raw=true"
      }
    },
    {
      id: "5",
      price: 20,
      name: "Books",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1974&q=80",
      position: { lat: 40.7505189, lng: -74.0014333 },
      seller: {
        username: "oprah_winfrey",
        image:
          "https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/public/images/avatar/large/laura.jpg?raw=true"
      }
    },
    {
      id: "6",
      price: 24000,
      name: "BMW",
      image:
        "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1967&q=80",
      position: { lat: 40.7507242, lng: -73.9916026 },
      seller: {
        username: "larry_page",
        image:
          "https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/public/images/avatar/large/elliot.jpg?raw=true"
      }
    }
  ]
};

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);
  switch (action.type) {
    case constants.ITEM_ADDED:
      console.log("ITEM ADDED: " + JSON.stringify(action.data));
      let all = Object.assign([], updated.all);
      all.push(action.data);
      updated["all"] = all;

      return updated;
    default:
      return updated;
  }
};
