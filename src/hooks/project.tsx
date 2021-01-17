import React, { useCallback, useContext, useEffect, useState } from 'react';
import { createContext } from "react";
import api from '../services/api';
import { useAuth } from './auth';

interface ProjectState {
    projects: IProject[];
}

interface IProject {
    [key: string]: any;
    name: string,
    description: string,
    segment: string,
    videoPitch: string,
    businessPlan: string,
    presentation: string,
    investment: number
}

interface IProjectDTO {
    [key: string]: any;
    name: string,
    description: string,
    segment: string,
    videoPitch: File,
    businessPlan: File,
    presentation: File,
    investment: number
}

interface ProjectContextData {
    createProject(data: IProjectDTO): Promise<void>;
    projects: IProject[];
}

export const ProjectContext = createContext<ProjectContextData>({} as ProjectContextData);

export function useProject() {
    const projectContext = useContext(ProjectContext);

    if (!projectContext) throw new Error('useProject must be used within a ProjectProvider');

    return projectContext;
}

export const ProjectProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<ProjectState>({} as ProjectState);
    const { user: { _id } } = useAuth();

    useEffect(() => {
        api.get('projects').then(res => res.data.filter((project: IProject) => {
            return project.owner._id === _id;
        })).then(projects => setData({ projects }));
    }, [api]);

    const createProject = useCallback(async (data: IProjectDTO) => {
        const multipartData = new FormData();

        Object.keys(data).forEach(key => multipartData.append(key, data[key]));
        multipartData.append('owner', _id);

        await api.post('projectsWithUploads', multipartData);
    }, []);

    return (
        <ProjectContext.Provider value={{ ...data, createProject }}>
            { children}
        </ProjectContext.Provider>
    );
}