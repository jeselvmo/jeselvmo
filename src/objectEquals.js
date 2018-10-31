function objectEquals(object1, object2) {
    for (let propName in object1) {
        if (object1.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
            return false
        } else if (typeof object1[propName] != typeof object2[propName]) {
            return false
        }
    }
    for (let propName in object2) {
        if (object1.hasOwnProperty(propName) != object2.hasOwnProperty(propName)) {
            return false
        } else if (typeof object1[propName] != typeof object2[propName]) {
            return false
        }
        if (!object1.hasOwnProperty(propName)) {
            continue
        }
        if (object1[propName] instanceof Array && object2[propName] instanceof Array) {
            if (!arrayEquals(object1[propName], object2[propName])) {
                return false
            }
        } else if (object1[propName] instanceof Object && object2[propName] instanceof Object) {
            if (!objectEquals(object1[propName], object2[propName])) {
                return false
            }
        } else if (object1[propName] != object2[propName]) {
            return false
        }
    }
    return true
}

export default objectEquals;
