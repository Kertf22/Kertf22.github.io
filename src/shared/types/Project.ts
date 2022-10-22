
interface Project {
    id: string;

    name: string;

    description: string;

    technologies?: string[];

    images?: string[];

    created_at: Date;

    updated_at: Date;
}

export default Project;