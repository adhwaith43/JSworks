const shortcuts = [
  { name:"Inbox", icon:"📧"},
  { name:"Spotify", icon:"🎧"},
  { name:"HRM Nest", icon:"📂"},
  { name:"Course", icon:"📘"},
  { name:"LeetCode", icon:"💻"},
  { name:"Netsratum", icon:"⚙️"},
  { name:"Youtube", icon:"▶️"},
]

function Shortcuts(){

  return(

    <div className="flex flex-wrap justify-center gap-6 mb-10">

      {shortcuts.map((item,index)=> (

        <div
          key={index}
          className="flex flex-col items-center text-sm cursor-pointer"
        >

          <div className="w-12 h-12 bg-[#3a3945] rounded-xl flex items-center justify-center text-xl hover:bg-[#4a4955]">
            {item.icon}
          </div>

          <span className="mt-1 text-xs text-gray-300">
            {item.name}
          </span>

        </div>

      ))}

    </div>

  )

}

export default Shortcuts