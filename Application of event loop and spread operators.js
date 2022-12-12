// console.log('a');

// console.log('b');

// setTimeout(() => console.log('e'), 1000)

// setTimeout(() => console.log('c'), 0)

// console.log('d')


// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 0)

// console.log('d')

// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 1000)

// console.log('d')

let obj1 ={
    key1:'value1',
    key2:'value2'
 }
console.log(obj1)
 let obj2= {...obj1,key2:200,key3:"added a new key after cloning obj values for obj2 using spread operator..."}

 obj2.key1="value changed but doesnot effect value in obj key1"

 console.log(obj2)



 let arr1=[0,1]
 let arr2=[2,3]
 let arr3=[4,5]


 let arr4=[...arr1,...arr2,...arr3,6]
 console.log(arr4)




 studentobj = {

	'yash': 26,

	'vaibhav': 24,

	'rajesh' : 25,

	}

   let arr= Object.keys(studentobj)

    var sum=0
   var count=0;
   arr.forEach(function (key) {

     sum=sum+studentobj[key];
     count++
    
   })
   console.log(`average age ${sum/count}`)


   var m= (e) => {

    

    var sum=0
   var count=0;
   arr.forEach(function (key) {

     sum=sum+studentobj[key];
     count++
    
   })
   return (`average age ${sum/count}`)
   }

   console.log( m(studentobj))

    
   
