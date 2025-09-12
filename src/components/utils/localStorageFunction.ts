export interface Link {
  id?: string; 
  title: string;
  link: string;
  description: string;
  tags?: string;
}

const STORAGE_KEY = "linksVault";

export function getLinks(): Link[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveLinks(links: Link[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

export function addLink(newLink: Link): void {
  const links = getLinks();
  links.push(newLink);
  saveLinks(links);
}

export function updateLink(updatedLink: Link): void {
  const links = getLinks().map((link) =>
    link.id === updatedLink.id ? updatedLink : link
  );
  saveLinks(links);
}

export function deleteLink(id: string): void {
  const links = getLinks().filter((link) => link.id !== id);
  saveLinks(links);
}
