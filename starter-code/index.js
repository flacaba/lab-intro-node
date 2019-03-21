class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=> a-b)
    this.length++
  }

  get(pos) {
    pos--;
    if (this.length === 0) {
      throw new Error('OutOfBounds')
    }
     
    return this.items[pos]
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    }
     
    return Math.max(...this.items)
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    }
     
    return Math.min(...this.items)
  }

  average() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    }
     
    return this.sum()/this.length
  }

  sum() { 
    return this.items.reduce((a,b)=>a+b,0)
  }
};

const a = new SortedList();
