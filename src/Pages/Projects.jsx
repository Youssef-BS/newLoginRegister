import React from 'react';

function Projects() {
    const projectsData = [
        {
            id: 1,
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            description: "FOS Technologies fixtures, at Ivory Coast, by Concept Events"
        },
        {
            id: 2,
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            description: "FOS Technologies fixtures, at Ivory Coast, by Concept Events"
        },
        {
            id: 3,
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            description: "FOS Technologies fixtures, at Ivory Coast, by Concept Events"
        },
        {
            id: 4,
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            description: "FOS Technologies fixtures, at Ivory Coast, by Concept Events"
        },
        
        {
            id: 1,
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            description: "FOS Technologies fixtures, at Ivory Coast, by Concept Events"
        },
        {
            id: 2,
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            description: "FOS Technologies fixtures, at Ivory Coast, by Concept Events"
        },
        {
            id: 3,
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            description: "FOS Technologies fixtures, at Ivory Coast, by Concept Events"
        },
        {
            id: 4,
            link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHLsrXfLdHgO1OjXgsOsx-gGd0HCHnDkhCZDRjD4BQQ&s",
            description: "FOS Technologies fixtures, at Ivory Coast, by Concept Events"
        },
        
    ];

    return (
        <div className="container-fluid project-wrapper">
            <h1 className="text-center mb-4 "><b style={{fontSize : '32px'}}>Our Projects</b></h1>
            <div className="row">
                {projectsData.map(project => (
                    <div key={project.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
                        <div className="project__item">
                            <a href={project.link} className="project__img">
                                <img src={project.imgSrc} className="img-fluid" border="0" alt="Project" />
                                <div className="project__description">
                                    <p className="mb-0">{project.description}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
