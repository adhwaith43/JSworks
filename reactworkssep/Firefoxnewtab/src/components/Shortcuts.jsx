const shortcuts=[
"📧","🎧","📁","📘","💻","⚙️","▶️","🧠",
"📊","📂","📅","🌐","📎","📌","📱","💡",
"📷","📖","📰","📍","🧾","🧭","📁","📊",
"🧑‍💻","🔧","📚","🎮","💬","🧩","🗂","📂"
]

function Shortcuts({rows}){

const visible=shortcuts.slice(0,rows*8)

return(

<div className="grid grid-cols-8 gap-6 max-w-[680px] mx-auto mb-10">

{visible.map((s,i)=>(
<div
key={i}
className="bg-[#3a3945] w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[#444]"
>
{s}
</div>
))}

</div>

)

}

export default Shortcuts