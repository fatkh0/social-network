import profileReducer, { addPost, deletePost } from "./profile-reducer"


const initialState = {
  postData: [
    {id: 1, likeCount: 4, postText: 'post1'},
    {id: 2, likeCount: 2, postText: 'post2'},
    {id: 3, likeCount: 4, postText: 'post3'},
    {id: 4, likeCount: 4, postText: 'post4'},
    {id: 5, likeCount: 2, postText: 'post5'},
    {id: 6, likeCount: 4, postText: 'post6'},
    {id: 7, likeCount: 2, postText: 'post7'},
    {id: 8, likeCount: 4, postText: 'post8'},
    {id: 9, likeCount: 2, postText: 'post9'},
  ],
  avatar: null,
  userInfo: null,
  currentUserId: null,
  photos: null,
  status: ''
}


it ('posts length should be incremented', () => {
  const state = {
    postData: [
      {id: 1, likeCount: 4, postText: 'post1'},
      {id: 2, likeCount: 2, postText: 'post2'},
      {id: 3, likeCount: 4, postText: 'post3'},
      {id: 4, likeCount: 4, postText: 'post4'},
      {id: 5, likeCount: 2, postText: 'post5'},
      {id: 6, likeCount: 4, postText: 'post6'},
      {id: 7, likeCount: 2, postText: 'post7'},
      {id: 8, likeCount: 4, postText: 'post8'},
      {id: 9, likeCount: 2, postText: 'post9'},
    ]
  }

  const action = addPost('new Post')
  const newState = profileReducer(state, action)

  expect(newState.postData.length).toBe(10)
})


it ('posts length should be decrimented', () => {
  const state = {
    postData: [
      {id: 1, likeCount: 4, postText: 'post1'},
      {id: 2, likeCount: 2, postText: 'post2'},
      {id: 3, likeCount: 4, postText: 'post3'},
      {id: 4, likeCount: 4, postText: 'post4'},
      {id: 5, likeCount: 2, postText: 'post5'},
      {id: 6, likeCount: 4, postText: 'post6'},
      {id: 7, likeCount: 2, postText: 'post7'},
      {id: 8, likeCount: 4, postText: 'post8'},
      {id: 9, likeCount: 2, postText: 'post9'},
    ]
  }

  const action = deletePost(6)
  const newState = profileReducer(state, action)

  expect(newState.postData.length).toBe(8)
})


it (`new post text should be 'new Post'`, () => {
  const state = {
    postData: [
      {id: 1, likeCount: 4, postText: 'post1'},
      {id: 2, likeCount: 2, postText: 'post2'},
      {id: 3, likeCount: 4, postText: 'post3'},
      {id: 4, likeCount: 4, postText: 'post4'},
      {id: 5, likeCount: 2, postText: 'post5'},
      {id: 6, likeCount: 4, postText: 'post6'},
      {id: 7, likeCount: 2, postText: 'post7'},
      {id: 8, likeCount: 4, postText: 'post8'},
      {id: 9, likeCount: 2, postText: 'post9'},
    ]
  }

  const action = addPost('new Post')
  const newState = profileReducer(state, action)

  expect(newState.postData[9].postText).toBe('new Post')
})



