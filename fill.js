function makeGrid(m,n){
let arr = [];
for(let i = 0; i < m; i++){
    arr.push([]);
    for(let j = 0; j < n;  j++){
        arr[i].push(Math.floor(Math.random()*2));
    }
}
return arr;
}

let array = makeGrid(5,5); 
console.log(array);


function fill(grid, position, color, cache = null){


    let x = position[1];
    let y = position[0];

    if (cache === null) {
        cache = {};
        cache['original'] = grid[y][x];
    }

    if(grid[y][x] === color){
        return;
    }

    cache[position] = true;

    grid[y][x] = color;

    if(grid[y+1]){
        if(!cache[[y + 1, x]] && grid[y + 1][x] && grid[y + 1][x] === cache['original']){
            fill(grid, [y + 1, x], color, cache);
        }
    }

    if(grid[y-1]){
        if(!cache[[y - 1, x]] && grid[y - 1][x] && grid[y - 1][x] === cache['original']){
            fill(grid, [y - 1, x], color, cache);
        }
}

    if(!cache[[y, x + 1]] && grid[y][x + 1] && grid[y][x + 1] === cache['original']){
        fill(grid, [y, x + 1], color, cache);
    }


    if(!cache[[y, x - 1]] && grid[y][x - 1] && grid[y][x - 1] === cache['original']){
        fill(grid, [y, x - 1], color, cache);
    }

    return grid;
}

console.log(fill(array, [1,1], 2));