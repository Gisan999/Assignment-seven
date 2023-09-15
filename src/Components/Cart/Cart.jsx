/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const Cart = ({ selectCourse }) => {

    // console.log(selectCourse)
    return (
        <div className="bg-sky-50 p-5 rounded-lg">
            <div>
                <h1 className="font-bold text-xl text-[#2F80ED] border-b-2 border-gray-300 pt-3 pb-3">Credit Hour Remaining 7 hr</h1>

            </div>
            <div>
                <h1 className="text-xl font-bold py-3">Course Name</h1>
                <div className="pb-3 space-y-1 font-medium italic text-gray-500">
                    {
                        selectCourse.map((courseName, index) => (
                            <p key={courseName['ID']}>{index+1}   {courseName['Course_Name']}</p>
                        ))
                    }
                </div>

            </div>
            <div>
                <h1 className="font-medium border-t-2 border-gray-300 text-lg py-2 border-b-2">Total Credit Hour : 13</h1>
            </div>
         
        </div>
    );
};

export default Cart;