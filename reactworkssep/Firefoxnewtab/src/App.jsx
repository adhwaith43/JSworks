import { useState, useEffect } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Shortcuts from "./components/Shortcuts"
import StoryGrid from "./components/StoryGrid"
import CustomizeButton from "./components/CustomizeButton"
import CustomizePanel from "./components/CustomizePanel"

function App(){

const [panelOpen,setPanelOpen] = useState(false)
const [wallpaper,setWallpaper] = useState("")

return (

<div
className="bg-[#2b2a33] text-white min-h-screen bg-cover bg-center"
style={{backgroundImage: wallpaper ? `url(${wallpaper})` : ""}}
>

<Header/>

<div className="max-w-[1150px] mx-auto px-6 relative z-10">

<SearchBar/>

{showShortcuts && (
<Shortcuts rows={shortcutRows}/>
)}

{showStories && (
<>
<h2 className="mt-10 mb-4 text-lg font-semibold">
Thought-provoking stories
</h2>

<StoryGrid/>
</>
)}

</div>

<CustomizeButton
open={panelOpen}
setOpen={setPanelOpen}
/>

<CustomizePanel
open={panelOpen}
setOpen={setPanelOpen}
setWallpaper={setWallpaper}
setShowShortcuts={setShowShortcuts}
showShortcuts={showShortcuts}
setShortcutRows={setShortcutRows}
shortcutRows={shortcutRows}
setShowStories={setShowStories}
showStories={showStories}
/>

</div>

)

}

export default App