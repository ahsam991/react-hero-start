export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: "v2-tech",
    role: "Software Quality Assurance (SQA) Engineer",
    company: "V2 Technologies",
    location: "Dhaka, Bangladesh",
    start: "2023",
    end: "Present",
    current: true,
    responsibilities: [
      "Lead QA efforts for eCRM systems serving major clients including British American Tobacco (BAT), Unilever, and Banglalink",
      "Design and execute comprehensive test strategies for Neodesk help desk management platform",
      "Create detailed Software Requirements Specifications (SRS) and test documentation",
      "Develop and maintain automated test suites using Selenium WebDriver",
      "Perform API testing and validation using Postman",
      "Manage bug tracking and reporting workflows via ClickUp",
      "Collaborate with development teams to ensure quality standards and timely releases",
      "Conduct regression testing and smoke testing for production deployments"
    ]
  }
];
