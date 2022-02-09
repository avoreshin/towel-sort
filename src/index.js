
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if(!matrix || matrix.length < 1){
        return [];
    }

    return (matrix.map((newArray,index)=>
        index%2==0?newArray.join():newArray.reverse()
            .join()).join().split(','))
}
