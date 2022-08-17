interface Project {
    id: number,
    title: string;
    description: string;
    languages: string[];
    linkURL: string;
    linkDisabled: boolean;
    sourceDisabled: boolean;
}

export default Project;