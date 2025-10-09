import { Calendar, MessageCircle, Users, TrendingUp, CheckCircle, ArrowRight, Bot, Zap, Clock, Shield } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const services = [
    {
      icon: Calendar,
      title: "Agente para Gestão de Agenda",
      description: "Automatize o agendamento de compromissos, reuniões e eventos com inteligência artificial avançada.",
      features: ["Agendamento automático", "Sincronização de calendários", "Lembretes inteligentes", "Reagendamento automático"]
    },
    {
      icon: MessageCircle,
      title: "Agente para Suporte",
      description: "Ofereça suporte 24/7 aos seus clientes com respostas precisas e resolução rápida de problemas.",
      features: ["Suporte 24/7", "Respostas instantâneas", "Escalação inteligente", "Base de conhecimento"]
    },
    {
      icon: Users,
      title: "Agente para Atendimento ao Público",
      description: "Melhore a experiência do cliente com atendimento personalizado e eficiente em todos os canais.",
      features: ["Atendimento multicanal", "Personalização avançada", "Análise de sentimento", "Histórico completo"]
    },
    {
      icon: TrendingUp,
      title: "Agente para Vendas",
      description: "Aumente suas conversões com um assistente de vendas que qualifica leads e fecha negócios.",
      features: ["Qualificação de leads", "Follow-up automático", "Análise de oportunidades", "Relatórios de vendas"]
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Eficiência Máxima",
      description: "Automatize tarefas repetitivas e foque no que realmente importa para seu negócio."
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "Seus agentes de IA trabalham sem parar, garantindo atendimento contínuo aos clientes."
    },
    {
      icon: Shield,
      title: "Segurança e Confiabilidade",
      description: "Tecnologia segura e confiável para proteger os dados da sua empresa e clientes."
    },
    {
      icon: Bot,
      title: "IA Avançada",
      description: "Utilizamos as mais modernas tecnologias de inteligência artificial para resultados superiores."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-900">Cobs Tech</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#servicos" className="text-gray-600 hover:text-orange-500 transition-colors">
                Serviços
              </Link>
              <Link href="#beneficios" className="text-gray-600 hover:text-orange-500 transition-colors">
                Benefícios
              </Link>
              <Link href="#contato" className="text-gray-600 hover:text-orange-500 transition-colors">
                Contato
              </Link>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Começar Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-orange-100 text-orange-700 hover:bg-orange-100">
            🚀 Revolucione seu negócio com IA
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Automação Inteligente
            <span className="block text-orange-500">para seu Negócio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transforme sua empresa com agentes de IA especializados que automatizam processos, 
            melhoram o atendimento e aumentam suas vendas de forma inteligente e eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Ver Demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3"
              asChild
            >
              <a 
                href="https://wa.me/5511921148106?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20Cobs%20Tech" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Falar com Especialista
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-orange-500">Agentes de IA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções especializadas para cada área do seu negócio, 
              desenvolvidas com tecnologia de ponta em inteligência artificial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-base mt-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">
                    Saiba Mais
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher nossa <span className="text-orange-500">Automação com IA?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Benefícios comprovados que transformam a forma como sua empresa opera e se relaciona com os clientes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-orange-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Revolucionar seu Negócio?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossos agentes de IA 
            podem transformar sua empresa e aumentar seus resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3">
              Solicitar Demonstração
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-orange-600 px-8 py-3"
              asChild
            >
              <a 
                href="https://wa.me/5511921148106?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20Cobs%20Tech" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Falar com Consultor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold text-white">Cobs Tech</span>
              </div>
              <p className="text-gray-400">
                Transformando negócios com inteligência artificial avançada e automação inteligente.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Agente para Gestão de Agenda</li>
                <li>Agente para Suporte</li>
                <li>Agente para Atendimento</li>
                <li>Agente para Vendas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>(11) 92114-8106</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Cobs Tech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
