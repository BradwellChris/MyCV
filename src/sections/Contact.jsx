import { Mail } from "lucide-react";


const contactInfo = [
  {
    icon: Mail,
    label: "",
    value: "",
    href: "",
  }
]

function Contacts() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div>
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
        </div>
      </div>
    </section>
  )
}


export default Contacts;
