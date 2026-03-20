import React from 'react'

const Card = (props) => {
  return (
    <div>
         <a href={props.elem.url} target='_blank'>
          <div className='h-40 w-44 bg-white overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300'>
            <img
              className='h-full w-full object-cover transition-opacity duration-500'
              src={`https://picsum.photos/id/${props.elem.id}/352/200`}
              loading="lazy"
              decoding="async"
              alt={props.elem.author}
            />
          </div>
          <h2 className=' font-bold text-lg'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card