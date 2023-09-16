export default function TableDetail({
    text,
    TWstyle,
    image,
    children,
  }: {
    text?: string;
    TWstyle?: string;
    image?: boolean;
    children: React.ReactNode;
  }) {
    return <td className="p-2">{children}</td>;
  }