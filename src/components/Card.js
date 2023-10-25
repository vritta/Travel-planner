import { useState } from "react";

function Card(props){
    const [readmore, setReadMore] = useState(false);
    const description = readmore?`${props.tour.info} `:`${props.tour.info.substring(0,200)}....`;
    // setReadMore("");
    function readmoreHandler(){
        setReadMore(!readmore);
        // description = props.tour.info;
    }
    return(
        <div className="card h-max bg-amber-300 shadow-[0px_3px_8px_0px_rgb(0,0,0,0.3)] rounded-[10px] w-[430px] mb-5 p-[15px] text-[20px]">
            
            <div className="w-[400px] h-[350px]">
                <img className="image w-full h-full object-cover" alt="img" src={props.tour.image}></img> 
            </div>
            
            <div className="tour-info mt-[20px]">
                <div className="tour-details">
                    <h4 className="tour-price font-bold text-[23px] text-[#1faa59]">₹ {props.tour.price}</h4>
                    <h4 className="tour-name font-bold text-[25px]">{props.tour.name}</h4>
                </div> 
                <div className="description">
                    {description}
                    <span onClick={readmoreHandler} className="text-[#12b0e8] cursor-pointer">
                        {readmore? `Show Less`:`Read More`}
                    </span>
                </div>  
            </div>
            
            <button className="btn-red block bg-red-200 w-[300px] h-[42px] border border-[#b4161b] mx-auto mt-8 mb-2 rounded-xl 
            font-bold text-[18px] hover:bg-[#ff0000] hover:text-[#ffffff]" 
            onClick={()=>props.removeTour(props.tour.id)}>
                Not Interested
            </button>
        </div>
    );
}


export default Card;