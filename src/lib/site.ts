export const focus = [
  "AI Systems Engineer",
  "XR & Spatial Computing",
  "Full-Stack AI Systems",
  "LLMs",
  "VLMs",
  "Computer Vision",
  "Generative AI",
  "AWS & Google Cloud",
] as const;

export const services = [
  {
    slug: "xr-spatial",
    title: "XR & spatial computing",
    works: ["meditation-vr", "vr-car-painting", "ultra-boom-xr", "oralsim", "cloudxr-stream"],
    summary:
      "Headset, glasses, and camera systems that understand a real room and guide the person in it.",
    lead: "Spatial products fail when tracking, interaction, and the backend are built by different teams. Mazix owns that whole path: the device, the scene, and the data that leaves it.",
    includes: [
      "Meta Quest, PICO, and OpenXR applications",
      "6DoF interaction and hand or controller input",
      "Enterprise glasses workflows",
      "Peripheral cameras tied into the session",
      "Spatial UI that stays out of the way of the task",
    ],
    stack: ["Unity", "OpenXR", "Meta XR SDK", "XR Interaction Toolkit", "RealWear"],
  },
  {
    slug: "full-stack-ai",
    title: "Full-stack AI systems",
    works: ["guided-ar", "validation-desk", "live-session-api"],
    summary:
      "One system from the camera and the model through to the API, the web review screen, and the cloud.",
    lead: "A copilot that only lives in a notebook is not a system. Mazix connects the device, the model, the human check, and the place the record is stored.",
    includes: [
      "Device client and web review in the same design",
      "Live APIs between the headset and the backend",
      "A place for a person to confirm what the model saw",
      "Auth, storage, and deployment included",
      "One team for the model and the product around it",
    ],
    stack: ["Unity", "Python", "Next.js", "REST", "AWS"],
  },
  {
    slug: "llms",
    title: "LLMs",
    works: ["procedure-copilot", "role-prompts"],
    summary:
      "A live language model in the loop of a real task, not a chat window off to the side.",
    lead: "The model is asked about the step in front of the person. It answers in short operational language, and a human can still override it.",
    includes: [
      "Gemini Live in an operator copilot",
      "Prompts tied to the current step",
      "Short answers a person can hear or read while working",
      "A fallback when the model is unsure",
      "Logs of what was asked and what was said",
    ],
    stack: ["Gemini", "Gemini Live", "Python", "REST"],
  },
  {
    slug: "vlms",
    title: "VLMs",
    works: ["step-reader", "frame-match", "weak-call-queue", "wearable-frames", "bench-cameras"],
    summary:
      "A vision-language model that looks at a frame from the work and says what step it is.",
    lead: "The picture and the question go together: what is happening on the bench, and does it match the procedure.",
    includes: [
      "Frames from a task camera",
      "A vision-language check against the expected step",
      "Plain-language output for the operator",
      "A review queue when the call is weak",
      "No requirement to label every frame by hand first",
    ],
    stack: ["Gemini", "Camera frames", "Python"],
  },
  {
    slug: "computer-vision",
    title: "Computer vision",
    works: ["bench-cameras", "lan-link", "drop-watch"],
    summary:
      "Peripheral cameras on the bench, connected over the local network, feeding the session.",
    lead: "The headset does not see everything. A second camera on the bench does. The job is keeping that feed attached, stable, and useful.",
    includes: [
      "Peripheral cameras beside the operator",
      "LAN connection into the glasses app",
      "A pipeline that keeps the frame and the step together",
      "Checks for a dropped camera before the model runs",
      "Footage a reviewer can open later",
    ],
    stack: ["Cameras", "LAN", "Python", "OpenCV-style pipelines"],
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    works: ["spoken-guidance", "whisper-path"],
    summary:
      "Speech in, a generated next step, speech back out, while the person stays on the task.",
    lead: "Generative here means the guidance is produced for this moment, from the step and the scene, then spoken. It is not a generic chatbot.",
    includes: [
      "Speech to text on the session",
      "A generated prompt for the next action",
      "Text to speech back to the operator",
      "Whisper, Vosk, and hosted speech where each one fits",
      "A written line left behind for the record",
    ],
    stack: ["Whisper", "Vosk", "Gemini", "TTS"],
  },
  {
    slug: "cloud",
    title: "AWS & Google Cloud",
    works: ["teach-me-robot", "signed-playback", "beanstalk-stack", "gemini-calls", "guided-ar"],
    summary:
      "The same product on real cloud: video, accounts, and model calls, not a laptop demo.",
    lead: "AWS holds the product. Google is where the model calls go. Both are part of the build, with DNS, certificates, and a database included.",
    includes: [
      "AWS for video, compute, database, and mail",
      "Signed playback instead of public files",
      "Google model APIs for the copilot",
      "Route 53, certificates, and a real hostname",
      "A layout that can take more traffic later",
    ],
    stack: ["AWS", "S3", "RDS", "Elastic Beanstalk", "Google Gemini"],
  },
] as const;

