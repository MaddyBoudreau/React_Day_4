import { useState } from 'react'
import Car from './Car'

export default function CarList() {
    const [cars, setCars] = useState([
        {
            id: 0,
            make: "Toyota",
            model: "Prius",
            year: 2020
        },
        {
            id: 1,
            make: "Honda",
            model: "Civic",
            year: 2019
        },
        {
            id: 2,
            make: "Mercedes",
            model: "S-Class",
            year: "2023"
        },
        {
            id: 3,
            make: "Dodge",
            model: "Challenger",
            year: "2017"
        }
    ])

    return (
        <>
            {/* { 
                posts.map(post => {
                    return (
                        <div className="card">
                            <h2>{ post.title }</h2>
                            <p>{ post.text }</p>
                        </div>
                    )
                }) 
            } */}
            { 
                cars.map(car => <Car car={car} key={ car.id } />)
            }
        </>
    )
}