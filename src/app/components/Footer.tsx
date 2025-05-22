export function Footer() {
    return (
      <footer className="bg-black text-sm px-6 py-12 border-t border-gray-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Full Product Builds</li>
              <li>Module / Feature Dev</li>
              <li>MVP Prototyping</li>
              <li>Maintenance & Handoff</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-400">
              <li>About us</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-gray-400 mb-2">hello@noctastudio.se</p>
            <div className="flex space-x-4">
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-600">© 2025 Nocta Studio AB. All rights reserved.</div>
      </footer>
    );
  }