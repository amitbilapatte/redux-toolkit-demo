const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions = require("./features/icecream/icecreamSlice").icecreamActions;
const store = require("./app/store");
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("initial state", store.getState());

// const unsubscribe = store.subscribe(() => {});
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(5));
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(6));
store.dispatch(fetchUsers());

// unsubscribe();
