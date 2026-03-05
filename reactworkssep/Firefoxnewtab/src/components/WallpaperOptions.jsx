const wallpapers=[

"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
"https://images.unsplash.com/photo-1501785888041-af3ef285b470",
"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
"https://images.unsplash.com/photo-1557682250-33bd709cbe85",
"https://images.unsplash.com/photo-1503264116251-35a269479413"

]

function WallpaperOptions({setWallpaper}){

function upload(e){

const file=e.target.files[0]

if(file){

const url=URL.createObjectURL(file)

setWallpaper(url)

}

}

return(

<div className="grid grid-cols-3 gap-4 mb-6">

{wallpapers.map((w,i)=>(
<img
key={i}
src={w}
onClick={()=>setWallpaper(w)}
className="rounded-lg h-20 object-cover cursor-pointer"
/>
))}

<label className="border border-dashed h-20 flex items-center justify-center cursor-pointer">

+

<input
type="file"
className="hidden"
onChange={upload}
/>

</label>

</div>

)

}

export default WallpaperOptions