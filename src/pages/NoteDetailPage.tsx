import { useParams } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor';

import { useFetch } from '../hooks/useFetch';
import { INote } from '../types/notes';

interface IDataResponse {
    data: INote | null,
    isLoading: boolean
}

export const NoteDetailPage = () => {
    const { id } = useParams()
    const { data, isLoading }: IDataResponse = useFetch(`https://api-andromeda.onrender.com/notes/${id}`)

    return (
        <section>
            {isLoading ? <p>Loading...</p> :
                data && (<>
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