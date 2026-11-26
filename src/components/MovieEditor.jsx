import React, { useRef, useState } from 'react'
import './MovieEditor.css'

const MovieEditor = ({onCreate}) => {
    const [content, setContent] = useState('')
    const [rating, setRating] = useState('0')
    const [watchedDate, setWatchedDate] = useState('')

    const inputRef = useRef()
    const dateRef = useRef()

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onKeyDown = (e) => {
        if(e.keyCode == 13){
            onSubmit()
        }
    }

    const onSubmit = () => {
        if(content === ''){
            inputRef.current.focus()
            return
        }

        if(watchedDate === ''){
            dateRef.current.focus()
            return
        }

        onCreate(content, Number(rating), watchedDate)

        setContent('')
        setRating('0')
        setWatchedDate('')
    }

    return (
        <div className='Editor'>
            <input
                type="text"
                ref={inputRef}
                value={content}
                onKeyDown={onKeyDown}
                onChange={onChangeContent}
                placeholder='영화 제목을 입력하세요.'
            />

            <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            >
                <option value="0">⭐ 0</option>
                <option value="0.5">⭐ 0.5</option>
                <option value="1">⭐ 1</option>
                <option value="1.5">⭐ 1.5</option>
                <option value="2">⭐ 2</option>
                <option value="2.5">⭐ 2.5</option>
                <option value="3">⭐ 3</option>
                <option value="3.5">⭐ 3.5</option>
                <option value="4">⭐ 4</option>
                <option value="4.5">⭐ 4.5</option>
                <option value="5">⭐ 5</option>
            </select>

            <input
                type="date"
                ref={dateRef}
                value={watchedDate}
                onChange={(e) => setWatchedDate(e.target.value)}
            />

            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default MovieEditor