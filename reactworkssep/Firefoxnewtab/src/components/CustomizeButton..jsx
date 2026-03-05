import { useState } from "react"

function CustomizeButton(){

const [open,setOpen] = useState(false)

return(

<>
<button
onClick={()=>setOpen(!open)}
className="fixed bottom-6 right-6 bg-[#3a3945] w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#444]"
>
✏️
</button>

{open && (

<div className="fixed right-0 top-0 h-full w-[320px] bg-[#2f2e39] p-6 shadow-lg">

<h2 className="text-lg font-semibold mb-4">
Customize
</h2>

<p className="text-sm text-gray-400">
Wallpaper options here
</p>

</div>

)}

</>

)

}

export default CustomizeButton