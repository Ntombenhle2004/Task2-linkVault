import './App.css'
import Buttons from './components/buttons'
import Heading from './components/heading'
import Inputs from './components/Inputs'
import Outputs from './components/outputs'
import Paragraphs from './components/paragraphs'
import Searchbar from './components/searchbar'

function App() {


  return (
    <>
      <div className="mySection">
        <Heading />
        <Searchbar />

        <div className="addlink">
          <Paragraphs name="Add link:" />

          <div className="myinputs">
            <Inputs text="Tag" />
            <Inputs text="Link" />
            <Inputs text="Title" />
            <Inputs text="Description" id="descrip" />
          </div>
          <div className="AddlinkBtn">
            <Buttons name="SAVE" id="save" colors="green" />
            <Buttons name="CANCEL" id="Cancel" colors="Red" />
          </div>
        </div>

        <div className="savedlinks">
          <Paragraphs name="Saved links:" />
          <div className="MyOutputs">
            <Outputs name="outpt" />
            <Buttons name="UPDATE" id="update" colors="green" />
            <Buttons name="DELETE" id="delete" colors="Red" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
