import Card from '../components/card'
const Mentor=()=> {

    const mentors = [
        {
            name: "Mentor 1",
            description: "desc 1"
        },
        {
            name: "Mentor 2",
            description: "desc 2"
        },
        {
            name: "Mentor 3",
            description: "desc 3"
        },
        {
            name: "Mentor 4",
            description: "desc 4"
        },
    ]
return (

    <div>
    <h2>Mentors Section</h2>

    { mentors.map(mentor => (
        <Card mentor={mentor}/>
    ))
        }
    </div>
)}

export default Mentor;