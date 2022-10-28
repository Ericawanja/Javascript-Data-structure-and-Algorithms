function nonrepeated(arr){
    for(let i= 0; i<arr.length; i++){
        let flag =0
        for(let j =0; j<arr.length; j++){
            if(j != i && arr[j] === arr[i] ){
                //console.log(arr[i])
                flag = 1
                break;

            }
        }
        
        if(flag === 0 ){
            //console.log(flag, arr[i])
            return arr[i]
        }
    }

}
console.log(nonrepeated('abscdabs'))