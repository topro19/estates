import Link from 'next/link';

export default function Footer4Col() {
  return (
    <footer className="w-full mt-20 bg-[#000000] text-white border-t border-brass/20 py-16 px-6 sm:px-12 flex flex-col items-center">
      
      <div className="mx-auto w-full max-w-[1400px]">
        
        {/* Top Links Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 mb-12 items-center">
          
          {/* Logo Column */}
          <div className="flex flex-col items-center justify-center md:border-r border-brass/20 py-2">
            <img 
              src="/astute-logo.png" 
              alt="Astute Logo" 
              className="w-32 sm:w-40 h-auto object-contain rounded-xl" 
            />
          </div>

          {/* Column 1 */}
          <div className="flex flex-col items-center justify-center space-y-6 md:border-r border-brass/20 py-2">
            <Link href="/" className="font-mono uppercase text-[11px] font-bold tracking-[0.25em] hover:text-brass transition-colors">Home</Link>
            <Link href="/#gallery" className="font-mono uppercase text-[11px] font-bold tracking-[0.25em] hover:text-brass transition-colors">Spaces</Link>
            <Link href="/portfolio" className="font-mono uppercase text-[11px] font-bold tracking-[0.25em] hover:text-brass transition-colors">Gallery</Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center justify-center space-y-6 md:border-r border-brass/20 py-2">
            <Link href="#" className="font-mono uppercase text-[11px] font-bold tracking-[0.25em] hover:text-brass transition-colors">Journal</Link>
            <Link href="#" className="font-mono uppercase text-[11px] font-bold tracking-[0.25em] hover:text-brass transition-colors">About</Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center justify-center space-y-6 md:border-r border-brass/20 py-2">
            <Link href="/contact" className="font-mono uppercase text-[11px] font-bold tracking-[0.25em] hover:text-brass transition-colors">Contact</Link>
            <Link href="#" className="font-mono uppercase text-[11px] font-bold tracking-[0.25em] hover:text-brass transition-colors">Careers</Link>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-center justify-center space-y-5 py-2">
            <a href="mailto:hello@astute.studio" className="font-mono uppercase text-[11px] font-bold tracking-[0.25em] hover:text-brass transition-colors">
              hello@astute.studio
            </a>
            <div className="w-6 h-[1px] bg-brass/50"></div>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-brass transition-colors text-white">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="hover:text-brass transition-colors text-white">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="hover:text-brass transition-colors text-white">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.406.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.279 1.148c-.038.154-.127.189-.288.113-1.076-.505-1.748-2.093-1.748-3.376 0-2.748 1.996-5.268 5.753-5.268 3.018 0 5.364 2.152 5.364 5.024 0 3.003-1.892 5.418-4.522 5.418-.881 0-1.71-.458-1.994-.999l-.543 2.066c-.197.749-.728 1.688-1.085 2.261 1.054.321 2.176.495 3.336.495 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-brass/30 mb-8"></div>

        {/* Bottom Copyright & Star */}
        <div className="w-full flex flex-col items-center justify-center">
          <div className="text-brass mb-3">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
            </svg>
          </div>
          <p className="font-mono uppercase text-[10px] tracking-[0.25em] text-white/80 font-bold text-center">
            © {new Date().getFullYear()} ASTUTE. ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>

    </footer>
  );
}
