// import Buttons from "./buttons";

// export default function Outputs() {
//   return (
//     <div>
//       <h3>Links added: </h3>

//       <table>
//         <tr>
//           <th>Links</th>
//           <th>Description</th>
//           <th>Title</th>
//           <th>Tags</th>
//           <th> Status</th>
//         </tr>

//         <tr>
//           <td>lol</td>
//           <td>mm</td>
//           <td>wwhfkjghkjgguyguiguihuihiohiojkjokjikj</td>
//           <td>jhbj</td>
//           <td id="outputBtn">
//             <Buttons name="UPDATE" id="update" colors="green" />
//             <Buttons name="DELETE" id="delete" colors="Red" />
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// }





import type { Link } from "../components/utils/localStorageFunction";

interface Props {
  links: Link[];
  onEdit: (link: Link) => void;
  onDelete: (id: string) => void;
}

export default function Outputs({ links, onEdit, onDelete }: Props) {
  return (
    <div>
      <h3>Links added: </h3>

      <table>
        <thead>
          <tr>
            <th>Link</th>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {links.map((l) => (
            <tr key={l.id}>
              <td>
                <a href={l.link} target="_blank">
                  {l.link}
                </a>
              </td>
              <td>{l.title}</td>
              <td>{l.description}</td>
              <td>{l.tags}</td>
              <td id="outputBtn">
                <button
                  style={{ backgroundColor: "green" }}
                  onClick={() => onEdit(l)}
                >
                  Update
                </button>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => onDelete(l.id!)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

