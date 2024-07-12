import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects, selectAllProjects } from '../Features/project/projectSlice';
import { Link } from 'react-router-dom';

function Projects() {
    const dispatch = useDispatch();
    const projects = useSelector(selectAllProjects);
    const isLoading = useSelector((state) => state.projects.isLoading);
    const isError = useSelector((state) => state.projects.isError);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading projects...</div>;
    }

    if (isError) {
        return <div>Failed to load projects. Please try again later.</div>;
    }

    return (
        <div className="container-fluid project-wrapper">
            <h1 className="text-center mb-4"><b style={{fontSize: '32px'}}>Our Projects</b></h1>
            <div className="row">
                {projects.map(project => (
                    <div key={project.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
                        <div className="project__item">
                            <a href={`project-select/${project.id}`} className="project__img">
                                <img src={project.image} className="img-fluid" border="0" alt="Project" />
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
