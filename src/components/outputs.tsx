import Buttons from "./buttons";

export default function Outputs() {
  return (
    <div>
      <h3>Links added: </h3>

      <table>
        <tr>
          <th>Links</th>
          <th>Description</th>
          <th>Title</th>
          <th>Tags</th>
          <th> Status</th>
        </tr>

        <tr>
          <td>lol</td>
          <td>mm</td>
          <td>wwhfkjghkjgguyguiguihuihiohiojkjokjikj</td>
          <td>jhbj</td>
          <td id="outputBtn">
            <Buttons name="UPDATE" id="update" colors="green" />
            <Buttons name="DELETE" id="delete" colors="Red" />
          </td>
        </tr>
      </table>
    </div>
  );
}
