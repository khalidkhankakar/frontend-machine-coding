import { Link } from "react-router"
import { pages } from "./pages/dynamic-pages"

const App = () => {
  return (
    <div className="flex flex-col items-center gap-5 m-12">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
        Frontend / Maching Coding Questions
      </h1>

      <div className="p-3 w-full flex  flex-wrap gap-4 items-center justify-center">

      {
        pages.map((page)=>(
          <Link to={`/question/${page.link}`} key={page.link} className="px-6 py-2  rounded-xl bg-gray-300 hover:bg-gray-400 transition-all shadow-md ">
          <h2 className="text-xl">{page.name} </h2>
          </Link>
        ))
      }

      </div>
    </div>
  )
}

export default App
