/******************
 * YOUR CODE HERE *
 ******************/

function isValidSecondary(color){
  return color === 'purple' || color === 'orange' || color === 'green'
}


function isValidSecondary(secondary){
  if((secondary === 'orange')||(secondary === 'green')||(secondary === 'purple')){
    return true 
  }else{
    return false
  }
}

// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
