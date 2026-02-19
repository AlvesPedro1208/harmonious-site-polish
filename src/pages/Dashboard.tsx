import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { TrendingUp, TrendingDown, Users, Eye, MousePointerClick, DollarSign, BarChart3, Activity } from "lucide-react";

const trafficData = [
  { month: "Jan", organico: 4200, pago: 2400, social: 1800, direto: 900 },
  { month: "Fev", organico: 4800, pago: 2800, social: 2100, direto: 1100 },
  { month: "Mar", organico: 5200, pago: 3600, social: 2600, direto: 1300 },
  { month: "Abr", organico: 5800, pago: 4200, social: 2900, direto: 1500 },
  { month: "Mai", organico: 6400, pago: 4800, social: 3400, direto: 1700 },
  { month: "Jun", organico: 7200, pago: 5400, social: 3800, direto: 2000 },
  { month: "Jul", organico: 7800, pago: 5200, social: 4200, direto: 2200 },
  { month: "Ago", organico: 8400, pago: 6100, social: 4600, direto: 2400 },
];

const campaignData = [
  { name: "Google Ads", impressoes: 124000, cliques: 8200, conversoes: 420, ctr: 6.6, cpc: 2.4 },
  { name: "Meta Ads", impressoes: 98000, cliques: 5600, conversoes: 310, ctr: 5.7, cpc: 1.8 },
  { name: "TikTok Ads", impressoes: 210000, cliques: 12400, conversoes: 580, ctr: 5.9, cpc: 1.2 },
  { name: "YouTube", impressoes: 67000, cliques: 3200, conversoes: 180, ctr: 4.8, cpc: 3.1 },
];

const conversionFunnel = [
  { stage: "Impressões", value: 499000 },
  { stage: "Cliques", value: 29400 },
  { stage: "Visitas", value: 22100 },
  { stage: "Leads", value: 3200 },
  { stage: "Conversões", value: 1490 },
];

const channelDistribution = [
  { name: "Google Ads", value: 35, color: "hsl(243 80% 35%)" },
  { name: "Meta Ads", value: 28, color: "hsl(168 100% 40%)" },
  { name: "TikTok Ads", value: 22, color: "hsl(200 80% 50%)" },
  { name: "YouTube", value: 15, color: "hsl(243 60% 55%)" },
];

const dailyPerformance = [
  { dia: "Seg", sessoes: 1200, leads: 45, custo: 320 },
  { dia: "Ter", sessoes: 1400, leads: 52, custo: 380 },
  { dia: "Qua", sessoes: 1100, leads: 38, custo: 290 },
  { dia: "Qui", sessoes: 1600, leads: 61, custo: 420 },
  { dia: "Sex", sessoes: 1800, leads: 72, custo: 480 },
  { dia: "Sáb", sessoes: 900, leads: 28, custo: 210 },
  { dia: "Dom", sessoes: 700, leads: 22, custo: 160 },
];

const kpis = [
  { label: "Sessões Totais", value: "42.8K", change: "+12.4%", positive: true, icon: Users },
  { label: "Impressões", value: "499K", change: "+18.7%", positive: true, icon: Eye },
  { label: "Taxa de Cliques (CTR)", value: "5.89%", change: "+0.8%", positive: true, icon: MousePointerClick },
  { label: "Custo por Lead", value: "R$ 8,42", change: "-14.2%", positive: true, icon: DollarSign },
  { label: "Conversões", value: "1.490", change: "+22.1%", positive: true, icon: BarChart3 },
  { label: "ROAS", value: "4.2x", change: "+0.6x", positive: true, icon: Activity },
];

const periods = ["7 dias", "30 dias", "90 dias", "12 meses"];

