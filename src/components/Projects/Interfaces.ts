interface Project {
    id: number,
    title: string;
    description: string;
    longDescription: string;
    languages: string[];
    linkURL: string;
    linkDisabled: boolean;
    sourceURL: string;
    sourceDisabled: boolean;
}

export default Project;