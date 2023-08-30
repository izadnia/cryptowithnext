export default function ItemSection({ children }: any) {
  console.log(children);
  return (
    <div className="flex flex-col justify-center ">
      {children.map((item: any) => (
        
        <div key={item} className="m-auto my-2 cursor-pointer">{item}</div>
      ))}
    </div>
  );
}
