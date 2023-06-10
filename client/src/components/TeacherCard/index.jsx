import { BsPersonCircle } from "react-icons/bs"

function TeacherCard({ teacher, setShowModal, variant = 1, data = "", hora = "" }) {
  return (
    <div className="bg-gray-200 shadow-md h-24 flex justify-between">
      <div className="flex">
        <BsPersonCircle className='text-5xl' />
        <div>
          <h3>
            {teacher.nome}
          </h3>
          <span>
            {teacher.languages.join(" | ")}
          </span>
        </div>
      </div>
      {variant == 1 ? 
      (
        <button onClick={() => setShowModal(true)}>Agendar aula</button>
      ) : (
        <>
          <h4>{data}</h4>
          <h4>{hora}</h4>
        </>
      )}
    </div>
  );
}

export default TeacherCard;