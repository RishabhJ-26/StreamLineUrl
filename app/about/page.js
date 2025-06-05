export default function About() {
  return (
    <main className="min-h-screen bg-purple-50 p-8">
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-6">About StreamlineURL</h1>
        <p className="text-lg mb-4">
          StreamlineURL is the best URL shortener in the market, designed with your privacy and ease of use in mind. Unlike other URL shorteners, we do not track you or require you to provide personal details.
        </p>
        <p className="text-lg mb-4">
          Our mission is to provide a straightforward, fast, and reliable URL shortening service that respects your privacy and helps you share links effortlessly.
        </p>
        <h2 className="text-2xl font-bold text-purple-600 mt-8 mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>No tracking or data collection</li>
          <li>Simple and intuitive interface</li>
          <li>Fast and reliable link shortening</li>
          <li>Free to use with no hidden fees</li>
          <li>Responsive design for all devices</li>
        </ul>
      </section>
    </main>
  );
}
