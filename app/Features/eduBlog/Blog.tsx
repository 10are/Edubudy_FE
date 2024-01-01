import React from 'react';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import BlogPostUI from "@/app/Features/eduBlog/blogPost";
import BlogFilter from "@/app/Features/eduBlog/blogFilter";


interface BlogPost {
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

const Blog: React.FC = () => {
    const blogs: BlogPost[] = [
        {
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


    return <>
        <div className="flex flex-col md:flex-row pt-8 pr-6 pl-6">
            <BlogFilter/>
            <div className="flex-1 pl-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-3.5">

                    {blogs.map((item) => (
                        <><BlogPostUI author={item.author} category={item.category}
                                      userImageUrl={item.userImageUrl}
                                      title={item.title} content={item.content} commentCount={item.commentCount} imageUrl={item.imageUrl}
                                      date={item.date} tags={item.tags}/></>

                    ))}
                    {/*<BlogPostUI author={"ANNANANA"} category={["CSAS", "CSAS"]}*/}
                    {/*            userImageUrl={"https://lh3.google.com/u/0/ogw/ANLem4ZYvqBor8kXitI32nLJ5vB7dmwTPG65sdWpTDaY=s32-c-mo"}*/}
                    {/*            title={"CSAS"} imageUrl={"/blog/mq62496uenaf.jpg"} content={"SASDASDASDASD"}*/}
                    {/*            date={"12/12/3044"}/>*/}
                </div>
            </div>
        </div>
    </>

};

export default Blog;