export const projects = [
  {
    slug: "meditation-vr",
    title: "Meditation VR",
    meta: "Quest 3 · Experience",
    image: "/media/meditation-vr.jpg",
    alt: "Person seated in a calm outdoor setting",
    summary:
      "A Quest 3 meditation experience set in UAE environments, built to be entered and left without a menu maze.",
    challenge:
      "Calm is easy to claim and hard to build. The space has to load fast, stay comfortable, and give the person nothing to manage.",
    built: [
      "A Quest 3 application with a quiet interaction model",
      "Environment art based on UAE landscapes",
      "A session flow that starts in the place, not in a lobby",
    ],
    stack: ["Unity", "Meta Quest 3", "URP"],
  },
  {
    slug: "vr-car-painting",
    title: "VR car painting",
    meta: "Quest · Interaction",
    image: "/media/vr-car-painting.jpg",
    alt: "Sports car in a studio",
    summary:
      "A hands-on painting simulation where the work is the reach, the aim, and the finish on the vehicle.",
    challenge:
      "Painting in VR feels fake when the tool floats and the surface does not respond. The interaction had to feel like contact.",
    built: [
      "Direct painting interaction on a vehicle",
      "A Quest build meant to be used standing",
      "Feedback that shows coverage as you work",
    ],
    stack: ["Unity", "Meta Quest", "XR interaction"],
  },
  {
    slug: "ultra-boom-xr",
    title: "Ultra Boom XR",
    meta: "UltraFunGames · Build systems",
    image: "/media/ultra-boom-xr.jpg",
    alt: "Person playing a game with a controller",
    summary:
      "An XR building experience for UltraFunGames, with a construction system so players assemble in the space.",
    challenge:
      "A build toy falls apart if placement is sticky or the pieces ignore each other. The system had to feel physical and stay performant.",
    built: [
      "Integration of a construction system into the XR project",
      "Placement and assembly in the play space",
      "A client build structured for iteration",
    ],
    stack: ["Unity", "Easy Build System", "XR"],
  },
  {
    slug: "oralsim",
    title: "OralSim",
    meta: "Quest 2 · Dental training",
    image: "/media/oralsim.jpg",
    alt: "Dental clinic instruments",
    summary:
      "A dental training simulation on Meta Quest 2 for practicing procedure flow before a live patient.",
    challenge:
      "Clinical training needs a sequence people can repeat, not a tour of a clinic. The simulation had to teach the order of the work.",
    built: [
      "A Quest 2 training environment",
      "Procedure-led interaction rather than free roaming",
      "A setup a trainee can run without an instructor at the keyboard",
    ],
    stack: ["Unity", "Meta Quest 2", "Simulation"],
  },
  {
    slug: "guided-ar",
    title: "Guided AR operations",
    meta: "Glasses · Vision · Cloud",
    image: "/media/guided-ar.jpg",
    alt: "Engineer working with technical equipment",
    summary:
      "AR guidance for real procedures: glasses, peripheral cameras, computer vision, a copilot, and live cloud APIs.",
    challenge:
      "The hard part is not the overlay. It is keeping the camera, the model, the operator, and the web review on one timeline.",
    built: [
      "Glasses-side guidance during the task",
      "Peripheral camera connectivity into the session",
      "A vision and copilot path with human review",
      "Cloud APIs and a web surface for validation",
    ],
    stack: ["AR glasses", "Computer vision", "AWS", "Live APIs"],
  },
  {
    slug: "teach-me-robot",
    title: "Teach Me Robot",
    meta: "AWS · Secure video",
    image: "/media/teach-me-robot.jpg",
    alt: "Close view of electronic hardware",
    summary:
      "A surgical training video platform with signed playback, accounts, email, and a full AWS deployment.",
    challenge:
      "Medical video cannot sit in a public bucket. Access, expiry, and the admin path had to be part of the first release.",
    built: [
      "Authenticated video playback with signed URLs",
      "Email and account flows",
      "Deployment across compute, database, DNS, and certificates",
    ],
    stack: ["AWS S3", "RDS", "Elastic Beanstalk", "Route 53", "JWT"],
  },
  {
    slug: "procedure-copilot",
    title: "Live procedure copilot",
    meta: "LLM · Gemini Live",
    image: "/media/procedure-copilot.jpg",
    alt: "Two people working at a laptop in a small studio",
    summary:
      "A small copilot that stays on the current step and answers in short lines, using Gemini Live instead of a separate chat app.",
    challenge:
      "A general chat window pulls the person off the work. The model had to know the step and stay brief.",
    built: [
      "Gemini Live wired into the copilot",
      "Prompts that include the active step",
      "A short spoken or written reply",
      "A log of the exchange for later review",
    ],
    stack: ["Gemini Live", "Python", "REST"],
  },
  {
    slug: "step-reader",
    title: "Camera step reader",
    meta: "VLM · Task camera",
    image: "/media/step-reader.jpg",
    alt: "A camera on a small workbench",
    summary:
      "A vision-language check on frames from a task camera: what step is this, and does it match the procedure.",
    challenge:
      "Labeling every frame by hand does not scale for a small team. The model had to read a frame and say the step.",
    built: [
      "Frames pulled from the working camera",
      "A vision-language call against the expected step",
      "Plain language back to the operator",
      "A queue for frames the model would not commit to",
    ],
    stack: ["Gemini", "Task camera", "Python"],
  },
  {
    slug: "bench-cameras",
    title: "Bench camera link",
    meta: "Computer vision · LAN",
    image: "/media/bench-cameras.jpg",
    alt: "A person wearing a headset in a small workspace",
    summary:
      "Peripheral cameras on the bench, joined to the glasses app over the local network so the session can see the work.",
    challenge:
      "The headset camera misses the bench. A second camera only helps if the link stays up for the whole procedure.",
    built: [
      "A peripheral camera beside the operator",
      "LAN connection into the glasses application",
      "A check when the camera drops",
      "Frames kept with the step they belong to",
    ],
    stack: ["Peripheral cameras", "LAN", "Computer vision"],
  },
  {
    slug: "spoken-guidance",
    title: "Spoken guidance",
    meta: "Generative AI · Speech",
    image: "/media/spoken-guidance.jpg",
    alt: "A studio microphone on a desk",
    summary:
      "Speech in, a generated next action, speech back out. Built for one operator, not a public voice product.",
    challenge:
      "Reading a generated paragraph with gloves on does not work. The answer had to be spoken and short.",
    built: [
      "Speech to text on the session",
      "A generated next step from the current context",
      "Text to speech back to the operator",
      "Whisper or Vosk chosen per environment",
    ],
    stack: ["Whisper", "Vosk", "Gemini", "Text to speech"],
  },
  {
    slug: "cloudxr-stream",
    title: "CloudXR workstation stream",
    meta: "XR · Quest browser",
    image: "/media/cloudxr-stream.jpg",
    alt: "A virtual reality headset",
    summary: "A Quest browser stream of a Windows GPU workstation through CloudXR, built to show a live scene rather than a local demo.",
    challenge: "The black screen was a GPU compatibility limit in CloudXR 6, not an empty scene. The stream needed a supported card.",
    built: ["CloudXR 6 session from a Windows GPU server", "Quest browser client", "OpenXR application on the host"],
    stack: ["CloudXR", "Quest", "OpenXR"],
  },
  {
    slug: "validation-desk",
    title: "Human validation desk",
    meta: "Full-stack · Review",
    image: "/media/validation-desk.jpg",
    alt: "A small team at a table with laptops",
    summary: "A web desk where a person checks what the model marked, then accepts or sends it back.",
    challenge: "Operators cannot stop to audit every frame. Someone else has to review after the run.",
    built: ["A review page for flagged steps", "Accept and return actions", "The same record the headset wrote"],
    stack: ["Next.js", "REST", "AWS"],
  },
  {
    slug: "live-session-api",
    title: "Live session API",
    meta: "Full-stack · APIs",
    image: "/media/live-session-api.jpg",
    alt: "Earth from space",
    summary: "Direct APIs so the glasses app and the web app read one live session, not two copies of the work.",
    challenge: "A file export at the end of the day is too late. The web side has to see the run while it happens.",
    built: ["Live endpoints for the session", "Auth on every call", "The headset and the browser on the same contract"],
    stack: ["REST", "JWT", "AWS"],
  },
  {
    slug: "role-prompts",
    title: "Role-based prompts",
    meta: "LLM · Guidance",
    image: "/media/role-prompts.jpg",
    alt: "People working on laptops",
    summary: "The same procedure, shorter or fuller answers depending on whether the person is new or already senior.",
    challenge: "One prompt talks down to an expert and leaves a trainee lost. The model needs the role.",
    built: ["Prompt variants by seniority", "Step context included every time", "Short replies that fit the task"],
    stack: ["Gemini", "Prompting"],
  },
  {
    slug: "step-answers",
    title: "Step-aware answers",
    meta: "LLM · Procedures",
    image: "/media/step-answers.jpg",
    alt: "Technical work at a bench",
    summary: "Answers that only talk about the step in progress, so the model cannot wander into a different procedure.",
    challenge: "A general answer is worse than silence when the person is mid-task.",
    built: ["The active step passed into the model", "Answers limited to that step", "A stop when the step is unknown"],
    stack: ["Gemini", "REST"],
  },
  {
    slug: "answer-log",
    title: "Answer log",
    meta: "LLM · Record",
    image: "/media/answer-log.jpg",
    alt: "Close view of hardware",
    summary: "A written record of what was asked and what the model replied, kept with the run.",
    challenge: "If nobody can see the advice later, you cannot tell whether the copilot helped or invented a step.",
    built: ["Stored prompts and replies", "Tied to the session", "Available on the review page"],
    stack: ["AWS", "REST"],
  },
  {
    slug: "frame-match",
    title: "Frame match",
    meta: "VLM · Check",
    image: "/media/frame-match.jpg",
    alt: "A camera on a bench",
    summary: "One frame from the task camera compared with the step that should be happening.",
    challenge: "A pretty description of the room is not a check. The model has to say match or not.",
    built: ["Frame plus expected step", "A yes, no, or unsure result", "The unsure cases left for a person"],
    stack: ["Gemini", "Camera frames"],
  },
  {
    slug: "weak-call-queue",
    title: "Unsure-frame queue",
    meta: "VLM · Review",
    image: "/media/weak-call-queue.jpg",
    alt: "A small team reviewing work",
    summary: "Frames the vision model will not commit to, lined up for a person instead of being forced through.",
    challenge: "A confident wrong call is the failure. Unsure has to be a real state.",
    built: ["A queue of weak calls", "Human accept or correct", "The correction kept with the run"],
    stack: ["VLM", "Web review"],
  },
  {
    slug: "wearable-frames",
    title: "Wearable camera frames",
    meta: "VLM · Glasses",
    image: "/media/wearable-frames.jpg",
    alt: "A person in a headset",
    summary: "Frames from a wearable camera sent as the picture the vision-language model actually sees.",
    challenge: "The model is only as good as the frame. A dark, late, or cropped view has to be rejected first.",
    built: ["Frame grab from the wearable", "A basic quality check", "Only usable frames sent on"],
    stack: ["Glasses", "Camera", "Gemini"],
  },
  {
    slug: "lan-link",
    title: "LAN camera link",
    meta: "Vision · Network",
    image: "/media/lan-link.jpg",
    alt: "Equipment on a workbench",
    summary: "The bench camera joined to the glasses app over the local network, without a round trip to the cloud for every frame.",
    challenge: "Sending every frame to the cloud first makes the guidance late. The link has to be local.",
    built: ["Camera on the LAN", "Connection into the glasses app", "The feed kept with the session"],
    stack: ["LAN", "Peripheral cameras"],
  },
  {
    slug: "drop-watch",
    title: "Camera drop watch",
    meta: "Vision · Reliability",
    image: "/media/drop-watch.jpg",
    alt: "A camera",
    summary: "A check that notices when the peripheral camera drops, before the model scores an empty frame.",
    challenge: "A missing camera looks like a missed step. The system has to know the difference.",
    built: ["Heartbeat from the camera", "A pause in scoring when the feed dies", "A note on the review record"],
    stack: ["Computer vision", "LAN"],
  },
  {
    slug: "step-footage",
    title: "Step footage",
    meta: "Vision · Record",
    image: "/media/step-footage.jpg",
    alt: "Electronic hardware",
    summary: "The frames kept beside the step they belong to, so a reviewer can open the moment later.",
    challenge: "A folder of video with no step marks is not a record of the procedure.",
    built: ["Frames stored with the step id", "Playback from the review page", "Access limited to the team"],
    stack: ["S3", "Computer vision"],
  },
  {
    slug: "whisper-path",
    title: "Whisper speech path",
    meta: "Generative · Speech",
    image: "/media/whisper-path.jpg",
    alt: "A microphone in a studio",
    summary: "Whisper turning the operator’s voice into text before the model writes the next line.",
    challenge: "Shop-floor speech is short and noisy. The transcript has to be good enough to prompt from.",
    built: ["Whisper on the utterance", "Text handed to the generator", "The transcript stored with the reply"],
    stack: ["Whisper", "Python"],
  },
  {
    slug: "vosk-path",
    title: "On-device Vosk path",
    meta: "Generative · Offline speech",
    image: "/media/vosk-path.jpg",
    alt: "A person using a controller",
    summary: "Vosk for rooms where the audio cannot leave the device, still feeding the same guidance flow.",
    challenge: "Some sites will not send voice to a cloud model. Speech still has to work.",
    built: ["Vosk on the device", "The same text contract as the cloud path", "A switch when the network is down"],
    stack: ["Vosk", "On device"],
  },
  {
    slug: "tts-reply",
    title: "Spoken reply",
    meta: "Generative · TTS",
    image: "/media/tts-reply.jpg",
    alt: "Audio equipment",
    summary: "The generated next step spoken back, so the person does not have to read a panel.",
    challenge: "A paragraph on a lens is not guidance. One sentence, out loud, is.",
    built: ["Short text in", "Speech out to the operator", "The same sentence saved as text"],
    stack: ["Text to speech", "Gemini"],
  },
  {
    slug: "session-line",
    title: "Saved guidance line",
    meta: "Generative · Record",
    image: "/media/session-line.jpg",
    alt: "A laptop on a desk",
    summary: "Every spoken line also written down, so the run has a script after the person takes the headset off.",
    challenge: "Speech disappears. The record of what was said should not.",
    built: ["Text of each spoken line", "Stored on the session", "Visible on the review page"],
    stack: ["TTS", "AWS"],
  },
  {
    slug: "signed-playback",
    title: "Signed video playback",
    meta: "Cloud · Media",
    image: "/media/signed-playback.jpg",
    alt: "A view of Earth used for cloud infrastructure",
    summary: "Training video that plays through expiring links, not a public bucket.",
    challenge: "A shared link to a surgical video is a leak. Access has to expire.",
    built: ["Signed URLs", "Auth before playback", "Files kept in S3"],
    stack: ["AWS S3", "JWT"],
  },
  {
    slug: "beanstalk-stack",
    title: "Beanstalk deployment",
    meta: "Cloud · AWS",
    image: "/media/beanstalk-stack.jpg",
    alt: "Cloud infrastructure imagery",
    summary: "The web app, database, DNS, and certificate deployed together on AWS, not only on a laptop.",
    challenge: "A working local server is not a product. The same build has to come up on a hostname.",
    built: ["Elastic Beanstalk for the app", "RDS for the data", "Route 53 and a certificate"],
    stack: ["Elastic Beanstalk", "RDS", "Route 53", "ACM"],
  },
  {
    slug: "gemini-calls",
    title: "Gemini on Google",
    meta: "Cloud · Google",
    image: "/media/gemini-calls.jpg",
    alt: "People at computers",
    summary: "Model calls going to Gemini on Google, while the product data stays on AWS.",
    challenge: "The model and the customer data do not have to live in the same account. The split has to be deliberate.",
    built: ["Gemini API from the service", "Product data left on AWS", "Calls logged with the session"],
    stack: ["Google Gemini", "AWS"],
  },
] as const;

