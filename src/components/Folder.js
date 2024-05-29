import { useState } from "react"

function Folder({ handleInsertNode, handleEditNode, handleDeleteNode, explorerdata }) {

  const [expand, setexpand] = useState(false)
  const [showInputBox, setShowInputbox] = useState(false)
  const [isFolder, setIsFolder] = useState(null)
  const [editedValue, setEditedValue] = useState('')
  const [isEdit, setISedit] = useState(false)

  const [input, setinput] = useState('')

  const handleaddfolder = (event) => {
    event.stopPropagation()
    setexpand(true)
    setShowInputbox(true)
    setIsFolder(true)
  }

  const handleAddFile = (event) => {
    event.stopPropagation()
    setexpand(true)
    setShowInputbox(true)
    setIsFolder(false)
  }

  const handleKeyDown = (event) => {
    // console.log(explorerdata.id);
    if (event.key === 'Enter') {
      //add logic to enter a new node
      handleInsertNode(explorerdata.id, input, isFolder)
      setShowInputbox(false)
      setinput('')
    }
  }

  const handleEdit = (event) => {
    event.stopPropagation()
    console.log("edit", explorerdata.id);
    setISedit(true)
    setEditedValue(explorerdata.name)
  }

  const handleDelete = (event) => {
    event.stopPropagation()
    console.log("delete", explorerdata.id)
    handleDeleteNode(explorerdata.id)
  }

  const handleEditedvalue = (event) => {
    if (event.key === 'Enter') {
      handleEditNode(explorerdata.id, editedValue)
      setISedit(false)
    }
  }


  if (explorerdata.isfolder) {
    return (
      <div style={{ marginTop: "10px", cursor: 'pointer' }}>
        <div onClick={() => setexpand(!expand)}>📁{explorerdata.name}

          <span style={{ marginLeft: '20px' }}>
            <button onClick={handleaddfolder} className="add__folder">Add folder +</button>
            <button onClick={handleAddFile} className="add__file">Add file +</button>
          </span>

          {/* edit and delete btns */}
          <span style={{ marginLeft: "30px" }}>
            <button onClick={handleEdit}>Rename</button>
            <button onClick={handleDelete}>Delete</button>
          </span>
        </div>

        <div style={{ paddingLeft: "25px" }}>
          <div>
            {showInputBox && (
              <>
                <span>{isFolder ? '📁' : '📄'}</span>
                <input
                  autoFocus
                  onBlur={() => setShowInputbox(false)}
                  type="text"
                  value={input}
                  onChange={(event) => setinput(event.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </>
            )}
          </div>
          <div>
            {isEdit && (
              <>
                <input
                  autoFocus
                  onBlur={() => setISedit(false)}
                  type="text"
                  value={editedValue}
                  onChange={(event) => setEditedValue(event.target.value)}
                  onKeyDown={handleEditedvalue}
                />
              </>
            )}
          </div>
          {expand && explorerdata.items.map((item) => {
            return <Folder handleInsertNode={handleInsertNode} handleEditNode={handleEditNode} handleDeleteNode={handleDeleteNode} explorerdata={item} key={item.id} />
          })}
        </div>
      </div>
    )
  }
  else {
    return <div style={{ marginTop: "5px" }}>📄{explorerdata.name}
      <span style={{ marginLeft: "30px" }}>
        <button onClick={handleEdit}>Rename</button>
        <button onClick={handleDelete}>Delete</button>
      </span>

      <div>
        {isEdit && (
          <>
            <input
              autoFocus
              onBlur={() => setISedit(false)}
              type="text"
              value={editedValue}
              onChange={(event) => setEditedValue(event.target.value)}
              onKeyDown={handleEditedvalue}
            />
          </>
        )}
      </div>
    </div>
  }
}

export default Folder