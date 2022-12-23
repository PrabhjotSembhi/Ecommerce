import Category from "../category/Category"
import './directory.scss'





const Directory = ({categories}) => {

  return (
    <div className="directory-container">
        {
            categories.map((category) => (
              <Category key={category.id} category={category}/>
            ))
        }

    </div>
  )
}

export default Directory