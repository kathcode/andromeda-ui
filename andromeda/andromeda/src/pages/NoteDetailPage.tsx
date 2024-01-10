import react, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor';

import { useFetch } from '../hooks/useFetch';

export const NoteDetailPage = () => {
    const { id } = useParams()
    const { data, isLoading } = useFetch(`https://api-andromeda.onrender.com/notes/${id}`)

    return (
        <section>
            {isLoading ? <p>Loading...</p> :
                data && (<>
                    <p>{data.title}</p>
                    {/*<MDEditor
                        value={data.textContent}

                />*/}
                    <MDEditor.Markdown source={data.textContent} />
                    <p>Tags: {data.tags.join(',')}</p>

                </>)
            }
        </section>
    )
}