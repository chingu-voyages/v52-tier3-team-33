export default function Footer(): React.ReactNode {
  return (
    <footer className="border-t p-4">
      <div className=" flex flex-col gap-4 container py-4 text-center text-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3>About</h3>
            <p>City of Los Angeles Solar Initiative</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Contact information</p>
          </div>
          <div>
            <h3>Resources</h3>
            <p>Helpful links</p>
          </div>
          <div>
            <h3>Legal</h3>
            <p>Terms and privacy</p>
          </div>
        </div>
        <p>© 2025 Solar Panel App. All rights reserved.</p>
      </div>
    </footer>
  );
}
