import React from "react"

export const CurrentAir = props => {
  const { list, coord, airData } = props.api
  console.log(airData)
  return (
    // <CurrentAir api={airData}>
    <div>
 
      <div>{coord.lon}</div>
      <div>{list[0].components.co}</div>
    
    </div>
   
  )
}
