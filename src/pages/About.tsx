import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Calendar, MapPin, Target, BookOpen, Award } from "lucide-react";
import { PageHero, SectionCard, Timeline, NumberedList, TagCloud } from "@/components/common";

const About = () => {
  const milestones = [
    { year: 1987, event: "Первый семинар в Москве — рождение традиции" },
    { year: 2000, event: "Семинар, посвящённый 60-летию А. Г. Мордковича, — 19 заседаний за 13 лет" },
    { year: 2010, event: "Семинар становится международным" },
    { year: 2022, event: "Новые лица в руководстве — сохранение и развитие традиций семинара" },
    { year: 2026, event: "45-й семинар в Самаре — 40 лет истории" },
  ];

  const cities = [
    "Москва", "Санкт-Петербург", "Казань", "Екатеринбург", "Самара", 
    "Пермь", "Киров", "Брянск", "Калуга", "Тверь", "Ярославль",
    "Барнаул", "Улан-Удэ", "Красноярск", "Тобольск", "Елабуга",
    "Набережные Челны", "Ульяновск", "Смоленск", "Сыктывкар", "Минск",
    "Саратов", "Челябинск", "Вологда", "Новгород", "Орск",
    "Липецк", "Коломна", "Чебоксары", "Рязань"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHero 
          title="О семинаре"
          subtitle="Международный семинар по математическому и информационному образованию А. Г. Мордковича"
        />

        <div className="space-y-8">
          <SectionCard
            icon={BookOpen}
            iconColor="blue"
            title="История возникновения"
            subtitle="С 1987 года и до наших дней"
          >
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Международный семинар преподавателей математики вузов был основан в <strong>1987 году</strong> по 
                инициативе <strong>Александра Григорьевича Мордковича</strong> — выдающегося математика, педагога 
                и автора многочисленных учебников по математике.
              </p>
              <p>
                Первый семинар состоялся в Москве и был посвящён концепции профессионально-педагогической 
                направленности математической подготовки учителя математики в педвузах. С тех пор семинар 
                стал традиционным. Он собирается ежегодно и объединяет преподавателей математики и информатики 
                со всей России и ближнего зарубежья.
              </p>
              <p>
                За <strong>39 лет</strong> было проведено <strong>44 семинара</strong> в 
                <strong>30 городах</strong>. Каждый семинар посвящён актуальной теме математического 
                или информационного образования и собирает десятки специалистов для обмена опытом и идеями.
              </p>
            </div>
          </SectionCard>

          <SectionCard
            icon={Calendar}
            iconColor="purple"
            title="Ключевые вехи"
            subtitle="Важные моменты в истории семинара"
          >
            <Timeline items={milestones} />
          </SectionCard>

          <SectionCard
            icon={Target}
            iconColor="green"
            title="Цели и задачи"
            subtitle="Что объединяет участников семинара"
          >
            <NumberedList
              items={[
                "Обсуждение актуальных проблем преподавания математики и информатики в школе и вузе",
                "Обмен опытом и передовыми методиками обучения",
                "Содействие развитию математического и информационного образования в России и за рубежом",
                "Поддержка молодых преподавателей и исследователей",
                "Формирование единого методического пространства",
                "Публикация научно-методических материалов и сборников",
              ]}
            />
          </SectionCard>

          <SectionCard
            icon={Users}
            iconColor="orange"
            title="Участники семинара"
            subtitle="Кто приезжает на наши встречи"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Профессиональный состав
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    Преподаватели математики и информатики педагогических вузов, классических и специализированных университетов
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    Методисты и исследователи
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    Аспиранты и докторанты
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    Учителя школ и преподаватели колледжей
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    Работники системы повышения квалификации
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  География участников
                </h3>
                <p className="text-gray-700 mb-3">
                  Семинар объединяет специалистов из России, Беларуси, Казахстана 
                  и других стран СНГ.
                </p>
                <p className="text-sm text-gray-600">
                  Ежегодно семинар проходит в новом городе, что позволяет участникам 
                  знакомиться с различными научными школами.
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard
            icon={MapPin}
            iconColor="red"
            title="География семинара"
            subtitle="30 городов, принимавших семинар"
          >
            <TagCloud tags={cities}/>
          </SectionCard>

          <div className="text-center pt-8">
            <p className="text-gray-600 mb-6">
              Узнайте больше о миссии и руководителях семинара
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mission">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                  Миссия семинара
                </Button>
              </Link>
              <Link to="/committees">
                <Button variant="outline" className="px-8">
                  Руководители
                </Button>
              </Link>
              <Link to="/archive">
                <Button variant="outline" className="px-8">
                  Архив семинаров
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
