import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import heroImage from "../../assets/hero/community-connect-hero.png";
import creatorProfileImage from "../../assets/hero/Creator Profile.png";
import serviceVideoIcon from "../../assets/icons/6.png";
import serviceDesignIcon from "../../assets/icons/7.png";
import serviceMarketingIcon from "../../assets/icons/8.png";
import serviceAiIcon from "../../assets/icons/9.png";
import serviceAnimationIcon from "../../assets/icons/10.png";
import serviceWritingIcon from "../../assets/icons/11.png";
import serviceDataIcon from "../../assets/icons/12.png";
import serviceWebIcon from "../../assets/icons/13.png";
import servicePhotoIcon from "../../assets/icons/14.png";
import serviceInfluencerIcon from "../../assets/icons/15.png";
import serviceAppIcon from "../../assets/icons/16.png";
import serviceUiIcon from "../../assets/icons/17.png";
import serviceScriptIcon from "../../assets/icons/18.png";
import serviceVoiceIcon from "../../assets/icons/19.png";
import serviceMoreIcon from "../../assets/icons/20.png";
import maleFreelancerImage from "../../assets/icons/28.webp";
import femaleClientImage from "../../assets/icons/29.webp";
import processSearchIcon from "../../assets/icons/22.png";
import processDeliveryIcon from "../../assets/icons/26.png";
import processReviewIcon from "../../assets/icons/27.png";
import freelancerIcon from "../../assets/icons/1.png";
import clientIcon from "../../assets/icons/3.png";
import secureIcon from "../../assets/icons/4.png";
import arjunCreatorPhoto from "../../assets/featured_creator_photos/Arjun_Verma.png";
import nehaCreatorPhoto from "../../assets/featured_creator_photos/Neha_Sharma.png";
import rohitCreatorPhoto from "../../assets/featured_creator_photos/Rohit_Das.png";
import priyaCreatorPhoto from "../../assets/featured_creator_photos/Priya_Nair.png";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Camera,
  CheckCircle2,
  ChevronDown,
  Code2,
  Coins,
  Facebook,
  Globe2,
  Headset,
  Instagram,
  Layout,
  Link as LinkIcon,
  Linkedin,
  LockKeyhole,
  Mail,
  Menu,
  MessageSquareText,
  PenTool,
  Phone,
  Play,
  Search,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Twitter,
  UserRound,
  Users,
  Wand2,
  X,
  Youtube,
} from "lucide-react";
import { defaultLandingSettings, getLandingSettings } from "../../utils/siteSettings.js";
import "./CommunityConnectLanding.css";

const serviceCategories = [
  { name: "Video Editing", image: serviceVideoIcon, description: "Polished videos for brands, creators and campaigns." },
  { name: "Graphic Design", image: serviceDesignIcon, description: "Memorable visuals, brand assets and digital artwork." },
  { name: "Digital Marketing", image: serviceMarketingIcon, description: "Campaigns that connect you with the right audience." },
  { name: "AI Video Creation", image: serviceAiIcon, description: "Fresh video concepts made with modern AI tools." },
  { name: "Animation & Motion Graphics", image: serviceAnimationIcon, description: "Bring your stories and products to life." },
  { name: "Content Writing", image: serviceWritingIcon, description: "Clear, engaging words for every platform." },
  { name: "Data Handling", image: serviceDataIcon, description: "Reliable data entry, research and organization." },
  { name: "Web Development", image: serviceWebIcon, description: "Fast, polished websites and digital products." },
  { name: "Photography & Videography", image: servicePhotoIcon, description: "Capture products, people and special moments." },
  { name: "Influencer Marketing", image: serviceInfluencerIcon, description: "Build authentic connections with creators." },
  { name: "App Development", image: serviceAppIcon, description: "Useful mobile experiences for your customers." },
  { name: "UI / UX Design", image: serviceUiIcon, description: "Intuitive interfaces designed around people." },
  { name: "Script Writing", image: serviceScriptIcon, description: "Ideas shaped into stories people remember." },
  { name: "Voice Over & Dubbing", image: serviceVoiceIcon, description: "Professional voices for audio and video." },
  { name: "More Services", image: serviceMoreIcon, description: "Find the right specialist for your next idea." },
];

