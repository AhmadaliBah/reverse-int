module.exports = function reverse (n) {
    let b = n.toString()
    let c = b.split("")

    if(c.includes("-")){
        return Number(c.slice(1).reverse().join(""))
    }else{
        return Number(c.reverse().join(""))
    }
}
