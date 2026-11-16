import { X } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";
import { SiGithub } from "react-icons/si";

const socialLinks = [
  { icon: SiGithub, href: "", label: "Github" },
  { icon: LuLinkedin, href: "", label: "LinkedIn" },
  { icon: X, href: "", label: "X" },
]

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

function Footer() {
  return(
    <footer></footer>
  )
}

export default Footer;
