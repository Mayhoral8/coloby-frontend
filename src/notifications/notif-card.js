import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const NotifCard = (props) => {
  const dateFormat = (rawDate)=>{
    const newDate = new Date(rawDate)
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(newDate);
    return formattedDate;
  }

  return (
    <article className={`flex  ${props.notif.is_read === false && 'border-l-2 border-red-400 border-solid'} flex-row justify-between bg-white px-4 text-xs h-10 items-center `}>
            <div className='flex flex-row items-center space-x-2'>
            <h2>{props.notif.message}</h2>
            </div>
            <div className='flex flex-row items-center space-x-2'>
                <span>{dateFormat(props.notif.timestamp)}</span>
                <BsThreeDotsVertical/>
            </div>
        </article>
  )
}

export default NotifCard