import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import AipanDivider from '../components/aipan/AipanDivider';
import SEO from '../components/SEO';

const Blog = () => {
    const posts = [
        { slug: 'aipan-art-uttarakhand', title: 'Aipan: The Sacred Art of Kumaon', excerpt: 'Discover the ancient tradition of Aipan art from the hills of Uttarakhand, its spiritual significance, and how it has been preserved for generations.', author: 'Vijay Bisht', date: 'March 15, 2026', image: 'https://images.unsplash.com/photo-1605792657661-596af7809f3a?w=600', category: 'Heritage' },
        { slug: 'geru-red-significance', title: 'The Significance of Geru Red in Kumaoni Culture', excerpt: 'Why the color red holds such deep spiritual meaning in the hills of Kumaon and how it became the foundation of Aipan art.', author: 'Vijay Bisht', date: 'March 10, 2026', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600', category: 'Culture' },
        { slug: 'women-artisans-empowerment', title: 'Empowering Women Through Aipan Art', excerpt: 'How the ancient tradition of Aipan is providing sustainable livelihoods to women artisans across Uttarakhand.', author: 'Vijay Bisht', date: 'March 5, 2026', image: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=600', category: 'Community' },
    ];

    return (
        <>
            <SEO title="Blog" description="Stories about Aipan art, Kumaoni culture, and artisan stories" />
            <div className="pt-28 md:pt-32 section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-geru-red mb-4">Blog</h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Stories from the mountains — art, culture, and the people behind Aipan.</p>
                        <AipanDivider />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.slug} className="card card-hover aipan-product-frame overflow-hidden">
                                <Link to={`/blog/${post.slug}`}>
                                    <div className="aspect-video bg-warm-sand overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                                    </div>
                                </Link>
                                <div className="p-6">
                                    <p className="text-xs text-geru-red uppercase tracking-wider font-medium mb-2">{post.category}</p>
                                    <Link to={`/blog/${post.slug}`} className="font-heading text-xl font-bold text-charcoal hover:text-geru-red transition-colors block mb-2">{post.title}</Link>
                                    <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                                    <div className="flex items-center gap-4 text-xs text-gray-500">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                                        <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                                    </div>
                                    <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm text-geru-red hover:underline mt-4">
                                        Read More <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
