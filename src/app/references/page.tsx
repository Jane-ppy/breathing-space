import Navigation from '@/components/Navigation';

export default function References() {
    const references = [
        {
            title: "Brain, Mind, and Body in the Healing of Trauma",
            author: "van der Kolk, B.",
            year: "2014",
            publisher: "Viking",
            category: "書籍 | Books"
        },
        {
            title: "Brain Drain: The Mere Presence of One's Own Smartphone Reduces Available Cognitive Capacity",
            authors: "Ward, A. F., Duke, K., Gneezy, A., & Bos, M. W.",
            year: "2017",
            journal: "Journal of the Association for Consumer Research, 2(2), 140-154",
            category: "研究論文 | Research Papers"
        },
        {
            title: "Digital Mindfulness Interventions and Their Impact on Attention Regulation",
            authors: "Santilli, E. & Spann, M.",
            year: "2024",
            journal: "Journal of Cognitive Enhancement",
            category: "研究論文 | Research Papers"
        },
        {
            title: "Mindfulness: A Practical Guide to Finding Peace in a Frantic World",
            authors: "Williams, M., & Penman, D.",
            year: "2011",
            publisher: "Piatkus",
            category: "書籍 | Books"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        參考文獻 | References
                    </h1>
                    <p className="text-xl text-gray-600">
                        本專案的學術依據和參考資料
                        <br />
                        Academic foundations and references for this project
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
                        <div className="space-y-8">
                            {['書籍 | Books', '研究論文 | Research Papers'].map((category) => (
                                <div key={category}>
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                                        {category}
                                    </h2>
                                    <div className="space-y-6">
                                        {references
                                            .filter((ref) => ref.category === category)
                                            .map((ref, index) => (
                                                <div
                                                    key={index}
                                                    className="p-6 border border-gray-100 rounded-lg hover:border-primary transition-colors"
                                                >
                                                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                                                        {ref.title}
                                                    </h3>
                                                    <p className="text-gray-600">
                                                        {ref.authors || ref.author}
                                                    </p>
                                                    <p className="text-gray-500">
                                                        {ref.journal || ref.publisher}, {ref.year}
                                                    </p>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 bg-white rounded-lg shadow-sm p-8 border border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            學術背景 | Academic Context
                        </h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                本專案是香港中文大學 CCI4900 畢業專題研究的一部分，旨在探討數位時代中簡短正念練習對注意力和情緒調節的影響。
                            </p>
                            <p>
                                This project is part of the CCI4900 Capstone Project at The Chinese University of Hong Kong, investigating the effects of brief mindfulness practices on attention and emotion regulation in the digital age.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 