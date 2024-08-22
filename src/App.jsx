import Navbar from './Components/Navbar'
import Content from './Components/Content'
import data from './Components/data'

export default function App() {

  const cards = data.map((item) => {
    return (
       <Content 
            key = {item.id}
            {...item}
       />
    )
}) 
  console.log(cards)
  return (
    <div className="container">
      <Navbar />
      {cards}
    </div>
   )
}


