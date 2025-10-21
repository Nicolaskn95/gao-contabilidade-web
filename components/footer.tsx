import { Instagram, Mail, Phone, Facebook } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
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
            <p className="text-sm opacity-90 leading-relaxed max-w-md mb-4">
              Transformando números em estratégias para o crescimento sustentável do seu negócio. Assessoria contábil
              completa e personalizada.
            </p>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+5515996890947" className="hover:opacity-100 transition-opacity">
                  (15) 99689-0947
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contato@gaocontabilidade.com.br" className="hover:opacity-100 transition-opacity">
                  contato@gaocontabilidade.com.br
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#inicio" className="hover:opacity-100 transition-opacity">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:opacity-100 transition-opacity">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#clientes" className="hover:opacity-100 transition-opacity">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#proposta" className="hover:opacity-100 transition-opacity">
                  Solicite Proposta
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/gaocontabilidade/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/gaocontabilidade/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} GAO Contabilidade & Assessoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
