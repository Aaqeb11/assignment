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
import Spinner from "@components/spinner"
// var offSet=0;
// var limit=10;

const Items = () => {
    const [items, setItems] = useState([]);
    const [offSet,setOffSet]=useState(0)
    const [limit,setLimit]=useState(10)

    const fetchData = async () => {
        try {
            setOffSet((prevOffSet)=>(prevOffSet+limit)%30);
          const data = await fetchItem(offSet,limit);
          
        //   setLimit((prevLimit)=>prevLimit+10)
        if (data) {
            setItems((prevItems) => [...prevItems, ...data]);
          } else {
        //   offSet=offSet+limit;
        //   limit=limit+10;
            console.log(items)
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    useEffect(() => {
      fetchData();
    }, []);
    useEffect(() => {
        console.log(items); // Log items when it changes
      }, [items]);

    
    return(
    
        <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4 className="bg-sky-200 text-center font-serif"></h4>}
        endMessage={
        <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
        </p>
        }
>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-3 justify-items-center  py-8 bg-sky-200 gap-6 sm:px-4">
        
        { items.map((item)=>{
          return(
            
            
            <Card className=" max-w-sm bg-blue-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sp mt-6 hover:border-gray-400 hover:bg-neutral-200 hover:focus " >
              <CardContent className="">
                <div className="mb-0">
                  <img className=" border-none rounded-lg p-7 w-full h-full" src={item.category.image} alt="hello" />
                  <div className=" py-">
                    <p className="text-xl mb-6 font-semibold text-left max:">{item.title}</p>
                    </div>
                    <div className="flex text-center">
                    <p className="text-xl font-mono italic hidden" >{item.description}</p>
                  </div>
                    <div className="">
                    <p className="text-2xl  font-semibold ">Rs:{item.price}</p>
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
