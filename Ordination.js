function ArrayList() {
    var array = []

    this.insert = function(item) {
        array.push(item)
    }

    this.toString = function() {
        return array.join()
    }

    //ordenação = 
    // 5, 4, 3, 2, 1 
    this.bubbleSort = function() {
        for(var i = 0; i < array.length - 1; i++){ //0
            for(var j = 0; j < array.length - 1; j++){ //3
                if(array[j] > array[j + 1]){ //5 e o promixo de 5 = 1
                    swap(array, j , j + 1)
                }
            }
        }
    }

    var swap = function(array, index1, index2){ //5 ate 1, 5, proximo de 5 = 2
        var aux = array[index1] //[5]
        array[index1] = array[index2] //2
        array[index2] = aux //5
    }
}

var al = new ArrayList()
al.insert(5)
al.insert(4)
al.insert(3)
al.insert(2)
al.insert(1)

al.bubbleSort()
console.log(al.toString());