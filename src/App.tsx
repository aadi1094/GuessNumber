import { useState } from 'react'
import './App.css'

function App() {

  const [Num,SetNum]=useState<number[]>([])
  const [winner, setWinner] = useState(0)
  const [isWin, setIsWin] = useState(false)
  const [chances, setChances] = useState(1)

  const MAX_CHANCES = 5;


  const newGame = ()=>{
    setChances(1)
    setIsWin(false)
    const newarr = []
    for(let i = 0; i < 25; i++)
      newarr.push(Math.floor(Math.random()*100) + 1)
    SetNum(newarr)

    setWinner(Math.floor(Math.random()*25))
  }  

  const checkWin = (index:number) => {
    setChances(chances+1)
    console.log(winner);
    
    if(chances > MAX_CHANCES){
      return;
    }    
    if(index == winner){
      setIsWin(true)
    }
  }

  return (
    <>
      <div className='bg-purple-400  min-h-screen grid place-items-center'>
        <div>
        <h1 className='text-5xl text-center font-serif text-purple-950'>Guess the Number</h1>
       <div className='flex justify-center my-10'>
          <button className='p-3 bg-violet-900 text-white rounded-xl' onClick={()=>{
          newGame()
          console.log(Num);
          }}>Start Game</button>
       </div>
        
        


        <div className='flex gap-2 w-full mt-3 max-w-full flex-wrap justify-center' >
        {
          Num.map((num, index) => {
            return <button onClick={()=>{
              checkWin(index)
            }} className='bg-violet-900 p-3 rounded-lg text-white'>{num}</button>
          })
        }
        </div>

        <div className='text-2xl text-center my-5 text-violet-900'>
        {
          !isWin && chances > 5 &&  Num.length > 0 && <p className='text-red-700'>You cannot play more than 5 times <button className='block underline text-center w-full' onClick={newGame}>Play Again</button></p>
        }
        {
          chances <= 5 && Num.length > 0 && <p>Chances left: <span className='text-blue-700'>{MAX_CHANCES - chances+1}</span></p>
        }
        {
          isWin && <p className='text-3xl text-pink-500 text-center mt-5'>You Won in {chances-1} tries!!</p>
        }
        </div>
        </div>

      </div>
    </>
  )
}

export default App
