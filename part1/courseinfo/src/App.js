import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
    const course = 'Half Stack application development'
    const content = [
        {name: 'Fundamentals of React', exercises: 10},
        {name: 'Using props to pass data', exercises: 7},
        {name: 'State of a component', exercises: 14},
    ]

    const total = content[0].exercises + content[1].exercises + content[2].exercises

    return(
        <>
            <Header courseName={course} />
            <Content />
            <Total total={total}/>
        </>
    )

}

export default App