import React from 'react';
import {useRouter} from 'next/router';


import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import BlogPostUI from "@/app/Features/eduBlog/blogPost";
import BlogFilter from "@/app/Features/eduBlog/blogFilter";

interface BlogPost {
    id: number;
    title: string;
    category: string;
    tags: string[];
    content: string;
    commentCount: string;
    author: string;
    date: string;
    imageUrl: string;
    userImageUrl: string;
}

const BlogPost = () => {
    const router = useRouter();
    const {id} = router.query;
    const blogId: number | undefined = id as number | undefined;

    const blogs: BlogPost[] = [
        {
            id: 1,
            title: 'Kod Dünyasında Yolculuk: Yazılım Geliştirme Sürecinde Adımlar',
            content:
                'Günümüzde, yazılım geliştirme süreci giderek karmaşık hale gelirken, başarılı bir yazılım projesi yönetimi için adımları doğru bir şekilde takip etmek hayati öneme sahiptir. Bu yazıda, yazılım geliştirme sürecindeki adımları ve bu adımların önemini inceleyeceğiz.',
            category: 'Teknoloji',
            commentCount: '12',
            tags: ['Teknoloji', 'Yazılım', 'Programlama', 'Programlama Dilleri'],
            author: 'Berat Emre Demir',
            date: '20 Aralık 2023',
            imageUrl: '/blog/yazilim1.jpg',
            userImageUrl: 'https://lh3.google.com/u/0/ogw/ANLem4ZYvqBor8kXitI32nLJ5vB7dmwTPG65sdWpTDaY=s32-c-mo',
        },

        {
            id: 2,
            title: 'Yazılım Geliştirmeye Giriş: Temel Kavramlar ve İlk Adımlar',
            content:
                'Yazılım mühendisliğine adım atmak isteyenler için kapsamlı bir rehber. Temel kavramların yanı sıra, programlama dilleri seçimi, veri yapıları, algoritmalar, nesne yönelimli programlama, testleme stratejileri, ve yazılım mimarisi hakkında detaylı bilgiler içeren bir başlangıç kitabı niteliğinde bir içerik.',
            category: 'Teknoloji',
            commentCount: '12',
            tags: ['Teknoloji', 'Yazılım', 'Programlama', 'Programlama Dilleri'],
            author: 'Berat Emre Demir',
            date: '21 Aralık 2023',
            imageUrl: '/blog/yazilim2.jpeg',
            userImageUrl: 'https://lh3.google.com/u/0/ogw/ANLem4ZYvqBor8kXitI32nLJ5vB7dmwTPG65sdWpTDaY=s32-c-mo',
        },

        {
            id: 3,
            title: 'En İyi Programlama Dilleri: Hangi Dil Neden Seçilmeli?',
            content:
                'Her bir programlama dilini ayrıntılı bir şekilde inceleyerek, dilin tarihçesi, popüler projelerdeki kullanımı, avantajları, dezavantajları, ve iş dünyasındaki etkisi. Ayrıca, geliştiricilere hangi durumlarda hangi dili seçmeleri konusunda rehberlik eden bir içerik.',
            category: 'Teknoloji',
            commentCount: '12',
            tags: ['Yazılım', 'Geliştirme', 'Süreci'],
            author: 'Berat Emre Demir',
            date: '22 Aralık 2023',
            imageUrl: '/blog/yazilim3.jpeg',
            userImageUrl: 'https://lh3.google.com/u/0/ogw/ANLem4ZYvqBor8kXitI32nLJ5vB7dmwTPG65sdWpTDaY=s32-c-mo',
        },

        {
            id: 4,
            title: 'Agile Yazılım Geliştirme: Hızlı ve Esnek Bir Yaklaşım',
            content:
                'Agile metodolojisinin evrimi, temel prensipleri, Scrum, Kanban gibi yaygın kullanılan framework\'lerin ayrıntılı analizi. Büyük ölçekli projelerde, dağılmış ekiplerle çalışmada ve farklı sektörlerdeki uygulama senaryoları üzerinde derinleşen bir içerik.',
            category: 'Teknoloji',
            commentCount: '12',
            tags: ['Yazılım', 'Geliştirme', 'Süreci'],
            author: 'Berat Emre Demir',
            date: '23 Aralık 2023',
            imageUrl: '/blog/yazilim4.jpeg',
            userImageUrl: 'https://lh3.google.com/u/0/ogw/ANLem4ZYvqBor8kXitI32nLJ5vB7dmwTPG65sdWpTDaY=s32-c-mo',
        },

        {
            id: 5,
            title: 'Yazılım Güvenliği: Tehditlere Karşı Savunma Stratejileri',
            content:
                'Yazılım güvenliğinin temel taşlarından başlayarak, siber tehditler, güvenlik açıkları, sızma testleri, güvenlik standartları ve yazılım geliştirme süreçlerine entegrasyonu hakkında ayrıntılı bir inceleme. Aynı zamanda, geliştiricilerin güvenlik odaklı düşünme pratiğine geçiş süreçlerini ele alan bir içerik.\n',
            category: 'Teknoloji',
            commentCount: '12',
            tags: ['Yazılım', 'Geliştirme', 'Süreci'],
            author: 'Berat Emre Demir',
            date: '24 Aralık 2023',
            imageUrl: '/blog/yazilim5.jpg',
            userImageUrl: 'https://lh3.google.com/u/0/ogw/ANLem4ZYvqBor8kXitI32nLJ5vB7dmwTPG65sdWpTDaY=s32-c-mo',
        },
        {
            id: 6,
            title: 'Open Source Yazılım Nedir ve Neden Önemlidir?',
            content:
                'Açık kaynak dünyasının derinlemesine bir keşfi. Açık kaynak projelerin yönetimi, topluluk katılımı, lisans modelleri, iş dünyasındaki etkileri ve gelecekteki açık kaynak teknolojileri konusunda detaylı bir analiz.',
            category: 'Teknoloji',
            commentCount: '12',
            tags: ['Yazılım', 'Geliştirme', 'Süreci'],
            author: 'Berat Emre Demir',
            date: '24 Aralık 2023',
            imageUrl: '/blog/yazilim6.jpg',
            userImageUrl: 'https://lh3.google.com/u/0/ogw/ANLem4ZYvqBor8kXitI32nLJ5vB7dmwTPG65sdWpTDaY=s32-c-mo',
        },

        {
            id: 7,
            title: 'Yapay Zeka ve Makine Öğrenimi: Temel İlkeler ve Uygulamalar',
            content:
                'Yapay zeka ve makine öğrenimi alanlarına derinlemesine bir dalış. Temel matematiksel kavramlar, popüler öğrenme algoritmaları, derin öğrenme mimarileri, uygulama senaryoları ve etik konular üzerine geniş bir inceleme.',
            category: 'Teknoloji',
            commentCount: '12',
            tags: ['Yazılım', 'Geliştirme', 'Süreci'],
            author: 'Berat Emre Demir',
            date: '24 Aralık 2023',
            imageUrl: '/blog/YAZİLİM7.jpeg',
            userImageUrl: 'https://lh3.google.com/u/0/ogw/ANLem4ZYvqBor8kXitI32nLJ5vB7dmwTPG65sdWpTDaY=s32-c-mo',
        },

        {
            id: 8,
            title: 'Yazılım Geliştirme Sürecinde DevOps: İşbirliği ve Süreç Optimizasyonu',
            content:
                'DevOps kültürünün temelleri, CI/CD süreçleri, otomasyonun rolü, ekipler arası iletişim ve kültür değişimi üzerine detaylı bir rehber. Pratik uygulamalar, başarı öyküleri ve DevOps\'un gelecekteki evrimi konusunda bir bakış.',
            category: 'Teknoloji',
            commentCount: '12',
            tags: ['Yazılım', 'Geliştirme', 'Süreci'],
            author: 'Berat Emre Demir',
            date: '24 Aralık 2023',
            imageUrl: '/blog/YAZİLİM8.jpeg',
            userImageUrl: 'https://lh3.google.com/u/0/ogw/ANLem4ZYvqBor8kXitI32nLJ5vB7dmwTPG65sdWpTDaY=s32-c-mo',
        },

        {
            id: 9,
            title: 'Geleceğin Yazılım Trendleri: Hangi Teknolojilere Odaklanmalısınız?',
            content:
                'Bulut bilişim, edge computing, blockchain, mikro hizmet mimarisi, nesnelerin interneti (IoT), 5G teknolojisi ve otonom sistemler gibi geleceğin teknolojik trendlerini tüm boyutlarıyla inceleyen bir içerik. Bu teknolojilere adaptasyon stratejileri ve gelecekteki kariyer fırsatlarına yönelik rehberlik.',
            category: 'Teknoloji',
            commentCount: '12',
            tags: ['Yazılım', 'Geliştirme', 'Süreci'],
            author: 'Berat Emre Demir',
            date: '24 Aralık 2023',
            imageUrl: '/blog/YAZİLİM8.jpeg',
            userImageUrl: 'https://lh3.google.com/u/0/ogw/ANLem4ZYvqBor8kXitI32nLJ5vB7dmwTPG65sdWpTDaY=s32-c-mo',
        },
    ];

    const blogDetail = blogs.find((blog) => blog.id === parseInt(id as string)  || blog.id === blogId);


    return <>
        <div className=" container mx-auto flex flex-col md:flex-row pt-8 pr-6 pl-6">
            <div className="flex-1 pl-4">
                {}

                {blogDetail && (
                    <>
                        <h2>{blogDetail.title}</h2>
                        <p>{blogDetail.content}</p>
                        {/* Diğer özellikleri ihtiyaca göre render et */}
                    </>
                )}
            </div>
        </div>
    </>
};

export default BlogPost;
