import Title from "./Title";

const HomeBanner = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <Title className="text-center text-3xl md:text-4xl uppercase font-bold">Best clothing collection</Title>
            <p className="text-sm text-center text-gray-500 font-medium max-w-[480px] ">Finf Everything you need to look at your best,and shop the ;atest men&apos;s fashion and lifestyle and products</p>
        </div>
    );
}

export default HomeBanner;