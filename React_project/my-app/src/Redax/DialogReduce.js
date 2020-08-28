const SEND_MESSAGE = "SEND-MESSAGE";
let InitialState = {
  DialogData: [
    {
      src: "https://avatarfiles.alphacoders.com/161/thumb-161909.jpg",
      id: 1,
      name: "Max",
    },
    {
      src: "https://image.freepik.com/free-vector/_79416-67.jpg",
      id: 2,
      name: "Nestor",
    },
    {
      src:
        "https://png.pngtree.com/png-clipart/20200224/original/pngtree-cute-rat-avatar-with-a-yellow-background-png-image_5205694.jpg",
      id: 3,
      name: "Daniel",
    },
    {
      src:
        "https://www.meme-arsenal.com/memes/cd2652ae9d5c44e3c695d72fd37f647e.jpg",
      id: 4,
      name: "Oleg",
    },
    {
      src:
        "https://i.pinimg.com/originals/02/29/cf/0229cf00478ba83e641dfd23ef0339c5.png",
      id: 5,
      name: "Andrey",
    },
  ],
  MessageData: [
    { id: 1, message: "Hello, how are you?", type: "my" },
    { id: 2, message: "Hi, I am nice" },
    { id: 3, message: "Will you go with me to the cinema" },
    { id: 4, message: "To the cinema? hmmm, good idea, what film? " },
    { id: 5, message: "Avengers" },
  ],
};
const DialogsReducer = (State = InitialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.NewMessageText;
      let MessageNew = {
        id: 6,
        message: body,
      };
      return {
        ...State,
        NewMessageText: "",
        MessageData: [...State.MessageData, MessageNew],
      };
    }

    default:
      return State;
  }
};
export const SendMessageActionCreator = (NewMessageText) => {
  return {
    type: SEND_MESSAGE,
    NewMessageText,
  };
};

export default DialogsReducer;
