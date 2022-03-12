import Part from "../Part"

const Content = () => {

    const content = [
        {name: 'Fundamentals of React', exercises: 10},
        {name: 'Using props to pass data', exercises: 7},
        {name: 'State of a component', exercises: 14},
    ]

    return (
        <div>
            <Part body={content[0]} />
            <Part body={content[1]} />
            <Part body={content[2]} /> 
        </div>
    )
}

export default Content