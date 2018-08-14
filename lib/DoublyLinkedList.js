'use-strict'

class DoublyLinkedList {
    /**
     * @param {number} key 
     * @param {String} value 
     */
    constructor(key, value){
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

module.exports = DoublyLinkedList