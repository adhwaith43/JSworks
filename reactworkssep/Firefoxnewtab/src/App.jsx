import { useState, useEffect } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Shortcuts from "./components/Shortcuts"
import StoryGrid from "./components/StoryGrid"
import CustomizeButton from "./components/CustomizeButton"
import CustomizePanel from "./components/CustomizePanel"

function App(){

const [panelOpen,setPanelOpen] = useState(false)
<<<<<<< HEAD
const [wallpaper,setWallpaper] = useState("")
=======

/* wallpaper */
const [wallpaper,setWallpaper] = useState(()=>{
return localStorage.getItem("wallpaper") || ""
})

/* shortcuts toggle */
const [showShortcuts,setShowShortcuts] = useState(true)

/* shortcut rows */
const [shortcutRows,setShortcutRows] = useState(1)

/* stories toggle */
const [showStories,setShowStories] = useState(true)


/* store wallpaper */
useEffect(()=>{
localStorage.setItem("wallpaper", wallpaper)
},[wallpaper])

>>>>>>> 6af4567 (fix 2)

return (

<div
className="bg-[#2b2a33] text-white min-h-screen bg-cover bg-center"
style={{backgroundImage: wallpaper ? `url(${wallpaper})` : ""}}
>

<Header/>

<div className="max-w-[1150px] mx-auto px-6 relative z-10">

<SearchBar/>

<<<<<<< HEAD
{showShortcuts && (
<Shortcuts rows={shortcutRows}/>
)}

=======
{/* shortcuts */}

{showShortcuts && (
<Shortcuts rows={shortcutRows}/>
)}

{/* stories */}

>>>>>>> 6af4567 (fix 2)
{showStories && (
<>
<h2 className="mt-10 mb-4 text-lg font-semibold">
Thought-provoking stories
</h2>

<StoryGrid/>
</>
)}

</div>


{/* customize button */}

<CustomizeButton
open={panelOpen}
setOpen={setPanelOpen}
/>


{/* customize panel */}

<CustomizePanel
open={panelOpen}
setOpen={setPanelOpen}
setWallpaper={setWallpaper}
<<<<<<< HEAD
setShowShortcuts={setShowShortcuts}
showShortcuts={showShortcuts}
setShortcutRows={setShortcutRows}
shortcutRows={shortcutRows}
setShowStories={setShowStories}
showStories={showStories}
=======
showShortcuts={showShortcuts}
setShowShortcuts={setShowShortcuts}
shortcutRows={shortcutRows}
setShortcutRows={setShortcutRows}
showStories={showStories}
setShowStories={setShowStories}
>>>>>>> 6af4567 (fix 2)
/>


</div>

)

}

export default App