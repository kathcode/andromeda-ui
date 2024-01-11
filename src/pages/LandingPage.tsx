import { INote } from '../types/notes';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

interface ILanding {
  data: IDataResponse | null;
  isLoading: boolean
}

interface IDataResponse {
  notes: INote[] | null
}

export const Landing = () => {
  const { data, isLoading }: ILanding = useFetch(`https://api-andromeda.onrender.com/notes`)

  return (
    <section>
      {isLoading && <p>Is loading...</p>}

      {data && data.notes?.map((note: INote) => (
        <Link to={`${note._id}/detail`} key={note._id}>
          <p>{`--- ${note.title}`}</p>
        </Link>
      ))
      }
    </section>
  )
}