import Demo from './Demo';

export default function Home() {
    return (
        <main className="p-8 md:p-9 lg:p-10">
            <h1 className="mb-7 md:mb-8 lg:mb-9 font-display text-2xl md:text-3xl lg:text-4xl text-center">
                AI Product Toggle Demo
            </h1>

            <Demo />
        </main>
    );
}
