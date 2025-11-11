"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight mb-4">
              <img
                src="android-chrome-192x192.png"
                alt="Teamway"
                className="w-8 h-8"
              />
              <span>teamway</span>
            </div>
            <p className="text-gray-600 text-sm">
              Elevate your business through Software
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <a
                href="mailto:hello@teamway.dev"
                className="block hover:text-indigo-600 transition-colors"
              >
                hello@teamway.dev
              </a>
              <a
                href="tel:+355686284516"
                className="block hover:text-indigo-600 transition-colors"
              >
                +355 68 628 4516
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Locations</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-700">Tirana, Albania</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Swampscott, MA</p>
                <p>United States</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          © 2025 Teamway — Elevate your business through Software
        </div>
      </div>
    </footer>
  );
}
