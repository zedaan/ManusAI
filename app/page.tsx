export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl w-full space-y-8 text-center">
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Manus AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            AI-powered solutions for modern businesses
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 pt-8">
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Deploy with confidence using Vercel's edge network
            </p>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-purple-500 transition-colors">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2">Easy Configuration</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Environment-based settings for staging and production
            </p>
          </div>

          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-green-500 transition-colors">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Modern Stack</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built with Next.js, React, and Tailwind CSS
            </p>
          </div>
        </div>

        {/* Environment Badge */}
        <div className="pt-8">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
            Environment: {process.env.NEXT_PUBLIC_APP_ENV || 'development'}
          </div>
        </div>

        {/* CTA Section */}
        <div className="pt-8 space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            Ready to get started?
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://vercel.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Documentation
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-400 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500">
        <p>Powered by Next.js and Vercel</p>
      </footer>
    </div>
  );
}
