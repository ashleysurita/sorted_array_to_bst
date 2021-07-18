function sortedArrayToBST(array) {
    if(!array.length) return null
    const mid = Math.floor((array.length - 1) / 2)ew Tree(array[mid])
        
    root.left = sortedArrayToBST(array.slice(0, mid))
    root.right = sortedArrayToBST(array.slice(mid + 1))
    
    return root
}
