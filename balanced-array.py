#Given an array of numbers, find index of smallest array element(the pivot), for which the sums of all elements to the left and to the right are equal. The array may not be reordered.
def balanceArray(array):

    left = [0]
    x=0
    for i in range(1, len(array)):
        x+=array[i-1]
        left.append(x)


    right = [0]
    y=0
    array=[1,2,3,3]
    array.reverse()
    for i in range(1, (len(array))):
        y+=array[i-1]
        right.append(y)
    right.reverse()

    array.reverse()
    for i in range(1, len(array)):
        if left[i]==right[i]:
            return i