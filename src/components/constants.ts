export const GetRoles = () => {
  const roles = {
    engineering: {
      title: "ENGINEERING",
      values: [
        "Backend",
        "Frontend",
        "Fullstack",
        "IOS",
        "Flutter",
        "React Native",
        "Android",
        "Tech Lead",
        "Dev-Ops",
        "Data Engineer",
        "Data Science",
        "Computer Vision",
        "Nlp",
        "Deep-Learning",
        "Test/ Qa",
        "Web3",
        "Sre",
        "Infrastructure",
      ],
    },
    design: {
      title: "DESIGN",
      values: [
        "Designer",
        "Design Manager",
        "Graphic Designer",
        "Product Designer",
      ],
    },
    product: {
      title: "PRODUCT",
      values: ["Product Manager"],
    },
    operations: {
      title: "OPERATIONS",
      values: ["Operations Manager", "Founder's Office/Cheif Of Staff"],
    },
    sales: {
      title: "SALES",
      values: [
        "Sales Development Representative",
        "Account Executive",
        "Account Manager",
      ],
    },
    marketing: {
      title: "MARKETING",
      values: [
        "Digital Marketing Manager",
        "Growth Hacker",
        "Marketing",
        "Product Marketing Manager",
      ],
    },
    otherEng: {
      title: "OTHER ENGINEERING",
      values: ["Hardware", "Mechanical", "Systems"],
    },
    businessAnalyst: {
      title: "BUSINESS ANALYST",
      values: ["Business Analyst"],
    },
    dataAnalyst: {
      title: "DATA ANALYST",
      values: ["Data Analyst"],
    },
    projectManager: {
      title: "PROJECT MANAGER",
      values: ["Project Manager"],
    },
    management: {
      title: "MANAGEMENT",
      values: ["Management"],
    },
    legal: {
      title: "LEGAL",
      values: ["Legal"],
    },
    hr: {
      title: "HR",
      values: ["Hr"],
    },
    finance: {
      title: "FINANCE",
      values: ["Finance"],
    },
  };
  return roles;
};

export const GetExperienceLevels = () => {
  const experience = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return experience;
};
