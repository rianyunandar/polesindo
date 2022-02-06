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
const Granit = require("../assets/content/granit.jpg");
const Marmer = require("../assets/content/marmer.jpg");
const Acian = require("../assets/content/acian.jpg");
const Tegel = require("../assets/content/tegel.jpg");
const Teraso = require("../assets/content/teraso.jpg");
const Pasang = require("../assets/content/teraso.jpg");

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
      text: "Jasa Poles Marmer, Jasa Poles Granite, Jasa Poles Teraso",
      title: "One Stop Cleaning Solution",
    },
    {
      icon: icon,
      id: "post_1",
      text: "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches. Globally leverage existing error-free models",
      title: "Jasa Poles Perkantoran",
    },
    {
      icon: icon,
      id: "post_2",
      text: "Globally leverage existing error-free models and B2B products. Professionally productize interdependent",
      title: "Jasa Poles Perumahan",
    },
  ],
  features2: [
    {
      icon: "las la-archive",
      text: "Jasa Poles Profesional Dengan pengalaman 15 tahun dan Ribuan Proyek Tender",
      title: "#1 Berpengalaman",
    },
    {
      icon: "las la-business-time",
      text: "Proses Pengerjaan Cepat bisa Hitungan Jam  dan Jasa Profesional dengan Biaya Terjangkau",
      title: "#2 Cepat & Hemat Biaya",
    },
    {
      icon: "las la-file-invoice-dollar",
      text: "Mengunakan Alat Terbaru Dan Tercanggih Untuk Hasil Terbaik , Mengunakan Obat Terbaik demi perawatan Lantai Terbaik. ",
      title: "#3 Alat Modern & Obat Terbaik",
    },
  ],
  header_bgs: {
    about: PolesIndoBanner,
    about_video_poster: PolesIndoBanner,
    blog: PolesIndoBanner,
    contacts: PolesIndoBanner,
    contacts_w: PolesIndoBanner,
    portfolio: PolesIndoBanner,
    services: PolesIndoBanner,
    team: PolesIndoBanner,
    team_w: PolesIndoBanner,
    facts: PolesIndoBanner,
    subscribe: PolesIndoBanner,
    list: PolesIndoBanner,
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
      full: "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
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
      text: "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Modern materials ecology safety",
    },
    {
      cats: "construction management contracting",
      clientid: "1",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full: "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
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
      text: "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Architecture design in a wood village",
    },
    {
      cats: "contracting construction",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full: "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
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
      text: "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Effective house system for country side",
    },
    {
      cats: "management contracting",
      clientid: "3",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full: "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
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
      text: "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Workers equipment from first-grades",
    },
    {
      cats: "construction",
      clientid: "1",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full: "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
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
      text: "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "When city become architecture miracle",
    },
    {
      cats: "construction management",
      clientid: "0",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full: "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
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
      text: "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Systems in every project completion",
    },
    {
      cats: "construction contracting",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full: "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
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
      text: "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Complete project for city statement",
    },
    {
      cats: "management",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full: "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
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
      text: "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Stay on a bay compromise state",
    },
    {
      cats: "management contracting",
      clientid: "0",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full: "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
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
      text: "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Strong link with nature wildreness",
    },
    {
      cats: "construction management",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full: "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
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
      text: "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Future of construction in life",
    },
    {
      cats: "contracting construction",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full: "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
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
      text: "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Most ambitious project in history",
    },
    {
      cats: "contracting",
      clientid: "0",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full: "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
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
      text: "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Skyscraper for modern city company",
    },
    {
      cats: "management",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full: "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
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
      text: "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Green project with investors",
    },
  ],
  posts: [
    {
      category_id: 0,
      featured: true,
      full: "Menghilangkan bekas acian semen,lem,cet minyak dll di permukaan lantai tidaklah semudah yang anda bayangkan,butuh ketelatenan dan ketelitian untuk menghilangkanya tanpa merusak permukaan lantai tersebut. <p>Jika anda mencoba menghilangkan bekas semen dengan formula yang biasa di jual di toko-toko maupun di yang sering di iklankan di media mungkin bisa sedikit demi sedikit menghilangkan noda tersebut,dan mungkin akan merusak permukaan Lantai anda jika pemakaian dan cara penggunaanya tidak tepat. Perawatan Untuk lantai tidak sembarangan dengan  formula yanga asal-asalan karena permukaan lantai sangat tipis dan rentas terhadap goresan,makan harus di tangani oleh ahlinya dan dengan formula khusus pastinya.<p>Demikan sekilas tentang perawatan lantai,semoga info ini bermanfaat dan jika anda berminat dengan jasa kami silahkan menghubungi contac personal kami untuk info lebih lengkapnya,terimakasih telah berkunung di blog kami.</p>",
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
      full: "Untuk lokasi yang kami layani meliputi,rumah tinggal,ruko,gedung pemerintahan,gedung perkantoran,tempat ibadah,rumah sakit,sarana umum,dan lainya <p> Jika Anda kesulitan untuk mengembalikan tingkat kilap lantai Anda padahal secara rutin dipel dan dibersihkan, tidak perlu khawatir karena Anda dapat menggunakan jasa pembersih lantai. <p> Kami PolesIndo.com menggunakan alat-alat yang canggih serta didukung dengan tenaga profesional, PolesIndo menawarkan pelayanan service dengan optimal dan cepat.<p>Dengan berbagai pengalaman dalam hal poles lantai, PolesIndo menawarkan jasa perawatan lantai dengan optimal. Penggunaan alat dilakukan secara hati-hati guna memperhatikan kualitas marmer dan granit agar tidak terdapat bekas gores ataupun masalah lainnya.",
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
      icon: "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F001-money.svg?alt=media&token=50fd58f2-52ba-406d-a741-16f8294baa49",
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
      icon: "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F003-earth-grid.svg?alt=media&token=1f7c3083-418c-4a8a-88bb-4a01416b9a38",
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
      icon: "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F006-ladder-1.svg?alt=media&token=76a4cf83-b4f6-477b-9fb4-bea757d89831",
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
      icon: "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F007-success-4.svg?alt=media&token=9d7b2683-90fa-41dd-ab84-2acce788c76d",
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
      text: "Distinctively disintermediate inexpensive e-commerce rather than orthogonal opportunities. Seamlessly deploy virtual experiences through collaborative.",
      title:
        "Collaboratively reinvent seamless methodologies through reliable data",
    },
    {
      text: "Intrinsicly enhance diverse niche markets with extensive deliverables. Conveniently grow user-centric architectures via pandemic web-readiness. Quickly underwhelm customized sources through interactive ideas. ",
      title: "Professionally predominate clicks-and-mortar communities",
    },
    {
      text: "Uniquely negotiate market positioning architectures with leading-edge services. Energistically formulate end-to-end deliverables through visionary imperatives.",
      title: "Objectively maintain sustainable infomediaries",
    },
  ],
  reviews: [
    {
      author: "Marta Kaufman",
      id: 0,
      img: photo,
      status: "CEO of General Electrics",
      text: "Efficiently supply dynamic methodologies after equity invested alignments. Professionally fashion adaptive initiatives after enterprise-wide methodologies. Competently recaptiualize competitive best practices for client-focused technologies. ",
      title: "BuildStars help me to grow my business beyound country limits.",
    },
    {
      author: "Robert Tompson",
      id: 1,
      img: photo,
      status: "Director of Macrosoft",
      text: "Rapidiously transform end-to-end strategic theme areas through functional information. Enthusiastically engage pandemic systems rather than installed base manufactured products. Quickly promote market positioning bandwidth before transparent sources. ",
      title: "Extremely good service and amazing support. Highly recommend.",
    },
    {
      author: "Edvard Wright",
      id: 2,
      img: photo,
      status: "Manager of Global Store",
      text: "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces. ",
      title: "Their products professional and support is personal oriented",
    },
    {
      author: "Chriss Hemsworth",
      id: 3,
      img: photo,
      status: "Customer",
      text: 'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      title:
        "Pretty good company in our small town. Work with respect to our needs.",
    },
  ],
  services: [
    {
      full: `<p>Granit anda terlihat kusam,tidak licin dan kasar serta tidak mengkilap,kami hadir menjawab masalah tersebut.
      Dengan Harga Terjangkau maka lantai granit anda akan kembali licin,bersih,lebih halus dan mengkilap kembali.
      <br/>Granit adalah penutup lantai yang paling kuat di antara penutup lantai lainya,
      Lantai granit adalah lantai murni dari batu alam yang paling keras,pada umumnya granit terbagi menjadi beberapa warna antara lain granit merah bata,granit telor puyuh dan hitam serta coklat muda.
      Granit pada umumnya berasal dari bangka belitung indonesia.</p>
      <p>kami polesindo.com adalah jasa di bidang poles dan kristalisasi lantai antara lain,marmer,teraso,lantai tegel,lantai acian semen dan lantai jenis granit.
      Jasa Poles Granit di kerjakan oleh tenaga ahli yang sudah berpengalaman menangani masalah semua yang ada di lantai granit,<br/>
      Lantai granit adalah lantai yang mahal dan tidak semua orang sanggup membeli,lantai granit juga harus di tangani oleh ahlinya serta menggunakan chemical yang khusus untuk perawatan granit(lain dengan chemical untuk lantai teraso,marmer dll).
      <br/>Demikian sekilas tentang granit dan harga kristalisasi granit,jika anda berminat dengan jasa kami silahkan menghubungi contac personal kami untuk info lebih lengkapnya,Terima kasih.</p>`,
      icon: icon,
      id: 0,
      img: Granit,
      subtitle: "Jasa Poles Granit",
      text: "Jasa Poles Granit di kerjakan oleh tenaga ahli yang sudah berpengalaman menangani masalah semua yang ada di lantai granit",
      title: "Jasa Poles Granit",
    },
    {
      full: `<p>Poles Marmer adalah rangkaian tahapan mengkilapkan lantai menggunakan metode penggerendaan lantai marmer dengan gerenda batu yang sudah modern dan mesin yang modern pula.</p>
<p>Tahapan awal yaitu penggupasan permukaan lantai marmer dengan menggunakan beberapa tinggatan gerenda dari gerenda(diamond pad) yang paling kasar sampai yang paling haluas ukuran nomor 3000 agar lantai yang baret,kusam,kasar bisa kembali halus dan licin.</p>
<p>Poles Marmer tidak cukup dengan di gerenda saja melainkan masih ada tahapan selanjutnya yakni tahapan pengkristalan atau kristalisasi menggunakan bubuk kristal putih dan di lanjutkan dengan bubuk kristal kuning(extra5) yang khusus untuk lantai marmer berkwalitas baik. Tahapan Kristalisasi Marmer berfungsi untuk membersihkan sisa lumpur dari penggerendaan serta sebagai alasa dasar pengkilap lantai.</p>
<p>Kristalisasi Marmer menggunakan kristal khusu untuk marmer adalah separoh langkah dari deretan tahapan Poles Marmer,pengkristalan salah satu kunci utama berhasil tidaknya dari poles lantai marmer tersebut karena memerlukan keahlian khusus dan tidak semudah seperti yang terlihat karena apabila salah dalam pencampuran air dan kristal akan menimbulkan flek pada lantai marmer yang bukannya marmer makin kinclong malah sebaliknya marmer akan terlihat buram atau dop jika di lihat dari sudut tertentu.</p>
<p>Kami polesindo memberikan kwalitas di atas kwantitas hasil akhir,kami Jasa Poles Marmer yang sudah berpengalaman di bidang poles dan kristalisasi serta menggunakan mesin modern dan di dukung chemical bermutu baik untuk kesempurnaan hasil polesan. Harga Poles Marmer Per Meter akan lebih hemat dan ekonomis apabila luas lantai di atas 100m2 dan untuk harga poles marmer di bawah luas 100m2 biasanya kami menggunakan harga borongan serta kami melakukan survai gratis ke lokasi anda untuk mengetahui kondisi lantai yang akan di poles.</p>
<p>Demikian sekilas tentang pengertian dari Poles Marmer dan kristalisasi marmer,terimakasih telah berkunjung di blog kami semoga bermanfaat dan jika anda bermibat dengan jasa kami atau ingin membeli produk chemical dari kami silahkan menghubungi contact personal kami untuk info lebih lengkapnya.</p>`,
      icon: icon,
      id: 1,
      img: Marmer,

      subtitle: "Jasa Poles Marmer",
      text: "Jasa Poles Marmer Kami menggunakan mesin modern dan di dukung chemical bermutu baik untuk kesempurnaan hasil polesan.",
      title: "Jasa Poles Marmer",
    },
    {
      full: `<p>Lantai berbahan acian semen kini sudah banyak di gemari di kalangan banyak orang dan bukan hanya untuk rumah atau garasi mobil tapi juga sudah banyak di gunakan untuk perkantoran dan restoran-restoran serta pabrik dll.<br />
     Di samping harganya yang ekonomis juga mempunyai keunikan tersendiri dan cocok untuk anda yang suka dengan konsep alami dan natural.</p>
     <p>Lantai acian semen jika sudah di poles dan di kristalisasi sebagaimana seperti yang di lakukan untuk marmer maka tidak kalah apiknya dengan jenis lantai lainya,malah apabila si lantai acian dalam pembuatan awalnya sudah benar maka ankan menghasilkan lantai yang halus,licin dan lebih mengkilap.<br />
     Untuk mendapatkan lantai acian yang unik dan menarik baiknya adukan semen di campur dengan lem dan berikan sentuhan wrna yang sesuai anda inginkan serta berikan pulanuntuk nat dengan kaca ataupun dengan besi kuningan sesuai dengan ukuran yang anda mau dan alangkah tepatnya jika Tukang Poles Acian yang mengerjakan.</p>
     <p>Poles Acian Semen bisa lebih kuat jika di bawahnya di lengkapi dengan jaring kawat,kami polesindo.com adalah Jasa poles dan kristalisasi semua jenis lantai termasuk Poles acian semen.<br />
     Harga Poles Acian Semen juga kami berikan dengan harga yang bersahabat untuk anda.<br />
     Kami Jasa Poles yang sudah berpengalaman dan profesional di bidang poles dan kristalisasi semua jenis lantai termasuk Poles Acian Semen.</p>
     <p>Demikian sekilas tentang lantai berjenis acian semen,jika anda berminat dengan jasa kami silahkan untuk menghubungi contact kami untuk info lebih lengkapnya,terimakasih semoga bermanfaat.</p>`,
      icon: icon,
      id: 2,
      img: Acian,
      subtitle: "Create value for future product",
      text: "Jasa Poles Kami Acian Semen membuat lantai Acian semen Mengkilap dan Bersih",
      title: "Jasa Poles Acian Semen",
    },
    {
      full: `<p>Tegel atau orang sering menyebutmya dengan sebutan lantai tehel.<br />
      Lantai tegel atau tehel adalah lantai yang berbahan semen dengan lapisan atasnya lebih lembut dan halus.<br />
      tegel atau tehel ada dua jenis yang bisa anda ketahui yaitu tegel diamond dan tegel kunci atau tegel motif.</p>
      <p>Tegel diamond biasanya lebih tebal dari tegel kunci motif,dan sewring di pakai pada rumah rumah yang sudah lama,sedangkan tegel kuinci motif lebih tipis.<br />
      Perbedaan selanjutnya ada pada permukaan dan motif,kalau tegel diamond hampir semuanya berwarna semen,dan tidak ada motifnya sedangkan tegel kunci beraneka warna dan beraneka motif serta permukaanya lebih lembut dan halus sehingga lebih mengkilap di bandingkan dengan tegel diamond.</p>
      <p>Tegel diamond sudah jarang atau hampir sudahtidak ada lagi karena sudah tidak di produksi lagi,untuk sekarang mulai ngetren dengan lantai tegel kunci atau tegel motif.<br />
      Solusi menggunakan lantai jenis tegel kunci ini jelas untuk harga lebih ekonomis di bawah harga teraso dan pilihan warna serta motif juga banyak pilihan.<br />
      Semoga artikel ini membantu anda dan apabila anda ingin berkonsultasi bisa menghubungi contact personal kami untuk info lebih lengkapnya,terimakasih.</p>`,
      icon: icon,
      id: 3,
      img: Tegel,
      subtitle: "Jasa Poles Tegel",
      text: "Jasa Poles Lantai Tegel dari kusam,baret,berlubang kasar menjadi kembali licin ,rata ,halus dan mengkilap kembali",
      title: "Jasa Poles Tegel",
    },
    {
      full: `<p>Teraso adalah penutup lantai yang terbuat dari bermacam unsur dan elemen,antara lain campuran semen,dan batu alam sejenis marmer,pecahan kaca,kerang dan pecahan kristal yang berfungsi sebagi motif.</p>
      <p>Lantai teraso kini sudah tidak ada pabriknya dan jika anda masih mempunyai lantai jenis ini bersyukurlah karen lantai jenis ini sangatlah langka di jaman sekarang,dan apabila anda ingin membuat lantai teraso juga tidak banyak untuk tukang teraso cor.</p>
      <p>Jadi pertahankan lantai rumah anda karna lantai ini masih kuat hingga puluhan tahun ke depanya,jika gampilan teraso anda kini sudah kisam,baret,kasar,berkarat dan berlubang anda hanya perlu mencari tukang poles dan kami yakin anda akan makin sayang dengan lantai teraso anda.<br />
      Kami polesindo.com adalah Tukang Poles Teraso dan jasa di bidang poles dan kriatalisasi semua jenis lantai termasuk lantai teraso,dan kami mempunyai Tukang Poles Teraso yang sudah berpengalaman di semua masalah lantai.</p>
      <p>Untuk Harga Poles Teraso Per Meter juga lebih hemat dari harga poles lantai marmer.dengan jasa kami kami yakin lantai teraso anda akan kembali rata,licin,bersih,dan kinclong.<br />
      Kami sudah menangani semua jenis lantai teraso cor maupun teraso cetak dari yang warna putih,abu-abu,merah dll.</p>
      <p>Demikain sekilas tentang lantai teraso dan harga poles teraso sebagai gambaran,jika anda berminat dengan jasa kami silahkan menghubungi contac personal kami untuk info lebih lengkapnya,terimakasih semoga bermanfaat.</p>`,
      icon: icon,
      id: 4,
      img: Teraso,
      subtitle: "Jasa Poles Teraso",
      text: " Kami sudah menangani semua jenis lantai teraso cor maupun teraso cetak dari yang warna putih,abu-abu,merah membuat lantai teraso Mengkilat kembali",
      title: "Jasa Poles Teraso",
    },
    {
     full:`<p>Harga Pasang marmer biasanya di tentukan dari luas lantai dan ukuran marmer itu sendiri,ada yang ukuran cutting(ukuran di bawah 60x60cm)dan ada juga yang ukuran lebih lebar hingga ukuran slab atau yang lebih dari 1m2 per lembar/helai.</p>
     <p>Pemasangan marmer alangkah baiknya di kerjakan oleh tukang yang sudah ahli di bidang marmer,maksudnya bukan tukang pasang yang belum pernah memasang marmer contohnya tukang pasang keramik,tukang pasang keramik belum tentu sepenuhnya paham dengan ilmu pemasangan untuk lantai marmer karena jelas beda di lihat dari bentuk fisik dan berat jenis nya apalagi marmer dengan ukuran jumbo slab.</p>
     <p>Harga Pasang Marmer Per Meter akan lebih hemat jika luas lantai lebih dari 100m2(di bawah 100m2 kami biasa menghitung dengan harga borongan yang mana biasanya lebih mahal sedikit di bandingkan dengan harga per meter.<br />
     Kami gudangpoles.com melayani Jasa Pasang Marmer semua ukuran dan kami mempunyai tukang yang sudah profesional di bidang khusus pemasangan lantai marmer maupun untuk dinding marmer dengan harga yang bersahabat.</p>
     <p>Dan Untuk Harga Poles Marmer Per Meter juga kami sesuaikan dengan kondisi rata dan tidaknya pemasangan marmer terasebut,dan akan lebih murah jika pemasangan marmer di kerjakan oleh tukang kami karena kami paham beteul kwalitas pemasanganya baik untuk lantai maupun kwalitas pemasangan marmer pada dinding,karena kami melayani penjualan marmer seken,pemasangan hingga proses pemolesan dan kristalisasi,dan kami menjual semua alat dan chermical untuk semua jenis lantai.</p>
     <p>Demikian sekilas tentang harga pasang marmer dan jasa pasang marmer kami,jika anda berminat dengan jasa kami silahkan menghubungi contac personal kami untuk info lebih lengkapnya,semoga artikel ini bermanfaat,terimakasih telah berkunjung di blog kami.</p>`,
      icon: icon,
      id: 5,
      img: Pasang,
      subtitle: "Jasa Pasang Marmer Teraso",
      text: "Selain Poles Kami Melayani Pemasangan Marmer dan Teraso , Pemasangan marmer alangkah baiknya di kerjakan oleh tukang yang sudah ahli di bidang marmer",
      title: "Jasa Pasang Marmer Teraso",
    },
  ],
  salepoint: [
    {
      icon: icon,
      id: 0,
      img: bara,
      subtitle: "Handling of construction materials",
      text: "Berpengalaman Lebih dari 15 Tahun ",
      title: "Profesional Di Bidangnya",
    },
    {
      icon: icon,
      id: 1,
      img: alatobat,
      subtitle: "Making planning for ptoject",
      text: "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches.",
      title: "Alat Modern & Obat Terbaik",
    },
    {
      icon: icon,
      id: 2,
      img: dapur,
      subtitle: "Create value for future product",
      text: "Proses Pengerjaan Cepat & Biaya Ekonomis",
      title: "Cepat & Hemat Biaya",
    },
  ],
  users: [
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 0,
      img: "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr1.jpg?alt=media&token=295fff4a-6766-4a97-9e3b-6c0f4c704c62",
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
