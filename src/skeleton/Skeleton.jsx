import React from "react";


export const Skeleton = ({ type }) => {
  const classes = `skeleton ${type}`;

  return (
    <div className={classes}>

    </div>
  )
}