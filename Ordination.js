function ArrayList() {
    var array = []

    this.insert = function(item) {
        array.push(item)
    }

    this.toString = function() {
        return array.join()
    }


    this.bubbleSort = function() {
        for(var i = 0; i < array.length - 1; i++){
            for(var j = 0; j < array.length - 1; j++){
                if(array[j] > array[j + 1]){ 
                    swap(array, j , j + 1)
                }
            }
        }
    }



    this.selectionSort = function() {
        var indexMin 
        for(var i = 0; i < array.length - 1; i++){                  
            indexMin = i
            for(var j = i; j < array.length; j++){  
                if(array[indexMin] > array[j]){
                    indexMin = j 
                }
            }
            if(i !== indexMin){ 
                swap(array, i, indexMin)
            }
        }
    }


    //[5,4,3,2,1]
    //[4,5,3,2,1]
    //[4,3,5,2,1]
    //[3,4,5,2,1]
    //[3,4,2,5,1]
    //[3,2,4,5,1]
    //[2,3,4,5,1]
    //[1,2,3,4,5]

    this.insertionSort = function(){
        var j, temp 
        for(var i = 1; i < array.length; i++){ //4
            j = i //[4]
            temp = array[i] //1
//                 [1]            2        1
            while(j > 0 && array[j - 1] > temp){ 
                array[j] = array[j - 1] // 2
                j-- // 0
            }
            array[j] = temp //
        }
    }

    var swap = function(array, index1, index2){ 
        var aux = array[index1] 
        array[index1] = array[index2] 
        array[index2] = aux 
    }
}

var al = new ArrayList()
al.insert(5)
al.insert(4)
al.insert(3)
al.insert(2)
al.insert(1)

//al.bubbleSort()
//al.selectionSort()
al.insertionSort()
console.log(al.toString());