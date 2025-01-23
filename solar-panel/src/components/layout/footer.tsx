export default function Footer(): React.ReactNode {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col gap-8 px-4 py-12 sm:px-8 lg:px-16">
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          <div>
            <h3 className="mb-3 font-semibold">About</h3>
            <p className="text-sm text-gray-300">
              City of Los Angeles Solar Initiative
            </p>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Contact</h3>
            <p className="text-sm text-gray-300">Contact information</p>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Resources</h3>
            <p className="text-sm text-gray-300">Helpful links</p>
          </div>
          <div>
            <h3 className="mb-3 font-semibold">Legal</h3>
            <p className="text-sm text-gray-300">Terms and privacy</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Solar Panel App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
