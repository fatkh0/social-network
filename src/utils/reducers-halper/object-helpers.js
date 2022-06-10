export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
  return items.map(t => {
          if(t[objPropName] === itemId) {
            return { ...t, ...newObjProps}
          }
          return t
        })
}