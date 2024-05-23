
export default function Error({children} : {children : React.ReactNode}) {
    return (
        <p className=" p-2 bg-red-600 w-full text-white text-center">{children}</p>
    )
}
