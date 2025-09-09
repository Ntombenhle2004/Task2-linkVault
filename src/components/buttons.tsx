interface Button{
  name:string,
  colors: string,
  id: string,
}

export default function Buttons({ name, colors, id }: Button) {
  return (
    <div>
      <button type="submit" id={id}  style={{ backgroundColor: colors }}>
        {name}
      </button>
    </div>
  );
}
