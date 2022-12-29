function Dictionary(){
    var items = {}

    this.set = function(key, value){
        items[key] = value
    }

    this.delete = function(key){
        if(this.has(key)){
            delete items[key]
            return true
        }
        return false
    }

    this.has = function(key){
        return items.hasOwnProperty(key)
    }

    this.get = function(key){
        return this.has(key) ? items[key] : undefined
    }

    this.clear = function(){
        items = {} 
    }

    this.size = function(){
        return Object.keys(items).length
    }

    this.keys = function(){
        return Object.keys(items)
    }

    this.value = function(){
        var values = []
        keys = Object.keys(items)

        for(var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])
        }
        return values
    }

    this.getItems = function(){
        return items
    }
}

function HashTable() {
    var table = []

    this.put = function(key, value){
        var position = loseloseHashCode(key)
        //console.log(position + ' ' + key)
        table[position] = value
    }

    this.remove = function(key){
        table[loseloseHashCode (key)] = undefined
    }

    this.get = function(key){
        return table[loseloseHashCode(key)]
    }

    var loseloseHashCode = function(key){
        var hash = 0
        for(var i = 0; i < key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    this.print = function() {
        for(var i = 0; i < table.length; i++){
            if(table[i] !== undefined){
                console.log(i + ' : ' + table[i]);
            }
        }
    }
}


var hash = new HashTable()

hash.put('Gandalf', 'gandalf@email.com')
hash.put('Jonh', 'john@email.com')
hash.put('Tyrion', 'tyrion@email.com')
hash.put('Aaron', 'aaron@email.com')
hash.put('Donnie', 'donnie@email.com')
hash.put('Ana', 'ana@email.com')
hash.put('Jonathan', 'jonathan@email.com')
hash.put('Jamie', 'jamie@email.com')
hash.put('Sue', 'sue@email.com')
hash.put('Mindy', 'mindy@email.com')
hash.put('Paul', 'paul@email.com')
hash.put('Nathan', 'nathan@email.com')

hash.print()