import {useRef,useEffect} from "react"
import WallpaperOptions from "./WallpaperOptions"

function CustomizePanel({
open,setOpen,setWallpaper,
showShortcuts,setShowShortcuts,
shortcutRows,setShortcutRows,
showStories,setShowStories
}){

const panelRef=useRef()

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
className="w-[330px] bg-[#3a3945] h-full p-6"
>

<div className="flex justify-between mb-6">

<h2 className="text-lg font-semibold">
Wallpapers
</h2>

<button onClick={()=>setWallpaper("")}>
Reset to default
</button>

</div>

<WallpaperOptions setWallpaper={setWallpaper}/>

<hr className="my-6"/>

<div className="mb-6">

<label className="flex items-center gap-2">

<input
type="checkbox"
checked={showShortcuts}
onChange={()=>setShowShortcuts(!showShortcuts)}
/>

Shortcuts

</label>

<select
value={shortcutRows}
onChange={(e)=>setShortcutRows(Number(e.target.value))}
className="mt-2 bg-[#2b2a33]"
>

<option value={1}>1 row</option>
<option value={2}>2 rows</option>
<option value={3}>3 rows</option>
<option value={4}>4 rows</option>

</select>

</div>

<label className="flex items-center gap-2">

<input
type="checkbox"
checked={showStories}
onChange={()=>setShowStories(!showStories)}
/>

Recommended stories

</label>

</div>

</div>

)

}

export default CustomizePanel