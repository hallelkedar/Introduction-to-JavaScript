const welcome = (name, age) => {
    return {
        name,
        age,
        greet() {
            return `Hey i'm ${this.name}`
        },
        isAdult() {
            return this.age > 18
        }
    }
}

function setClosure() {
    let counter1 = 0
    return {
        increment: function() {
            counter++;
        },
        decrement: function() {
            counter--;
        },
        getCurrentCount: function() {
            return counter
        },
        reset: function() {
            counter = 0
        }


    }
}

function setProduct (name, price, stock=0) {
    if (price < 0) return 'Invalid price number'
    return {
        name,
        price,
        stock,
        isAvailable() {
            return this.stock > 0
        }
    }
}

function multiplier (number) {
    const NUM = 2
    return {
        double: function() {
            return number * NUM
        }
    }
}

function greeting (name) {
    const prefix = 'Hello '
    return prefix + name
}

function setMessages () {
    const messages = []
    return {
        add: function(msg) {
            messages.push(msg)
        },
        getAll: function() {
            return messages
        },
        deleteMsg: function(index) {
            messages.splice(index, 1)
            return `Message (${index}) deleted`
        }
    }
}

function setUser(name) {
    let counter = 0
    return {
        login: function() {
            counter++
        },
        getEnterCount: function() {
            return counter
        }
    }
}

function permissionManager() {
    const roles = []
    return {
        add: function(role) {
            roles.push(role)
        },
        remove: function(index) {
            roles.splice(index)
        },
        check: function(role) {
            return roles.some(lRole => lRole === role)
        }
    }
}