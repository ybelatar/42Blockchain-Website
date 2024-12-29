import { Users, GraduationCap, Rocket, Building2 } from "lucide-react";
import {
  binance,
  bpi,
  ethfr,
  ledger,
  ripple,
  scaleway,
  solana,
  starknet,
  eth_global_bangkok,
  kiln_conf,
  algorand_hackathon,
} from "@/assets";
import { LinkedIn } from "@/components/svg/linkedin";
import { Twitter } from "@/components/svg/twitter";
import { Discord } from "@/components/svg/discord";
import { Email } from "@/components/svg/email";
import { YouTube } from "@/components/svg/youtube";
import { Zealy } from "@/components/svg/zealy";

export const stats = [
  { label: "Members", value: "713", icon: Users, plus: false },
  { label: "Campus", value: "54", icon: GraduationCap, plus: false },
  { label: "Projects", value: "20", icon: Rocket, plus: true },
  { label: "Partners", value: "10", icon: Building2, plus: true },
];

export const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  { label: "Events", href: "/events" },
];

export const partnerLogos = [
  { logo: binance, alt: "Binance" },
  { logo: bpi, alt: "BPI" },
  { logo: ethfr, alt: "ETHFR" },
  { logo: ledger, alt: "Ledger" },
  { logo: ripple, alt: "Ripple" },
  { logo: scaleway, alt: "Scaleway" },
  { logo: solana, alt: "Solana" },
  { logo: starknet, alt: "Starknet" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/42blockchain/",
    icon: <LinkedIn />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/42Blockchain_",
    icon: <Twitter />,
  },
  {
    label: "Discord",
    href: "https://discord.gg/2NKXT7X8pe",
    icon: <Discord />,
  },
  {
    label: "Email",
    href: "mailto:info@42blockchain.com",
    icon: <Email />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@42blockchain",
    icon: <YouTube />,
  },
  {
    label: "Zealy",
    href: "https://zealy.io/c/42blockchain",
    icon: <Zealy />,
  },
];

export const eventsList = [
  {
    id: 1,
    title: "ETH Global Bangkok",
    date: "11/2024",
    description:
      "Join us for an exciting blockchain development hackathon in the heart of Thailand.",
    image: eth_global_bangkok,
  },
  {
    id: 2,
    title: "Algorand Hackthon",
    date: "11/2024",
    description:
      "Explore the possibilities of Algorand blockchain technology in this intensive hackathon.",
    image: algorand_hackathon,
  },
  {
    id: 3,
    title: "Kiln Conference",
    date: "11/2024",
    description:
      "A gathering of blockchain experts and enthusiasts discussing the future of Web3.",
    image: kiln_conf,
  },
];
