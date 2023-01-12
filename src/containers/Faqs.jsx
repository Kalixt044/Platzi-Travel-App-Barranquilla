import { Policy } from '../components/Policy'
import faqs from '../helpers/faqs.json'

const Faqs = () => {
  return (
    <div className="w-full h-auto dark:bg-gray-800" id="FAQS">
      <div className="w-full h-full px-6 pt-8">
        <p className="Section-title">FAQs</p>
        {faqs.map(faq => (
          <Policy key={faq.id} faq={faq.faq} answer={faq.answer} />
        ))}
      </div>
    </div>
  )
}

export { Faqs }