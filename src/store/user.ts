import Experience from "../shared/types/Experience";
import Project from "../shared/types/Project";
import SocialMedias from "../shared/types/SocialMedias";
import Tech from "../shared/types/Tech";
import User from "../shared/types/User";

export interface IUserStore {
    user: User|null;
    projects: Project[];
    socialMedias: SocialMedias[];
    experiences: Experience[];
    techs: Tech[];
    addUser: (user: User) => void;
    addProjects: (projects: Project[]) => void;
    addSocialMedias: (socialMedias: SocialMedias[]) => void;
    addExperiences: (experiences: Experience[]) => void;
    addTechs: (techs: Tech[]) => void;
}

// Initial state of the store
export const initialUserStoreState: IUserStore = {
    user: null,
    projects: [],
    socialMedias: [],
    experiences: [],
    techs: [],
    addUser: (user: User) => {},
    addProjects: (projects: Project[]) => {},
    addSocialMedias: (socialMedias: SocialMedias[]) => {},
    addExperiences: (experiences: Experience[]) => {},
    addTechs: (techs: Tech[]) => {},
};


// Here you are going to create your store
export const createUserStore = (set: any, get: any, api: any) => ({
    addUser: (user: User) => set({ user }),
    addProjects: (projects: Project[]) => set({ projects }),
    addSocialMedias: (socialMedias: SocialMedias[]) => set({ socialMedias }),
    addExperiences: (experiences: Experience[]) => set({ experiences }),
    addTechs: (techs: Tech[]) => set({ techs }),
})





