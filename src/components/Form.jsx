import { useState } from "react"

function Form (props){
  // my form component

  // REGULAR AND OLD FUNCTION WAY

  // function handleSubmit(event){
  //   event.preventDefault()
  //   alert("submitted!")
  // }

  const [name, setName] = useState("")
  const [URL, setURL] = useState("")


  // NEW WAY TO MAKE FUNTIONS => ARROW FUNCTION , LAMDA FUNCTION
  let handleSubmit = (event) => {
    event.preventDefault()
    alert('submitted from arrow function!')

    if(name === "" || URL === ""){
      alert("Name and URL are required!")
    } else {
      console.log(name, URL)
      props.onNewSubmit({name, URL})

      // send this to table


    }
    
  }

  let handleNameChange = (event) => {
    //console.log(event.target.value)
    setName(event.target.value)
  }

  let handleURLChange = (event) => {
    setURL(event.target.value)
  }



    return(
      // <form>
      <form onSubmit={handleSubmit}>
        <label for="linkName">Link Name</label>
        <input type="text" name="linkName" onChange={handleNameChange} value={name}/>
        <br />
  
        <label for="linkURL">Link URL</label>
        <input type="text" name="linkURL" onChange={handleURLChange} value={URL} />
  
        <br />
        <br />
  
        <input type="submit" disabled={name === "" || URL === ""} />
      </form>
    )
}

export default Form