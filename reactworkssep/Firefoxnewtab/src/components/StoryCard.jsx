function StoryCard({story}){

return(

<div className="bg-[#3a3945] rounded-xl overflow-hidden hover:scale-[1.02] transition">

<img
src={story.image_url}
className="h-40 w-full object-cover"
/>

<div className="p-4">

<h3 className="text-sm font-medium">
{story.title}
</h3>

<p className="text-xs text-gray-400 mt-2">
{story.news_site}
</p>

</div>

</div>

)

}

export default StoryCard