export const marketSystems = [
  "Meta Quest 3",
  "PICO 4",
  "SteamVR",
  "OpenXR",
  "RealWear",
  "NVIDIA CloudXR",
  "Gemini",
  "Gemini Live",
  "Whisper",
  "AWS",
  "Google Cloud",
  "Elastic Beanstalk",
] as const;

export const fields = [
  {
    title: "XR & spatial computing",
    body: "Headsets, glasses, tracking, and cameras pointed at real work.",
  },
  {
    title: "Healthcare & training",
    body: "Procedure practice and training video a clinician can repeat safely.",
  },
  {
    title: "Manufacturing & field ops",
    body: "Build, maintenance, and QA with a record of the step that happened.",
  },
  {
    title: "Automotive",
    body: "Hands-on vehicle work in VR, from surface finish to assembly checks.",
  },
  {
    title: "Research & simulation",
    body: "Controlled environments when a study needs the same task every time.",
  },
  {
    title: "Education",
    body: "Learning by doing: a skill, a walkthrough, a score against the standard.",
  },
  {
    title: "Energy & utilities",
    body: "Field procedures where the next step has to be right the first time.",
  },
  {
    title: "Logistics",
    body: "Guidance and checks for people moving work across a floor or a site.",
  },
  {
    title: "Labs & quality",
    body: "Bench cameras, review desks, and a trail of what the model called.",
  },
  {
    title: "Media & interactive",
    body: "Spaces people enter: calm rooms, play, and pieces with a clear mood.",
  },
  {
    title: "Startups",
    body: "Device, model, and cloud in one first release, without four vendors.",
  },
  {
    title: "Enterprise operations",
    body: "Auth, audit, and a cloud that sits beside the tools you already run.",
  },
] as const;

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    body: "We write down the user, the device, the data, and what “done” means. Hardware limits and compliance needs are part of this, not a surprise in week six.",
  },
  {
    n: "02",
    title: "Architect",
    body: "One picture of the system: client, perception, API, and cloud. We pick boring tools where they are enough and new ones where the product needs them.",
  },
  {
    n: "03",
    title: "Build",
    body: "XR, AI, and web move on the same milestones. You see a running build, not a status deck. Scope changes get named before they land in the code.",
  },
  {
    n: "04",
    title: "Launch",
    body: "Deployment, access, monitoring, and a handover your team can operate. The first release is the start of the system, not the end of the contract conversation.",
  },
] as const;

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}
