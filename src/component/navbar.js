import {  NavLink ,Outlet} from "react-router-dom"
import { Link } from "@chakra-ui/react"

import { HStack } from "@chakra-ui/react"
export default function Nav(){
    return(
        <>
        <HStack>
    
        
        <NavLink to='/home'> Home</NavLink>
        <NavLink to='/book'> Booking</NavLink>
        <NavLink to='/'> Login</NavLink>
        
        
        
        
        </HStack>
        
        <Outlet></Outlet>
        
        
        </>
    )
}