export default function ContainerComponents({
  title,
  titleSize,
  children,
}: {
  title?: string;
  titleSize?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-[100%] mt-8">
      <h1 className={` ${titleSize} my-4 px-1`}>{title}</h1>
      {children}
    </div>
  );
}
