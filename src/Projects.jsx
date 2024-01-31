import {useFetchProjects} from './fetchProjects';

const Projects = () => {
  const {loading, project} = useFetchProjects();

  console.log(project)

    if(loading) {
      return <section className="projects"><h1>Loading ...</h1></section>
    }

  return (<section className="projects">

        <div className="title">
          <h2>Projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="projects-center">
      {
        project.map((item) => {
          const {title, url, id, img} = item
          return ( <a href={url} target="_blank"  className="project" key={id}><img src={img} className="img"/>
          <h5>{title}</h5></a>)
             
        })
      }
    </div>
  </section>)
}

export default Projects