import { Instagram, Mail, Phone, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#024D44] text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brand-ic47XtwwKqKzDBVVYDPoprVmkhlRGO.jpg"
                alt="GAO Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <div className="text-xl font-bold">GAO</div>
                <div className="text-sm opacity-90">Contabilidade & Assessoria</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed max-w-md mb-2">
              Transformando números em estratégias para o crescimento sustentável do seu negócio. Assessoria contábil completa e personalizada.
            </p>
            <p className="text-sm opacity-90 leading-relaxed max-w-md mb-4 font-bold text-[var(--color-gao-gold)]">
              CNPJ: 33.317.915/0001-84
            </p>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--color-gao-gold)]" />
                <a href="tel:+5515996890947" className="hover:text-[var(--color-gao-gold)] transition-colors">
                  (15) 99689-0947
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--color-gao-gold)]" />
                <a href="mailto:contato@gaocontabilidade.com.br" className="hover:text-[var(--color-gao-gold)] transition-colors">
                  contato@gaocontabilidade.com.br
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[var(--color-gao-gold)]">Links Rápidos</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/" className="hover:text-[var(--color-gao-gold)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="hover:text-[var(--color-gao-gold)] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" className="hover:text-[var(--color-gao-gold)] transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="hover:text-[var(--color-gao-gold)] transition-colors">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="/reforma-tributaria" className="hover:text-[var(--color-gao-gold)] transition-colors">
                  Reforma Tributária
                </Link>
              </li>
              <li>
                <Link href="/#proposta" className="hover:text-[var(--color-gao-gold)] transition-colors font-bold">
                  Solicite Proposta
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-[var(--color-gao-gold)]">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5515996890947"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(37,211,102,0.4)] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gaocontabilidade/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(220,39,67,0.4)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/gaocontabilidade/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(24,119,242,0.4)] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-90">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} GAO Contabilidade & Assessoria. Todos os direitos reservados.</p>
            <p className="mt-1 text-xs text-white/70">
              Desenvolvido com ❤️ por Nicolas Nagano
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <Link href="/politica-de-privacidade" className="hover:text-[var(--color-gao-gold)] transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/politica-de-cookies" className="hover:text-[var(--color-gao-gold)] transition-colors">
              Política de Cookies
            </Link>
            <Link href="/termos-de-uso" className="hover:text-[var(--color-gao-gold)] transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