const popularSearches = ["Photography", "Video Editing", "Website Development", "Content Writing", "SEO"];
const stats = [
  { label: "1000+ Verified Freelancers", image: freelancerIcon },
  { label: "500+ Happy Clients", image: clientIcon },
  { label: "50+ Service Categories", image: serviceAnimationIcon },
  { label: "Trusted & Secure Platform", image: secureIcon },
];
const creatorCards = [
  { title: "Photography & Cinematography", category: "Photography & Videography", image: arjunCreatorPhoto },
  { title: "UI/UX Design", category: "UI / UX Design", image: nehaCreatorPhoto },
  { title: "Web & App Development", category: "Web Development", image: rohitCreatorPhoto },
  { title: "Content Creation", category: "Video Editing", image: priyaCreatorPhoto },
];
const processSteps = [
  { title: "Register", description: "Join as a freelancer or a client.", image: freelancerIcon, accent: "teal" },
  { title: "Build Profile", description: "Share your skills or project requirements.", image: processSearchIcon, accent: "amber" },
  { title: "Connect & Collaborate", description: "Find the right people and get to work.", image: processDeliveryIcon, accent: "purple" },
  { title: "Deliver", description: "Bring the project to life together.", image: processReviewIcon, accent: "blue" },
];
const whyChoose = [
  { title: "Verified Creators", description: "Work with genuine, reviewed professionals and agencies.", icon: ShieldCheck, color: "text-[#13aaa8]", surface: "bg-[#e9fbf8]" },
  { title: "Transparent Pricing", description: "Clear, upfront pricing with no hidden charges.", icon: Coins, color: "text-[#f4a20b]", surface: "bg-[#fff8e9]" },
  { title: "Secure Payments", description: "Safe and reliable payment flow with order protection.", icon: LockKeyhole, color: "text-[#2878ed]", surface: "bg-[#edf4ff]" },
  { title: "Easy Communication", description: "Stay connected, share files and track progress in one place.", icon: MessageSquareText, color: "text-[#16aaa3]", surface: "bg-[#e9fbf8]" },
  { title: "Dedicated Support", description: "Get quick help from our support team whenever needed.", icon: Headset, color: "text-[#bd63e6]", surface: "bg-[#fbf0ff]" },
];
const testimonials = [
  { name: "Rohit Verma", role: "Video Editor", quote: "I got consistent projects and grew my skills here.", image: rohitCreatorPhoto },
  { name: "Neha Sharma", role: "Graphic Designer", quote: "Professional team and great work opportunities.", image: nehaCreatorPhoto },
  { name: "Amit Gupta", role: "Marketing Head", quote: "A reliable platform to find creative talent for our campaigns.", image: arjunCreatorPhoto },
];
const faqItems = [
  { question: "What is Community Connect?", answer: "Community Connect is a marketplace by Scholars Mediatech to discover, compare and hire creators, professionals and agencies for creative and digital services." },
  { question: "How do I hire a creator or agency?", answer: "Search by skill or category, compare profiles, review examples, and contact the professional whose fit best matches your goals." },
  { question: "Is the pricing fixed or negotiable?", answer: "Pricing can vary by creator and project scope. Review the listed price and confirm deliverables and any additional costs with the creator before placing an order." },
  { question: "How do payments and refunds work?", answer: "Review the payment and refund terms shown for your order before confirming. For help with a specific payment or refund, contact the Community Connect support team." },
  { question: "Can I register as a creator?", answer: "Yes. Use the creator registration form to submit your profile and work details. Select “Become a Creator” and follow the registration steps." },
];

