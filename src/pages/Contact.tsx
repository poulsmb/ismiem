import { Card } from "@/components/ui/card";
import { Users, Mail, Globe, BookOpen, Calendar, MapPin, Archive, Bell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/common";

const Contact = () => {
    const leaders = [
        {
            name: "Ястребов Александр Васильевич",
            role: "Руководитель семинара",
            period: "с 2022 года",
        },
        {
            name: "Малова Ирина Евгеньевна",
            role: "Руководитель семинара",
            period: "с 2024 года",
        },
    ];

    const faqItems = [
        {
            question: "Как принять участие в семинаре?",
            answer: "Следите за объявлениями на сайте. Информация о регистрации публикуется за несколько месяцев до проведения семинара."
        },
        {
            question: "Можно ли участвовать дистанционно?",
            answer: "Формат участия определяется организаторами каждого конкретного семинара. Уточняйте информацию в объявлении о семинаре."
        },
        {
            question: "Как опубликовать материалы?",
            answer: "По итогам каждого семинара издаётся сборник материалов. Требования к оформлению публикуются вместе с информационным письмом."
        }
    ];

    const contactEmail = "contact@ismiem.org";

    const nextSeminar = {
        number: 45,
        year: 2026,
        city: "Самара",
        theme: "Цифровая трансформация образования: развитие традиций и новые возможности в обучении математике и информатике",
        date: "1–3 октября 2026 года",
        status: "Планируется"
    };

    const quickLinks = [
        { label: "Архив семинаров", href: "/archive", icon: Archive },
        { label: "О семинаре", href: "/about", icon: BookOpen },
        { label: "Объявления", href: "/announcements", icon: Bell },
        { label: "Руководители", href: "/committees", icon: Users },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <PageHero
                    title="Обратная связь"
                    description="Свяжитесь с организаторами семинара"
                />
                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="p-6 border border-gray-200 shadow-sm">
                            <div className="flex items-center mb-4">
                                <Users className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-lg font-bold text-gray-900">Руководители</h3>
                            </div>
                            <div className="space-y-4">
                                {leaders.map((leader, index) => (
                                    <div key={index} className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                                        <p className="font-semibold text-gray-900">{leader.name}</p>
                                        <p className="text-sm text-gray-600">{leader.role}</p>
                                        <p className="text-xs text-blue-600">{leader.period}</p>
                                    </div>
                                ))}
                            </div>
                            <Link to="/committees" className="block mt-4">
                                <Button variant="outline" className="w-full text-sm">
                                    Все руководители →
                                </Button>
                            </Link>
                        </Card>

                        <Card className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-4">
                                <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-lg font-bold text-gray-900">Материалы</h3>
                            </div>
                            <p className="text-gray-700 mb-3">
                                <span className="block text-sm text-gray-600 mb-2">
                                    Все сборники и публикации доступны на портале:
                                </span>
                            </p>
                            <a
                                href="https://www.mathedu.ru/catalogue/collections/groups/#materialy_seminara_prepodavateley_matematiki_vuzov"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                            >
                                mathedu.ru
                                <Globe className="w-4 h-4 ml-2" />
                            </a>
                        </Card>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <Card className="p-6 border-2 border-blue-200 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                                    <h3 className="text-lg font-bold text-gray-900">Ближайший семинар</h3>
                                </div>
                                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                                    {nextSeminar.status}
                                </span>
                            </div>
                            <div className="flex items-center gap-6 mb-3">
                                <span className="text-3xl font-bold text-blue-600">№{nextSeminar.number}</span>
                                <div>
                                    <p className="font-semibold text-gray-900">{nextSeminar.date}</p>
                                    <p className="text-sm text-gray-600 flex items-center">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        {nextSeminar.city}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm">
                                <strong>Тема:</strong> «{nextSeminar.theme}»
                            </p>
                        </Card>

                        <Card className="p-8 border border-gray-200 shadow-sm">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">Напишите нам</h2>
                                    <p className="text-gray-600">Свяжитесь с организаторами семинара</p>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-8 h-8 text-blue-600" />
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Для связи с организаторами семинара напишите на электронную почту:
                                </p>
                                <a 
                                    href={`mailto:${contactEmail}`}
                                    className="text-2xl md:text-3xl font-bold text-blue-600 hover:text-blue-800 transition-colors block mb-2"
                                >
                                    {contactEmail}
                                </a>
                                <p className="text-sm text-gray-500 mt-4">
                                    Мы ответим в течение нескольких рабочих дней
                                </p>
                            </div>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
