export default function Home() {
    return <div className="px-40">
        <div className="text-center p-4">
        <h2 className="text-4xl">Welcome to SportCenter</h2>
        <h3 className="text-xl">The ultimate place to buy sporting goods</h3>
        </div>
        <div className="grid grid-cols-2 gap-8 p-8">
            <div className="bg-zinc-300 rounded-xl p-3">Wide range of products</div>
            <div className="bg-fuchsia-300 rounded-xl p-3">So many categories!</div>
            <div className="bg-zinc-300 rounded-xl p-3">Easy interface</div>
            <div className="bg-fuchsia-300 rounded-xl p-3">Find exactly what you need with an innovative design</div>            
        </div>
    </div>;
}