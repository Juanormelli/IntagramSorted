const puppeteers= require("puppeteer")




async function init(){
    async function loadMore(page,selector){
        const moreButton=await page.$(selector)
        if (moreButton){
            console.log("more")
            await moreButton.click()
            await page.waitFor(selector,{timeout:5000}).catch(()=>{console.log("timeout")})
            await loadMore(page,selector)
        }
        
    }
    
    async function getComents(page,selector){
        const coment=await page.$$eval(selector,commit=>commit.map(commit=>commit.innerText))
        return coment
    }
   
    const internetBrwser = await puppeteers.launch()
    const page= await internetBrwser.newPage()
    await page.goto("https://www.instagram.com/p/CDSLgg5nvL6/")

    await loadMore(page,".dCJp8")
    const comments=await getComents(page,".C4VMK h3")
    console.log(comments)
    const commitss=count(comments)

    const winner=randomWinner(commitss)
    console.log(winner)
    await internetBrwser.close()

}





function count(commits){
    const counter=Object.assign(commits)
    return counter
           
        
    
}

function randomWinner(count){
    const randomValue=count[Math.floor(count.length*Math.random())]
    return randomValue

    
}
init()
