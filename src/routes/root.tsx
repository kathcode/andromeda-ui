import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <a href={`/notes`}>List</a>
            </li>
            <li>
              <a href={`/notes/create`}>Create</a>
            </li>
            <li>
              <a href={`/notes/1/detail`}>Detail</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"><Outlet /></div>
    </>
  );
}