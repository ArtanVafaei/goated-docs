export const templates = [
  {
    id: "blank",
    label: "Blank document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>[Your Name]</h1>
      <p>[Your Address]</p>
      <p>[City, State, Zip Code]</p>
      <p>[Phone Number]</p>
      <p>[Email Address]</p>

      <h2>Objective</h2>
      <p>Seeking a position as [Job Title] where I can utilize my skills and experience to contribute to the success of [Company Name].</p>

      <h2>Experience</h2>
      <ul>
        <li><strong>[Job Title]</strong> at [Company Name] - [Dates]</li>
        <li>[Responsibilities and achievements]</li>
      </ul>

      <h2>Education</h2>
      <ul>
        <li><strong>[Degree]</strong> in [Field of Study] from [University Name] - [Year]</li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>[Skill 1]</li>
        <li>[Skill 2]</li>
        <li>[Skill 3]</li>
      </ul>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <h1>Letter</h1>
      <p>Date: [Insert Date]</p>
      <p>From: [Your Name]</p>
      <p>To: [Recipient's Name]</p>

      <p>Dear [Recipient's Name],</p>

      <p>I hope this message finds you well. I am writing to [briefly state the purpose of the letter].</p>

      <p>[Provide more details about the subject matter, including any relevant information or context.]</p>

      <p>Thank you for your time and consideration. I look forward to hearing from you soon.</p>

      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <h1>Business Letter</h1>
      <p>Date: [Insert Date]</p>
      <p>From: [Your Name]</p>
      <p>To: [Recipient's Name]</p>
      <p>Subject: [Subject of the letter]</p>

      <p>Dear [Recipient's Name],</p>

      <p>I hope this message finds you well. I am writing to discuss [briefly state the purpose of the letter].</p>

      <p>[Provide more details about the subject matter, including any relevant information or context.]</p>

      <p>Thank you for your attention to this matter. I look forward to hearing from you soon.</p>

      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <p>Date: [Insert Date]</p>
      <p>From: [Your Name]</p>
      <p>To: [Hiring Manager's Name]</p>
      <p>Subject: Application for [Job Title] Position</p>
      <p />

      <p>Dear [Hiring Manager's Name],</p>
      <p />

      <p>I am writing to express my interest in the [Job Title] position at [Company Name]. With my background in [Your Field/Industry] and a strong passion for [relevant skills or experiences], I believe I would be a valuable asset to your team.</p>
      <p />

      <p>[Provide more details about your qualifications, experiences, and why you are a good fit for the role.]</p>
      <p />

      <p>Thank you for considering my application. I look forward to the opportunity to discuss how I can contribute to the success of [Company Name].</p>
      <p />

      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <h2>Introduction</h2>
      <p>This proposal outlines the project plan for [Project Name]. Our objective is to deliver a comprehensive solution that meets the needs of [Client's Name].</p>
      <p />

      <h2>Project Goals</h2>
      <p>Define the main goals and objectives of the project.</p>
      <p />

      <h2>Scope of Work</h2>
      <p>Detailed breakdown of tasks, deliverables, and timelines.</p>
      <p />

      <h2>Budget</h2>
      <p>Estimated budget and cost breakdown for the project.</p>
      <p />

      <h2>Conclusion</h2>
      <p>Summary of the proposal and next steps.</p>
    `,
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <h2>Project Overview</h2>
      <p>This proposal outlines the development of a software solution to address the needs of [Client's Name]. Our goal is to deliver a high-quality, scalable, and efficient software product that meets your business requirements.</p>

      <h2>Scope of Work</h2>
      <p>Detailed breakdown of project deliverables and requirements.</p>

      <h2>Timeline</h2>
      <p>Project milestones and delivery schedule.</p>

      <h2>Budget</h2>
      <p>Cost breakdown and payment terms.</p>
    `,
  },
];
