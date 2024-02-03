import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { useEffect,useState } from 'react';
import fetchItem from '@app/fetch-products'
import InfiniteScroll from 'react-infinite-scroll-component';
const Items = () => {
    const [items, setItems] = useState([]);
    const [page,setPage]=useState(0)
    const [limit,setLimit]=useState(10)

    const fetchData = async () => {
        try {
          const data = await fetchItem(page,limit);
          setPage((prevPage)=>prevPage+10);
          setLimit((prevLimit)=>prevLimit+10)
          setItems((prevItems) => [...prevItems, ...data]);
            console.log(items)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    useEffect(() => {
      fetchData();
    }, []);
    console.log(items)

    
    return(
    
        <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
        <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
        </p>
        }
>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-3 justify-items-center  py-8 bg-neutral-600 gap-6 sm:px-4">
        
        { items.map((item)=>{
          return(
            
            
            <Card className=" max-w-sm bg-neutral-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sp mt-6 hover:border-gray-400 hover:bg-neutral-200 hover:focus " >
              <CardContent className="">
                <div className="mb-0">
                  <img className=" border-none rounded-lg p-7 w-full h-full" src={item.category.image} alt="hello" />
                  <div className=" py-">
                    <p className="text-xl mb-6 font-semibold text-left max:">{item.title}</p>
                    </div>
                    <div className="">
                    <p className="text-2xl  font-semibold ">Rs:{item.price}</p>
                    </div>
                  
                  <div className="flex text-center">
                    <p className="text-xl font-mono italic  hidden">{item.description}</p>
                  </div>
                  </div>
              </CardContent>
            </Card>
          )
        })}
        </div>
</InfiniteScroll>
      
      
    )
   
}

export default Items
