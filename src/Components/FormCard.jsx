/* eslint-disable react/prop-types */


const FormCard = ({posts}) => {

    console.log(posts)
  return (
    <div>
        <h2></h2>
        <ol>
            <li>{posts.author}</li>
            <li>12</li>
        </ol>
    </div>
  )
}

export default FormCard