




const fakeCommits = ["juan","julio","jose","joao","juan"]

function count(commits){
    const counter=Object.assign(commits)
    return counter
           
        
    
}

function randomWinner(count){
    const randomValue=count[Math.floor(count.length*Math.random())]
    return randomValue

    
}
console.log(randomWinner( count(fakeCommits)))
