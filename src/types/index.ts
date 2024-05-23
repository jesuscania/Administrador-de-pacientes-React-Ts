export type Patient = {
    id : string
    caretaker : string
    date : Date
    email : string
    name : string
    symptoms : string
}
export type DraftPatient = Omit<Patient,'id'>