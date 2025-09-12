import type { Link } from "../components/utils/localStorageFunction";

interface Props {
  links: Link[];
  onEdit: (link: Link) => void;
  onDelete: (id: string) => void;
}

export default function Outputs({ links, onEdit, onDelete }: Props) {
  return (
    <div>
      <p>Links added: </p>

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
              <td >
                <div id="outputBtn">
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

