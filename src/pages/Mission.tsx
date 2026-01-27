import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, Globe, Users, BookOpen, Heart } from "lucide-react";

const Mission = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Миссия семинара
                    </h1>
                    <div className="h-1 w-24 bg-blue-600 rounded"></div>
                    <p className="mt-6 text-xl text-gray-600">
                        Генерировать и поддерживать атмосферу, в которой всем членам педагогического сообщества было бы комфортно жить и дышать
                    </p>
                </div>

                <Card className="p-8 md:p-12 mb-8 border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Heart className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Дорогие друзья!</h2>
                        </div>
                    </div>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            Участники Семинара видят свою миссию в том, чтобы генерировать и поддерживать атмосферу,
                            в которой всем членам педагогического сообщества было бы комфортно жить и дышать. Её компонентами
                            служат <strong className="text-blue-600">любовь к математике</strong>, <strong className="text-blue-600">симпатия к студентам</strong>, <strong className="text-blue-600">уважение к коллегам</strong>,
                            <strong className="text-blue-600"> внимание к методике</strong>, реакция на то новое, что с неизбежностью приходит в процесс
                            передачи знаний от поколения к поколению.
                        </p>
                        <p>
                            Наш Семинар является площадкой для «социализации» новых идей. Впервые прозвучав на Семинаре,
                            научные идеи подвергаются <strong className="text-blue-600">благожелательному анализу</strong>, <strong className="text-blue-600">психологической поддержке</strong> и <strong className="text-blue-600">содержательному
                            улучшению</strong>. В результате идеи расцветают и начинают жить самостоятельной жизнью, а авторы этих
                            идей становятся серьёзными учёными.
                        </p>
                        <p>
                            Неявное, но важное свойство Семинара состоит в его <strong className="text-blue-600">Открытости</strong>. Базируясь в России,
                            он открыт для иностранных участников. Происходя преимущественно в европейской части страны,
                            он открыт для представителей самых отдалённых регионов. Ориентируясь на преподавателей университетов
                            и педагогических вузов, он открыт для всех коллег, преподающих математику и информатику.
                        </p>
                        <p className="text-xl font-semibold text-blue-600 text-center pt-6 border-t border-gray-100">
                            Присоединяйтесь к нам!
                        </p>
                    </div>
                </Card>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Принципы семинара</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-blue-200">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <Lightbulb className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Площадка для идей</h3>
                        <p className="text-gray-600">
                            Семинар — место, где новые научные идеи получают благожелательный анализ,
                            психологическую поддержку и содержательное улучшение.
                        </p>
                    </Card>

                    <Card className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-blue-200">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <Globe className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Открытость</h3>
                        <p className="text-gray-600">
                            Семинар открыт для иностранных участников, представителей всех регионов,
                            преподавателей математики и информатики.
                        </p>
                    </Card>

                    <Card className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-blue-200">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Сообщество</h3>
                        <p className="text-gray-600">
                            Комфортная атмосфера для всех членов педагогического сообщества,
                            основанная на уважении и взаимопомощи.
                        </p>
                    </Card>

                    <Card className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-blue-200">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <BookOpen className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Развитие</h3>
                        <p className="text-gray-600">
                            Авторы идей становятся серьёзными учёными, а их идеи расцветают
                            и начинают жить самостоятельной жизнью.
                        </p>
                    </Card>
                </div>

                <Card className="p-8 mt-8 border border-blue-200 shadow-sm bg-blue-50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Ценности семинара
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            "Любовь к математике",
                            "Симпатия к студентам",
                            "Уважение к коллегам",
                            "Внимание к методике",
                            "Открытость новому",
                        ].map((value, index) => (
                            <div key={index} className="flex items-center bg-white rounded-lg px-4 py-3 shadow-sm">
                                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700 font-medium">{value}</span>
                            </div>
                        ))}
                    </div>
                </Card>

                <div className="text-center pt-12">
                    <p className="text-gray-600 mb-6">
                        Узнайте больше о семинаре и его истории
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/about">
                            <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                                О семинаре
                            </Button>
                        </Link>
                        <Link to="/committees">
                            <Button variant="outline" className="px-8">
                                Руководители
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
