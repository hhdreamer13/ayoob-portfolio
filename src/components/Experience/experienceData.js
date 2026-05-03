export const experienceData = [
  {
    id: "1",
    title: "Postdoctoral Data Scientist",
    location: "University of Technology Sydney",
    summary: "Directed applied machine learning projects in partnership with NVIDIA, TPG Telecom and the NSW Department of Planning. Built and deployed real-time environmental sensing systems that repurposed existing 4G/5G telecommunications networks into predictive intelligence tools for flood and storm management.",
    highlights: [
      "Deployed an INT8 TensorRT inference engine onto NVIDIA Jetson AGX Orin edge hardware to process real-time estimations and stream data to a live dashboard.",
      "Trained Transformer networks using self-supervised pretraining on NVIDIA A100 cloud compute clusters to evaluate 5G channel measurements.",
      "Architected scalable data pipelines to aggregate, clean and process over 34 TB of combined physics-based synthetic data and multi-frequency field captures.",
      "Engineered Transformer-based sequence and ordinal classifiers using high-dimensional 4G/5G signals, radio power metadata and delay-Doppler feature extraction.",
      "Constructed rigorous, day-based chronological train/validation/test evaluation frameworks incorporating post-training calibration to guarantee model reliability across temporal shifts.",
      "Programmed end-to-end signal processing workflows to execute LTE decoding, extract baseband metrics and apply wavelet-based time-frequency analysis.",
      "Executed large-scale physical field trials utilising 4-antenna arrays and software-defined radio (SDR) receivers to capture live baseband I/Q datasets.",
    ],
    badge: ["Machine Learning", "5G", "TensorRT"],
    year: "2023 - present",
    image: "/picture-3.webp",
  },
  {
    id: "2",
    title: "Telecommunication Engineer (Data & Analytics)",
    location: "Future Wave Ultra Tech",
    summary:
      "Designed and implemented automated operational intelligence tools for commercial mobile networks, translating raw, multi-vendor telecommunications data into actionable business metrics.",
    highlights: [
      "Created an automated mobile-network analytics platform, building robust ETL pipelines to extract, clean and aggregate data from complex, multi-vendor Operational Support Systems (OSS).",
      "Programmed custom analytical logic to compute network KPIs and detect live system events, with focus on establishing reliable alarm monitoring for commercial network infrastructure.",
      "Generated automated optimisation reports based on large-scale data aggregation, directly driving operational decision-making and physical network improvements.",
    ],
    badge: ["Data Analytics", "OSS", "KPIs"],
    year: "2018 - 2019",
    image: "/picture-1.webp",
  },
  {
    id: "3",
    title: "Hardware R&D Engineer (Wireless Systems)",
    location: "KAIST",
    summary:
      "Focused on the physical-layer improvement of wireless power transfer, resulting in patented hardware circuitry and optimised algorithmic performance.",
    highlights: [
      "Designed and patented novel hardware circuit architecture that improved physical efficiency of wireless charging systems.",
      "Developed and validated two optimisation algorithms designed to reduce charging times across operational constraints.",
      "Quantified physical charging performance against distance variables by constructing advanced computational models in MATLAB and Simulink.",
    ],
    badge: ["Wireless Power", "MATLAB", "Simulink"],
    year: "2014 - 2016",
    image: "/picture-7.webp",
  },
  {
    id: "4",
    title: "Doctoral Researcher (Machine Learning & 5G IoT)",
    location: "The University of Sydney, Sydney",
    summary:
      "Engineered and evaluated machine learning algorithms designed to optimise 5G IoT communications and physical-layer wireless performance.",
    highlights: [
      "Engineered an unsupervised learning framework using Gaussian Mixture Models (GMM) to autonomously detect, isolate and process signals from 5G IoT devices.",
      "Built distributed machine learning models to operate in high-noise RF environments, deploying Convolutional Neural Networks (CNNs) to maintain classification accuracy despite physical signal degradation.",
      "Analysed physical-layer wireless system performance by applying statistical modelling and unsupervised algorithms to identify transmission inefficiencies.",
      "Modelled RF propagation and antenna configurations using CST, HFSS and MATLAB to establish baseline physical constraints for communication network simulations.",
    ],
    badge: ["5G IoT", "Machine Learning", "RF"],
    year: "2019 - 2023",
    image: "/picture-6.webp",
  },
    {
    id: "5",
    title: "Casual Academic (Technical Instructor – ML & RF)",
    location: "The University of Sydney",
    summary:
      "Delivered advanced technical instruction across physical-layer telecommunications and applied machine learning.",
    highlights: [
      "Mentored technical cohorts in applied machine learning, instructing on the architecture, training and deployment of predictive models using PyTorch, TensorFlow and Scikit-learn.",
      "Directed laboratory execution for IoT critical infrastructure, guiding students through the physical integration of edge computing hardware (Raspberry Pi) with real-time data platforms (ThingSpeak).",
      "Instructed classes on predictive analytics and foundational data science mechanics, teaching robust data manipulation, pipeline construction and statistical modelling using Pandas and NumPy.",
      "Translated theoretical RF propagation and antenna design into practical engineering simulations, training students on the application of CST, HFSS and MATLAB for physical-layer network analysis.",
      "Taught complex mathematical frameworks for telecommunications, focusing on the implementation of BCH, Turbo, Convolutional and LDPC error control coding to ensure network signal integrity.",
    ],
    badge: ["RF", "Python", "Machine Learning"],
    year: "2019 - 2026",
    image: "/picture-2.webp",
  },
  // {
  //   id: "5",
  //   title: "Error Control Coding",
  //   location: "The University of Sydney",

  //   description:
  //     "In my tutoring sessions for Error Control Coding, we covered topics related to the fundamental principles and practical applications of error control coding. The course began with an introduction to error control coding and its importance in various communication systems. We then focused on linear algebra, linear block codes, cyclic codes, BCH codes, Reed-Solomon codes, and their applications in communication systems. The course also included discussions on convolutional codes, the Viterbi algorithm, and their applications in communication systems. We also covered soft decision decoding of block and convolutional codes, LDPC codes, Turbo codes, and MIMO and rateless codes. The aim of the course was to develop theoretical and practical skills in the design of error control encoders/decoders, and to enable students to apply their knowledge to solve real-world problems in the field of communication engineering. By the end of the course, students were equipped with the necessary knowledge and skills to design and implement error control coding techniques in various communication systems.",
  //   badge: ["MATLAB"],

  //   year: "2020-2023",
  //   image: "/picture-5.webp",
  // },
  // {
  //   id: "6",
  //   title: "IoT for Critical Infrastructure",
  //   location: "The University of Sydney",

  //   description:
  //     "In my tutoring sessions for IoT for Critical Infrastructure, we focused on the design, processing, and operation of critical IoT applications that are vital to our infrastructure. The course covered a range of topics, including smart grids, intelligent transportation systems, smart cities, and healthcare. The aim of the course was to provide students with an understanding of the IoT architecture and the important components of IoT, such as sensors, communications networks, and information processing. Additionally, students were engaged in IoT programming and system development using advanced IoT platforms. The course provided a practical understanding of IoT systems and their applications, preparing students for real-world challenges in the field.",
  //   badge: ["Raspberry Pi"],

  //   year: "2021-2022",
  //   image: "/picture-6.webp",
  // },
  // {
  //   id: "7",
  //   title: "Antenna and Propagation",
  //   location: "The University of Sydney",

  //   description:
  //     "During my tutoring sessions for the Antenna and Propagation course, we covered a wide range of topics related to antennas and their applications. This included discussions about the different types of antennas available and their various applications, as well as a deep dive into typical RF specifications and commonly used antenna characteristics. We also covered communication link budget calculation, numerical techniques for solving Maxwell's equations, and the basic theory of EM waves and fields. In addition, we explored the use of commercial simulation software's and the different antenna measurement techniques. The course provided hands-on experience with VNAs, signal generators, and other equipment to give students a practical understanding of the material. Overall, the course provided a comprehensive understanding of antennas and propagation, and prepared students for practical applications in the field.",
  //   badge: ["CST", "HFSS"],

  //   year: "2020",
  //   image: "/picture-7.webp",
  // },
  // {
  //   id: "2",
  //   title: "Quality of Experience Monitoring Platform",
  //   location: "Future Wave Ultratech Company",

  //   description:
  //     "Quality of Experience Monitoring Platform in the telecom network is capable of simulating the experience of a real user by performing various interactions with the fixed and mobile network s and collect data on the performance of the network for the user or customer experience point of view.",
  //   badge: ["Python"],

  //   year: "2018",
  //   image: "/picture-2.webp",
  // },
];
