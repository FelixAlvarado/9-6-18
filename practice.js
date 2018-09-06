
var minMutation = function(start, end, bank) {
    if(start === end || !bank.includes(end)){
        return -1;
    }
    let cache = {};
    
    for(let i = 0; i < start.length; i++){
        cache[i] = start[i];
    }
    
    let count = 0;
    
    for(let j = 0; j < end.length; j++){
        if(cache[j] != end[j]){
            count += 1;
        }
    }
    return count;
};