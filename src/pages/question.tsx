import { useParams } from "react-router";
const Question = () => {
    const params = useParams();
    console.log({params})
  return (
    <div>
      Question
    </div>
  )
}

export default Question
