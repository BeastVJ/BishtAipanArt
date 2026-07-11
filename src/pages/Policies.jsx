import { useParams, Link } from 'react-router-dom';
import AipanDivider from '../components/aipan/AipanDivider';
import SEO from '../components/SEO';

const Policies = () => {
    const { type } = useParams();

    const policies = {
        shipping: {
            title: 'Shipping Policy',
            content: `We ship across India and internationally. Orders are dispatched within 3-5 business days. Free shipping on orders above ₹1,000 within India. Standard shipping charges: ₹149 for orders below ₹1,000. International shipping charges vary by destination. Estimated delivery: 5-10 business days (India), 10-20 business days (International).`
        },
        returns: {
            title: 'Returns & Exchanges',
            content: `We accept returns within 7 days of delivery for damaged or defective items. Custom and personalized orders cannot be returned. Items must be unused and in original packaging. To initiate a return, contact us at vijaybishta2004@gmail.com with your order ID. Refunds will be processed within 5-7 business days after receiving the returned item.`
        },
        privacy: {
            title: 'Privacy Policy',
            content: `We collect personal information (name, email, phone, address) only for order processing and communication. We do not share your data with third parties. Payment information is processed securely through Razorpay. You can request deletion of your data at any time by contacting us.`
        },
        terms: {
            title: 'Terms & Conditions',
            content: `By using BishtAipanArt, you agree to our terms. All products are handmade and may have minor variations. Prices are subject to change without notice. We reserve the right to cancel orders if necessary. All content on this website is property of BishtAipanArt.`
        },
    };

    const policy = policies[type] || policies.shipping;
    const policyList = Object.keys(policies);

    return (
        <>
            <SEO title={policy.title} />
            <div className="pt-28 md:pt-32 section-padding">
                <div className="container-custom max-w-4xl">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-geru-red mb-2">{policy.title}</h1>
                    <AipanDivider />
                    <div className="flex gap-4 mb-8 flex-wrap">
                        {policyList.map((key) => (
                            <Link key={key} to={`/policies/${key}`}
                                className={`text-sm px-4 py-2 transition-colors ${type === key || (!type && key === 'shipping') ? 'bg-geru-red text-rice-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                {policies[key].title}
                            </Link>
                        ))}
                    </div>
                    <div className="prose max-w-none">
                        <p className="text-gray-600 leading-relaxed">{policy.content}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Policies;
