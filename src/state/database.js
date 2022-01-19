import Mock from "./mock";

const photo = require("../assets/placeholders/photo.jpg");
const logotype = require("../assets/placeholders/logotype.png");
const icon = require("../assets/placeholders/icon.svg");

// photo
const photoActivy = require("../assets/content/polesactivity.jpeg");
const PolesIndoBanner = require("../assets/content/PolesIndoBanner.jpg");
const alatobat = require("../assets/content/bara.jpeg");
const bara = require("../assets/content/alatobat.jpg");
const dapur = require("../assets/content/dapur.jpeg");


const database = {
  categories: [
    {
      id: "0",
      title: "Layanan",
    },
    {
      id: "1",
      title: "Riwayat Proyek",
    },
    {
      id: "2",
      title: "Testimony",
    },
    {
      id: "3",
      title: "Artikel",
    },
  ],
  choose: {
    list: [
      {
        icon: icon,
        text:
          "Phosfluorescently re-engineer frictionless metrics via premier niches. Seamlessly cultivate high-quality niches whereas empowered processes",
      },
      {
        icon: icon,
        text:
          "Seamlessly grow enabled scenarios without viral channels. Appropriately actualize stand-alone benefits and viral imperatives",
      },
      {
        icon: icon,
        text:
          "Monotonectally benchmark robust leadership skills before high standards in vortals. Collaboratively productivate business.",
      },
    ],
  },
  facts: [
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title: "Believe in your business skills but never stop improving",
    },
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title:
        "Efficiently impact focused e-services vis-a-vis client-focused outsourcing",
    },
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title:
        "Enthusiastically supply client-centered alignments after prospective",
    },
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title:
        "Professionally disintermediate client-focused intellectual capital ",
    },
    {
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent.",
      title: "Compellingly matrix global products before 2.0 technologies",
    },
  ],
  facts2: [
    {
      icon: icon,
      lead: "Projects done",
      text:
        "Rapidiously foster goal-oriented supply chains via error-free mindshare integrate flexible.",
      title: 417,
    },
    {
      icon: icon,
      lead: "Positive feedback",
      text:
        "Rapidiously foster goal-oriented supply chains via error-free mindshare integrate flexible.",
      title: "87%",
    },
    {
      icon: icon,
      lead: "Hours worked",
      text:
        "Rapidiously foster goal-oriented supply chains via error-free mindshare integrate flexible.",
      title: "1.8k",
    },
  ],
  fast_links: [
    {
      title: "Homepage",
      url: "/home",
    },
    {
      title: "Tentang Kami",
      url: "about-us",
    },
    {
      title: "Layanan",
      url: "/services",
    },
    {
      title: "Hubungi Kami",
      url: "/contacts",
    },
  ],
  features: [
    {
      icon: icon,
      id: "post_0",
      text:
        "Jasa Poles Marmer, Jasa Poles Granite, Jasa Poles Teraso",
      title: "One Stop Cleaning Solution",
    },
    {
      icon: icon,
      id: "post_1",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches. Globally leverage existing error-free models",
      title: "Jasa Poles Perkantoran",
    },
    {
      icon: icon,
      id: "post_2",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent",
      title: "Jasa Poles Perumahan",
    },
  ],
  features2: [
    {
      icon: "las la-archive",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "#1 Solidity",
    },
    {
      icon: "las la-business-time",
      text:
        "Continually synthesize impactful web services after wireless users. Efficiently deliver excellent users through world-class core competencies. Efficiently enhance ubiquitous outsourcing.",
      title: "#2 Assurance",
    },
    {
      icon: "las la-file-invoice-dollar",
      text:
        "Synergistically streamline market-driven scenarios before synergistic alignments. Efficiently engage wireless e-services for cross-platform quality vectors. ",
      title: "#3 Liability",
    },
  ],
  header_bgs: {
    about: photo,
    about_video_poster: photo,
    blog: photo,
    contacts: photo,
    contacts_w: photo,
    portfolio: photo,
    services: photo,
    team: photo,
    team_w: photo,
    facts: photo,
    subscribe: photo,
    list: photo,
  },
  menu: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Tentang Kami",
      url: "/about-us",
    },
    {
      name: "Layanan",
      url: "/services",
    },
       {
      name: "Kontak",
      url: "/contacts",
    },
  ],
  partners: [logotype, logotype, logotype, logotype, logotype, logotype],
  portfolio: [
    {
      cats: "contracting management construction",
      clientid: "0",
      feedback:
        "Rapidiously transform end-to-end strategic theme areas through functional information. Enthusiastically engage pandemic systems rather than installed base manufactured products. Quickly promote market positioning bandwidth before transparent sources.",
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 0,
      img: photo,
      lead: "Construction",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Modern materials ecology safety",
    },
    {
      cats: "construction management contracting",
      clientid: "1",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 1,
      img: photo,
      lead: "Manufacture",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Architecture design in a wood village",
    },
    {
      cats: "contracting construction",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 2,
      img: photo,
      lead: "Engeneering",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Effective house system for country side",
    },
    {
      cats: "management contracting",
      clientid: "3",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 3,
      img: photo,
      lead: "Construction",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Workers equipment from first-grades",
    },
    {
      cats: "construction",
      clientid: "1",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 4,
      img: photo,
      lead: "Manufacture",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "When city become architecture miracle",
    },
    {
      cats: "construction management",
      clientid: "0",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 5,
      img: photo,
      lead: "Engeneering",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Systems in every project completion",
    },
    {
      cats: "construction contracting",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 6,
      img: photo,
      lead: "Construction",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Complete project for city statement",
    },
    {
      cats: "management",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 7,
      img: photo,
      lead: "Manufacture",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Stay on a bay compromise state",
    },
    {
      cats: "management contracting",
      clientid: "0",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 8,
      img: photo,
      lead: "Engeneering",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Strong link with nature wildreness",
    },
    {
      cats: "construction management",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 9,
      img: photo,
      lead: "Construction",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Future of construction in life",
    },
    {
      cats: "contracting construction",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 10,
      img: photo,
      lead: "Manufacture",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Most ambitious project in history",
    },
    {
      cats: "contracting",
      clientid: "0",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 11,
      img: photo,
      lead: "Engeneering",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Skyscraper for modern city company",
    },
    {
      cats: "management",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 12,
      img: photo,
      lead: "Manufacture",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Green project with investors",
    },
  ],
  posts: [
    {
      category_id: 0,
      featured: true,
      full:"Menghilangkan bekas acian semen,lem,cet minyak dll di permukaan lantai tidaklah semudah yang anda bayangkan,butuh ketelatenan dan ketelitian untuk menghilangkanya tanpa merusak permukaan lantai tersebut. <p>Jika anda mencoba menghilangkan bekas semen dengan formula yang biasa di jual di toko-toko maupun di yang sering di iklankan di media mungkin bisa sedikit demi sedikit menghilangkan noda tersebut,dan mungkin akan merusak permukaan Lantai anda jika pemakaian dan cara penggunaanya tidak tepat. Perawatan Untuk lantai tidak sembarangan dengan  formula yanga asal-asalan karena permukaan lantai sangat tipis dan rentas terhadap goresan,makan harus di tangani oleh ahlinya dan dengan formula khusus pastinya.<p>Demikan sekilas tentang perawatan lantai,semoga info ini bermanfaat dan jika anda berminat dengan jasa kami silahkan menghubungi contac personal kami untuk info lebih lengkapnya,terimakasih telah berkunung di blog kami.</p>",
      id: "post_0",
      image: photoActivy,
      posting_date: "Feb 14, 2020",
      quote:
        "Kami polesindo.com adalah jasa poles dan kristalisasi semua jenis lantai termasuk lantai jenis keramik, marmer, tyeraso, granit, lantai tegtel dan lantai acian semen.",
      short:
        "Jasa Poles Marmer, Jasa Poles Granite, Jasa Poles Teraso, Jasa Poles Lantai Tegel",
      title: "One Stop Cleaning Solutions",
      user_id: "2",
    },
    {
      category_id: 0,
      featured: true,
      full:
        "Untuk lokasi yang kami layani meliputi,rumah tinggal,ruko,gedung pemerintahan,gedung perkantoran,tempat ibadah,rumah sakit,sarana umum,dan lainya <p> Jika Anda kesulitan untuk mengembalikan tingkat kilap lantai Anda padahal secara rutin dipel dan dibersihkan, tidak perlu khawatir karena Anda dapat menggunakan jasa pembersih lantai. <p> Kami PolesIndo.com menggunakan alat-alat yang canggih serta didukung dengan tenaga profesional, PolesIndo menawarkan pelayanan service dengan optimal dan cepat.<p>Dengan berbagai pengalaman dalam hal poles lantai, PolesIndo menawarkan jasa perawatan lantai dengan optimal. Penggunaan alat dilakukan secara hati-hati guna memperhatikan kualitas marmer dan granit agar tidak terdapat bekas gores ataupun masalah lainnya.",
      id: "post_1",
      image: PolesIndoBanner,
      posting_date: "Feb 07, 2020",
      quote:
        "Kami polesindo.com adalah jasa poles dan kristalisasi semua jenis lantai Melayani Seluruh Indonesia",
      short:
        "Melayani Jasa Poles Perkantoran, Perumahan & Sarana Umum Di Seluruh Indonesia",
      title: "Perkantoran, Perumahan & Sarana Umum",
      user_id: "1",
    },
  ],
  pricing: [
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F001-money.svg?alt=media&token=50fd58f2-52ba-406d-a741-16f8294baa49",
      price: "Free",
      services: {
        avaliable: 2,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "basic",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F003-earth-grid.svg?alt=media&token=1f7c3083-418c-4a8a-88bb-4a01416b9a38",
      price: "$17",
      services: {
        avaliable: 3,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "business",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F006-ladder-1.svg?alt=media&token=76a4cf83-b4f6-477b-9fb4-bea757d89831",
      price: "$47",
      services: {
        avaliable: 4,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "advanced",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F007-success-4.svg?alt=media&token=9d7b2683-90fa-41dd-ab84-2acce788c76d",
      price: "$77",
      services: {
        avaliable: 5,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "elite",
    },
  ],
  process: [
    {
      text:
        "Distinctively disintermediate inexpensive e-commerce rather than orthogonal opportunities. Seamlessly deploy virtual experiences through collaborative.",
      title:
        "Collaboratively reinvent seamless methodologies through reliable data",
    },
    {
      text:
        "Intrinsicly enhance diverse niche markets with extensive deliverables. Conveniently grow user-centric architectures via pandemic web-readiness. Quickly underwhelm customized sources through interactive ideas. ",
      title: "Professionally predominate clicks-and-mortar communities",
    },
    {
      text:
        "Uniquely negotiate market positioning architectures with leading-edge services. Energistically formulate end-to-end deliverables through visionary imperatives.",
      title: "Objectively maintain sustainable infomediaries",
    },
  ],
  reviews: [
    {
      author: "Marta Kaufman",
      id: 0,
      img: photo,
      status: "CEO of General Electrics",
      text:
        "Efficiently supply dynamic methodologies after equity invested alignments. Professionally fashion adaptive initiatives after enterprise-wide methodologies. Competently recaptiualize competitive best practices for client-focused technologies. ",
      title: "BuildStars help me to grow my business beyound country limits.",
    },
    {
      author: "Robert Tompson",
      id: 1,
      img: photo,
      status: "Director of Macrosoft",
      text:
        "Rapidiously transform end-to-end strategic theme areas through functional information. Enthusiastically engage pandemic systems rather than installed base manufactured products. Quickly promote market positioning bandwidth before transparent sources. ",
      title: "Extremely good service and amazing support. Highly recommend.",
    },
    {
      author: "Edvard Wright",
      id: 2,
      img: photo,
      status: "Manager of Global Store",
      text:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces. ",
      title: "Their products professional and support is personal oriented",
    },
    {
      author: "Chriss Hemsworth",
      id: 3,
      img: photo,
      status: "Customer",
      text:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      title:
        "Pretty good company in our small town. Work with respect to our needs.",
    },
  ],
  services: [
    {
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 0,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Handling of construction materials",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Profesional",
    },
    {
      featured: "yes",
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 1,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Making planning for ptoject",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Alat Modern & Obat Terbaik",
    },
    {
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 2,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Create value for future product",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Manufacture",
    },
    {
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 3,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Manage workers for productive results",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Building",
    },
    {
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 4,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Make connections with industry leaders",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Management",
    },
    {
      featured: "yes",
      full:
        "Continually incubate standards compliant customer service rather than professional initiatives. Intrinsicly whiteboard web-enabled potentialities via team building supply chains. Collaboratively integrate granular innovation and performance based intellectual capital. Compellingly redefine multimedia based paradigms for high-quality portals. Quickly build out-of-the-box e-tailers for customer directed opportunities.",
      icon: icon,
      id: 5,
      img: photo,
      steps: [
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Construction project planning",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Monitor and coordinate all work",
        },
        {
          text:
            "Competently benchmark multifunctional data with cross-unit               synergy. Synergistically incubate user-centric content rather than               2.0 paradigms. Interactively enable optimal scenarios with effective channels.",
          title: "Post construction phase",
        },
      ],
      subtitle: "Create channel of distribution",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Distribution",
    },
  ],
  salepoint: [
    {
      icon: icon,
      id: 0,
      img: bara,
      subtitle: "Handling of construction materials",
      text:
        "Berpengalaman Lebih dari 15 Tahun ",
      title: "Profesional Di Bidangnya",
    },
    {
      icon: icon,
      id: 1,
      img: alatobat,
      subtitle: "Making planning for ptoject",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Alat Modern & Obat Terbaik",
    },
    {
      icon: icon,
      id: 2,
      img: dapur,
      subtitle: "Create value for future product",
      text:
        "Proses Pengerjaan Cepat & Biaya Ekonomis",
      title: "Cepat & Hemat Biaya",
    },
   ],
  users: [
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 0,
      img:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr1.jpg?alt=media&token=295fff4a-6766-4a97-9e3b-6c0f4c704c62",
      name: "PolesIndo",
    },
  ],
  video: {
    header: "",
    about: "",
  },
};

Mock.onGet("/api/data").reply((config) => {
  const response = database;
  return [200, response];
});
