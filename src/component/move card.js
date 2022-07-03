

 import { Image,Heading,Text,Box } from "@chakra-ui/react"


export default  function Moveshow({move}){
    return(
<>
{console.log(move)}
<Image  w='400px'src={move.poster_path} />
<Heading> {move.title}</Heading>
<Text>{move.release_date}</Text>
</>



    )
}
