import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailProp = {
    patient : Patient
}

export default function PatientDetail( {patient} : PatientDetailProp ) {
    const {removePatient, getPatient} = usePatientStore()

    return (
        <div
        className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-lg" 
        >
            < PatientDetailItem label="id" data={patient.id} />
            < PatientDetailItem label="nombre" data={patient.name} />
            < PatientDetailItem label="propietario" data={patient.caretaker} />
            < PatientDetailItem label="Correo" data={patient.email} />
            < PatientDetailItem label="Fecha de alta" data={patient.date.toString()} />
            < PatientDetailItem label="Sintomas" data={patient.symptoms} />
            <div className="  flex justify-between gap-3 px-10 flex-col md:flex-row">
                <input onClick={ () => removePatient(patient) } className=" p-2 rounded-lg text-white bg-red-600 transition-all hover:scale-110 hover:cursor-pointer" type="button" value="Eliminar"/>
                <input onClick={ () => getPatient(patient)} className=" p-2 rounded-lg text-white bg-blue-600 transition-all hover:scale-110 hover:cursor-pointer" type="button" value="Editar"/>
            </div>
        </div>
    )
}