function Header({ settings }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const companyName = (settings.companyName || "Scholars Mediatech Pvt Ltd")
    .replace(/\s+pvt\.?\s*ltd\.?$/i, "")
    .trim();
  const companyNameParts = companyName.match(/^(.*?)(mediatech)(.*)$/i);
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#community" },
    { label: "Join Us", href: "#become-creator" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="cc-header sticky top-0 z-50 border-b border-slate-100 bg-white shadow-[0_3px_14px_rgba(20,33,61,0.05)]">
      <div className="mx-auto flex min-h-[76px] max-w-[1900px] items-center justify-between gap-2 px-3 sm:min-h-[88px] sm:gap-3 sm:px-5 xl:px-8">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3">
          <img src={logo} alt="Scholars Mediatech logo" className="h-[58px] w-[68px] shrink-0 object-contain sm:h-[74px] sm:w-[94px]" />
          <div className="min-w-0">
            <div className="truncate text-[12px] font-extrabold uppercase tracking-[0.04em] text-[#101b3d] sm:text-sm xl:text-base 2xl:text-lg">
              {companyNameParts ? (
                <>
                  {companyNameParts[1]}
                  <span className="text-[#078f96]">{companyNameParts[2]}</span>
                  {companyNameParts[3]}
                </>
              ) : companyName}
            </div>
            <div className="mt-1 text-[8px] font-semibold uppercase leading-[1.35] tracking-[0.025em] text-slate-600 sm:text-[9px] xl:text-[10px]">
              <span className="block whitespace-nowrap">Building Your Creativity</span>
              <span className="block whitespace-nowrap">Connect Your Community</span>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 xl:flex 2xl:gap-5">
          {navItems.map((item) => {
            if (item.label === "Services") {
              return (
                <div key={item.label} className="relative">
                  <button type="button" onClick={() => setServicesOpen((prev) => !prev)} className="flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-2 text-[13px] font-semibold text-[#101b3d] transition hover:text-[#089eaa] 2xl:text-sm">
                    {item.label}
                    <ChevronDown size={15} className={servicesOpen ? "rotate-180" : ""} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full mt-3 max-h-[70vh] w-72 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                      {serviceCategories.map(({ name, image }) => (
                        <button key={name} type="button" onClick={() => { setServicesOpen(false); window.dispatchEvent(new CustomEvent("community-connect-search", { detail: name })); }} className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-50">
                          <img src={image} alt="" className="h-8 w-8 object-contain" />
                          {name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-2 py-2 text-[13px] font-semibold transition 2xl:text-sm ${item.label === "Home" ? "bg-[#079da3] px-4 text-white hover:bg-[#07888e]" : "text-[#101b3d] hover:text-[#089eaa]"}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <Link to="/master-admin" className="cc-login inline-flex h-12 items-center justify-center gap-2 rounded-[18px] border border-[#14264a] px-5 text-sm font-bold text-[#10234b] transition hover:bg-[#f5eddc]">
            Login
          </Link>
          <a href="#become-creator" className="cc-get-started inline-flex h-12 items-center justify-center gap-2 rounded-[18px] bg-[#079da3] px-5 text-sm font-bold text-white transition hover:bg-[#07888e] 2xl:px-7">
            Get Started <ArrowRight size={17} />
          </a>
        </div>

        <button type="button" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 xl:hidden" aria-label="Toggle mobile menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#089eaa]">{item.label}</a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-3">
              <Link to="/master-admin" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700">Login</Link>
              <a href="#become-creator" onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center rounded-full bg-[#10234b] px-4 py-2.5 text-sm font-semibold text-white">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div>
      <div className="flex flex-col gap-2 rounded-[18px] border border-[#dbe7f6] bg-white p-2 shadow-[0_16px_40px_rgba(25,75,125,0.12)] sm:flex-row sm:items-center">
        <div className="flex min-h-12 flex-1 items-center gap-3 rounded-xl px-3 text-slate-500 sm:px-4">
          <Search size={18} className="text-[#089eaa]" />
          <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} onKeyDown={(event) => event.key === "Enter" && onSearch()} placeholder="Search services, creators or skills (e.g. photography, web design, video editing...)" className="w-full border-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500" aria-label="Search services, creators or skills" />
        </div>
        <button type="button" onClick={onSearch} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#089eaa] px-6 text-sm font-semibold text-white transition hover:bg-[#078b96]">Search <ArrowRight size={16} /></button>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-600">
        <span className="mr-1 font-semibold text-[#14213d]">Popular Searches:</span>
        {popularSearches.map((item) => (
          <button key={item} type="button" onClick={() => { setSearchTerm(item); onSearch(item); }} className="rounded-full bg-[#f0f2ff] px-3 py-1.5 text-[#14213d] transition hover:bg-[#e3e8ff] hover:text-[#089eaa]">{item}</button>
        ))}
      </div>
    </div>
  );
}

function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => {
    const handleServiceSearch = (event) => {
      setSearchTerm(event.detail);
      setQuery(event.detail);
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("community-connect-search", handleServiceSearch);
    return () => window.removeEventListener("community-connect-search", handleServiceSearch);
  }, []);

  const matches = useMemo(() => {
    if (!query.trim()) return serviceCategories;
    const normalized = query.trim().toLowerCase();
    return serviceCategories.filter((service) => service.name.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <section id="home" className="relative overflow-hidden bg-[linear-gradient(115deg,#f7f6ff_0%,#f4fbff_46%,#e9f9ff_100%)] px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-10">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-56 w-56 rounded-full bg-[#dceaff] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#c4f5ff] opacity-60 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-5 lg:grid-cols-[1.03fr_0.97fr] lg:gap-2">
          <div className="relative z-10 py-4 lg:py-6">
            <div className="mb-5 inline-flex items-center rounded-full bg-[#e6edff] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#14213d] sm:text-xs">
              CREATE <span className="mx-2 text-[#c68a22]">•</span> CONNECT <span className="mx-2 text-[#c68a22]">•</span> GROW
            </div>
            <h1 className="max-w-[720px] text-[clamp(2rem,8vw,2.4rem)] font-bold leading-[1.08] tracking-[-0.045em] text-[#101b3d] sm:text-5xl lg:text-[2.61rem] xl:text-[2.87rem]">
              Turn Your Skills into <span className="bg-gradient-to-r from-[#099ca5] to-[#18b4b1] bg-clip-text text-transparent">Opportunities</span>
            </h1>
            <p className="mt-4 max-w-[690px] text-base leading-7 text-[#26334f] sm:text-lg sm:leading-[1.55]">
              A powerful platform that connects skilled freelancers with businesses and organizations for high-quality digital, creative and technical solutions.
            </p>
            <div className="cc-hero-actions mt-6 flex flex-wrap gap-3">
              <Link to="/CommunityJoinForm" className="inline-flex items-center gap-2 rounded-full bg-[#d49b20] px-6 py-3 text-sm font-bold text-[#14213d] shadow-[0_7px_18px_rgba(157,111,17,.24)] transition hover:bg-[#e2ae35]">
                <img src={processReviewIcon} alt="" className="h-5 w-5 object-contain" /> Join as Freelancer <ArrowRight size={16} />
              </Link>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-[#14213d] bg-white/80 px-6 py-3 text-sm font-bold text-[#14213d] transition hover:bg-[#f4ecd8]">
                Hire Talent (Client)
              </a>
            </div>
            <div className="cc-hero-search mt-5 max-w-[700px]">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={(next) => setQuery(next || searchTerm)} />
            </div>
            {query && (
              <div className="mt-3 text-sm text-slate-600" role="status">
                {matches.length
                  ? `Matching service categories: ${matches.map((service) => service.name).join(", ")}`
                  : `No matching service categories found for ?${query}?.`}
              </div>
            )}
          </div>

          <div className="relative mx-auto w-full max-w-[760px] lg:-mr-4">
            <img
              src={heroImage}
              alt="Photographers, content creators, designers, and developers working together"
              className="relative z-10 block h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-[22px] border border-white bg-white/90 py-2 shadow-[0_15px_40px_rgba(32,88,143,0.12)] backdrop-blur lg:mt-3 lg:grid-cols-4">
          {stats.map(({ label, image }, index) => (
            <div key={label} className={`flex min-h-[76px] min-w-0 items-center gap-2 px-2.5 py-3 sm:gap-4 sm:px-5 lg:px-8 ${index > 1 ? "border-t border-slate-200 lg:border-t-0" : ""} ${index % 2 === 1 ? "border-l border-slate-200 lg:border-l" : ""} ${index > 0 && index % 2 === 0 ? "lg:border-l lg:border-slate-200" : ""}`}>
              <img src={image} alt="" aria-hidden="true" className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10" />
              <div className="min-w-0 text-xs font-semibold leading-4 text-[#14213d] sm:text-sm sm:leading-5 lg:text-base">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[linear-gradient(115deg,#f3f5ff_0%,#f7fbff_48%,#edfbff_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 xl:py-11">
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-[#b9efff] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#cbf8f2] opacity-70 blur-3xl" />
      <div className="relative mx-auto max-w-[1800px]">
        <div className="mb-7 text-center sm:mb-9 xl:mb-5">
          <h2 className="flex items-center justify-center gap-2 text-[clamp(1.65rem,7vw,1.875rem)] font-bold tracking-[-0.045em] text-[#101b3d] sm:gap-4 sm:text-4xl lg:text-5xl xl:text-[34px]">
            <span className="hidden h-[3px] w-12 rounded-full bg-[#078c98] sm:block" />
            Explore Our Services
            <span className="hidden h-[3px] w-12 rounded-full bg-[#078c98] sm:block" />
          </h2>
          <p className="mt-2 text-sm text-[#3d4964] sm:text-base lg:text-lg xl:mt-1 xl:text-sm">
            A wide range of creative and digital services for individuals, businesses, brands and organizations.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-3">
          {serviceCategories.map(({ name, image, description }) => (
            <article key={name} className="group flex min-h-[150px] gap-3 rounded-[22px] border border-[#e1e9fa] bg-white/80 p-3.5 shadow-[0_8px_18px_rgba(37,79,141,0.09)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(37,79,141,0.14)] sm:gap-4 sm:p-4 xl:min-h-[118px] xl:gap-2.5 xl:rounded-[16px] xl:p-3 2xl:min-h-[124px]">
              <img src={image} alt="" aria-hidden="true" className="h-[58px] w-[58px] shrink-0 object-contain sm:h-[68px] sm:w-[68px] xl:h-10 xl:w-10" />
              <div className="flex min-w-0 flex-1 flex-col items-start">
                <h3 className="text-base font-bold leading-5 tracking-tight text-[#101b3d] sm:text-lg xl:text-[13px] xl:leading-[1.2] 2xl:text-sm">{name}</h3>
                <p className="mt-1.5 text-xs leading-[1.4] text-[#35415b] sm:text-[13px] xl:mt-1 xl:text-[10px] xl:leading-[1.35] 2xl:text-[11px]">{description}</p>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("community-connect-search", { detail: name }))}
                  className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-bold text-[#078b96] transition group-hover:text-[#1265b8] sm:text-sm xl:gap-1 xl:pt-1.5 xl:text-[10px] 2xl:text-[11px]"
                >
                  Explore Services <ArrowRight size={15} strokeWidth={2.5} />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

function FeaturedCreators() {
  return (
    <section id="creators" className="relative overflow-hidden bg-[linear-gradient(115deg,#f3f5ff_0%,#fbfcff_50%,#effbff_100%)] px-4 py-14 sm:px-6 lg:px-8 lg:py-[72px]">
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-72 rounded-full bg-[#c4f4ff]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-72 rounded-full bg-[#d9f7f2]/70 blur-3xl" />
      <div className="relative mx-auto max-w-[1900px]">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="flex flex-wrap items-center gap-x-4 text-3xl font-extrabold tracking-[-0.045em] text-[#101b3d] sm:text-4xl lg:text-5xl">
              Featured Creators
              <span className="hidden h-[3px] w-16 rounded-full bg-gradient-to-r from-[#079da3] to-[#b4f0e9] sm:inline-block" />
            </h2>
            <p className="mt-2 text-base text-[#596276] sm:text-lg">
              Explore creative professionals from the Community Connect marketplace.
            </p>
            <p className="mt-1 text-xs text-[#64748b] sm:text-sm">
              Creator profiles are previews; ratings, reviews, and pricing will appear with verified listings.
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#078b96] sm:text-base">
            Creator listings coming soon <ArrowRight size={19} />
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {creatorCards.map((creator) => (
            <article key={creator.title} className="group rounded-[28px] border border-[#e2eafa] bg-white/90 p-3 shadow-[0_12px_30px_rgba(37,79,141,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(37,79,141,0.14)] sm:p-3.5">
              <div className="flex h-full min-h-[186px] gap-3 sm:gap-4">
                <img
                  src={creator.image}
                  alt=""
                  aria-hidden="true"
                  className="h-[184px] w-[38%] shrink-0 rounded-[20px] object-cover sm:w-[42%]"
                />
                <div className="flex min-w-0 flex-1 flex-col py-1">
                  <span className="mb-2 inline-flex w-fit rounded-full bg-[#edfaff] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#078b96]">
                    Profile preview
                  </span>
                  <h3 className="text-base font-extrabold leading-5 tracking-tight text-[#101b3d] sm:text-lg">
                    {creator.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#596276] sm:text-sm">
                    Discover professionals offering {creator.category.toLowerCase()} services.
                  </p>
                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent("community-connect-search", { detail: creator.category }))}
                    className="mt-auto inline-flex items-center justify-between gap-1.5 whitespace-nowrap rounded-full bg-[#d9f5f2] px-2.5 py-2 text-xs font-bold text-[#08757b] transition hover:bg-[#c4eeeb] sm:text-[11px] xl:text-xs"
                  >
                    Explore services <ArrowRight size={17} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const accentStyles = {
    teal: {
      card: "border-[#d9eeee]",
      icon: "bg-[#e8f8f6]",
      label: "text-[#078b8c]",
      rule: "bg-[#0a9c9b]",
    },
    amber: {
      card: "border-[#f1e7d0]",
      icon: "bg-[#fff5df]",
      label: "text-[#bd7909]",
      rule: "bg-[#e9a324]",
    },
    purple: {
      card: "border-[#e9def5]",
      icon: "bg-[#f5edff]",
      label: "text-[#8b50bf]",
      rule: "bg-[#a66bd1]",
    },
    blue: {
      card: "border-[#dce8f6]",
      icon: "bg-[#eaf3ff]",
      label: "text-[#3478bd]",
      rule: "bg-[#498bd0]",
    },
    green: {
      card: "border-[#dfedda]",
      icon: "bg-[#eff9e9]",
      label: "text-[#4d933e]",
      rule: "bg-[#68ad55]",
    },
  };

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#f7fbff] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="relative mx-auto max-w-[1900px]">
        <div className="mb-8 text-center lg:mb-10">
          <span className="inline-flex rounded-full border border-[#d7eeee] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#078b8c] shadow-sm">Our Working Process</span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-[#101b3d] sm:text-3xl lg:text-4xl">How Community Connect Works</h2>
          <p className="mt-2 text-sm text-[#596276] sm:text-base">From finding the right expert to getting your work done.</p>
        </div>

        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
          {processSteps.map(({ title, description, image, accent }, index) => {
            const colors = accentStyles[accent];
            return (
              <div key={title} className="relative">
                <article className={`relative flex h-full min-h-[214px] flex-col overflow-hidden rounded-[22px] border bg-white px-4 py-4 shadow-[0_10px_28px_rgba(28,66,103,0.06)] sm:min-h-[220px] sm:px-5 sm:py-5 ${colors.card}`}>
                  <span className={`absolute inset-x-0 top-0 h-1 ${colors.rule}`} />
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-extrabold uppercase tracking-[0.13em] ${colors.label}`}>Step {String(index + 1).padStart(2, "0")}</span>
                    <span className={`flex h-[54px] w-[54px] items-center justify-center rounded-2xl ${colors.icon}`}>
                      <img src={image} alt="" aria-hidden="true" className="h-11 w-11 object-contain" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-base font-extrabold leading-tight tracking-tight text-[#101b3d] sm:text-lg">{title}</h3>
                    <p className="mt-2 text-sm leading-[1.55] text-[#596276]">{description}</p>
                  </div>
                </article>
                {index < processSteps.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    size={18}
                    strokeWidth={2.4}
                    className="absolute -right-[22px] top-1/2 z-10 hidden -translate-y-1/2 text-[#89a6b8] xl:block"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1740px]">
        <div className="mb-7 text-center sm:mb-8">
          <h2 className="flex items-center justify-center gap-3 text-2xl font-extrabold tracking-[-0.04em] text-[#101b3d] sm:text-3xl lg:text-4xl">
            <span className="hidden h-[2px] w-10 rounded-full bg-[#39b8b8] sm:block" />
            Why Choose Community Connect
            <span className="hidden h-[2px] w-10 rounded-full bg-[#39b8b8] sm:block" />
          </h2>
          <p className="mt-2 text-sm text-[#596276] sm:text-base">A trusted, creator-first marketplace by Scholars Mediatech.</p>
        </div>
        <div className="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4">
          {whyChoose.map(({ title, description, icon: Icon, color, surface }) => (
            <article key={title} className="flex min-h-[104px] items-center gap-3 rounded-[20px] border border-[#e7edf4] bg-white px-3.5 py-4 shadow-[0_8px_20px_rgba(27,57,87,0.07)] sm:gap-3.5 sm:px-4">
              <span className={`flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full ${surface} ${color}`}>
                <Icon size={29} strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-extrabold leading-tight text-[#101b3d] sm:text-base">{title}</h3>
                <p className="mt-1.5 text-xs leading-[1.4] text-[#454e60] sm:text-[13px]">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BecomeCreator() {
  return (
    <section id="become-creator" className="cc-join bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1740px]">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-[#101b3d] sm:text-3xl lg:text-4xl">How to Connect with Us</h2>
          <p className="mt-2 text-sm text-[#3d485c] sm:text-base">Choose your role and be a part of the Scholars Mediatech community.</p>
        </div>
        <div className="cc-role-grid grid gap-4 lg:grid-cols-2">
          <article className="cc-role-card cc-role-freelancer">
            <img src={maleFreelancerImage} alt="Male freelancer working on a laptop" className="cc-role-photo" />
            <div className="cc-role-copy">
              <span className="cc-role-icon"><img src={freelancerIcon} alt="" /></span>
              <h3>I’m a Freelancer</h3>
              <ul>
                <li><CheckCircle2 size={16} /> Create your professional profile</li>
                <li><CheckCircle2 size={16} /> Showcase your skills &amp; portfolio</li>
                <li><CheckCircle2 size={16} /> Set your own rates</li>
                <li><CheckCircle2 size={16} /> Get project opportunities</li>
              </ul>
              <Link to="/CommunityJoinForm" className="cc-role-button">Join as Freelancer <ArrowRight size={17} /></Link>
            </div>
          </article>
          <article className="cc-role-card cc-role-client">
            <div className="cc-role-copy">
              <span className="cc-role-icon"><img src={clientIcon} alt="" /></span>
              <h3>I’m a Client</h3>
              <ul>
                <li><CheckCircle2 size={16} /> Post your project requirements</li>
                <li><CheckCircle2 size={16} /> Discover verified freelancers</li>
                <li><CheckCircle2 size={16} /> Compare profiles &amp; rates</li>
                <li><CheckCircle2 size={16} /> Hire and collaborate securely</li>
              </ul>
              <a href="#services" className="cc-role-button">Join as Client <ArrowRight size={17} /></a>
            </div>
            <img src={femaleClientImage} alt="Female client working on a laptop" className="cc-role-photo" />
          </article>
        </div>
        <div className="cc-steps-strip">
          <strong>Simple Steps<br />to Get Started</strong>
          {processSteps.map(({ title, image }, index) => (
            <React.Fragment key={title}>
              {index > 0 && <ArrowRight className="cc-step-arrow" size={20} />}
              <div className="cc-step">
                <img src={image} alt="" />
                <span>{title}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="cc-about relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="relative mx-auto max-w-[1740px]">
        <div className="cc-about-layout">
          <div className="cc-about-brand">
            <img src={logo} alt="Scholars Mediatech" />
            <span>Freelancer Marketplace &amp; Digital Services Platform</span>
          </div>
          <div className="cc-about-story">
            <div className="mb-1 text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#0c9d9e]">Our Story, Mission &amp; Vision</div>
            <h2 className="text-xl font-extrabold leading-tight tracking-[-0.035em] text-[#101b3d] sm:text-2xl">About Scholars Mediatech</h2>
            <p className="mt-2 text-sm leading-[1.55] text-[#454e60] sm:text-[15px]">Scholars Mediatech is a digital services and freelancer marketplace that brings together creative talent and forward-thinking businesses on one trusted platform.</p>
            <div className="cc-about-values">
              <article><Target size={31} /><h3>Our Mission</h3><p>To create meaningful opportunities for freelancers and deliver impactful digital solutions to clients.</p></article>
              <article><Globe2 size={31} /><h3>Our Vision</h3><p>To be India’s most trusted platform for digital talent and business growth.</p></article>
              <article><BadgeCheck size={31} /><h3>Our Values</h3><p>Trust, quality, creativity, transparency and long-term collaboration.</p></article>
            </div>
          </div>
          <div className="cc-about-quote">
            <span>Empowering<br />Talent.<br />Enabling<br />Businesses.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonialsTrack = useRef(null);
  const scrollTestimonials = (direction) => {
    if (!testimonialsTrack.current) return;
    const cardWidth = testimonialsTrack.current.firstElementChild?.getBoundingClientRect().width ?? 0;
    testimonialsTrack.current.scrollBy({
      left: direction * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  return (
    <section id="community" className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-[1740px]">
        <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
          <div>
            <h2 className="text-xl font-extrabold tracking-[-0.035em] text-[#101b3d] sm:text-2xl">Real Stories, <span className="text-[#a76d16]">Real Impact</span></h2>
            <p className="mt-1 text-xs text-[#596276] sm:text-sm">Hear from our freelancers and clients about their experience with Scholars Mediatech.</p>
            <div className="cc-rating-card">
              <span aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
              </span>
              <strong>4.9/5</strong>
              <b>Platform Rating</b>
              <small>(Based on 500+ Reviews)</small>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button type="button" aria-label="Scroll testimonials left" onClick={() => scrollTestimonials(-1)} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e1eaf2] bg-white text-[#16899b] shadow-sm transition hover:bg-[#effafa]">
              <ArrowRight size={17} className="rotate-180" />
            </button>
            <button type="button" aria-label="Scroll testimonials right" onClick={() => scrollTestimonials(1)} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d6eeee] bg-[#e8f8f7] text-[#16899b] shadow-sm transition hover:bg-[#d9f2f0]">
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
        <div ref={testimonialsTrack} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((person) => (
            <article key={person.name} className="cc-review-card flex min-h-[150px] w-full shrink-0 snap-start flex-col rounded-[20px] border border-[#e5ebf2] bg-white p-4 shadow-[0_8px_22px_rgba(25,57,90,0.07)] sm:min-h-[160px] sm:basis-[calc(50%-0.5rem)] sm:p-5 xl:basis-[calc(33.333%-0.67rem)]">
              <div className="flex items-center gap-3">
                <img src={person.image} alt={person.name} className="h-11 w-11 shrink-0 rounded-full object-cover sm:h-12 sm:w-12" />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-extrabold leading-tight text-[#101b3d] sm:text-base">{person.name}</h3>
                  <p className="mt-0.5 text-xs text-[#596276]">{person.role}</p>
                </div>
                <div className="flex shrink-0 items-center gap-0.5 text-[#f5a500]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={`${person.name}-${index}`} size={14} fill="currentColor" />)}
                </div>
              </div>
              <p className="mt-3 text-xs leading-[1.55] text-[#30394e] sm:text-sm">“{person.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-[1740px] items-center gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="text-2xl font-extrabold tracking-[-0.04em] text-[#101b3d] sm:text-3xl">Frequently Asked Questions</h2>
          <p className="mt-1.5 text-sm text-[#596276] sm:text-base">Quick answers to common questions about Community Connect.</p>
          <svg viewBox="0 0 300 240" role="img" aria-label="Question and answer chat bubbles" className="mt-5 h-48 w-full max-w-[300px] sm:h-56 lg:mt-7 lg:h-60">
            <defs>
              <linearGradient id="faqQuestionGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8295ff" />
                <stop offset="100%" stopColor="#5559e8" />
              </linearGradient>
              <linearGradient id="faqAnswerGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#bc77f2" />
                <stop offset="100%" stopColor="#873de1" />
              </linearGradient>
              <filter id="faqBubbleShadow" x="-30%" y="-30%" width="160%" height="170%">
                <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#4f46e5" floodOpacity=".2" />
              </filter>
            </defs>
            <path d="M66 33c-4-10-2-17 1-24M88 30c2-9 7-14 12-19M221 58c5-9 11-13 18-15M244 77c7-5 14-7 21-7M38 176c-9 2-15 7-20 13M52 194c-8 5-12 11-14 18" fill="none" stroke="#22c6d0" strokeLinecap="round" strokeWidth="7" />
            <path d="M49 53a20 20 0 0 1 20-20h91a20 20 0 0 1 20 20v91a20 20 0 0 1-20 20h-35l-32 28v-28H69a20 20 0 0 1-20-20z" fill="url(#faqQuestionGradient)" filter="url(#faqBubbleShadow)" />
            <text x="114" y="126" fill="white" fontFamily="Arial, sans-serif" fontSize="83" fontWeight="800" textAnchor="middle">Q</text>
            <path d="M134 130a19 19 0 0 1 19-19h87a19 19 0 0 1 19 19v65a19 19 0 0 1-19 19h-21v24l-29-24h-37a19 19 0 0 1-19-19z" fill="url(#faqAnswerGradient)" filter="url(#faqBubbleShadow)" />
            <text x="196" y="187" fill="white" fontFamily="Arial, sans-serif" fontSize="61" fontWeight="800" textAnchor="middle">A</text>
          </svg>
        </div>
        <div className="space-y-2.5">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.question} className={`overflow-hidden rounded-[17px] border bg-white shadow-[0_5px_13px_rgba(27,57,87,0.07)] transition-colors ${isOpen ? "border-[#cfe6f8] bg-[#f7fbff]" : "border-[#e8edf3]"}`}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-5 sm:py-3.5">
                  <span className={`text-sm font-extrabold leading-snug sm:text-base ${isOpen ? "text-[#078b91]" : "text-[#101b3d]"}`}>{item.question}</span>
                  <ChevronDown size={19} className={`shrink-0 text-[#26344c] transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                {isOpen && <p className="px-4 pb-4 text-xs leading-[1.55] text-[#454e60] sm:px-5 sm:pb-4 sm:text-sm">{item.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FooterSection({ settings }) {
  const socialLinks = [
    { label: "YouTube", href: settings.socialLinks?.youtube || defaultLandingSettings.socialLinks.youtube, icon: Youtube, color: "text-[#f32929]" },
    { label: "Instagram", href: settings.socialLinks?.instagram || defaultLandingSettings.socialLinks.instagram, icon: Instagram },
    { label: "Facebook", href: settings.socialLinks?.facebook || defaultLandingSettings.socialLinks.facebook, icon: Facebook, color: "text-[#1877f2]" },
    { label: "LinkedIn", href: settings.socialLinks?.linkedin || defaultLandingSettings.socialLinks.linkedin, icon: Linkedin },
    { label: "X", href: settings.socialLinks?.twitter || defaultLandingSettings.socialLinks.twitter, icon: Twitter, color: "text-[#111827]" },
  ];

  const sendMessage = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(formData.get("subject") || "Website enquiry");
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
    );
    window.location.href = `mailto:support@scholarsmediatech.in?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="cc-contact border-t border-[#e7edf3] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-4 pb-5 pt-9 text-[#253047] sm:px-6 sm:pt-10 lg:px-8">
      <div className="mx-auto max-w-[1740px]">
        <div className="mb-6 text-center">
          <span className="cc-section-kicker">We’d love to hear from you</span>
          <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.035em] text-[#101b3d] sm:text-3xl">Get in Touch</h2>
        </div>
        <div className="cc-contact-grid">
          <div className="cc-contact-details">
            <p>Have a project, a question or need support? We’re here to help you.</p>
            <a href="tel:+918109977628"><Phone size={20} /><span><b>Call Us</b><small>+91 81099 77628</small></span></a>
            <a href="mailto:support@scholarsmediatech.in"><Mail size={20} /><span><b>Email Us</b><small>support@scholarsmediatech.in</small></span></a>
            <div className="cc-contact-address"><Globe2 size={20} /><span><b>Our Office</b><small>Raipur, Chhattisgarh, India</small></span></div>
            <a href="https://wa.me/918109977628" target="_blank" rel="noreferrer"><MessageSquareText size={20} /><span><b>WhatsApp</b><small>Chat with our team instantly</small></span></a>
          </div>
          <form className="cc-contact-form" onSubmit={sendMessage}>
            <h3>Send Us a Message</h3>
            <label><UserRound size={17} /><input name="name" required placeholder="Your Name" aria-label="Your Name" /></label>
            <label><Mail size={17} /><input name="email" type="email" required placeholder="Email Address" aria-label="Email Address" /></label>
            <label><Briefcase size={17} /><select name="subject" defaultValue="" required aria-label="Subject or service"><option value="" disabled>Subject / Service</option><option>Freelancer enquiry</option><option>Client enquiry</option><option>Project support</option><option>Other</option></select></label>
            <label className="cc-message-field"><MessageSquareText size={17} /><textarea name="message" required placeholder="Your Message" aria-label="Your Message" rows="3" /></label>
            <button type="submit">Send Message <ArrowRight size={17} /></button>
          </form>
          <aside className="cc-quick-links">
            <h3><LinkIcon size={18} /> Quick Links</h3>
            <a href="#faq">FAQ</a>
            <a href={settings.legalLinks?.privacy || defaultLandingSettings.legalLinks.privacy}>Privacy Policy</a>
            <a href={settings.legalLinks?.terms || defaultLandingSettings.legalLinks.terms}>Terms &amp; Conditions</a>
            <a href="#become-creator">Freelancer Guidelines</a>
            <div className="cc-socials">
              <h4>Follow Us</h4>
              <div>
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"><Icon size={17} /></a>
                ))}
              </div>
            </div>
          </aside>
        </div>
        <div className="cc-copyright">© 2025 Scholars Mediatech Pvt Ltd. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  const [settings, setSettings] = useState(defaultLandingSettings);
  useEffect(() => {
    let mounted = true;
    getLandingSettings().then((data) => { if (mounted) setSettings(data); }).catch(() => { if (mounted) setSettings(defaultLandingSettings); });
    return () => { mounted = false; };
  }, []);

  return (
    <div className="cc-site min-h-screen bg-white text-slate-900 antialiased">
      <Header settings={settings} />
      <HeroSection />
      <ServicesSection />
      <Testimonials />
      <BecomeCreator />
      <AboutSection />
      <FaqSection />
      <FooterSection settings={settings} />
    </div>
  );
}
