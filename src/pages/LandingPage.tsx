import react, { useEffect, useState } from 'react'
import { INotes } from '../types/notes';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const Landing = () => {

    const { data, isLoading } = useFetch(`https://api-andromeda.onrender.com/notes`)

    return (
        <section>
            {isLoading ? <p>Is loading...</p> :
                data.notes.map((note: INotes) => (

                    <Link to={`${note._id}/detail`} key={note._id}>
                        <p>{`--- ${note.title}`}</p>
                    </Link>


                ))
            }


        </section>
    )
}