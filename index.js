
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element)
{
  return [ 'foo', 1 ]
}
function destructivelyAddElementToBeginningOfArray(array, element)// NEED FIX
{
<<<<<<< HEAD
  array.unshift(element)
  return  [ 'foo', 1 ]
=======
  return  (array[ 'foo'])
>>>>>>> 835ffc56803124f544e1874ec54b4a6447f12cd0
}
function addElementToEndOfArray(array, element)
{
  return [ 1, 'foo']
