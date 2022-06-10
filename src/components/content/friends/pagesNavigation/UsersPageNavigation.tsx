import React, { useState } from "react";
import s from './UsersPageNavigation.module.sass'


type PropsType = {
  currentPage: number
  setCurrentPage: (nextPage: number) => void
  updateUsers: (nextPage: number, pageSize: number) => void
  pageSize: number
  movePagesToLeft: () => void
  movePagesToRight: () => void
  startPageNumber: number
  endPageNumber: number
  totalUsersCount: number
}

const UsersPageNavigation: React.FC<PropsType> = React.memo( ({
  currentPage,
  setCurrentPage,
  updateUsers,
  pageSize,
  totalUsersCount
}) => {

  const [startPageNumber, setStartPageNumber] = useState<number | null>(1)
  const [endPageNumber, setEndPageNumber] = useState<number | null>(10)
  //const [currentPage, setCurrentPage] = useState<number | null>(null)


  const onSetCurrentPage = (nextPage) => {
    if (currentPage === nextPage) return null

    setCurrentPage(nextPage)
    updateUsers(nextPage, pageSize)
  }

  const createPageNumbers = (start = 1, end = 10) => {
    const pageNumbers: Array<number> = []

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i)
    }


    return (
      pageNumbers.map(t => <button
          key={t}
          onClick={() => onSetCurrentPage(t) }
          className={currentPage === t ? s.selected : s.pageNav_button}
        >{t}</button>)
    )
  }


  /*
    case MOVE_PAGES_TO_LEFT:
      if (state.startPageNumber <= 1) return state
      return {
        ...state,
        startPageNumber: --state.startPageNumber,
        endPageNumber: --state.endPageNumber
      }

    case MOVE_PAGES_TO_RIGHT:
      const pagesCount = Math.ceil (state.totalUsersCount / state.pageSize)
      if (state.endPageNumber >= pagesCount) return state
      return {
        ...state,
        startPageNumber: ++state.startPageNumber,
        endPageNumber: ++state.endPageNumber
      }
*/

  const movePagesToLeft = () => {
    if (startPageNumber <= 1) return 

    setStartPageNumber((num: number) => --num)
    setEndPageNumber((num: number) => --num)
  }

  const movePagesToRight = () => {
    const pagesCount = Math.ceil (totalUsersCount / pageSize)
    if (endPageNumber >= pagesCount) return 

    setStartPageNumber((num: number) => ++num)
    setEndPageNumber((num: number) => ++num)
  }


  return (
    <div className={s.pageNav}>
      <button onClick={movePagesToLeft} className={s.pageNav_button}> &#8656; </button>

      { createPageNumbers (startPageNumber, endPageNumber ) }

      <button onClick={movePagesToRight} className={s.pageNav_button}> &#8658; </button>
    </div>
  )
})


export default UsersPageNavigation