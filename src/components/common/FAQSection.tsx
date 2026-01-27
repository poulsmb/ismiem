import { Card } from "@/components/ui/card";

/**
 * Элемент FAQ
 * 
 * @property question - Вопрос
 * @property answer - Ответ
 */
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

/**
 * Секция часто задаваемых вопросов
 * 
 * @description Карточка со списком вопросов и ответов.
 * Заголовок настраиваемый.
 * 
 * @example
 * ```tsx
 * <FAQSection
 *   title="Частые вопросы"
 *   items={[
 *     { question: "Как участвовать?", answer: "Следите за анонсами" }
 *   ]}
 * />
 * ```
 * 
 * @used-in Contact (страница контактов)
 */
export const FAQSection = ({
  items,
  title = "Часто задаваемые вопросы",
}: FAQSectionProps) => {
  return (
    <Card className="p-6 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index}>
            <h4 className="font-semibold text-gray-800 mb-1">{item.question}</h4>
            <p className="text-gray-600 text-sm">{item.answer}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default FAQSection;
