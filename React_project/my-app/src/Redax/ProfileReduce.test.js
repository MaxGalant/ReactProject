const {
  default: ProfileReducer,
  AddPostActionCreator,
  DeletePostActionCreator,
} = require("./ProfileReduce");
let State = {
  PostData: [
    { id: 1, like: 0, message: "Hi" },
    { id: 2, like: 1, message: "My posts , better than your" },
    { id: 3, like: 5, message: "My respect , wow" },
    { id: 4, like: 8, message: "Amusing" },
    { id: 5, like: 2, message: "Bruh" },
    { id: 6, like: 3, message: "Haha it is desgation" },
  ],
};
test("new post should be add,length should be 7", () => {
  let action = AddPostActionCreator("makam");
  let newState = ProfileReducer(State, action);
  expect(newState.PostData.length).toBe(7);
});
test("new post should be makam", () => {
  let action = AddPostActionCreator("makam");
  let newState = ProfileReducer(State, action);
  expect(newState.PostData[6].message).toBe("makam");
});
test("Length after deleting should be 6", () => {
  let action = DeletePostActionCreator("1");
  let newState = ProfileReducer(State, action);
  expect(newState.PostData.length).toBe(5);
});
