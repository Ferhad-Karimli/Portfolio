import personImage from "../src/assets/images/personImage.jpg";
import icongroup from "../src/assets/images/icongroup.jpg";
import greentravel from "../src/assets/images/greentravel.jpg";
import travolic from "../src/assets/images/travolic.jpg";
import oyren from "../src/assets/images/oyren.jpg";

const logotext = "Farhad Karimli";
const meta = {
  title: "Farhad Karimli",
  description: "I’m Farhad Karimli Software engineer.",
};

const introdata = {
  title: "I’m Farhad Karimli",
  animated: {
    first: "I love coding",
    second: "I build awesome websites",
    third: "I develop mobile apps",
  },
  description:
    "Building responsive and user-friendly websites . I expertise in technologies like React.js, Next.js, and React Native ensures your site looks great and functions smoothly. Whether you need a basic website or a dynamic web app, we create solutions just for you.",

  your_img_url: personImage,
};

// const dataabout = {
//   title: "a bit about my self",
//   aboutme:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
// };

const dataabout = {
  title: "A Bit About Myself",
  aboutme:
    "Hello! I'm Farhad, a passionate Web  Development based in Baku,Azerbaijan. With a background in Front End Development, I have a strong enthusiasm for Web Development. I believe in continuous learning and enjoy coding.",
};

const worktimeline = [
  {
    jobtitle: "Travolic",
    where: "Cairo,Egypt",
    date: "2021",
  },
  {
    jobtitle: "Innovation Development Agency",
    where: "Baku,Azerbaijan",
    date: "2022",
  },
  {
    jobtitle: "Bestcomp",
    where: "Baku,Azerbaijan",
    date: "2023",
  },
];

const skills = [
  {
    name: "React.js",
    value: 100,
  },
  {
    name: "Next.js",
    value: 100,
  },
  {
    name: "Angular.js",
    value: 60,
  },

  {
    name: "Jquery",
    value: 90,
  },
];

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and user-friendly websites using modern technologies like HTML, CSS, and JavaScript. From static websites to dynamic web applications, we create solutions tailored to your needs.",
  },
  {
    title: "Mobile App Development",
    description:
      "Crafting native and cross-platform mobile applications for iOS and Android. Our apps focus on delivering a seamless user experience while leveraging device capabilities.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and engaging user experiences. Our design team ensures that your digital products are visually appealing, easy to navigate, and functional.",
  },
  // Add more service entries as needed
];

const dataportfolio = [
  {
    img: travolic,
    description: "",
    link: "https://travolic.com/",
    name: "travolic.com",
  },
  {
    img: greentravel,
    description: "",
    link: "https://greentravel.az/",
    name: "greentravel.az",
  },
  {
    img: icongroup,
    description: "",
    link: "https://icongroup.az/",
    name: "icongroup.az",
  },
  {
    img: oyren,
    description: "",
    link: "https://oyren.dev/courses",
    name: "oyren.dev",
  },
];

const contactConfig = {
  YOUR_EMAIL: "ferhad.karimli.077@gmail.com",
  YOUR_FONE: "+994773214977",
  YOUR_SERVICE_ID: "service_fjl9t7q",
  YOUR_TEMPLATE_ID: "template_5vb57ya",
  // YOUR_USER_ID: "OfvJDngXtLn7LMu_m6yaJ",
  YOUR_PUBLIC_KEY: "oi8Ssg-P_wAwPmOk5",
};

const socialprofils = {
  github: "https://github.com/Ferhad-Karimli",
  linkedin: "https://www.linkedin.com/in/farhad-karimli-95085484/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
