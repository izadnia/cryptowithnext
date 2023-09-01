import { Children } from "react"


function ContainerDefault({children}:any) {
  return (
    <div className="flex justify-between w-[full] bg-stone-200 p-4 ">
        {children}
    </div>
  )
}



export default ContainerDefault