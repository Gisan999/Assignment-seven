/* eslint-disable react/jsx-key */
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";


const Home = () => {

    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setJsonData(data))
    }, [])

    console.log(jsonData)

    return (
        <div className="container mx-auto my-8">

            <div className="flex flex-col lg:flex-row justify-between gap-12">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-3/4 px-8 lg:px-0">



                    {
                        // eslint-disable-next-line no-unused-vars
                        jsonData.map(card => (
                            <div key={card['id']} className="bg-gray-100  p-4 space-y-4 rounded-lg" >
                                <div className="flex justify-center">
                                    <img src={card['Cover_Image']}alt="" />
                                </div>
                                <h3 className="text-center font-semibold">{card['Course_Name']}</h3>
                                <p className="text-center"><small>{card['Details']}</small></p>
                                <div className="flex justify-evenly">
                                    <p>price: ${card['Price']}</p>
                                    <p>Credit: {card['Credit']}hr</p>
                                </div>
                                <div className="flex justify-center">
                                    <button className="bg-[#2F80ED] text-white font-medium text-lg py-2 px-32 rounded-xl">Select</button>
                                </div>
                            </div>
                        ))
                    }







                </div>


                <div className=" md:w-2/4 lg:w-1/4 px-8 lg:px-0">
                    <Cart></Cart>
                </div>



            </div>


        </div >
    );
};

export default Home;