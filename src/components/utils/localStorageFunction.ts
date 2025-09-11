// localstoragefunctions.ts

export interface Link {
  id?: string; // unique id
  title: string;
  link: string;
  description: string;
  tags?: string;
}

const STORAGE_KEY = "linksVault";

// get all saved links
export function getLinks(): Link[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// save entire list to localStorage
export function saveLinks(links: Link[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

// add new link
export function addLink(newLink: Link): void {
  const links = getLinks();
  links.push(newLink);
  saveLinks(links);
}

// update existing link
export function updateLink(updatedLink: Link): void {
  const links = getLinks().map((link) =>
    link.id === updatedLink.id ? updatedLink : link
  );
  saveLinks(links);
}

// delete link by id
export function deleteLink(id: string): void {
  const links = getLinks().filter((link) => link.id !== id);
  saveLinks(links);
}
