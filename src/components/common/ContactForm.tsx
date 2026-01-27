import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MessageSquare, Send } from "lucide-react";

/**
 * Пропсы компонента ContactForm
 * 
 * @property onSubmit - Колбэк при отправке формы
 */
interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

/**
 * Данные формы обратной связи
 * 
 * @property name - Имя отправителя
 * @property email - Email
 * @property organization - Организация
 * @property subject - Тема сообщения
 * @property message - Текст сообщения
 */
export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

/**
 * Форма обратной связи
 * 
 * @description Полная форма с полями: имя, email, организация,
 * тема и сообщение. После отправки показывает сообщение
 * об успехе на 5 секунд.
 * 
 * @example
 * ```tsx
 * <ContactForm
 *   onSubmit={(data) => console.log(data)}
 * />
 * ```
 * 
 * @used-in Contact (страница контактов)
 */
export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 border border-gray-200 shadow-sm">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">
            Сообщение отправлено!
          </h3>
          <p className="text-green-700">
            Спасибо за ваше обращение. Мы свяжемся с вами в ближайшее время.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
        <MessageSquare className="w-6 h-6 mr-3 text-blue-600" />
        Напишите нам
      </h2>
      <p className="text-gray-600 mb-6">
        Задайте вопрос, предложите тему для обсуждения или выразите желание
        участвовать в семинаре
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Ваше имя <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Иванов Иван Иванович"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="ivanov@university.edu"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="organization"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Организация
          </label>
          <Input
            id="organization"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Название вуза или организации"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Тема обращения <span className="text-red-500">*</span>
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Например: Участие в семинаре 2026"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Сообщение <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Опишите ваш вопрос или предложение..."
            className="min-h-[150px]"
          />
        </div>

        <div className="flex items-center justify-between pt-4">
          <p className="text-sm text-gray-500">
            <span className="text-red-500">*</span> — обязательные поля
          </p>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-8">
            <Send className="w-4 h-4 mr-2" />
            Отправить
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;
