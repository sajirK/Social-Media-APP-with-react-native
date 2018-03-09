export default function counterReducer(state, action) {
  if(action.type == 'selecteUser') {
      var followingCopy = [...state.following];
      var user = {name: action.name, email: action.email, company: action.company}
      followingCopy.push(user)
      return { following: followingCopy}
  } else {
      return { following: [] }
  }
}
