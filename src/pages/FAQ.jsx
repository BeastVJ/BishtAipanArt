import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AipanDivider from '../components/aipan/AipanDivider';
import SEO from '../components/SEO';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: 'What is Aipan art?', a: 'Aipan is a traditional ritual folk art from the Kumaon region of Uttarakhand. It is created using Geru (red clay) and rice paste on floors and walls during festivals and ceremonies.' },
        { q: 'Are your products authentic?', a: 'Yes! All our products are handcrafted by skilled Kumaoni artisans using traditional methods and natural materials. We work directly with artisans from villages across Uttarakhand.' },
        { q: 'How long does delivery take?', a: 'We dispatch orders within 3-5 business days. Delivery within India takes 5-10 business days via our shipping partners.' },
        { q: 'What is your return policy?', a: 'We accept returns within 7 days of delivery if the product is damaged or defective. Custom orders cannot be returned due to their personalized nature.' },
        { q: 'Do you ship internationally?', a: 'Yes, we ship worldwide. International shipping takes 10-20 business days and costs vary by destination.' },
        { q: 'Can I request a custom Aipan piece?', a: 'Yes! We specialize in custom Aipan artwork. Visit our Custom Order page to submit your requirements and our artisans will create a unique piece for you.' },
        { q: 'How do I take care of my Aipan art?', a: 'Keep your Aipan piece in a dry place away from direct sunlight. Dust gently with a soft brush or cloth. Avoid water and moisture.' },
        { q: 'Are your products GI-tagged?', a: 'Aipan art received the Geographical Indication (GI) tag in 2022. Our products are authentic representations of this heritage art form from Kumaon.' },
    ];

    return (
        <>
            <SEO title="FAQ" description="Frequently asked questions about BishtAipanArt" />
            <div className="pt-28 md:pt-32 section-padding">
                <div className="container-custom max-w-3xl">
                    <div className="text-center mb-12">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-geru-red mb-4">Frequently Asked Questions</h1>
                        <p className="text-gray-600">Everything you need to know about Aipan art and our products.</p>
                        <AipanDivider />
                    </div>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-gray-200">
                                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors">
                                    <span className="font-medium text-charcoal">{faq.q}</span>
                                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                                </button>
                                {openIndex === i && (
                                    <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;
