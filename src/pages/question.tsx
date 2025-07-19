import { useParams } from "react-router";
import { pages } from "./dynamic-pages";
const Question = () => {
  const {id} = useParams();
  const pageIndex = pages.findIndex(({link})=>link===id)

  if(pageIndex<= -1){
    return <div className="h-screen w-full flex items-center justify-center">
      <h1 className="text-4xl  text-red-500">
        Oops! unable to find question with this link.
      </h1>
    </div>
  }
  const PageComponent = pages[pageIndex].component
  return (
    <div className="min-h-screen w-full">
      {<PageComponent />}
    </div>
  )
}

export default Question
