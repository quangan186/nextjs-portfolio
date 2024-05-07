export class ProjectModel {
    title: string;
    role: string;
    description: string[];
    techStacks: string[]

    constructor() {
        this.title = ''
        this.role = ''
        this.description = []
        this.techStacks = []
    }
}