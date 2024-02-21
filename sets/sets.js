/* 
SETS
SETS ARE LIKE ARRAYS BUT THERE ARE NO DUPLICATES
USE OF SETS IS USUALLY TO CHECK THE PRESENCE OF AN ITEM
*/

function mySet(){
    // THE VAR COLLECTION WILL HOLD THE SET
    var collection = [];

    // THIS FUNCTION CHECKS IF AN ELEMENT IS PRESENT IN THE SET
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    }

    // THIS FUNCTION RETURNS THE SET
    this.values = function(){
        return collection;
    }
    // THIS FUNCTION ADDS AND ELEMENT BUT FIRST CHECKS IF THE ELEMENT IS ALREADY ON THE SET
    this.add = function(element) {
        if (!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }
    // THIS FUNCTION REMOVES ELEMENT FROM A SET IF THE ELEMENT IS PRESENT
    this.remove = function(element){
        if (this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    }
    // THIS FUNCTION RETURNS THE SETS LENGTH
    this.size = function (){
        return collection.length;
    }
    
    // THIS FUNCTION UNITES TWO SETS 
    this.union = function(otherSet){
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){unionSet.add(e)});
        secondSet.forEach(function(e){unionSet.add(e)});
        return unionSet;
    }

    // THIS FUNCTION RETURNS THE INTERSECTION OF TWO SETS
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var mySet = this.values();
        mySet.forEach(function(e){
            if (otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }
    // THIS METHOD WILL RETURN THE DIFFERENCE OF TWO SETS AS A NEW SET
    // (RETURNS THE VALUES THAT ARE NOT ON THE OTHER SET)
    this.diference = function(otherSet){
        var diferenceSet = new Set();
        var mySet = this.values();
        mySet.forEach(function(e){
            if (!otherSet.has(e)){
                diferenceSet.add(e);
            }
        });
        
        return diferenceSet;
    }

    this.subset = function(otherSet){
        var mySet = this.values();
        // EVERY EXCECUTES THE SAME FUNCTION OVER EVERY ELEMENT ON THE SET
        // AND RETURNS TRUE IF ALL ELEMENTS PASS THE TEST
        return mySet.every(function(e){
            return otherSet.has(e);
        });    
    }
}
// SET 1 AND SET 2 DECLARATION
var set1 = new mySet();
var set2 = new mySet();
// SET 1 AND SET 2 VALUE DROPPING
// SET 1 = {1,2,3}
// set 2 = {3,4,5}
set1.add(1);
set1.add(2);
set1.add(3);
set2.add(3);
set2.add(4);
set2.add(5);
// PRINTING ON CONSOLE THE DIFFERENT METHODS OF OUR SET
console.log(`Set1: ${set1.values()}`);
console.log(`Set2: ${set2.values()}`);
console.log(`Set1 size: ${set1.size()}`);
console.log(`Set2 size: ${set2.size()}`);
console.log("Intersection: ");
console.log(set1.intersection(set2));
console.log("Union: ");
console.log(set1.union(set2));
console.log("Diference: ");
console.log(set1.diference(set2));
// SUBSET METHOD TEST
set3 = new mySet();
set4 = new mySet();
set3.add(1);
set3.add(2);
set4.add(1);
console.log(`Set3: ${set3.values()}`);
console.log(`Set4: ${set4.values()}`);
console.log(set4.subset(set3));
