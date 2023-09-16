"use client";



import { usePathname, } from 'next/navigation';

function Page() {

  const router = usePathname();
  const coinName = router.substring(router.lastIndexOf('/')+1)
  


  return (
    <div>
      <div> fsdf {coinName}</div>
    </div>
  );
}

export default Page;
