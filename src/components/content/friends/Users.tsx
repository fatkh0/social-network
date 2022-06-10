import React from "react";
import s from './Users.module.sass'
import userPhoto from '../../../assets/images/user-photo.png'
import {NavLink} from "react-router-dom";
import { UserType } from "../../../types/types";

type PropsType = {
  users: Array<UserType>
  addToFriends: (userId: number) => void
  removeFromFriends: (userId: number) => void
  usersInFetching: Array<number>
  setCurrentUserId: (userId: number) => void
}


const Users: React.FC<PropsType> = React.memo( ({
  users, addToFriends, removeFromFriends, usersInFetching, setCurrentUserId
}) => {
  return (
    <div className={s.users}>
      {users.map (user => {
        const smallUserPhoto: string = user.photos.small ?? userPhoto
        const largeUserPhoto: string = user.photos.large

        const stylePhoto = {
          backgroundImage: `url(${smallUserPhoto})`
        }

        return (
          <NavLink key={user.id} to={`/profile/${user.id}`}>
            <div key={user.id} className={s.user} onClick={() => setCurrentUserId(user.id)}>
              <div className={s.user_wrapper}>
                <div className={s.user_avatar} style={stylePhoto}></div>
                <div className={s.user_info}>
                  <div className={s.user_info_name}>{ user.name }</div>
                  <div className={s.user_info_location}> { 'props.city' }, { 'props.country' }</div>
                </div>

                <div className={s.user_actions}>
                  { user.followed
                    ? <button
                      disabled={usersInFetching.some(id => id === user.id)}
                      onClick={(e) => {
                        e.preventDefault()
                          removeFromFriends(user.id)
                        }}
                      className={s.remove_button}
                    >Remove From Friends</button>
                    : <button
                      disabled={usersInFetching.some(id => id === user.id)}
                      onClick={ (e) =>  {
                        e.preventDefault()
                        addToFriends(user.id)
                        }}
                    >Add To Friends</button> } <button>Send Message</button>
                </div>
              </div>
            </div>
          </NavLink>

        )
      })}
    </div>
  )
})

export default Users