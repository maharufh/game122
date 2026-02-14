function Course({courseName}){
    console.log(courseName);
    let {frontend,backend,db,Trainer} = courseName;
    return(<>
    <h1>Frontend :{frontend}</h1>
    <h1>backend:{backend}</h1>
    <h1>DataBase Tech:{db}</h1>
    <h1>Trainer Name:{Trainer}</h1>
    </>)
}
export default Course;