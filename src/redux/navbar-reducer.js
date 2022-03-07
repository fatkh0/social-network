
const SELECT_NAVBAR_ITEM = 'SELECT_NAVBAR_ITEM'
const SET_PROFILE_PAGE = 'SET_PROFILE_PAGE'

const initialState = {
  selectedItem: null,
  navbarItems: [
    {id: 1, path: '/profile',   pageName: 'Profile'},
    {id: 2, path: '/friends',   pageName: 'Friends'},
    {id: 3, path: '/messages',  pageName: 'Messages'},
    {id: 4, path: '/news',      pageName: 'News'},
    {id: 5, path: '/music',     pageName: 'Music'},
    {id: 6, path: '/settings',  pageName: 'Settings'},
  ]
}

const NavbarReducer = (state = initialState, action) => {
  switch (action.type){
    case SELECT_NAVBAR_ITEM:
      return {...state, selectedItem: action.navbarItem}

    case SET_PROFILE_PAGE:
      return {...state, selectedItem: '/profile'}

    default:
      return state
  }
}

export const selectNavbarItem = (navbarItem) => ({type: SELECT_NAVBAR_ITEM, navbarItem})
export const setProfilePage = () => ({type: SET_PROFILE_PAGE})

export default NavbarReducer