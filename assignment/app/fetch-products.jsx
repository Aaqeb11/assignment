import sleep from 'sleep-promise';
async function fetchItem(prev_offset,prev_limit){
   
    var apiURL=`https://api.escuelajs.co/api/v1/products?offset=${prev_offset}&limit=${prev_limit}`;
while(apiURL){
   try{
       await sleep(1000)
       const response=await fetch(apiURL);
       const data=await response.json();
       
       return data;
        
   }catch(error){
       console.log("Error fetching data:",error);
       return null
   }
}
}
export default fetchItem;