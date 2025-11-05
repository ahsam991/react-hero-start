export interface Social {
  name: string;
  url: string;
  icon: string;
}

export const socials = {
  github: "https://github.com/ahsam",
  linkedin: "https://linkedin.com/in/ahsam",
  email: "ahsam@example.com"
};

export const socialLinks: Social[] = [
  {
    name: "GitHub",
    url: socials.github,
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: socials.linkedin,
    icon: "linkedin"
  },
  {
    name: "Email",
    url: `mailto:${socials.email}`,
    icon: "mail"
  }
];
