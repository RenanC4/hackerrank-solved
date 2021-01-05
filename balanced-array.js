//Given an array of numbers, find index of smallest array element(the pivot), for which the sums of all elements to the left and to the right are equal. The array may not be reordered.

const balanceArray = array => {

    let tree = {
        left:{},
        right:{}
    }

    let x = 0
    for (let i =0; i< array.length; i++) {
        x += array[i-1]
        tree.left = x
    }

    let y = 0
    array = array.reverse()
    for (let i =0; i< array.length; i++) {
        y += array[i-1]
        tree.right = y
    }

    array.reverse()
    let objectListed = tree.values()
    for (let i =0; i< array.length; i++) {
        if(objectListed[left][i] === objectListed[right][i]){
            return i
        }
    }

}
