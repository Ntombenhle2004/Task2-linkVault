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
            <Inputs text="Link" id="link" /> <br />
            <Inputs text="Title" id="title" /> <br />
            <Inputs text="Description" id="descrip" /> <br/>
            <Inputs text="Tag" id="tag" /> <br />
          </div>

          <div className="AddlinkBtn">
            <Buttons name="SAVE" id="save" colors="green" /> <br />
            <Buttons name="CANCEL" id="Cancel" colors="Red" />
          </div>
        </div>

        <div className="savedlinks">
          <div className="MyOutputs">
            <Outputs />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
