import Banner from './Banner';

export default function BannerRow({ banners }) {

    return (
        <div className="flex flex-row flex-wrap gap-4 justify-center">
            {banners.map((banner) => (
                <Banner
                    key={banner.title}
                    title={banner.title}
                    subtitle={banner.subtitle}
                    thumbnail={banner.thumbnail}
                    image={banner.image}
                    description={banner.description}
                    onClick={banner.onClick}
                />
            ))}
        </div>
    );
}