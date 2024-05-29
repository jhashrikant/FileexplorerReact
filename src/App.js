import { useState } from "react";
import { JSONdata } from "./JSondata";
import Folder from "./components/Folder";
import useTraverseNode from "./hooks/use-traverse-node";

function App() {
  const [explorerdata, setexplorerdata] = useState(JSONdata)

  const { insertNode, editNode, deleteNode } = useTraverseNode()

  console.log('line111', explorerdata)

  function handleInsertNode(folderId, item, isfolder) {
    const finalTree = insertNode(explorerdata, folderId, item, isfolder)
    setexplorerdata(finalTree)
  }

  function handleEditNode(folderId, editedValue) {
    const finalTree = editNode(explorerdata, folderId, editedValue)
    setexplorerdata(finalTree)
  }

  function handleDeleteNode(folderId) {
    const finalTree = deleteNode(explorerdata, folderId)
    const temp ={...finalTree}
    setexplorerdata(temp)
  }


  return (
    <div>
      <Folder handleInsertNode={handleInsertNode} handleEditNode={handleEditNode} handleDeleteNode={handleDeleteNode} explorerdata={explorerdata} />
    </div>
  )
}

export default App;
