import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Committees = () => {
  const leaders = [
    {
      name: "Александр Григорьевич Мордкович",
      role: "Основатель семинара",
      period: "Руководит Семинаром с 1987 г. по настоящее время",
      sessions: "Председательствовал на заседаниях №№ 1–40",
      photo: "/committees/Mordkovich.png",
      link: "/leaders/mordkovich",
    },
    {
      name: "Александр Васильевич Ястребов",
      role: "Руководитель семинара",
      period: "Руководит Семинаром с 2022 г. по настоящее время",
      sessions: "Председательствовал на заседаниях №№ 41–44",
      photo: "/committees/Yastrebov.jpg",
      link: "/leaders/yastrebov",
    },
    {
      name: "Юрий Александрович Дробышев",
      subtitle: "(1955–2024 гг.)",
      role: "Руководитель семинара",
      period: "Руководил Семинаром в 2022–2023 гг.",
      sessions: "Председательствовал на заседании № 42",
      photo: "/committees/Drobyishev.jpg",
      link: "/leaders/drobyshev",
    },
    {
      name: "Ирина Евгеньевна Малова",
      role: "Руководитель семинара",
      period: "Руководит Семинаром с 2024 г. по настоящее время",
      sessions: "Председательствовала на заседаниях №№ 43–44",
      photo: "/committees/Malova.jpg",
      link: "/leaders/malova",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Галерея руководителей
          </h1>
          <div className="h-1 w-24 bg-blue-600 rounded"></div>
        </div>

        <Card className="p-6 mb-12 border border-gray-200 shadow-sm">
          <p className="text-gray-700 leading-relaxed">
            Познакомьтесь с руководителями Международного семинара по математическому и информационному образованию А. Г. Мордковича.
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader) => (
            <Card
              key={leader.name}
              className="p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group h-full"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all">
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {leader.name}
                </h3>
                {leader.subtitle && (
                  <p className="text-gray-500 text-sm mb-1">{leader.subtitle}</p>
                )}
                <p className="text-blue-600 font-semibold mb-2">
                  {leader.role}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  {leader.period}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  {leader.sessions}
                </p>

                {leader.link && (
                  <Link to={leader.link}>
                    <Button variant="outline" size="sm" className="mt-2">
                      Руководитель о себе
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committees;