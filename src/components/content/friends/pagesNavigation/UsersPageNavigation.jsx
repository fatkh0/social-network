import React from "react";
import s from './UsersPageNavigation.module.sass'

const UsersPageNavigation = (props) => {


  const onSetCurrentPage = (currentPage) => {

    if (props.currentPage === currentPage) return

    props.setCurrentPage(currentPage)
    props.updateUsers(currentPage, props.pageSize)
  }

  const createPageNumbers = (start = 1, end = 10) => {

    const pageNumbers = []

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i)
    }

    return (
      pageNumbers.map(t => <button
          key={t}
          onClick={() => onSetCurrentPage(t) }
          className={props.currentPage === t ? s.selected : s.pageNav_button}
        >{t}</button>)
    )
  }




  return (
    <div className={s.pageNav}>
      <button onClick={props.movePagesToLeft} className={s.pageNav_button}> &#8656; </button>

      { createPageNumbers (props.startPageNumber, props.endPageNumber ) }

      <button onClick={props.movePagesToRight} className={s.pageNav_button}> &#8658; </button>
    </div>
  )
}


export default UsersPageNavigation