import React,{useContext} from 'react'
import usercontext from '../Context/UserContext'

function Profile() {
    const{user}=useContext(usercontext);
  if(!user) {
    return <div>please login</div>

  }
  else{
  return <div>welcome {user.username}</div>
}
}

export default Profile
