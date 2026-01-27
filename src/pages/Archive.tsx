import { Card } from "@/components/ui/card";
import { FileText, MapPin, Calendar, ExternalLink, Image, Download } from "lucide-react";
import { useState } from "react";
import { PageHero, InfoBanner } from "@/components/common";

const Archive = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    const seminars = [
        { number: 44, year: 2025, city: "Минск", theme: "Творчество студентов и школьников в области математики и информатики и методы его развития", photos: ["/seminar-photos/minsk-2025.jpg", "/seminar-photos/minsk-2025-1.jpg", "/seminar-photos/minsk-2025-2.jpg"], collection: "/sbornik-2025.pdf" },
        { number: 43, year: 2024, city: "Сыктывкар", theme: "Математическая подготовка в школе и вузе: содержание и технологии", photos: ["/seminar-photos/syktyvkar-2024.jpg"], collection: "https://www.mathedu.ru/text/materialy_43_seminara_prepodavateley_matematiki_2024/p0/" },
        { number: 42, year: 2023, city: "Смоленск", theme: "Математика и математическое образование: проблемы, технологии, перспективы", photos: ["/seminar-photos/smolensk-2023.jpg"] },
        { number: 41, year: 2022, city: "Киров", theme: "Математика и проблемы образования", photos: [] },
        { number: 40, year: 2021, city: "Брянск", theme: "Современные подходы к оценке и качеству математического образования в школе и вузе", photos: ["/seminar-photos/bryansk-2021.jpg", "/seminar-photos/bryansk-2021-2.jpg"] },
        { number: 39, year: 2020, city: "Москва", theme: "Математика – основа компетенций цифровой эры", photos: ["/seminar-photos/moscow-2020.jpg"] },
        { number: 38, year: 2019, city: "Самара", theme: "Математическое образование в цифровом обществе", photos: ["/seminar-photos/samara-2019.jpg"] },
        { number: 37, year: 2018, city: "Наб. Челны", theme: "Российское математическое образование в XXI веке", photos: ["/seminar-photos/naberezhnye-chelny-2018.jpg"] },
        { number: 36, year: 2017, city: "Казань", theme: "Н.И. Лобачевский и математическое образование в России", photos: ["/seminar-photos/kazan-2017.jpg"] },
        { number: 35, year: 2016, city: "Ульяновск", theme: "Стандартизация математического образования: проблемы внедрения и оценка эффективности", photos: ["/seminar-photos/ulyanovsk-2016.jpg"] },
        { number: 34, year: 2015, city: "Калуга", theme: "Концепция развития математического образования: проблемы и пути реализации" },
        { number: 33, year: 2014, city: "Киров", theme: "Тенденции и перспективы развития математического образования" },
        { number: 32, year: 2013, city: "Екатеринбург", theme: "Современные подходы к оценке и качеству математического образования в школе и вузе" },
        { number: 31, year: 2012, city: "Тобольск", theme: "Проблемы преподавания математики в школе и вузе в условиях реализация новых образовательных стандартов" },
        { number: 30, year: 2011, city: "Елабуга", theme: "Инновационные технологии обучения математике в школе и вузе" },
        { number: 29, year: 2010, city: "Москва", theme: "Профессионально-педагогическая направленность математической подготовки учителя математики в педвузах и университетах в современных условиях" },
        { number: 28, year: 2009, city: "Екатеринбург", theme: "Проблемы преемственности в обучении математике на уровне общего и профессионального образования" },
        { number: 27, year: 2008, city: "Пермь", theme: "Проблемы многоуровневой подготовки учителей математики для современной школы" },
        { number: 26, year: 2007, city: "Самара", theme: "Новые средства и технологии обучения математике в школе и вузе" },
        { number: 25, year: 2006, city: "Киров", theme: "Проблемы подготовки учителя математики к преподаванию в профильных классах" },
        { number: 24, year: 2005, city: "Саратов", theme: "Современные проблемы школьного и вузовского математического образования" },
        { number: 23, year: 2004, city: "Челябинск", theme: "Актуальные проблемы преподавания математики в педагогических вузах и средней школе" },
        { number: 22, year: 2003, city: "Тверь", theme: "Математическая и методическая подготовка студентов педвузов и университетов в условиях модернизации системы образования" },
        { number: 21, year: 2002, city: "С.-Петербург", theme: "Модернизация школьного математического образования и проблемы подготовки учителя математики" },
        { number: 20, year: 2001, city: "Вологда", theme: "Формирование духовной культуры личности в процессе обучения математике в школе и вузе" },
        { number: 19, year: 2000, city: "Москва", theme: "Профессионально-педагогическая направленность математической подготовки будущих учителей математики в педвузах: прошлое, настоящее, будущее" },
        { number: 18, year: 1999, city: "Брянск", theme: "Содержание и методы обучения математике в школе и в вузе на рубеже столетий: исторический и методологический аспекты" },
        { number: 17, year: 1998, city: "Калуга", theme: "Подготовка будущего учителя к работе в классах с углубленным изучением математики" },
        { number: 16, year: 1997, city: "Новгород", theme: "Математика в вузе и школе: обучение и развитие" },
        { number: 15, year: 1996, city: "С.-Петербург", theme: "Гуманитарный потенциал математического образования в школе и педвузе" },
        { number: 14, year: 1995, city: "Орск", theme: "Проблема стандарта подготовки учителей математики в педагогических вузах" },
        { number: 13, year: 1994, city: "Елабуга", theme: "Подготовка учителя математики в условиях профильной и уровневой дифференциации обучения в школах" },
        { number: 12, year: 1993, city: "Липецк", theme: "Проблемы двухступенчатой подготовки учителя математики в педвузе" },
        { number: 11, year: 1992, city: "Коломна", theme: "Внутрипредметные связи математических курсов пединститутов" },
        { number: 10, year: 1992, city: "Чебоксары", theme: "Курс элементарной математики и состояние подготовки учителей" },
        { number: 9, year: 1991, city: "Рязань", theme: "Проблемы учебно-методического обеспечения учебного процесса" },
        { number: 8, year: 1991, city: "Ульяновск", theme: "Психолого-педагогические основы преподавания математических дисциплин в педагогическом институте. Обучение и развитие" },
        { number: 7, year: 1990, city: "Барнаул", theme: "Профессионально-педагогическая направленность математической подготовки будущего учителя" },
        { number: 6, year: 1990, city: "Ярославль", theme: "Межпредметные связи математических курсов в педвузах" },
        { number: 5, year: 1989, city: "Казань", theme: "Вопросы организации самостоятельной работы студентов педвузов" },
        { number: 4, year: 1989, city: "Улан-Удэ", theme: "Формирование математической культуры будущих учителей" },
        { number: 3, year: 1988, city: "Пермь", theme: "Проблемы внеаудиторных занятий по математике в педвузах" },
        { number: 2, year: 1988, city: "Красноярск", theme: "Прикладная направленность математической подготовки учителя математики в педвузах" },
        { number: 1, year: 1987, city: "Москва", theme: "Концепция профессионально-педагогической направленности математической подготовки учителя математики в педвузах" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <PageHero
                    title="Архив семинаров"
                    description={`История семинара с 1987 года — ${seminars.length} заседаний в ${new Set(seminars.map(s => s.city)).size} городах`}
                />

                <div className="space-y-4">
                    <InfoBanner
                        title="Полная коллекция материалов"
                    >
                        <p className="text-gray-700 mb-4">
                            Все материалы семинаров размещены в каталоге на портале:
                        </p>
                        <a
                            href="https://www.mathedu.ru/catalogue/collections/groups/#materialy_seminara_prepodavateley_matematiki_vuzov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                        >
                            Перейти к коллекции
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                    </InfoBanner>
                    {seminars.map((seminar) => (
                        <Card
                            key={seminar.number}
                            className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
                                                {seminar.number}
                                            </span>
                                            <div className="flex items-center gap-4 text-gray-600 text-sm">
                                                <span className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    {seminar.year}
                                                </span>
                                                <span className="flex items-center">
                                                    <MapPin className="w-4 h-4 mr-1" />
                                                    {seminar.city}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-gray-800 font-medium max-w-2xl">
                                            {seminar.theme}
                                        </p>
                                    </div>

                                    <div className="flex gap-2 flex-wrap">
                                        {seminar.collection && (
                                            <a
                                                href={seminar.collection}
                                                target={seminar.collection.startsWith('http') ? '_blank' : undefined}
                                                rel={seminar.collection.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                download={seminar.collection.startsWith('/') ? true : undefined}
                                                className="inline-flex items-center bg-green-50 hover:bg-green-100 text-green-700 px-4 py-2 rounded-lg transition-colors border border-green-200 text-sm font-medium"
                                            >
                                                {seminar.collection.startsWith('/') ? (
                                                    <>
                                                        <Download className="w-4 h-4 mr-2" />
                                                        Скачать сборник
                                                    </>
                                                ) : (
                                                    <>
                                                        <FileText className="w-4 h-4 mr-2" />
                                                        Сборник материалов
                                                        <ExternalLink className="w-3 h-3 ml-2" />
                                                    </>
                                                )}
                                            </a>
                                        )}
                                        {seminar.photos && seminar.photos.length > 0 && (
                                            <span className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-2 rounded-lg border border-blue-200 text-sm">
                                                <Image className="w-4 h-4 mr-1" />
                                                {seminar.photos.length} фото
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {seminar.photos && seminar.photos.length > 0 && (
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2">
                                        {seminar.photos.map((photo, idx) => (
                                            <div
                                                key={idx}
                                                className="aspect-video rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-sm"
                                                onClick={() => setSelectedPhoto(photo)}
                                            >
                                                <img
                                                    src={photo}
                                                    alt={`${seminar.city} ${seminar.year}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {selectedPhoto && (
                <div
                    className="fixed inset-0 bg-black/80 cursor-pointer z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div className="max-w-5xl max-h-[90vh] relative cursor-default">
                        <img
                            src={selectedPhoto}
                            alt="Фото семинара"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 w-8 h-8 flex justify-center items-center bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Archive;
