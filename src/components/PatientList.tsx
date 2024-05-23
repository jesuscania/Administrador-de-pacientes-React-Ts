import { usePatientStore } from "../store"
import PatientDetail from "./PatientDetail"
//overflow-y-scroll
export default function PatientList() {
    const patientslist = usePatientStore(state => state.patients)
    return (
        <div className=" md:w-1/2 lg:w-3/5 md:h-screen">
            {patientslist.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    {patientslist.map(patient => (
                        <PatientDetail
                        key={patient.id} 
                        patient= {patient}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className=" font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}
