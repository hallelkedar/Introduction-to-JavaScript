function createLogger() {
  return {
    greet: function () {
      return "Hello";
    },
  };
}

function createGreeting(name) {
    return {
        print: function() {
            console.log(`Hello ${name}`);
            
        }
    }
}

function createCounter() {
    let counter = 0
    return function () {
        counter++;
        return counter
    }
}

function createMultiplier(x) {
    return function (num) {
        return num*x
    }
}

function createAdder(x) {
    return function (num) {
        return x += num
    }
}

function createSecret(secret) {
    return {
        getSecret: function () {
            return secret
        },
        setSecret: function (newSecret) {
            secret = newSecret
        }
    }
}

function once(fn) {
    const hasRun = false

    return {
        run: function() {
            if (!hasRun) {
                hasRun = true
                result = fn()
            }
        }
    }
}

function createStack() {
    const stack = []
    return {
        push: function(item){
            stack.push(item)
        },
        pop: function() {
            return stack.pop()
        },
        peek: function() {
            return stack[stack.length-1]
        }
    }
}

function createIdGenerator() {
    let lastId = 0
    return function() {
        lastId++
        return lastId 
    }
}

function createBankAccount(initialBalance) {
    const balance = initialBalance
    return {
        deposit: function(amount) {
            balance += amount
        },
        withraw: function(amount) {
            if (balance >= amount) {
                balance -= amount
            } else return 'Not enough money in balance'
        },
        getBalance: function() {
            return balance
        }
    }
}