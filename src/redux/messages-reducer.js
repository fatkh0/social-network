const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const initialState = {
  messages: [
    {id: 1, direction: 0, message: 'Message1'},
    {id: 2, direction: 0, message: 'Message2'},
    {id: 3, direction: 1, message: 'Message3'},
    {id: 4, direction: 0, message: 'Message4'},
    {id: 5, direction: 1, message: 'Message5'},
    {id: 6, direction: 0, message: 'Message6'},
    {id: 7, direction: 0, message: 'Message7'},
    {id: 8, direction: 1, message: 'Message8'},
    {id: 9, direction: 1, message: 'Message9'},
    {id: 10, direction: 1, message: 'Message10'},
    {id: 11, direction: 1, message: 'Message11'},
    {id: 12, direction: 1, message: 'Message12'},
    {id: 13, direction: 0, message: 'Message13'},
    {id: 14, direction: 0, message: 'Message14'},
    {id: 15, direction: 1, message: 'Message15'},
    {id: 16, direction: 0, message: 'Message16'},
  ],

  newMessageText: '',

  dialogs: [
    {id: 1, name: "Erik Fatkhutdinov"},
    {id: 2, name: "AAAAAAAAAAAAAAAAAAAA"},
    {id: 3, name: "BBBBBBBBBBBBBBBBBBB"},
    {id: 4, name: "CCCCCCCCCCCCCCCCCCCC"},
    {id: 5, name: "DDDDDDDDDDDDDDDDDDDDD"},
    {id: 6, name: "EEEEEEEEEEEEEEEEEEEEEEEE"},
    {id: 7, name: "FFFFFFFFFFFFFFFFFFF"},
    {id: 8, name: "GGGGGGGG"},
    {id: 9, name: "HHHHHHHHHHHHH"},
    {id: 10, name: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII"},
    {id: 11, name: "JJJJJJJJJJ"},
    {id: 12, name: "KKKKKK"},
    {id: 13, name: "LLLLLLLLLLLLLLL"},
    {id: 14, name: "MMMMMMM MMMMMMMMMMMMM"},
    {id: 15, name: "NNNN NNNNNNNNNNNNNNNNNNNNN"},
    {id: 16, name: "OOOOOOOOO OOOOOOOOOOO"},
    {id: 17, name: "PPPP PPPPPPP"},
    {id: 18, name: "QQQQQ QQQQQQQQ"},
    {id: 19, name: "RRRRRRRRRRR RRRRRRR"},
  ],
}

const messagesReducer = (state = initialState, action) => {

  switch(action.type) {

    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessageText: action.text
      }

    case SEND_MESSAGE:
      const message = state.newMessageText
      if (message) {
        const newMessage = {
          id: state.messages.length + 1,
          direction: 0,
          message
        }

        return {
          ...state,
          messages: [...state.messages, newMessage],
          newMessageText: ''
        }
      }
      return state

    default:
      return state
  }
}
export default messagesReducer

export const sendMessage = () => ({
  type: SEND_MESSAGE
})

export const updateCurrentText = (text) => ({
  type: UPDATE_NEW_MESSAGE,
  text
})