const Dashboard = () => {
  const [activePeriod, setActivePeriod] = useState("30 dias");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-container py-8 md:py-12">
        {/* Page Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="font-display text-3xl md:text-4xl font-900 text-foreground mb-2">
            Dashboard de Marketing
          </h1>
          <p className="text-muted-foreground font-body text-base md:text-lg">
            Acompanhe as métricas de performance das suas campanhas em tempo real.
          </p>
        </div>

        {/* Period Filter */}
        <div className="flex gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.05s" }}>
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setActivePeriod(p)}
              className={`px-4 py-2 rounded-full text-sm font-medium font-body transition-all duration-300 ${
                activePeriod === p
                  ? "gradient-cta text-accent-foreground btn-shadow scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {kpis.map((kpi, i) => (
            <Card
              key={kpi.label}
              className="card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1 animate-fade-in border-border/50 overflow-hidden group"
              style={{ animationDelay: `${0.08 * (i + 1)}s` }}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <kpi.icon className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors duration-300" />
                  <span className={`text-xs font-medium flex items-center gap-0.5 ${kpi.positive ? "text-secondary" : "text-destructive"}`}>
                    {kpi.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {kpi.change}
                  </span>
                </div>
                <p className="text-2xl font-display font-900 text-foreground">{kpi.value}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">{kpi.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Charts Row */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Traffic Over Time - Large */}
          <Card className="lg:col-span-2 card-shadow hover:card-shadow-hover transition-all duration-500 animate-fade-in border-border/50" style={{ animationDelay: "0.3s" }}>
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-lg font-800 text-foreground">Tráfego por Canal</CardTitle>
              <p className="text-xs text-muted-foreground font-body">Evolução mensal de sessões por origem</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={trafficData}>
                  <defs>
                    <linearGradient id="gradOrganico" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(243 80% 35%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(243 80% 35%)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gradPago" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(168 100% 40%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(168 100% 40%)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gradSocial" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(200 80% 50%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(200 80% 50%)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gradDireto" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(243 60% 55%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(243 60% 55%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 20% 90%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(243 30% 50%)" }} />
                  <YAxis tick={{ fontSize: 12, fill: "hsl(243 30% 50%)" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(0 0% 100%)",
                      border: "1px solid hsl(240 20% 90%)",
                      borderRadius: "0.75rem",
                      boxShadow: "0 4px 24px -4px hsl(243 80% 20% / 0.08)",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 12,
                    }}
                  />
                  <Legend wrapperStyle={{ fontFamily: "Poppins, sans-serif", fontSize: 12 }} />
                  <Area type="monotone" dataKey="organico" name="Orgânico" stroke="hsl(243 80% 35%)" fill="url(#gradOrganico)" strokeWidth={2} animationDuration={1500} />
                  <Area type="monotone" dataKey="pago" name="Pago" stroke="hsl(168 100% 40%)" fill="url(#gradPago)" strokeWidth={2} animationDuration={1800} />
                  <Area type="monotone" dataKey="social" name="Social" stroke="hsl(200 80% 50%)" fill="url(#gradSocial)" strokeWidth={2} animationDuration={2100} />
                  <Area type="monotone" dataKey="direto" name="Direto" stroke="hsl(243 60% 55%)" fill="url(#gradDireto)" strokeWidth={2} animationDuration={2400} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Channel Distribution - Pie */}
          <Card className="card-shadow hover:card-shadow-hover transition-all duration-500 animate-fade-in border-border/50" style={{ animationDelay: "0.4s" }}>
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-lg font-800 text-foreground">Distribuição de Investimento</CardTitle>
              <p className="text-xs text-muted-foreground font-body">Por canal de mídia</p>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    data={channelDistribution}
                    cx="50%" cy="50%"
                    innerRadius={55} outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                    animationBegin={400}
                    animationDuration={1500}
                  >
                    {channelDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => `${value}%`}
                    contentStyle={{
                      backgroundColor: "hsl(0 0% 100%)",
                      border: "1px solid hsl(240 20% 90%)",
                      borderRadius: "0.75rem",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 12,
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-2 w-full">
                {channelDistribution.map((ch) => (
                  <div key={ch.name} className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: ch.color }} />
                    {ch.name} ({ch.value}%)
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Campaign Performance - Bar Chart */}
          <Card className="card-shadow hover:card-shadow-hover transition-all duration-500 animate-fade-in border-border/50" style={{ animationDelay: "0.5s" }}>
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-lg font-800 text-foreground">Performance por Campanha</CardTitle>
              <p className="text-xs text-muted-foreground font-body">Cliques e conversões por plataforma</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={campaignData} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 20% 90%)" />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(243 30% 50%)" }} />
                  <YAxis tick={{ fontSize: 11, fill: "hsl(243 30% 50%)" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(0 0% 100%)",
                      border: "1px solid hsl(240 20% 90%)",
                      borderRadius: "0.75rem",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 12,
                    }}
                  />
                  <Legend wrapperStyle={{ fontFamily: "Poppins, sans-serif", fontSize: 12 }} />
                  <Bar dataKey="cliques" name="Cliques" fill="hsl(243 80% 35%)" radius={[6, 6, 0, 0]} animationDuration={1200} />
                  <Bar dataKey="conversoes" name="Conversões" fill="hsl(168 100% 40%)" radius={[6, 6, 0, 0]} animationDuration={1500} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Daily Performance - Line Chart */}
          <Card className="card-shadow hover:card-shadow-hover transition-all duration-500 animate-fade-in border-border/50" style={{ animationDelay: "0.6s" }}>
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-lg font-800 text-foreground">Performance Diária</CardTitle>
              <p className="text-xs text-muted-foreground font-body">Sessões, leads e custo por dia da semana</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={dailyPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 20% 90%)" />
                  <XAxis dataKey="dia" tick={{ fontSize: 11, fill: "hsl(243 30% 50%)" }} />
                  <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "hsl(243 30% 50%)" }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: "hsl(243 30% 50%)" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(0 0% 100%)",
                      border: "1px solid hsl(240 20% 90%)",
                      borderRadius: "0.75rem",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: 12,
                    }}
                  />
                  <Legend wrapperStyle={{ fontFamily: "Poppins, sans-serif", fontSize: 12 }} />
                  <Line yAxisId="left" type="monotone" dataKey="sessoes" name="Sessões" stroke="hsl(243 80% 35%)" strokeWidth={2.5} dot={{ r: 4, fill: "hsl(243 80% 35%)" }} activeDot={{ r: 6 }} animationDuration={1500} />
                  <Line yAxisId="left" type="monotone" dataKey="leads" name="Leads" stroke="hsl(168 100% 40%)" strokeWidth={2.5} dot={{ r: 4, fill: "hsl(168 100% 40%)" }} activeDot={{ r: 6 }} animationDuration={1800} />
                  <Line yAxisId="right" type="monotone" dataKey="custo" name="Custo (R$)" stroke="hsl(200 80% 50%)" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 3 }} animationDuration={2100} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Conversion Funnel */}
        <Card className="card-shadow hover:card-shadow-hover transition-all duration-500 animate-fade-in border-border/50 mb-8" style={{ animationDelay: "0.7s" }}>
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg font-800 text-foreground">Funil de Conversão</CardTitle>
            <p className="text-xs text-muted-foreground font-body">Da impressão à conversão — jornada do usuário</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 py-4">
              {conversionFunnel.map((step, i) => {
                const widthPercent = 100 - i * 15;
                const convRate = i > 0 ? ((step.value / conversionFunnel[i - 1].value) * 100).toFixed(1) : null;
                return (
                  <div
                    key={step.stage}
                    className="flex flex-col items-center animate-fade-in group"
                    style={{ animationDelay: `${0.8 + i * 0.15}s`, width: "100%" }}
                  >
                    <div
                      className="rounded-xl py-4 px-3 text-center transition-all duration-500 hover:scale-105 cursor-default"
                      style={{
                        width: `${widthPercent}%`,
                        minWidth: "120px",
                        background: `linear-gradient(135deg, hsl(243 80% ${20 + i * 8}%) 0%, hsl(200 80% ${25 + i * 8}%) 100%)`,
                      }}
                    >
                      <p className="text-primary-foreground font-display font-900 text-xl md:text-2xl">
                        {step.value >= 1000 ? `${(step.value / 1000).toFixed(step.value >= 10000 ? 0 : 1)}K` : step.value}
                      </p>
                      <p className="text-primary-foreground/80 font-body text-xs mt-1">{step.stage}</p>
                    </div>
                    {convRate && (
                      <span className="text-xs text-muted-foreground font-body mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {convRate}% taxa
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Campaign Table */}
        <Card className="card-shadow hover:card-shadow-hover transition-all duration-500 animate-fade-in border-border/50" style={{ animationDelay: "0.9s" }}>
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-lg font-800 text-foreground">Detalhamento por Plataforma</CardTitle>
            <p className="text-xs text-muted-foreground font-body">Métricas detalhadas de cada canal de mídia</p>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Canal</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">Impressões</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">Cliques</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">CTR</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">CPC</th>
                  <th className="text-right py-3 px-4 text-muted-foreground font-medium">Conversões</th>
                </tr>
              </thead>
              <tbody>
                {campaignData.map((row, i) => (
                  <tr
                    key={row.name}
                    className="border-b border-border/50 hover:bg-muted/50 transition-colors duration-200 animate-fade-in"
                    style={{ animationDelay: `${1 + i * 0.1}s` }}
                  >
                    <td className="py-3 px-4 font-medium text-foreground">{row.name}</td>
                    <td className="text-right py-3 px-4 text-muted-foreground">{row.impressoes.toLocaleString("pt-BR")}</td>
                    <td className="text-right py-3 px-4 text-muted-foreground">{row.cliques.toLocaleString("pt-BR")}</td>
                    <td className="text-right py-3 px-4">
                      <span className="text-secondary font-medium">{row.ctr}%</span>
                    </td>
                    <td className="text-right py-3 px-4 text-muted-foreground">R$ {row.cpc.toFixed(2)}</td>
                    <td className="text-right py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-secondary font-medium">
                        <TrendingUp className="w-3 h-3" />
                        {row.conversoes}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
