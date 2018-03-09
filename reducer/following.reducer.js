export default function following(state=[], action) {  
  if(action.type == 'selecteUser') {
      var followingCopy = [...state];
      var user = {name: action.name, email: action.email, company: action.company}
      followingCopy.push(user)
      return followingCopy;
  } else {
      return state;
  }
}
