function dumbFunction(){
    throw new Error("unable to do some dumb shit at the lowest levels")
}

function caller(){
    try{
        dumbFunction()
    } catch(e){
        console.log(e)
        throw e
    }
}

exports.caller = caller

