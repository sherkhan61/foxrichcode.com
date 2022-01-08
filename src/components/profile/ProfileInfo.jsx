import React from "react"


export const ProfileInfo = ({ user }) => {
  const cloneUser = Object.assign({}, user);
  return (
    <>
      <p>Имя: {cloneUser.firstname}</p>
      <p>Фамилия: {cloneUser.lastname}</p>
      <p>email: {cloneUser.email}</p>
      <p>имя учетной записи: {cloneUser.username}</p>
    </>
  )
}