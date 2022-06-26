document.addEventListener('DOMContentLoaded',()=>{
   
    const cardarray =[
        {
            name:'hat',
            img:'hat.png'
        },
        {
            name:'hat',
            img:'hat.png'
        },
        {
            name:'lamp',
            img:'lamp.png'
        },
        {
            name:'lamp',
            img:'lamp.png'
        },
        {
            name:'moon',
            img:'moon.png'
        },
        {
            name:'moon',
            img:'moon.png'
        },
        {
            name:'mosque',
            img:'mosque.png'
        },
        {
            name:'mosque',
            img:'mosque.png'
        }
    ]
    cardarray.sort(()=>0.5-Math.random())
    const gird=document.querySelector('.gird')
    var cardchosen=[]
    var cardchosenID=[]
    const cardwon=[]
    var result=document.querySelector('#result')

    function createBoard(){
        for(let i=0;i<cardarray.length; i++){
            var card=document.createElement('img')
            card.setAttribute('src','cover.png')
            card.setAttribute('data-Id',i)
             card.addEventListener('click',flip)
            gird.appendChild(card)
            
            
        }
    }
    function checkmatch(){
        const cards=document.querySelectorAll('img')
        var optinone=cardchosenID[0]
        var optintwo=cardchosenID[1]
        if (optinone==optintwo){
alert("you chosen same cards.")
cards[optinone].setAttribute("src",'cover.png')

        }
        else if(cardchosen[0]===cardchosen[1]){
            alert("you found match")
            cards[optinone].setAttribute('src','white.png')
            cards[optintwo].setAttribute('src','white.png')
            cards[optinone].removeEventListener('click',flip)
            cards[optintwo].removeEventListener('click',flip)
            cardwon.push(cardchosen)
            
        } 
        else {
            cards[optinone].setAttribute('src','cover.png')
            cards[optintwo].setAttribute('src','cover.png')
            alert("un mathcex cards")
        }       
        cardchosen = []
        cardchosenID = []
        result.textContent=cardwon.length
        if(cardwon.length==cardarray.length/2){
            result.textContent="you found all!!!!"
        }

    }
    function flip(){
        var cardId =this.getAttribute('data-id')
        cardchosen.push(cardarray[cardId].name)
        cardchosenID.push(cardId)
        this.setAttribute('src',cardarray[cardId].img)
        if(cardchosen.length=== 2){
            setTimeout(checkmatch,500)
        }

    }
createBoard()







    
})