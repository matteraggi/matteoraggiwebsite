import AbovethefoldSingleProject from "../components/AbovethefoldSingleProject";
import SEO from "../components/blog/SEO";
import ImageCarousel from "../components/ImageCarousel";

const SquealerPage = () => {
    const imageUrls = [
        'https://picsum.photos/id/1018/800/400',
        'https://picsum.photos/id/1023/800/400',
        'https://picsum.photos/id/1024/800/400',
        'https://picsum.photos/id/1025/800/400',
    ];
    return (
        <>
            <SEO
                title="Squealer - Social Innovativo"
                description="Squealer è un social network innovativo che premia chi crea contenuto valido, non chi ha followers. Scopri di più!"
                name="Matteo Raggi Blog"
                type="page"
                slug="squealer"
            />
            <div className="overflow-x-hidden">
                <div className="max-w-[1085px] mx-auto py-[20px]">
                    <AbovethefoldSingleProject
                        title="Squealer"
                        linkwebsite=""
                        linkcode="https://github.com/matteraggi/avvoltoio-smm"
                        downloadfile=""
                        fileName=""
                        code={true}
                        website={false}
                        download={false} />
                    {/*<ImageCarousel images={imageUrls} />*/}

                </div>
            </div>
        </>
    );
};

export default SquealerPage;