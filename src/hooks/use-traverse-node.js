
const useTraverseNode = () => {

  function insertNode(tree, Folderid, value, isfolder) {
    if (tree.id === Folderid) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: value,
        isfolder: isfolder,
        items: []
      })
      return tree   // Returns the updated node and exits the function.
    }

    let latestNode = tree.items.map((item) => {
      return insertNode(item, Folderid, value, isfolder)
    })

    return { ...tree, items: latestNode }
  }


  function editNode(tree, folderid, editedValue) {
    if (tree.id === folderid) {
      tree.name = editedValue
      return tree
    }

    let latestNode = tree.items.map((item) => {
      return editNode(item, folderid, editedValue)
    })

    return { ...tree, items: latestNode }
  }


  function deleteNode(tree, folderId) {
    for (let i = 0; i < tree.items.length; i++) {
      const currentNode = tree.items[i]
      if (currentNode.id === folderId) {
        tree.items.splice(i, 1)
        return tree
      }
      else {
        deleteNode(currentNode, folderId)
      }
    }
    return tree
  }

  return { insertNode, editNode, deleteNode }

}

export default useTraverseNode
