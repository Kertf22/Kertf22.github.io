// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid';
import Experience from '../../shared/types/Experience';
import Project from '../../shared/types/Project';
import SocialMedias from '../../shared/types/SocialMedias';
import Tech from '../../shared/types/Tech';
import User from '../../shared/types/User';
import data from '../../../database.json';


export type UserData = {
    user: User
    projects: Project[],
    socialMedias: SocialMedias[],
    experiences: Experience[],
    techs: Tech[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<UserData>
) {

    const { user, projects, experiences, techs, socialMedias } = data;

    const newProjects = projects.map(project => {
        return {
            ...project,
            id: uuidv4(),
            created_at: new Date(),
            updated_at: new Date()
        }
    })

    const newExperiences = experiences.map(experience => {
        return {
            ...experience,
            id: uuidv4(),
            start_date: new Date(experience.start_date),
            end_date: new Date(experience.end_date),
            created_at: new Date(),
            updated_at: new Date()
        }
    })

    const newTechs = techs.map(tech => {
        return {
            ...tech,
            id: uuidv4(),
            created_at: new Date(),
            updated_at: new Date()
        }
    })

    const newSocialMedias = socialMedias.map(socialMedia => {
        return {
            ...socialMedia,
            id: uuidv4(),
            created_at: new Date(),
            updated_at: new Date()
        }
    })

    res.status(200).json({
        user,
        projects: newProjects,
        experiences: newExperiences,
        techs: newTechs,
        socialMedias: newSocialMedias
    })
}
