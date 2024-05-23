import { create } from 'zustand'
import { DraftPatient, Patient } from './types'
import { devtools, persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

type PatientState = {
    patients: Patient[],
    activeId : Patient['id'],
    addPatient : (data : DraftPatient) => void,
    removePatient : (data : Patient) => void,
    getPatient : (data : Patient) => void,
    updatePatient : (data : DraftPatient) => void
}

//Seteo de nuevo tipado y creado de id
const createPatient = (patient : DraftPatient) : Patient => {
    return { ...patient, id : uuidv4() } 
}

export const usePatientStore = create<PatientState>()(
    devtools(
    persist(
        (set)=> ({
        patients : [],
        activeId : '',
        //Forma de setear en el estado
        addPatient : (data) => {
            const newPatient = createPatient(data)
            set((state) => ({
                patients : [...state.patients, newPatient ]
            }))
        },
        //Remover un paciente
        removePatient : (patient) => {
            toast.error("Registro eliminado")
            set((state)=> ({
                patients : state.patients.filter(actualPatient => actualPatient.id !== patient.id )
            }))
        },
        getPatient : (patient) => {
            set(() => ({
                activeId: patient.id
            }))
        },
        updatePatient : (patient)=>{
            set((state) => ({
                patients : state.patients.map( (actualPatient) =>  actualPatient.id === state.activeId ? {...patient, id: actualPatient.id} : actualPatient ),
                activeId : ''
            }))
        }
        
    }), {
        name: 'patient-storage'
    })
))