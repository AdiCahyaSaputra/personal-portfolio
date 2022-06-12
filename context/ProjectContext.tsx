import { createContext, useContext } from "react"

export interface ProjectContextInterface {
	data: {
		projectName: string,
		projectImage: string,
		projectDesc: string,
		projectURL: string
	},
	onPreview: boolean,
	setOnPreview: Function,
	setProjectPreviewData: Function
}

export const ProjectContext = createContext<ProjectContextInterface | null>(null);
export const useProjectContext = () => useContext(ProjectContext)

