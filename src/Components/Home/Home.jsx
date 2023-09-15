/* eslint-disable react/jsx-key */
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import Swal from 'sweetalert2'
const Home = () => {
    const [jsonData, setJsonData] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    const [totalCredit, setTotalCreddit] = useState(0);
    const [remaining, setRemaining] = useState(20);
    const [totalCost, setTotalCost] = useState(0)
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setJsonData(data))
    }, [])
    const handleSelectCourse = course => {
        const isExist = selectCourse.find((item) => item['ID'] === course['ID']);
        let sum = course['Credit'];
        let total = course['Price'];
        if (isExist) {
            let timerInterval
            Swal.fire({
                title: 'You already have this course',
                html: 'I will close in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            })
            
            // .then((result) => {
            //     /* Read more about handling dismissals below */
            //     // if (result.dismiss === Swal.DismissReason.timer) {
            //     //     console.log('I was closed by the timer')
            //     // }
            // })

        } else {
            selectCourse.forEach((count) => {
                total = total + count['Price']
            })
            selectCourse.forEach((item) => {
                sum = sum + item['Credit']
            })
            const TotalRemaining = 20 - sum;
            if (TotalRemaining < 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Your credit is over!',
                })
                return;
            }
            if (sum > 20) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You cannot go above 20 hours!',
                })
            }
            setTotalCost(total)
            setRemaining(TotalRemaining)
            setTotalCreddit(sum)
            setSelectCourse([...selectCourse, course]);
        }

    }
    return (
        <div className="container mx-auto my-8">
            <div className="flex flex-col lg:flex-row justify-between gap-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-3/4 px-8 lg:px-0">
                    {
                        jsonData.map(card => (
                            <div key={card['id']} className="bg-gray-100  p-4 space-y-4 rounded-lg" >
                                <div className="flex justify-center">
                                    <img src={card['Cover_Image']} alt="" />
                                </div>
                                <h3 className="text-center font-semibold">{card['Course_Name']}</h3>
                                <p className="text-center"><small>{card['Details']}</small></p>
                                <div className="flex justify-evenly">
                                    <p>price: ${card['Price']}</p>
                                    <p>Credit: {card['Credit']}hr</p>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        onClick={() => handleSelectCourse(card)}
                                        className="bg-[#2F80ED] text-white font-medium text-lg py-2 px-32 rounded-xl">Select</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className=" md:w-2/4 lg:w-1/4 px-8 lg:px-0">
                    <Cart totalCost={totalCost} remaining={remaining} selectCourse={selectCourse} totalCredit={totalCredit
                    }></Cart>
                </div>
            </div>
        </div >
    );
};

export default Home;