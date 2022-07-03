 
import { Input,Box,FormLabel,Button} from "@chakra-ui/react"
import { useState } from "react"

 export default function Log(){

     
     const [username,setusername]=useState("")
     const [password,setpass]=useState("")
const login=()=>{

}


    return(
        <>

        <Box>
        <FormLabel>username</FormLabel>
<Input  onChange={(e)=>setusername(e.target.value)}>
</Input>
</Box>
<Box>
        <FormLabel>Password</FormLabel>
<Input onChange={(e)=>setpass(e.target.value)} />

</Box>
<Button onClick={login}>Login</Button>


        
        </>
    )
 }