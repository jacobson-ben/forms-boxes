import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box"
import { v4 as uuid } from 'uuid';

function BoxList() {
  const [boxList, setBoxList] = useState({})

  function renderBoxes() {
    return (
      <div>
        {Object.values(boxList).map(box => (
          <Box key={box.id} id={box.id} height={box.height} width={box.width} backgroundColor={box.backgroundColor} removeBox={removeBox}/>
        ))}
      </div>
    )
  }
  
  function addBox(box) {
    let newBox = {...box, id:uuid()};
    setBoxList(boxList => ({...boxList, [newBox.id]: newBox}))
  }

  function removeBox(uuid) {
    let boxListCopy = {...boxList};
    console.log(uuid)
    delete boxListCopy[uuid];
    console.log(boxListCopy)
    setBoxList(boxListCopy);
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox}/>
      {renderBoxes()}
    </div>
  )
}

export default BoxList

