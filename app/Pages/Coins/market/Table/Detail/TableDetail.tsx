'use client'
import Image from "next/image";

export default function TableDetail({
    text,
    TWstyle,
    image,
    children,
  }: {
    text?: any;
    TWstyle?: string;
    image?: boolean;
    children: React.ReactNode;
  }) {
    if(image){
      return <td className={`p-2 ${TWstyle}`}><Image src={text} width={40} height={40} alt={text} /></td>
    }else{
      return <td className={`p-2  ${TWstyle}`}>{children}</td>
    }
   ;
  }