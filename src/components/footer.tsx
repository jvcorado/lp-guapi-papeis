import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const about = [
  { href: "#", label: "Somos Guapi" },
  { href: "#", label: "Produtos Guapi" },
  { href: "#", label: "Sustentabilidade e Tecnologia" },
  { href: "#", label: "Responsabilidade Social" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Seja Guapi" },
  { href: "#", label: "Termos & Condições" },
  { href: "#", label: "Política de Privacidade" },
];

const counted = [
  { href: "#", label: "Fale Conosco" },
  { href: "#", label: "Envie seu currículo" },
  { href: "#", label: "Quero ser cliente" },
  { href: "#", label: "Quero ser fornecedor" },
  { href: "#", label: "Telefone: +55 (21) 2633-9700" },
];

const support = [
  { href: "#", label: "Termos & Condições" },
  { href: "#", label: "Política de Privacidade" },
];

const socialLinks = [
  { href: "#", Icon: Facebook, label: "Facebook" },
  { href: "#", Icon: Instagram, label: "Instagram" },
  { href: "#", Icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#006C3E] text-white">
      <div className="py-16 ">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:px-16">
            {/* Logo da empresa */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Image src="/LOGO_TOTALBRANCA_1.png" alt="Logo" width={170} height={24} />
              </div>
            </div>

            {/* Sobre */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Gruapi Papéis</h3>
              <ul className="space-y-2 text-xs">
                {about.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-gray-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contato</h3>
              <ul className="space-y-2 text-xs">
                {counted.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-gray-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suporte */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Cuporte</h3>
              <ul className="space-y-2 text-xs">
                {support.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-gray-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes sociais */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Siga a Gruapi</h3>
              <ul className="flex space-x-4">
                {socialLinks.map(({ href, Icon, label }, index) => (
                  <li key={index}>
                    <Link href={href} className="hover:text-gray-300" aria-label={label}>
                      <Icon size={24} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-full w-full flex items-center justify-center pt-4 pb-8">
        <p className=" font-normal text-xs ">©2025 Guapi Papéis, Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
