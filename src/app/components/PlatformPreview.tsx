"use client";

import React, { useState } from "react";

interface PlatformPreviewProps {
  text: string;
  onClose: () => void;
}

type Platform = "instagram" | "whatsapp" | "twitter" | "discord";

const platforms: { id: Platform; label: string; icon: React.ReactNode }[] = [
  {
    id: "instagram",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: "twitter",
    label: "X / Twitter",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "discord",
    label: "Discord",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
      </svg>
    ),
  },
];

function InstagramPreview({ text }: { text: string }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400" />
        <div>
          <p className="text-[13px] font-semibold text-gray-900">your_username</p>
          <p className="text-[11px] text-gray-400">Your Name</p>
        </div>
      </div>
      {/* Bio area */}
      <div className="px-4 py-4">
        <p className="text-[14px] text-gray-900 leading-relaxed break-all whitespace-pre-wrap font-normal">
          {text}
        </p>
        <p className="text-[12px] text-blue-500 mt-2">aestheticletters.com</p>
      </div>
      {/* Stats */}
      <div className="flex justify-around px-4 py-3 border-t border-gray-100">
        <div className="text-center">
          <p className="text-[14px] font-bold text-gray-900">142</p>
          <p className="text-[11px] text-gray-400">Posts</p>
        </div>
        <div className="text-center">
          <p className="text-[14px] font-bold text-gray-900">4.2K</p>
          <p className="text-[11px] text-gray-400">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-[14px] font-bold text-gray-900">389</p>
          <p className="text-[11px] text-gray-400">Following</p>
        </div>
      </div>
    </div>
  );
}

function WhatsAppPreview({ text }: { text: string }) {
  return (
    <div className="bg-[#e5ddd5] rounded-xl overflow-hidden shadow-sm" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='%23d9d2c5' fill-opacity='.15'/%3E%3C/svg%3E\")" }}>
      {/* Header */}
      <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-300" />
        <p className="text-[14px] font-medium text-white">Friend</p>
      </div>
      {/* Chat */}
      <div className="px-3 py-4 min-h-[120px] flex flex-col justify-end">
        <div className="self-end bg-[#dcf8c6] rounded-lg px-3 py-2 max-w-[85%] shadow-sm">
          <p className="text-[14px] text-gray-900 break-all whitespace-pre-wrap">
            {text}
          </p>
          <p className="text-[10px] text-gray-500 text-right mt-1">12:42 PM ✓✓</p>
        </div>
      </div>
    </div>
  );
}

function TwitterPreview({ text }: { text: string }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <div className="px-4 py-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <p className="text-[14px] font-bold text-gray-900">Your Name</p>
              <svg viewBox="0 0 24 24" fill="#1d9bf0" className="w-4 h-4 flex-shrink-0"><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91C2.63 9.33 1.75 10.57 1.75 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.27 3.91.81c.66 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.08 4.72l-4.24-4.24 1.41-1.41 2.83 2.83 6.36-6.36 1.41 1.41-7.77 7.77z" /></svg>
            </div>
            <p className="text-[13px] text-gray-500">@your_handle</p>
            <p className="text-[15px] text-gray-900 mt-2 break-all whitespace-pre-wrap leading-relaxed">
              {text}
            </p>
            <p className="text-[12px] text-gray-500 mt-3">2:30 PM · Jun 8, 2026</p>
            {/* Engagement */}
            <div className="flex items-center gap-6 mt-3 pt-3 border-t border-gray-100">
              <span className="text-[12px] text-gray-500">💬 12</span>
              <span className="text-[12px] text-gray-500">🔄 48</span>
              <span className="text-[12px] text-gray-500">❤️ 231</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiscordPreview({ text }: { text: string }) {
  return (
    <div className="bg-[#36393f] rounded-xl overflow-hidden shadow-sm">
      {/* Channel header */}
      <div className="bg-[#2f3136] px-4 py-2.5 border-b border-[#202225] flex items-center gap-2">
        <span className="text-gray-400 text-[16px]">#</span>
        <p className="text-[14px] font-medium text-white">general</p>
      </div>
      {/* Message */}
      <div className="px-4 py-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-[#5865f2] flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2">
              <p className="text-[14px] font-medium text-[#5865f2]">YourName</p>
              <p className="text-[10px] text-gray-500">Today at 2:30 PM</p>
            </div>
            <p className="text-[14px] text-[#dcddde] mt-0.5 break-all whitespace-pre-wrap leading-relaxed">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlatformPreview({ text, onClose }: PlatformPreviewProps) {
  const [active, setActive] = useState<Platform>("instagram");

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-2xl animate-card-fade-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant/10">
          <h3 className="font-headline font-bold text-on-surface text-base">
            Platform Preview
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"
            aria-label="Close preview"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Platform Tabs */}
        <div className="flex border-b border-outline-variant/10 overflow-x-auto scrollbar-hide">
          {platforms.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-xs font-medium transition-all whitespace-nowrap border-b-2 ${
                active === p.id
                  ? "border-primary text-primary"
                  : "border-transparent text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {p.icon}
              {p.label}
            </button>
          ))}
        </div>

        {/* Preview Area */}
        <div className="p-5">
          {/* Phone frame */}
          <div className="rounded-2xl border-[3px] border-gray-800 overflow-hidden shadow-inner bg-gray-50">
            {active === "instagram" && <InstagramPreview text={text} />}
            {active === "whatsapp" && <WhatsAppPreview text={text} />}
            {active === "twitter" && <TwitterPreview text={text} />}
            {active === "discord" && <DiscordPreview text={text} />}
          </div>
          <p className="text-[0.6rem] text-on-surface-variant/50 text-center mt-3">
            Preview is approximate — actual appearance may vary by device
          </p>
        </div>
      </div>
    </div>
  );
}
