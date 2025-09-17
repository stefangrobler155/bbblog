import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--accent)] text-light-text py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[var(--light-text)]">
              Coffee & Beyond
            </h3>
            <p className="text-sm">
                Your go-to blog for everything coffee, brewing tips, and more. Stay caffeinated with us!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--light-text)]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[var(--dark-text)] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[var(--dark-text)]  transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-[var(--dark-text)] transition">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--dark-text)] transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--dark-text)] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--light-text)]">
              Connect With Us
            </h4>
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://x.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                X
              </Link>
              <Link
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                Facebook
              </Link>
              <Link
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
              >
                Instagram
              </Link>
            </div>
            <p className="text-sm">
              Email: <Link href="mailto:contact@yourblog.com" className="hover:text-accent transition">
                contact@yourblog.com
              </Link>
            </p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; {currentYear} Coffee & Beyond. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}