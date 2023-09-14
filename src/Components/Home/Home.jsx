import Cart from "../Cart/Cart";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-8 flex flex-col lg:flex-row">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">

                <div className="bg-gray-100 w-[300px] h-[345px] p-4 space-y-4 rounded-lg">
                    <div>
                        <img src="https://i.ibb.co/ZSrVsKc/Rectangle-2-5.png" alt="" />
                    </div>



                    <h3 className="text-center">My name is gisan</h3>
                    <p className="text-center"><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, incidunt?</small></p>



                    <div className="flex justify-evenly">
                        <p>price</p>
                        <p>Credit</p>

                    </div>

                    <div className="flex justify-center">
                        <button className="bg-[#2F80ED] text-white font-medium text-lg py-2 px-28 rounded-xl">Select</button>
                    </div>

                </div>
            </div>


            <div>
               <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;