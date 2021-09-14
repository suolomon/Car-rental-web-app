import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Icar } from '../../../typings/car'
import { Car } from '../../components/car'


const TopCarsContainer = styled.div`
${tw`
 max-w-screen-lg
 w-full 
 flex  
 flex-col  
 items-center  
 justify-center  
 pr-4  
 pl-4  
 md:pl-0  
 md:pr-0  
 mb-10
`}
`

const Title = styled.h1`
${tw`
text-black  
text-2xl  
md:text-5xl  
font-extrabold  
md:font-black  
md:leading-normal   
`}
`

const CarsContainer = styled.div`
${tw`
w-full 
flex  
flex-wrap  
justify-center  
mt-7  
md:mt-10 
`}
`

export function TopCars() {
    const testCar1: Icar = {
        name: "Car 1",
        mileage: "10k",
        thumbnailSrc:"https://freepngimg.com/thumb/car/31510-9-car-transparent-background.png",
        dailyPrice : 70, 
        monthlyPrice: 15000,
        gearType: "Auto",
        gas: "Petrol"
    }
    const testCar2: Icar = {
        name: "Car 1",
        mileage: "10k",
        thumbnailSrc:"https://freepngimg.com/thumb/car/31510-9-car-transparent-background.png",
        dailyPrice : 70, 
        monthlyPrice: 15000,
        gearType: "Auto",
        gas: "Petrol"
    }
 return (
     <TopCarsContainer>
         <Title>Explore Our Top Deals</Title>
         <CarsContainer>
            <Car {...testCar1} />
            <Car {...testCar2} />
         </CarsContainer>
     </TopCarsContainer>
 )
}