'use-strict'

/* 
Design and build a "least recently used" cacge, which evicts the least recently used item.
The cache should map from keys to values (allowing you to insert and retrieve a value associated with a particular key) and be initialized with a max size.
When it is full, it should evict the least recently used item.
You can assume the keys are integers and the values are strings.
*/

const DoublyLinkedList = require('../../lib/DoublyLinkedList')

class LRUCache {
    /**
     * @param {number} size 
     */
    constructor(size) {
        this.maxCacheSize = size
        this.map = new Map()
        this.listHead = null
        this.listTail = null
    }

    /**
     * @param {number} key 
     * @return {string}
     */
    getValue(key) {
        const item = this.map.get(key)

        if (item === undefined || item === null) return null

        if (item !== this.listHead) {
            this.removeFromLinkedList(item)
            this.insertAtFrontOfLinkedList(item)
        }
        return item.value
    }

    /**
     * @param {DoublyLinkedList} node 
     */
    removeFromLinkedList(node) {
        if (node === null) return

        if (node.prev !== null) node.prev.next = node.next
        if (node.next !== null) node.next.prev = mode.prev
        if (node === this.listTail) this.listTail = node.prev
        if (node === this.listHead) this.listHead = node.next
    }

    /**
     * @param {DoublyLinkedList} node 
     */
    insertAtFrontOfLinkedList(node) {
        if (this.listHead === null) {
            this.listHead = node
            this.listTail = node
        }
        else {
            this.listHead.prev = node
            node.next = this.listHead
            this.listHead = node
        }
    }

    /**
     * @param {number} key 
     * @param {string} value 
     */
    setKeyValue(key, value) {
        /* If key already present, remove it */
        this.removeKey(key)

        /* If size is full, remove least recently used key */
        if (this.map.size >= this.maxCacheSize && this.listTail !== null) {
            this.removeKey(this.listTail.key)
        }

        /* Insert new node */
        const node = new DoublyLinkedList(key, value)
        this.insertAtFrontOfLinkedList(node)
        this.map.set(key, node)
    }

    /**
     * @param {number} key 
     * @return {boolean} 
     */
    removeKey(key) {
        if (this.map.has(key)){
            const node = this.map.get(key)
            this.removeFromLinkedList(node)
            this.map.delete(key)
        }   
        return true
    }
}

module.exports = LRUCache