import stories from "../data/stories"
import StoryCard from "./StoryCard"

function StoryGrid(){

return(

<div className="grid gap-6
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4">

{stories.map((story,index)=>(

<StoryCard
key={index}
story={story}
/>

))}

</div>

)

}

export default StoryGrid