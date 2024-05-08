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
  };
  return roles;
};

export const GetExperienceLevels = () => {
  const experience = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return experience;
};
