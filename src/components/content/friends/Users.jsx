import React from "react";
import s from './Users.module.sass'
import userPhoto from '../../../assets/images/user-photo.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {
  return (
    <div className={s.users}>
      {props.users.map (user => {
        const smallUserPhoto = user.photos.small ?? userPhoto
        const largeUserPhoto = user.photos.large

        const stylePhoto = {
          backgroundImage: `url(${smallUserPhoto})`
        }

        return (
          <NavLink key={user.id} to={`/profile/${user.id}`}>
            <div key={user.id} className={s.user} onClick={() => props.setCurrentUserId(user.id)}>
              <div className={s.user_wrapper}>
                <div className={s.user_avatar} style={stylePhoto}></div>
                <div className={s.user_info}>
                  <div className={s.user_info_name}>{ user.name } { /*props.surname*/ }</div>
                  <div className={s.user_info_age}>{ /*props.age*/ }</div>
                  <div className={s.user_info_location}> { 'props.city' }, { 'props.country' }</div>
                </div>

                <div className={s.user_actions}>
                  { user.followed
                    ? <button
                      disabled={props.usersInFetching.some(id => id === user.id)}
                      onClick={(e) => {
                        e.preventDefault()
                          props.removeFromFriends(user.id)
                        }}
                      className={s.remove_button}
                    >Remove From Friends</button>
                    : <button
                      disabled={props.usersInFetching.some(id => id === user.id)}
                      onClick={ (e) =>  {
                        e.preventDefault()
                        props.addToFriends(user.id)
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
}

export default Users