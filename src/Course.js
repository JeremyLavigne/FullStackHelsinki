import React from 'react'

const Header = ({title}) => ( <h1> {title} </h1> )
  
const Part = ({part}) => ( <li> {part.name} {part.exercises} </li> )
  
const Content = ({parts}) => {
    parts.map((part) => console.log("Part n°", part.id, part))
    return (
        <ul>
            {parts.map((part) => <Part key={part.id} part={part} />)}
        </ul>
    ) 
}
  
const Total = ({parts}) => {
    const total = parts
        .map((part) => part.exercises)
        .reduce((s, p) => s + p)
    return (
      <p> Number of exercises {total} </p>
    )
}

const Course = ({course}) => {

    return (
      <div>
        <Header title={course.name} />
        
        <Content parts={course.parts} />
  
        <Total parts={course.parts} />
      </div>
    )
  }

  export default Course