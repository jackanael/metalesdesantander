"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Recycle,
  Shield,
  Truck,
  FileCheck,
  CreditCard,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <Image
            src="/imagenes/head.jpeg"
            alt="Reciclaje industrial"
            width={1920}
            height={800}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-8 relative z-20">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-4">
              <Image
                src="/imagenes/icon.png"
                alt="Logo Metales de Santander"
                width={80}
                height={80}
                className="rounded-full bg-white p-1"
              />
              <h1 className="text-2xl font-bold">Metales de Santander S.A.S.</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#quienes-somos" className="hover:underline">
                Quiénes Somos
              </a>
              <a href="#servicios" className="hover:underline">
                Servicios
              </a>
              <a href="#materiales" className="hover:underline">
                Materiales
              </a>
              <a href="#propuesta" className="hover:underline">
                Propuesta
              </a>
              <a href="#contacto" className="hover:underline">
                Contacto
              </a>
            </div>
            <Button className="bg-white text-green-700 hover:bg-green-100">Contáctenos</Button>
          </nav>

          <div className="py-20 max-w-3xl">
            <h2 className="text-5xl font-bold mb-6">Soluciones de Reciclaje Profesionales</h2>
            <p className="text-xl mb-8">
              Especialistas en recolección, compra y comercialización de residuos reciclables con compromiso ambiental y
              cumplimiento normativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-green-700 hover:bg-green-100 text-lg px-6 py-6">
                Nuestros Servicios <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white bg-white/20 text-white hover:bg-white/40 text-lg px-6 py-6"
                onClick={() => {
                  const contactoElement = document.getElementById("contacto")
                  if (contactoElement) {
                    contactoElement.scrollIntoView({ behavior: "smooth" })
                    setTimeout(() => {
                      const messageField = document.getElementById("message") as HTMLTextAreaElement | null
                      if (messageField) {
                        messageField.value = "Solicito una recolección para mi"
                        messageField.focus()
                      }
                    }, 800)
                  }
                }}
              >
                Solicitar Recolección
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Quiénes Somos */}
        <section id="quienes-somos" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-green-700 mb-2">¿QUIÉNES SOMOS?</h2>
                <div className="w-20 h-1 bg-green-700 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Metales de Santander S.A.S. es una empresa santandereana dedicada a la recolección, compra y
                  comercialización de residuos reciclables. Nos comprometemos con el desarrollo sostenible, la economía
                  circular y el cumplimiento de la normativa ambiental. Nuestra operación se encuentra completamente
                  documentada y respaldada por procesos seguros, lo que garantiza confianza, eficiencia y legalidad para
                  nuestros aliados comerciales.
                </p>

                <h3 className="text-2xl font-bold text-green-700 mb-2">MISIÓN</h3>
                <p className="text-gray-700 mb-6">
                  Brindar soluciones responsables y efectivas en la gestión de residuos reciclables, generando valor
                  ambiental y económico a través de recolecciones seguras, eficientes y documentadas. Ofrecemos pagos
                  inmediatos y una atención al cliente de excelencia.
                </p>

                <h3 className="text-2xl font-bold text-green-700 mb-2">VISIÓN</h3>
                <p className="text-gray-700 mb-6">
                  Ser líderes regionales en el reciclaje industrial y comercial, reconocidos por nuestra ética,
                  cumplimiento legal, responsabilidad ambiental y por construir alianzas estratégicas con empresas
                  comprometidas con el desarrollo sostenible.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/imagenes/sello.png"
                  alt="Sello Metales de Santander"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-2">VALORES</h2>
            <div className="w-20 h-1 bg-green-700 mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Recycle className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle className="text-xl">Responsabilidad Ambiental</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    El cuidado del entorno es nuestra prioridad. Trabajamos para minimizar el impacto ambiental y
                    promover la economía circular.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle className="text-xl">Cumplimiento Legal</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Operamos con toda la documentación exigida por la ley, garantizando transparencia y seguridad
                    jurídica.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle className="text-xl">Honestidad y Transparencia</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    Precios justos y pagos inmediatos. Nuestra relación con clientes y proveedores se basa en la
                    confianza mutua.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-2">SERVICIOS OFRECIDOS</h2>
            <div className="w-20 h-1 bg-green-700 mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-green-600">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Recolección a Domicilio</h3>
                <p className="text-gray-600">
                  Contamos con un servicio logístico eficiente para recoger materiales directamente en el lugar del
                  cliente, garantizando comodidad y puntualidad.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-green-600">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Clasificación Técnica y Pesaje Certificado</h3>
                <p className="text-gray-600">
                  Realizamos un proceso detallado de separación y clasificación de materiales, con pesaje preciso
                  respaldado por básculas calibradas y certificados.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-green-600">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pago Inmediato</h3>
                <p className="text-gray-600">
                  Aseguramos la cancelación del pago al instante tras la recepción y verificación del material
                  entregado, brindando transparencia y confianza a nuestros proveedores.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-green-600">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transporte Seguro y Personal Calificado</h3>
                <p className="text-gray-600">
                  Disponemos de vehículos adecuados y personal capacitado en normas de seguridad industrial y manejo de
                  residuos reciclables.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-green-600">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold mb-3">Soporte Documental</h3>
                <p className="text-gray-600">
                  Emitimos facturas, recibos y demás documentación exigida por la regulación ambiental y contable
                  colombiana, permitiendo a nuestros clientes justificar sus transacciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Materiales */}
        <section id="materiales" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-2">MATERIALES QUE TRABAJAMOS</h2>
            <div className="w-20 h-1 bg-green-700 mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-700 font-bold">1</span>
                    </div>
                    Plásticos y Derivados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Pasta PET (marrón, verde, soplado, gruesa, revuelta)</li>
                    <li>Plásticos industriales y domésticos</li>
                    <li>Mangueras, pimpinas, vainilla</li>
                    <li>Canastas plásticas, defensas, aceites, PVC, acrílico</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-700 font-bold">2</span>
                    </div>
                    Papel y Cartón
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Cartón corrugado y de huevo (CH)</li>
                    <li>Archivo y periódico</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-700 font-bold">3</span>
                    </div>
                    Metales Ferrosos y No Ferrosos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Aluminio (blando, grueso, pote, perfil, salchicha, revuelto)</li>
                    <li>Cobre (brillante, 1B)</li>
                    <li>Bronce</li>
                    <li>Plomo (limpio, cáscara)</li>
                    <li>Guaya, antimonio, balancín, scrap</li>
                    <li>Chatarra pesada y liviana</li>
                    <li>Rines de auto, mula, bicicleta</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-700 font-bold">4</span>
                    </div>
                    Residuos Electrónicos (RAEE)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Tarjetas electrónicas (celulares, portátiles, lectoras)</li>
                    <li>Memorias RAM (dorada y plateada)</li>
                    <li>Pentium, fuentes de poder</li>
                    <li>Tablets, portátiles, celulares</li>
                    <li>Modems, comunicación de alta</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-700 font-bold">5</span>
                    </div>
                    Otros materiales especiales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Radiografías</li>
                    <li>Lingotes de aluminio</li>
                    <li>Tablones</li>
                    <li>Baterías</li>
                    <li>Panan</li>
                    <li>Vidrio</li>
                    <li>Plega</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Propuesta de Alianza */}
        <section id="propuesta" className="py-20 bg-green-700 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">PROPUESTA DE ALIANZA</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-12"></div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-8">
                Conscientes del compromiso de su empresa con la sostenibilidad y la responsabilidad social empresarial,
                Metales de Santander S.A.S. presenta este portafolio como una propuesta de alianza estratégica para la
                gestión eficiente, segura y legal de los residuos reciclables generados en sus procesos industriales.
              </p>

              <h3 className="text-2xl font-bold mb-4">Ofrecemos:</h3>
              <ul className="text-left space-y-3 mb-8 max-w-xl mx-auto">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Recolección planificada y a domicilio con rutas seguras.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Cumplimiento de protocolos de seguridad industrial y ambiental.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Registro documental completo para auditorías y trazabilidad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Pagos inmediatos al momento de la entrega del material.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Asesoría y acompañamiento técnico en gestión de residuos reciclables.</span>
                </li>
              </ul>

              <p className="text-lg font-medium mb-8">
                Estamos listos para convertirnos en su aliado de confianza en el manejo responsable del reciclaje
                empresarial en Santander.
              </p>

              <Button className="bg-white text-green-700 hover:bg-green-100 text-lg px-8 py-6">
                Solicitar Propuesta Personalizada
              </Button>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-green-700 mb-2">DATOS DE CONTACTO</h2>
            <div className="w-20 h-1 bg-green-700 mx-auto mb-12"></div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-green-700">Información de Contacto</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-bold">Dirección:</h4>
                      <p className="text-gray-700">Calle 10A #2-06, Barrio La Feria, Piedecuesta – Santander</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-bold">Teléfono / WhatsApp:</h4>
                      <p className="text-gray-700">+57 321 357 0188</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-bold">Correo electrónico:</h4>
                      <p className="text-gray-700">metalesdesantander@hotmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-bold">Horario de atención:</h4>
                      <p className="text-gray-700">Lunes a viernes: 8:00 a.m. – 6:00 p.m.</p>
                      <p className="text-gray-700">Sábados: 8:00 a.m. – 12:00 p.m.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <Image
                  src="/imagenes/gerente.png"
                  alt="Gerente - Liliana Lozano Peña"
                  width={300}
                  height={150}
                  className="rounded-full border-4 border-green-500"
                />
              </div>
              <p className="text-center text-gray-700 font-medium mb-6">Liliana Lozano Peña - Representante Legal</p>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-green-700">Envíenos un Mensaje</h3>

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const nameElement = document.getElementById("name") as HTMLInputElement | null
                    const companyElement = document.getElementById("company") as HTMLInputElement | null
                    const emailElement = document.getElementById("email") as HTMLInputElement | null
                    const messageElement = document.getElementById("message") as HTMLTextAreaElement | null

                    const name = nameElement?.value || ""
                    const company = companyElement?.value || ""
                    const email = emailElement?.value || ""
                    const message = messageElement?.value || ""

                    const whatsappMessage = `*Mensaje desde el sitio web*%0A%0A${message}${name ? "%0A%0A*Nombre:* " + name : ""}${company ? "%0A*Empresa:* " + company : ""}${email ? "%0A*Email:* " + email : ""}`

                    window.open(`https://wa.me/573213570188?text=${whatsappMessage}`, "_blank")
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre <span className="text-gray-500 text-xs">(opcional)</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Su nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Empresa <span className="text-gray-500 text-xs">(opcional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Nombre de su empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo Electrónico <span className="text-gray-500 text-xs">(opcional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Su correo electrónico"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje <span className="text-gray-500 text-xs">(requerido)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="¿Cómo podemos ayudarle?"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white font-bold">
                    Enviar a WhatsApp
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/imagenes/icon.png"
                  alt="Logo Metales de Santander"
                  width={50}
                  height={50}
                  className="rounded-full bg-white p-1"
                />
                <h3 className="text-xl font-bold">Metales de Santander S.A.S.</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Empresa santandereana dedicada a la recolección, compra y comercialización de residuos reciclables.
              </p>
              <p className="text-gray-400">Representante Legal: Liliana Lozano Peña</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#quienes-somos" className="text-gray-400 hover:text-white">
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="text-gray-400 hover:text-white">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#materiales" className="text-gray-400 hover:text-white">
                    Materiales
                  </Link>
                </li>
                <li>
                  <Link href="#propuesta" className="text-gray-400 hover:text-white">
                    Propuesta
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-gray-400 hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <span className="text-gray-400">Calle 10A #2-06, Barrio La Feria, Piedecuesta</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-green-500" />
                  <span className="text-gray-400">+57 321 357 0188</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-green-500" />
                  <span className="text-gray-400">metalesdesantander@hotmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Metales de Santander S.A.S. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
