// Unconfirmed destinations stay absent instead of rendering non-functional links.
export const profile: {
  name: string;
  role: string;
  location: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  cvUrl?: string;
} = {
  name: "Almer Hodžić",
  role: "Software Engineer",
  location: "Bosnia and Herzegovina",
  email: "al1merr248@gmail.com",
  githubUrl: "https://github.com/almer-hodzic",
  linkedinUrl: "https://www.linkedin.com/in/almer-hod%C5%BEi%C4%87-2113bb291/",
  cvUrl: "/documents/Almer_Hodzic_CV.pdf",
};

export const technologies = {
  Backend: ["C#", "ASP.NET Core", "Entity Framework Core", "REST APIs"],
  Frontend: ["TypeScript", "React", "Angular", "HTML / CSS"],
  Data: ["Python", "SQL Server", "pandas / NumPy", "scikit-learn"],
  Tools: ["Git / GitHub", "Clean Architecture", "CQRS / MediatR", "Integration testing"],
};
