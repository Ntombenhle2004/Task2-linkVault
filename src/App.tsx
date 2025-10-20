import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/footer";
import Heading from "./components/heading";
import Outputs from "./components/outputs";
import Paragraphs from "./components/paragraphs";
import Searchbar from "./components/searchbar";
import type { Link } from "./utils/localStorageFunction";

import {
  getLinks,
  addLink,
  updateLink,
  deleteLink,
} from "./utils/localStorageFunction";
import isValidURL from "./utils/linkverify";

function App() {
  const [links, setLinks] = useState<Link[]>([]);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState<Link | null>(null);
  const [currentlink, setCurrentLink] = useState<Link>();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    setLinks(getLinks());
  }, []);

  const linkExists = (inputLink: string): boolean => {
    let exists = false;
    const links: Link[] = getLinks();
    links.forEach((link) => {
      exists = link.link === inputLink;
    });
    return exists;
  };

  const handleSave = () => {
    if (!title || !link || !description || !tags) {
      alert("information is incomplite!");
      return;
    }
    if (!isValidURL(link)) {
      alert("Link is not valid!!");
      return;
    }

    const newLink = {
      title: title,
      link: link,
      tags: tags,
      description: description,
    };

    if (editing) {
      console.log(currentlink, newLink);
      const isSame =
        currentlink!.title === newLink.title &&
        currentlink!.link === newLink.link &&
        currentlink!.description === newLink.description &&
        currentlink!.tags === newLink.tags;

      if (isSame) {
        alert("No changes made...please make changes to update!!");
        return;
      }
      const updated: Link = { ...editing, title, link, description, tags };
      updateLink(updated);
      setLinks(getLinks());
      setEditing(null);
      alert("updated successfully!!");
    } else {
      if (linkExists(link)) {
        alert("Link already exists");
        return;
      }
      const newLink: Link = {
        id: Date.now().toString(),
        title,
        link,
        description,
        tags,
      };

      addLink(newLink);
      setLinks(getLinks());
    }

    setTitle("");
    setLink("");
    setDescription("");
    setTags("");
    alert("link saved");
  };

  const handleEdit = (link: Link) => {
    setEditing(link);
    setTitle(link.title);
    setLink(link.link);
    setDescription(link.description);
    setTags(link.tags || "");
    let currentLinkdetails: Link = {
      title: link.title,
      link: link.link,
      tags: link.tags,
      description: link.description,
    };
    setCurrentLink(currentLinkdetails);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      deleteLink(id);
      setLinks(getLinks());
      alert("successfully deleted");
    }
  };

  const filteredLinks = links.filter(
    (l) =>
      l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.link.toLowerCase().includes(search.toLowerCase()) ||
      l.description.toLowerCase().includes(search.toLowerCase()) ||
      (l.tags && l.tags.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <Heading />
      <div className="mySection">
        <Searchbar value={search} onChange={(e) => setSearch(e.target.value)} />

        <div className="addlink">
          <Paragraphs name={editing ? "Update link:" : "Add link:"} />

          <div className="myinputs">
            <input
              type="text"
              placeholder="Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Tag"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <br />
          </div>

          <div className="AddlinkBtn">
            <button style={{ backgroundColor: "green" }} onClick={handleSave}>
              {editing ? "Update" : "Save"}
            </button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setEditing(null);
                setTitle("");
                setLink("");
                setDescription("");
                setTags("");
              }}
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="savedlinks">
          <div className="MyOutputs">
            <Outputs
              links={filteredLinks}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
