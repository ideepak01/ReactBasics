
function list(){
    const mobiles=['Xiaomi','Realme','OnePlus','Apple']
    const mobileObject=[
        {id:2,name:'Xiaomi'},
        {id:3,name:'Realme'},
        {id:1,name:'OnePlus'},
        {id:4,name:'Apple'}
    ]
     const mobileList = mobiles.map((mobile,index )=>{
       return <li key={index}>{mobile}</li>
     })

     //sorting mobile object array based on names
     mobileObject.sort((a,b)=>a.name.localeCompare(b.name))
    //  sorting mobile object array based on id
    mobileObject.sort((a,b)=>a.id-b.id)
     const mobileObjectList= mobileObject.map(mobile=> <li key={mobile.id}>{mobile.name}</li>)
    
    return(<>
    <h5>Below is mobile list array</h5>
     <ul>{mobileList}</ul>
     <h5>Below is array of mobile list objects in sorted order </h5>
     <ul>{mobileObjectList}</ul>
    </>
        
    )
}

export default list;