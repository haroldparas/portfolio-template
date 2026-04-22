export const skills = {
  frontend: ["Skill 1", "Skill 2", "Skill 3"],
  backend: ["Skill 4", "Skill 5", "Skill 6"],
  database: ["Database 1", "Database 2"],
  api: ["REST API", "GraphQL"],
  platforms: ["Tool 1", "Tool 2"]
} as const;

export const projects = [
  {
    title: "Project Template 1",
    description: "This is a placeholder for your first project. Describe what it does, why you built it, and what technologies were used.",
    url: "github.com/yourusername/project1",
    year: "2024",
    tech: ["Tech 1", "Tech 2", "Tech 3"],
    images: []
  },
  {
    title: "Project Template 2",
    description: "This is a placeholder for your second project. Describe what it does, why you built it, and what technologies were used.",
    url: "yourproject.com",
    year: "2023",
    tech: ["Tech 4", "Tech 5", "Tech 6"],
    images: []
  }
] as const;

export const experience = [
  {
    role: "Your Current Role",
    organization: "Company Name",
    year: "2023 - Present",
    description: "Describe your responsibilities, achievements, and the impact you made in this role."
  },
  {
    role: "Your Previous Role",
    organization: "Company Name",
    year: "2021 - 2023",
    description: "Describe your responsibilities, achievements, and the impact you made in this role."
  }
] as const;

export const certifications = [
  { 
    name: "Certification Name", 
    issuer: "Issuing Organization",
    link: "https://your-certificate-link.com",
    description: "Brief description of what you learned or achieved in this certification."
  }
] as const;
