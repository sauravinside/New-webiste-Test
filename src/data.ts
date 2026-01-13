// All your personal data in one place
export const DATA = {
  profile: {
    name: "Saurav Singh",
    role: "Cloud Engineer & DevOps Specialist",
    email: "singhsaurav400@gmail.com",
    location: "Gurugram, India",
    github: "github.com/sauravinside",
    linkedin: "linkedin.com/in/saurav-singh-81321b16a"
  },
  skills: [
    { name: "GCP", level: 95, color: "#4285F4" },
    { name: "AWS", level: 90, color: "#FF9900" },
    { name: "Terraform", level: 95, color: "#7B42BC" },
    { name: "Kubernetes", level: 85, color: "#326CE5" },
    { name: "Python", level: 90, color: "#3776AB" }
  ],
  experience: [
    {
      company: "Searce Cosourcing",
      role: "Cloud Engineer",
      date: "2022-Present",
      tasks: ["Cloud migration (Azure/AWS to GCP)", "Anthos Management", "IaC with Terraform"]
    },
    {
      company: "Intellipaat",
      role: "Lead Cloud Analyst",
      date: "2021-2022",
      tasks: ["CI/CD Implementation", "BOTO3 Automation"]
    }
  ],
  certifications: [
    { name: "Professional Cloud Network Engineer", provider: "Google Cloud", id: "73263053" },
    { name: "Solutions Architect Associate", provider: "AWS", id: "RQX6G5FDYF44QSG1" }
  ],
  projects: [
    { title: "GCP Marketplace App", tech: ["Terraform", "Docker"], desc: "SaaS deployment to GCP Marketplace" },
    { title: "Multi-Cloud IaC", tech: ["AWS", "GCP", "Azure"], desc: "Terraformisation of legacy infra" }
  ]
};
