/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Fakile Modasola - Content Creator Portfolio",
  description:
    "Creative content creator and social media manager passionate about authentic storytelling, brand collaborations, and building meaningful connections through engaging digital content.",
  og: {
    title: "Fakile Modasola - Content Creator Portfolio",
    type: "website",
    url: "https://fakilemodasola.com/",
  },
};

//Home Page
const greeting = {
  title: "Fakile Modasola",
  logo_name: "Fakile Modasola",
  // nickname: "",
  subTitle:
    "Creative content creator and social media manager passionate about authentic storytelling, brand collaborations, and building meaningful connections through engaging digital content. I specialize in creating compelling UGC content that resonates with audiences and drives real engagement.",
  resumeLink: "https://drive.google.com/file/d/your-resume-link-here",
  portfolio_repository:
    "https://www.canva.com/design/DAFukSvmI0g/x40_wVX-txZW3l-4HKJFKw/edit?utm_content=DAFukSvmI0g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  githubProfile: "https://github.com/your-username",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // instagram: "https://www.instagram.com/_dasola___",
  // tiktok: "https://www.tiktok.com/@_dasola___",
  // linkedin: "https://www.linkedin.com/in/esther-fakile-104939232/",
  // gmail: "modasolafakile@gmail.com"

  {
    name: "Instagram",
    link: "https://www.instagram.com/_dasola___",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "TikTok",
    link:
      "https://www.tiktok.com/@_dasola__?_r=1&_d=ebg0mh32230e8f&sec_uid=MS4wLjABAAAA6ssNIuZOIwUrEgLN8yktbKn6b80w8w4-H4OF99rT95wKDFcsNL0YZovJhPdVyncc&share_author_id=6817131656308229125&sharer_language=en&source=h5_m&u_code=dc1hef1m5jh5jh&ug_btm=b8727,b0&sec_user_id=MS4wLjABAAAA6ssNIuZOIwUrEgLN8yktbKn6b80w8w4-H4OF99rT95wKDFcsNL0YZovJhPdVyncc&utm_source=copy&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=copy&user_id=6817131656308229125&enable_checksum=1&share_link_id=055BA994-EE58-4370-B760-D1D50FC9C4EB&share_app_id=1233&ug_btm=b8727,b0&sec_user_id=MS4wLjABAAAA6ssNIuZOIwUrEgLN8yktbKn6b80w8w4-H4OF99rT95wKDFcsNL0YZovJhPdVyncc&utm_source=more&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=more&user_id=6817131656308229125&enable_checksum=1&share_link_id=9A5D6D28-22B7-4E69-91BF-0E33D6729549&share_app_id=1233",
    imageSrc: "tiktok_logo.png", // Using custom TikTok logo image
    backgroundColor: "#000000", // TikTok brand color
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/esther-fakile-104939232/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:modasolafakile@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Social Media Management",
      fileName: "socialmedia",
      skills: [
        "⚡ Managing multiple social media platforms with strategic content planning and community engagement",
        "⚡ Creating and executing social media campaigns that drive engagement and brand awareness",
        "⚡ Analyzing performance metrics and optimizing content strategy for maximum reach and impact",
      ],
      softwareSkills: [
        {
          skillName: "Instagram",
          fontAwesomeClassname: "fa-instagram",
          style: {
            color: "#E4405F",
          },
        },
        {
          skillName: "TikTok",
          imageSrc: "tiktok_logo.png",
          style: {
            backgroundColor: "#000000",
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Meta Business",
          fontAwesomeClassname: "fa-facebook",
          style: {
            color: "#1877F2",
          },
        },
        {
          skillName: "LinkedIn",
          fontAwesomeClassname: "fa-linkedin",
          style: {
            color: "#0077B5",
          },
        },
      ],
    },
    {
      title: "Content Creation",
      fileName: "contentcreator",
      skills: [
        "⚡ Producing high-quality video content for multiple platforms including TikTok, Instagram, and YouTube",
        "⚡ Creating engaging visual content using professional editing tools and creative design software",
        "⚡ Developing authentic storytelling that resonates with target audiences and drives engagement",
      ],
      softwareSkills: [
        {
          skillName: "Photoshop",
          fontAwesomeClassname: "fa-paint-brush",
          style: {
            color: "#31A8FF",
          },
        },
        {
          skillName: "Content Strategy",
          fontAwesomeClassname: "fa-lightbulb-o",
          style: {
            color: "#FFEAA7",
          },
        },
        {
          skillName: "CapCut",
          fontAwesomeClassname: "fa-scissors",
          style: {
            color: "#FF6B6B",
          },
        },
        {
          skillName: "Lightroom",
          fontAwesomeClassname: "fa-camera",
          style: {
            color: "#FF6B6B",
          },
        },
      ],
    },
    {
      title: "UGC & Brand Collaboration",
      fileName: "ugc",
      skills: [
        "⚡ Creating authentic user-generated content that showcases products in real-life scenarios",
        "⚡ Building strong relationships with brands and delivering high-quality collaborative content",
        "⚡ Developing creative concepts that align with brand values while maintaining authenticity",
      ],
      softwareSkills: [
        {
          skillName: "Product Photography",
          fontAwesomeClassname: "fa-camera",
          style: {
            color: "#FF6B6B",
          },
        },
        {
          skillName: "Brand Partnerships",
          fontAwesomeClassname: "fa-handshake-o",
          style: {
            color: "#4ECDC4",
          },
        },
        {
          skillName: "Authentic Storytelling",
          fontAwesomeClassname: "fa-comment",
          style: {
            color: "#45B7D1",
          },
        },
        {
          skillName: "Influencer Marketing",
          fontAwesomeClassname: "fa-users",
          style: {
            color: "#96CEB4",
          },
        },
      ],
    },
    {
      title: "Digital Marketing",
      fileName: "digitalmarketer",
      skills: [
        "⚡ Developing comprehensive digital marketing strategies that drive growth and engagement",
        "⚡ Creating compelling copy and visual content that converts and builds brand loyalty",
        "⚡ Optimizing content for SEO and implementing data-driven marketing approaches",
      ],
      softwareSkills: [
        {
          skillName: "SEO",
          fontAwesomeClassname: "fa-search",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Email Marketing",
          fontAwesomeClassname: "fa-envelope",
          style: {
            color: "#EA4335",
          },
        },
        {
          skillName: "Content Strategy",
          fontAwesomeClassname: "fa-bullseye",
          style: {
            color: "#9C27B0",
          },
        },
        {
          skillName: "Campaign Management",
          fontAwesomeClassname: "fa-rocket",
          style: {
            color: "#FF5722",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Instagram",
      iconifyClassname: "simple-icons:instagram",
      style: {
        color: "#E4405F",
      },
      profileLink: "https://www.instagram.com/_dasola___",
    },
    {
      siteName: "TikTok",
      iconifyClassname: "simple-icons:tiktok",
      style: {
        color: "#000000",
      },
      profileLink: "https://www.tiktok.com/@_dasola___",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/esther-fakile-104939232/",
    },
    {
      siteName: "Canva",
      iconifyClassname: "simple-icons:canva",
      style: {
        color: "#00C4CC",
      },
      profileLink:
        "https://www.canva.com/design/DAFukSvmI0g/x40_wVX-txZW3l-4HKJFKw/edit",
    },
    {
      siteName: "YouTube",
      iconifyClassname: "simple-icons:youtube",
      style: {
        color: "#FF0000",
      },
      profileLink: "#",
    },
    {
      siteName: "Behance",
      iconifyClassname: "simple-icons:behance",
      style: {
        color: "#1769FF",
      },
      profileLink: "#",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Federal University of Agriculture Abeokuta",
      subtitle: "BSc in Hospitality and Tourism",
      logo_path: "funaab.jpeg",
      alt_name: "FUNAAB",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Studied comprehensive hospitality management including customer service, tourism operations, and event planning",
        "⚡ Developed strong interpersonal and communication skills essential for content creation and brand collaboration",
        "⚡ Gained practical experience in service excellence and creating memorable guest experiences",
        "⚡ Completed coursework in marketing, business management, and customer relationship management",
        "⚡ Participated in industry internships and practical training programs",
      ],
      website_link: "https://funaab.edu.ng/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Managing Projects with Microsoft 365",
      subtitle: "- LinkedIn Learning",
      logo_path: "linkedin_logo.jpeg",
      certificate_link: "#",
      alt_name: "LinkedIn",
      color_code: "#0077B599",
    },
    {
      title: "LECETRA",
      subtitle: "- Lectra",
      logo_path: "lectra_logo.jpeg",
      certificate_link: "#",
      alt_name: "Lectra",
      color_code: "#D83B0199",
    },
    {
      title: "Copywriting and SEO",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.jpeg",
      certificate_link: "#",
      alt_name: "Udemy",
      color_code: "#EC525299",
    },
    {
      title: "Customer Service Fundamentals",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.jpeg",
      certificate_link: "#",
      alt_name: "Udemy",
      color_code: "#EC525299",
    },
    {
      title: "Advanced SEO: Search Factors",
      subtitle: "- LinkedIn Learning",
      logo_path: "linkedin_logo.jpeg",
      certificate_link: "#",
      alt_name: "LinkedIn",
      color_code: "#0077B599",
    },
    {
      title: "Influencer Marketing",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link: "#",
      alt_name: "Coursera",
      color_code: "#2A73CC99",
    },
    // {
    //   title: "Content Marketing Strategy",
    //   subtitle: "- HubSpot Academy",
    //   logo_path: "hubspot_logo.jpeg",
    //   certificate_link: "#",
    //   alt_name: "HubSpot",
    //   color_code: "#FF7A5999",
    // },

    // {
    //   title: "Video Content Creation",
    //   subtitle: "- Udemy",
    //   logo_path: "coursera_logo.png",
    //   certificate_link: "#",
    //   alt_name: "Udemy",
    //   color_code: "#EC525299",
    // },
    // {
    //   title: "Brand Management",
    //   subtitle: "- LinkedIn Learning",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link: "#",
    //   alt_name: "LinkedIn",
    //   color_code: "#0077B599",
    // },
    // {
    //   title: "Photography Fundamentals",
    //   subtitle: "- Skillshare",
    //   logo_path: "coursera_logo.png",
    //   certificate_link: "#",
    //   alt_name: "Skillshare",
    //   color_code: "#00D4AA99",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Brand Collaborations and Community",
  description:
    "I have worked with various brands and companies as a content creator, social media manager, and UGC creator. I specialize in creating authentic content that resonates with audiences and drives engagement. I love building communities and that is why I am also involved with various content creation communities and brand partnerships.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Social Media Manager",
          company: "Fdomingo Film",
          company_url: "#",
          logo_path: "fd.jpg",
          duration: "2024 - Present",
          location: "Remote",
          descriptions: [
            " Optimized social media profiles to ensure visibility and reach maximum potential audience",
            " Created visuals and copy for social media posts that increased likes and shares",
            " Monitored key metrics and performance to identify trends and opportunities for improvement",
          ],
          color: "#4285F4",
        },
        {
          title: "Content Creator & Social Media Manager",
          company: "Tsoundshub",
          company_url: "#",
          logo_path: "tsound.JPG",
          duration: "2023 - 2025",
          location: "Remote",
          descriptions: [
            " Created content calendars and managed content schedules to ensure timely delivery of content",
            " Developed and maintained a content calendar to ensure timely delivery of content",
            " Managed content creation and publication process, ensuring timely and accurate delivery of content",
            " Developed content strategy and editorial guidelines for all content, resulting in consistent messaging and improved brand recognition",
          ],
          color: "#4285F4",
        },
        {
          title: "Executive Secretary Intern",
          company: "Institute of Tourism Professionals Nigeria",
          company_url: "#",
          logo_path: "itpn.png",
          duration: "2024",
          location: "Lagos, Nigeria",
          descriptions: [
            " Assisted in market research and tourism promotion strategies to enhance service offerings",
            " Supported content development for tourism campaigns, improving audience engagement",
            " Gained practical experience in customer relations and service marketing",
          ],
          color: "#0C9D58",
        },
        // {
        //   title: "Content Marketing Assistant",
        //   company: "Digital Marketing Agency",
        //   company_url: "#",
        //   logo_path: "microsoft_logo.png",
        //   duration: "2020 - 2021",
        //   location: "Remote",
        //   description:
        //     "Assisted in content creation, social media management, and digital marketing campaigns. Learned effective content strategies, SEO optimization, and audience engagement techniques. Contributed to successful campaigns for various client industries.",
        //   color: "#FF6B6B",
        // },
      ],
    },
    // {
    //   title: "Brand Collaborations",
    //   experiences: [
    //     {
    //       title: "Fashion & Lifestyle Brand Partner",
    //       company: "Multiple Fashion Brands",
    //       company_url: "#",
    //       logo_path: "google_logo.png",
    //       duration: "2022 - Present",
    //       location: "Remote",
    //       description:
    //         "Collaborating with fashion and lifestyle brands to create authentic content showcasing their products. Developing creative concepts, producing high-quality visual content, and maintaining genuine audience engagement through relatable storytelling.",
    //       color: "#FF6B6B",
    //     },
    //     {
    //       title: "Beauty & Skincare Content Creator",
    //       company: "Beauty Brands",
    //       company_url: "#",
    //       logo_path: "microsoft_logo.png",
    //       duration: "2021 - Present",
    //       location: "Remote",
    //       description:
    //         "Creating authentic beauty and skincare content for various brands. Producing tutorials, reviews, and lifestyle content that educates and engages audiences while maintaining transparency and authenticity in brand partnerships.",
    //       color: "#E4405F",
    //     },
    //     {
    //       title: "Technology Product Reviewer",
    //       company: "Tech Companies",
    //       company_url: "#",
    //       logo_path: "google_logo.png",
    //       duration: "2022 - Present",
    //       location: "Remote",
    //       description:
    //         "Reviewing and creating content for technology products and services. Developing engaging content that explains complex products in simple terms, making technology accessible to diverse audiences through creative storytelling.",
    //       color: "#4285F4",
    //     },
    //   ],
    // },
    {
      title: "Community & Volunteering",
      experiences: [
        {
          title: "Volunteer",
          company: "Coping Together",
          company_url: "#",
          logo_path: "coping.jpg",
          duration: "2021 - Present",
          location: "Remote",
          descriptions: [
            " Supporting children's access to essential supplies and personal care items",
            " Contributing to community outreach programs that help families in need",
            " Participating in fundraising and awareness campaigns for children's welfare",
            " Collaborating with team members to organize donation drives and support initiatives",
          ],
          color: "#FF6B6B",
        },
        {
          title: "Volunteer",
          company: "AIESEC",
          company_url: "#",
          logo_path: "aisec.png",
          duration: "2022 - 2025",
          location: "Remote",
          descriptions: [
            " Participating in global youth leadership development programs and initiatives",
            " Contributing to international exchange programs and cultural understanding projects",
            " Supporting AIESEC's mission of developing young leaders and promoting peace",
            " Engaging in community service projects and social impact activities",
            " Collaborating with international teams on cross-cultural communication and leadership",
          ],
          color: "#FF6B6B",
        },
        {
          title: "Volunteer",
          company: "Rescue Outreach",
          company_url: "#",
          logo_path: "volunteer.png",
          duration: "2020 - 2023",
          location: "Remote",
          descriptions: [
            " Supporting community outreach programs and social impact initiatives",
            " Contributing to awareness campaigns and community engagement activities",
            " Helping organize events and programs that benefit local communities",
            " Collaborating with team members to maximize outreach impact and effectiveness",
          ],
          color: "#E4405F",
        },
        // {
        //   title: "Digital Marketing Volunteer",
        //   company: "Non-Profit Organizations",
        //   company_url: "#",
        //   logo_path: "ngo.jpg",
        //   duration: "2020 - Present",
        //   location: "Remote",
        //   descriptions: [
        //     " Providing digital marketing and content creation support to non-profit organizations",
        //     " Helping them build their online presence and engage with communities",
        //     " Amplifying their messages through effective social media strategies",
        //     " Creating compelling content that drives awareness and support",
        //     " Supporting social causes through strategic digital marketing initiatives",
        //   ],
        //   color: "#0C9D58",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "fakile.JPG",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with content creation, social media management, brand collaborations, and UGC content development.",
  },
  blogSection: {
    title: "Portfolio",
    subtitle:
      "Explore my creative portfolio showcasing content creation, social media campaigns, and brand collaborations through visual storytelling.",
    link:
      "https://www.canva.com/design/DAFukSvmI0g/x40_wVX-txZW3l-4HKJFKw/edit?utm_content=DAFukSvmI0g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    avatar_image_path: "experience2.jpg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Available for remote collaborations worldwide",
    locality: "Remote",
    country: "Worldwide",
    region: "Digital",
    postalCode: "",
    streetAddress: "Virtual Office",
    avatar_image_path: "address_image.svg",
    location_map_link: "#",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
