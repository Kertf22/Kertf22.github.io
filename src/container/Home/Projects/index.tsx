import { useState } from "react";
import { useStore } from "../../../store";
import Modal from "../../../components/Modal";
import Card from "../../../components/Card";
import Row from "../../../components/Row";
import style from "./style.module.scss";
import shallow from 'zustand/shallow';
import Project from "../../../shared/types/Project";
import Carrousel from "react-bootstrap/Carousel";
const Projects = () => {

    const { projects } = useStore(state => state, shallow)

    const [limit, setLimit] = useState(3);

    const [selectedProject, setSelectedProject] = useState<null | Project>(null);

    const handleShowMore = () => {
        setLimit((prev) => prev + 3);
    };

    const handleSeletecProject = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };
    return (
        <>
            <Card>
                <Row justifyContent="space-between" >
                    <h1>Projects</h1>
                    <h2 className={style["see-more"]} onClick={handleShowMore}>See more</h2>
                </Row>

            </Card>
            <div className={style["project-list"]}>
                {projects.slice(0, limit).map((project, index) => (
                    <div
                        className={style["project"]}
                        onClick={() => handleSeletecProject(project)}
                    >
                        <Card
                            styles={{ height: "100%" }}
                        >
                            <h1>{project.name}</h1>
                            <p>{project.description}</p>
                            <ul className={style["project-tech"]}>
                                {project.technologies?.map((technology) => (
                                    <li className={style["tech"]}>{technology}</li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={selectedProject != null}
                onClose={() => handleCloseModal()}>
                <Card>
                    <h1>{selectedProject?.name}</h1>
                    <p>{selectedProject?.description}</p>



                    <Carrousel
                        style={{
                            border: "1px solid black",
                            borderRadius: "12px",
                            margin: "10px"
                        }}
                    >
                        {selectedProject?.images?.map((image) => (
                            <Carrousel.Item>
                                <img src={image} />
                            </Carrousel.Item>
                        ))}
                    </Carrousel>



                </Card>
            </Modal >
        </>
    )

};


export default Projects