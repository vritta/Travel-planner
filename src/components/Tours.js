import Card from "./Card";

function Tours({tours,removeTourHandler}){
    return(
        <div className="container w-[full] ">
            <h2 className="title w-[500px] h-[115px] my-[45px] mx-[auto] text-center border-dashed border-8 border-[#0111A0] rounded-[20px] py-[7px] font-bold text-[48px]">Plan With Ayu</h2>
            <div className="cards flex w-[full] flex-wrap justify-center gap-5">
                {
                    tours.map((tour)=>{
                        return(
                            <Card key={tour.id} tour={tour} removeTour={removeTourHandler} >fv</Card>
                        );
                    })
                }
            </div>
        </div>
    );
}


export default Tours;