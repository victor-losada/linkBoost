import React from "react";
import { Link } from "react-router-dom";
import {
  Check,
  Star,
  Zap,
  Palette,
  BarChart3,
  Instagram,
  Twitter,
  Youtube,
  Github,
  ArrowRight,
  Users,
  Sparkles,
  Heart,
  TrendingUp,
  Clock,
  Camera,
  Brain,
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F8F8F8]">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 px-4 lg:px-6 h-16 flex items-center backdrop-blur-lg bg-[#0A0A0F]/80 border-b border-white/5">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-r from-[#FF2E63] to-[#24E8A5] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF2E63]/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#FF2E63] to-[#24E8A5] bg-clip-text text-transparent">
              LinkBoost
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
              Funciones
            </a>
            <a href="#pricing" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
              Precios
            </a>
            <a href="#testimonials" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
              Testimonios
            </a>
          </nav>
          <button className="px-6 py-2 bg-[#FF2E63] hover:bg-[#FF2E63]/90 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[#FF2E63]/25">
            Iniciar Sesión
          </button>
        </div>
      </header>

      {/* 1. Hero Principal */}
      <section className="relative px-4 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[#1A1A23]/60 border border-[#24E8A5]/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#24E8A5]" />
              <span className="text-sm font-medium text-[#24E8A5]">Más de 100 creadores confían en nosotros</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#F8F8F8] to-[#C5C5C5] bg-clip-text text-transparent">
              Tu mundo digital impulsado 
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FF2E63] via-[#FF4081] to-[#24E8A5] bg-clip-text text-transparent">
              por IA en un solo link
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#C5C5C5] mb-12 max-w-4xl mx-auto leading-relaxed">
            Centraliza tus redes, productos y contenido en una página visual, rápida y 100% personalizable. Ideal para creadores, emprendedores y freelancers
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-[#FF2E63] to-[#24E8A5] rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FF2E63]/25">
                <span className="flex items-center">
                Crea tu página gratis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="px-10 py-4 bg-[#1A1A23]/60 hover:bg-[#1A1A23] border border-[#C5C5C5]/20 text-[#F8F8F8] rounded-xl backdrop-blur-sm transition-all duration-300">
              Explorar ejemplos reales
              </button>
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#FF2E63]/20 to-[#24E8A5]/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#24E8A5]/20 to-[#FF2E63]/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
      </section>

      {/* 2. Qué es LinkBoost */}
      <section className="px-4 py-20 bg-[#0F0F14]">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#F8F8F8]">¿Cansado de tener tu contenido repartido por todos lados?</h2>
          <p className="text-xl text-[#C5C5C5] leading-relaxed mb-16">
            Sabemos lo frustrante que es tener tu contenido disperso en mil plataformas.
            <span className="text-[#24E8A5] font-semibold"> LinkBoost es la solución</span> LinkBoost es tu página digital definitiva: una sola URL que lo reúne todo. Redes sociales, productos, cursos, contacto directo y mucho más. Visual, rápida y flexible, como tú
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF2E63]/20 to-[#FF2E63]/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Heart className="w-8 h-8 text-[#FF2E63]" />
              </div>
              <h3 className="text-xl font-bold text-[#F8F8F8] mb-2">Para creadores</h3>
              <p className="text-[#C5C5C5]">Tiktokers, Artistas, influencers, streamers</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#24E8A5]/20 to-[#24E8A5]/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-[#24E8A5]" />
              </div>
              <h3 className="text-xl font-bold text-[#F8F8F8] mb-2">Para emprendedores</h3>
              <p className="text-[#C5C5C5]">Freelancers, consultores, coaches</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F8F8F8]/20 to-[#F8F8F8]/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-[#F8F8F8]" />
              </div>
              <h3 className="text-xl font-bold text-[#F8F8F8] mb-2">Para marcas</h3>
              <p className="text-[#C5C5C5]">Pequeños negocios, startups</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ¿Por qué LinkBoost? */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F8F8F8]">¿Por qué elegir LinkBoost?</h2>
            <p className="text-xl text-[#C5C5C5] max-w-3xl mx-auto">
            Más que enlaces: libertad para mostrar quién eres. Otras plataformas te encierran en diseños rígidos. Con LinkBoost, tú decides: cómo se ve, qué vendes y cómo te comunicas con tu audiencia.

            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF2E63]/20 to-[#FF2E63]/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Check className="w-6 h-6 text-[#FF2E63]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F8F8F8] mb-2">Sin límites creativos</h3>
                  <p className="text-[#C5C5C5]">Personaliza colores, fuentes, layouts. Tu página, tu estilo.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#24E8A5]/20 to-[#24E8A5]/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Check className="w-6 h-6 text-[#24E8A5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F8F8F8] mb-2">Carga súper rápida</h3>
                  <p className="text-[#C5C5C5]">Optimizado para móviles. Paginas que cargan en menos de 2 segundos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F8F8F8]/20 to-[#F8F8F8]/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Check className="w-6 h-6 text-[#F8F8F8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F8F8F8] mb-2">Analytics que importan</h3>
                  <p className="text-[#C5C5C5]">Ve qué funciona, optimiza lo que no. Datos claros, decisiones inteligentes.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#0F0F14] to-[#0A0A0F] rounded-3xl p-8 border border-[#FF2E63]/20 shadow-2xl shadow-[#FF2E63]/10">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold bg-gradient-to-r from-[#FF2E63] to-[#24E8A5] bg-clip-text text-transparent">
                    3x
                  </div>
                  <p className="text-xl text-[#F8F8F8] font-semibold">Más clics en tus links</p>
                  <p className="text-[#C5C5C5]">Comparado con bio links tradicionales</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#24E8A5] to-[#24E8A5]/80 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Features principales */}
      <section id="features" className="px-4 py-20 bg-[#0F0F14]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F8F8F8]">Conecta con tu audiencia como nunca antes</h2>
            <p className="text-xl text-[#C5C5C5] max-w-3xl mx-auto">
            Personaliza tu espacio, recibe apoyo, y guía a tus seguidores a donde más te conviene. Todo desde un solo link
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8  mx-auto">
            <div className="bg-[#1A1A23]/60 backdrop-blur-xl border border-[#FF2E63]/10 rounded-3xl overflow-hidden group hover:bg-[#1A1A23]/80 transition-all duration-500 hover:scale-105">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF2E63] via-[#FF2E63]/80 to-[#FF2E63]/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#FF2E63]/20">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#F8F8F8] mb-4">Diseños visuales únicos</h3>
                <p className="text-[#C5C5C5] leading-relaxed">
                Elige entre plantillas modernas y edítalas a tu manera: colores, tipografías, íconos y mucho más. Haz que tu link hable por ti
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A23]/60 backdrop-blur-xl border border-[#24E8A5]/10 rounded-3xl overflow-hidden group hover:bg-[#1A1A23]/80 transition-all duration-500 hover:scale-105">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#24E8A5] via-[#24E8A5]/80 to-[#24E8A5]/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#24E8A5]/20">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#F8F8F8] mb-4">Apoyo de la comunidad</h3>
                <p className="text-[#C5C5C5] leading-relaxed">
                Agrega botones para recibir propinas, mensajes o regalos virtuales. Ideal para creadores que quieren conectar más allá de un simple "me gusta"
                . Porque ser creador también es recibir
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A23]/60 backdrop-blur-xl border border-[#24E8A5]/10 rounded-3xl overflow-hidden group hover:bg-[#1A1A23]/80 transition-all duration-500 hover:scale-105">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#24E8A5] via-[#24E8A5]/80 to-[#24E8A5]/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#24E8A5]/20">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#F8F8F8] mb-4">Promoción inteligente</h3>
                <p className="text-[#C5C5C5] leading-relaxed">
                Destaca lo que importa: tu último video, perfil o producto. Puedes enlazar plataformas externas (YouTube, Amazon, OnlyFans, etc.) sin perder el estilo.
                </p>
              </div>
            </div>
            <div className="bg-[#1A1A23]/60 backdrop-blur-xl border border-[#24E8A5]/10 rounded-3xl overflow-hidden group hover:bg-[#1A1A23]/80 transition-all duration-500 hover:scale-105">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#24E8A5] via-[#24E8A5]/80 to-[#24E8A5]/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#24E8A5]/20">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#F8F8F8] mb-4">IA que diseña contigo</h3>
                <p className="text-[#C5C5C5] leading-relaxed">
                ¿No sabes qué escribir o cómo lucir? Nuestro asistente crea tu bio, textos, colores y estructura. Solo responde unas preguntas                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mockup o demo */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#F8F8F8]">Hermoso en cualquier dispositivo</h2>
              <p className="text-xl text-[#C5C5C5] mb-8 leading-relaxed">
              Desde el móvil hasta el escritorio, tu página se adapta a ti. Carga rápida, diseño responsive y estilo profesional sin esfuerzo
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#24E8A5]/20 to-[#24E8A5]/5 rounded-lg flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#24E8A5]" />
                  </div>
                  <span className="text-[#C5C5C5] text-lg">Optimizado para móviles</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#24E8A5]/20 to-[#24E8A5]/5 rounded-lg flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#24E8A5]" />
                  </div>
                  <span className="text-[#C5C5C5] text-lg">Carga en menos de 2 segundos</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#24E8A5]/20 to-[#24E8A5]/5 rounded-lg flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#24E8A5]" />
                  </div>
                  <span className="text-[#C5C5C5] text-lg">SEO optimizado automáticamente</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-[320px] h-[640px] bg-gradient-to-br from-[#1A1A23] to-[#0A0A0F] rounded-[3rem] p-3 shadow-2xl shadow-[#FF2E63]/20 border border-[#FF2E63]/10">
                  <div className="w-full h-full bg-gradient-to-br from-[#0A0A0F] to-[#1A1A23] rounded-[2.5rem] overflow-hidden">
                    <div className="p-6 space-y-6">
                      {/* Profile Header */}
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-[#FF2E63] to-[#24E8A5] rounded-full mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl">🎨</span>
                        </div>
                        <h3 className="text-[#F8F8F8] font-bold text-lg">@maria_designs</h3>
                        <p className="text-[#C5C5C5] text-sm mt-1">Diseñadora UI/UX • Creadora de contenido</p>
                      </div>

                      {/* Social Icons */}
                      <div className="flex justify-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#FF2E63]/20 to-[#FF2E63]/5 rounded-xl border border-[#FF2E63]/20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <Instagram className="w-6 h-6 text-[#FF2E63]" />
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-[#24E8A5]/20 to-[#24E8A5]/5 rounded-xl border border-[#24E8A5]/20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <Youtube className="w-6 h-6 text-[#24E8A5]" />
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-[#F8F8F8]/20 to-[#F8F8F8]/5 rounded-xl border border-[#F8F8F8]/20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <Twitter className="w-6 h-6 text-[#F8F8F8]" />
                        </div>
                      </div>

                      {/* Links */}
                      <div className="space-y-3">
                        <div className="h-14 bg-gradient-to-br from-[#FF2E63]/10 to-[#FF2E63]/5 rounded-2xl border border-[#FF2E63]/20 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                          <span className="text-[#F8F8F8] font-medium">🎨 Mi Portfolio</span>
                        </div>
                        <div className="h-14 bg-gradient-to-br from-[#24E8A5]/10 to-[#24E8A5]/5 rounded-2xl border border-[#24E8A5]/20 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                          <span className="text-[#F8F8F8] font-medium">📚 Curso de Diseño</span>
                        </div>
                        <div className="h-14 bg-gradient-to-br from-[#F8F8F8]/10 to-[#F8F8F8]/5 rounded-2xl border border-[#F8F8F8]/20 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                          <span className="text-[#F8F8F8] font-medium">☕ Invítame un café</span>
                        </div>
                      </div>

                      {/* Contact Button */}
                      <div className="pt-2">
                        <button className="w-full h-12 bg-gradient-to-r from-[#FF2E63] to-[#24E8A5] rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
                          <span className="text-white font-semibold">💬 Contáctame</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#24E8A5] to-[#24E8A5]/80 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#FF2E63] to-[#FF2E63]/80 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Precios */}
      <section id="pricing" className="px-4 py-20 bg-[#0F0F14]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F8F8F8]">Escoge el plan perfecto para tu presencia digital</h2>
            <p className="text-xl text-[#C5C5C5] max-w-3xl mx-auto">
            Desde el primer clic ya estás listo para compartir. Cuando necesites más, tenemos opciones potentes que te acompañan.                        </p>
          </div>

          <div className="grid md:grid-cols-3 ml-[1%] gap-9 max-w-[100%] mx-auto">
            {/* Plan Gratis */}
            <div className="bg-[#1A1A23]/60 backdrop-blur-xl border border-[#F8F8F8]/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#F8F8F8] mb-4">Gratis</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-[#F8F8F8]">$0</span>
                  <span className="text-[#C5C5C5] ml-2">/mes</span>
                </div>
                <p className="text-[#C5C5C5]">Perfecto para empezar tu presencia digital</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Links ilimitados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">5 plantillas visuales básicas

</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Subdominio gratuito</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Botón de contacto o redirección</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Estadísticas simples</span>
                </div>
              </div>

              <button className="w-full h-12 bg-[#1A1A23] border border-[#F8F8F8]/20 text-[#F8F8F8] rounded-xl hover:bg-[#1A1A23]/80 transition-all duration-300">
                Empezar gratis
              </button>
            </div>

            {/* Plan Pro */}
            <div className="bg-[#1A1A23]/60 backdrop-blur-xl border border-[#FF2E63]/20 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 relative">

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#F8F8F8] mb-4">Pro</h3>
                <div className="absolute -top-4 right-8 px-4 mt-8 py-1 bg-gradient-to-r from-[#FF2E63] to-[#24E8A5] rounded-full">
                <span className="text-sm font-semibold text-white">Buena opcion</span>
              </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-[#F8F8F8]">$5.70</span>
                  <span className="text-[#C5C5C5] ml-2">/mes</span>
                </div>
                <p className="text-[#C5C5C5]">Para creadores que quieren verse bien y destacar</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Todo lo anterior</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Inbox anónimo para mensajes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Plantillas premium exclusivas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Posibilidad de añadir videos, imágenes o bloques destacados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Íconos personalizados en tus enlaces</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Soporte técnico rápido</span>
                </div>
              </div>

              <button className="w-full h-12 bg-gradient-to-r from-[#FF2E63] to-[#24E8A5] text-white rounded-xl hover:opacity-90 transition-all duration-300">
                Comenzar prueba gratis
              </button>
            </div>
            <div className="bg-[#1A1A23]/60 backdrop-blur-xl border border-[#FF2E63]/20 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 relative">
              <div className="absolute -top-4 right-8 px-4 mt-8 py-1 bg-gradient-to-r from-[#FF2E63] to-[#24E8A5] rounded-full">
                <span className="text-sm font-semibold text-white">Más elegido</span>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#F8F8F8] mb-4">Plan Creator</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-[#F8F8F8]">$7</span>
                  <span className="text-[#C5C5C5] ml-2">/mes</span>
                </div>
                <p className="text-[#C5C5C5]">Ideal si estás empezando a monetizar y crecer en serio</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Todo lo del plan Pro</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Botón de apoyo con pago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Formulario para colaboraciones o solicitudes profesionales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#24E8A5]" />
                  <span className="text-[#C5C5C5]">Prioridad en lanzamientos de nuevas funciones</span>
                </div>
               
              </div>

              <button className="w-full h-12 bg-gradient-to-r from-[#FF2E63] to-[#24E8A5] text-white rounded-xl hover:opacity-90 transition-all duration-300">
                Comenzar prueba gratis
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* 7. Testimonios */}
      <section id="testimonials" className="px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F8F8F8]">Cientos de creadores ya confían en LinkBoost</h2>
            <p className="text-xl text-[#C5C5C5] max-w-3xl mx-auto">
            Y sus resultados hablan por sí solos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonio 1 */}
            <div className="bg-[#1A1A23]/60 backdrop-blur-xl border border-[#FF2E63]/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF2E63] to-[#24E8A5] rounded-full flex items-center justify-center">
                  <span className="text-xl">👩‍🎨</span>
                </div>
                <div>
                  <h4 className="text-[#F8F8F8] font-semibold">Ana García</h4>
                  <p className="text-[#C5C5C5] text-sm">Artista Digital</p>
                </div>
              </div>
              <p className="text-[#C5C5C5] leading-relaxed">
                "LinkBoost transformó mi presencia online. Mis seguidores ahora pueden encontrar todo mi contenido
                fácilmente y mis ventas se han multiplicado."
              </p>
              <div className="flex items-center mt-4">
                <Star className="w-5 h-5 text-[#24E8A5]" />
                <Star className="w-5 h-5 text-[#24E8A5]" />
                <Star className="w-5 h-5 text-[#24E8A5]" />
                <Star className="w-5 h-5 text-[#24E8A5]" />
                <Star className="w-5 h-5 text-[#24E8A5]" />
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-[#1A1A23]/60 backdrop-blur-xl border border-[#24E8A5]/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#24E8A5] to-[#FF2E63] rounded-full flex items-center justify-center">
                  <span className="text-xl">🎥</span>
                </div>
                <div>
                  <h4 className="text-[#F8F8F8] font-semibold">Carlos Ruiz</h4>
                  <p className="text-[#C5C5C5] text-sm">YouTuber</p>
                </div>
              </div>
              <p className="text-[#C5C5C5] leading-relaxed">
                "La mejor inversión para mi canal. El diseño es increíble y los analytics me ayudan a entender mejor a
                mi audiencia."
              </p>
              <div className="flex items-center mt-4">
                <Star className="w-5 h-5 text-[#24E8A5]" />
                <Star className="w-5 h-5 text-[#24E8A5]" />
                <Star className="w-5 h-5 text-[#24E8A5]" />
                <Star className="w-5 h-5 text-[#24E8A5]" />
                <Star className="w-5 h-5 text-[#24E8A5]" />
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-[#1A1A23]/60 backdrop-blur-xl border border-[#F8F8F8]/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F8F8F8] to-[#24E8A5] rounded-full flex items-center justify-center">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <h4 className="text-[#F8F8F8] font-semibold">Laura Torres</h4>
                  <p className="text-[#C5C5C5] text-sm">Coach de Negocios</p>
                </div>
              </div>
              <p className="text-[#C5C5C5] leading-relaxed">
                "Elegante, profesional y fácil de usar. Mis clientes adoran la experiencia y yo ahorro horas cada
                semana."
              </p>
              <div className="flex items-center mt-4">
                <Star className="w-5 h-5 text-[#24E8A5]" />
                <Star className="w-5 h-5 text-[#24E8A5]" />
                <Star className="w-5 h-5 text-[#24E8A5]" />
                <Star className="w-5 h-5 text-[#24E8A5]" />
                <Star className="w-5 h-5 text-[#24E8A5]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA Final */}
      <section className="px-4 py-20 bg-[#0F0F14]">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#F8F8F8]">
              ¿Listo para centralizar tu presencia digital?
            </h2>
            <p className="text-xl text-[#C5C5C5] mb-12">
            Cientos  de creadores ya tienen su página en LinkBoost. ¿Y tú?

</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-[#FF2E63] to-[#24E8A5] rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FF2E63]/25">
                <span className="flex items-center">
                Crea tu perfil en menos de 5 minutos
                </span>
              </button>
              
            </div>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="px-4 py-12 bg-[#0A0A0F] border-t border-[#1A1A23]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-gradient-to-r from-[#FF2E63] to-[#24E8A5] rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#FF2E63] to-[#24E8A5] bg-clip-text text-transparent">
                  LinkBoost
                </span>
              </div>
              <p className="text-[#C5C5C5]">
                Tu presencia digital, simplificada. Centraliza todos tus links en una página hermosa.
              </p>
            </div>

            <div>
              <h4 className="text-[#F8F8F8] font-semibold mb-4">Producto</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
                    Funciones
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
                    Testimonios
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
                    Guías
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#F8F8F8] font-semibold mb-4">Compañía</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
                    Sobre nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
                    Empleos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
                    Prensa
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#F8F8F8] font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#C5C5C5] hover:text-[#F8F8F8] transition-colors duration-300">
                    Licencias
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1A1A23] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#C5C5C5] text-sm">
              © 2024 LinkBoost. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A23]/60 hover:bg-[#1A1A23] rounded-xl flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5 text-[#C5C5C5]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A23]/60 hover:bg-[#1A1A23] rounded-xl flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5 text-[#C5C5C5]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A23]/60 hover:bg-[#1A1A23] rounded-xl flex items-center justify-center transition-colors duration-300"
              >
                <Youtube className="w-5 h-5 text-[#C5C5C5]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#1A1A23]/60 hover:bg-[#1A1A23] rounded-xl flex items-center justify-center transition-colors duration-300"
              >
                <Github className="w-5 h-5 text-[#C5C5C5]" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;