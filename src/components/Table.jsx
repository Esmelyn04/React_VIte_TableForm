
function Table(props){
    // my custom table component

  let rows = props.links.map((data)=>{
    return(
      <tr>
        <td>{data.name}</td>
        <td>{data.URL}</td>
      </tr>
    )
  })

    return(
      // return some JSX
  
      <table>
        <thead>
          <tr>
            <th>Link Name</th>
            <th>Link URL</th>
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>

      </table>
  
    )
  }

  export default Table