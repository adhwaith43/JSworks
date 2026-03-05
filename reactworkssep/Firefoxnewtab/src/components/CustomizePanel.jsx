import { useRef, useEffect } from "react"
import WallpaperOptions from "./WallpaperOptions"

function CustomizePanel({open,setOpen,setWallpaper}){

const panelRef = useRef()

useEffect(()=>{

function handleClick(e){

if(panelRef.current && !panelRef.current.contains(e.target)){
setOpen(false)
}

}

document.addEventListener("mousedown",handleClick)

return ()=>document.removeEventListener("mousedown",handleClick)

},[])

if(!open) return null

return(

<div className="fixed inset-0 flex justify-end">

<div
ref={panelRef}
className="w-[330px] bg-[#3a3945] h-full p-6 overflow-y-auto"
>

<div className="flex justify-between mb-6">

<h2 className="text-lg font-semibold">
Wallpapers
</h2>

<button onClick={()=>setOpen(false)}>✕</button>

</div>

<WallpaperOptions setWallpaper={setWallpaper}/>

</div>

</div>

)

}

export default CustomizePanel