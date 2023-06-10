import { useState } from "react";
import ContainerWrapper from "../../components/ContainerWrapper";
import ModalAgendarAula from "../../components/ModalAgendarAula";
import TeacherCard from "../../components/TeacherCard";

function Home() {

  const [showModal, setShowModal] = useState(true)

  return ( 
    <ContainerWrapper>
      <ModalAgendarAula showModal={showModal} setShowModal={setShowModal} />
      <TeacherCard 
        variant={1}
        setShowModal={setShowModal}
        teacher={{nome: "Bruno Costa", languages: ["Português", "Inglês"]}}
      />
      <TeacherCard 
        variant={1}
        teacher={{nome: "Bruno Costa", languages: ["Português", "Inglês"]}}
      />
    </ContainerWrapper>
   );
}

export default Home;