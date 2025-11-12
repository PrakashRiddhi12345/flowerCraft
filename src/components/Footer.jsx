export default function Footer(){
  return (
    <footer className="bg-pink-600 text-white py-6 mt-8">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Craftify. Made with ❤️ using React & Tailwind.</p>
      </div>
    </footer>
  );
}
