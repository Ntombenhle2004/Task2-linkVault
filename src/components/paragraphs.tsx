interface Paragraph{
  name: string;
}

export default function Paragraphs({name}:Paragraph) {
  return (
    <div>
      <p id="Addlink">{name}</p>
    </div>
  );
}
