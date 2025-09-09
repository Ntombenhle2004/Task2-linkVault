interface Output {
  name: string,
}

export default function Outputs({name}: Output) {
  return (
    <div>
      <p typeof="text" id="output">
        {name}
      </p>
    </div>
  );
}
