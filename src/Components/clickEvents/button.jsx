
function button(){
    const handleEvent = ()=>console.log('Ouch!')
    const handleEventWithParams = (name)=>console.log('Ouch! Do not click me',name)
    return(<>

        {/* click event with callback func without params */}
        <button onClick={handleEvent}>Click me</button>

         {/* click event with callback func with params */}
         <button onClick={()=>handleEventWithParams('bro')}> Click me😊</button>

        {/* callback func written inside onClick */}
        <button onClick={()=>{console.log(' bro😒')}}>Don't Click me😊</button>

        {/* double click event */}
        <button onDoubleClick={(e)=>{e.target.innerHTML='What is this bro 😒'}}>Please don't Double click me😊</button>

        </>
    )
}

export default button;