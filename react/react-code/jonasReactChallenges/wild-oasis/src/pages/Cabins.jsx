import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCobins";

function Cabins() {
  useEffect(()=>{
    getCabins().then(d=>console.log(d))

  },[])



  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://znxrmnqblefihdehhwvo.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"/>
    </Row>
  );
}

export default Cabins;
