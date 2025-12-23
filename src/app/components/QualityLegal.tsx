
type Quality = {
    title: string,
    description: string,
    button: string
} 

export default function QualityLegalSection({
    title, 
    description, 
    button} : Quality){
    return(
        <div className="bg-[#1E2E45] space-y-9 text-white justify-center text-center p-16 w-full">
            <h1 className="font-bold font-serif text-2xl ">{title}</h1>
            <p>{description}</p>

            <button className="bg-[#9A9162] px-5 py-3">{button}</button>
        </div>
    )
}