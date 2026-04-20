import { useState } from "react";

const ProgressBar = ({ label, value, color = "bg-blue-500", icon }) => (
  <div className="flex items-center gap-2 mb-1.5">
    <span className="text-xs w-20 text-gray-500 flex items-center gap-1">
      {icon && <span>{icon}</span>} {label}
    </span>
    <div className="flex-1 bg-gray-100 rounded-full h-1.5">
      <div
        className={`${color} h-1.5 rounded-full`}
        style={{ width: `${value}%` }}
      />
    </div>
    <span className="text-xs font-semibold text-blue-500 w-8 text-right">{value}%</span>
  </div>
);

const Bolt = () => (
  <svg className="w-3.5 h-3.5 text-green-500 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
  </svg>
);

export default function JuneDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">

        {/* Top Left - Auto Reports */}
        <div className="bg-blue-50 rounded-2xl p-6 col-span-1 flex flex-col justify-between" style={{ minHeight: 220 }}>
          <p className="text-blue-900 font-bold text-xl leading-snug max-w-xs">
            We automatically generate reports for each of your customers
          </p>

          {/* Intercom Card */}
          <div className="bg-white rounded-xl p-4 shadow-sm mt-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="4" height="14" rx="1"/>
                  <rect x="9" y="6" width="4" height="11" rx="1"/>
                  <rect x="15" y="9" width="4" height="8" rx="1"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Intercom</p>
                <p className="text-xs text-gray-400">Joined 9 Feb 2023</p>
              </div>
              <span className="ml-auto w-2.5 h-2.5 bg-green-400 rounded-full"></span>
            </div>
            <div className="space-y-1.5 text-sm">
              {[
                { label: "Total seats", val: 50 },
                { label: "Active seats", val: 22 },
                { label: "Active last 7 days", val: "True" },
              ].map(({ label, val }) => (
                <div key={label} className="flex justify-between text-gray-500">
                  <span className="flex items-center"><Bolt />{label}</span>
                  <span className="font-semibold text-gray-700">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Right - Company Activation */}
        <div className="bg-white rounded-2xl p-6 shadow-sm col-span-1">
          <p className="text-sm text-gray-500 mb-1">Company activation</p>
          <p className="text-4xl font-bold text-gray-900 mb-4">40%</p>
          <ProgressBar label="Signed up" value={100} icon="🌟" />
          <ProgressBar label="Setup" value={80} icon="⚙️" />
          <ProgressBar label="Aha moment" value={60} icon="💡" />
          <ProgressBar label="Activated" value={40} icon="🔵" />
          <ProgressBar label="Active" value={80} icon="⭐" />
        </div>

        {/* Bottom Left - Celebrate Milestones */}
        <div className="bg-purple-50 rounded-2xl p-6 col-span-1" style={{ minHeight: 320 }}>
          <p className="text-purple-700 font-bold text-lg mb-1">Celebrate milestones</p>
          <p className="text-gray-600 text-sm mb-4">
            Instant alerts and weekly digests to keep your team aligned and celebrate wins
          </p>

          {/* Slack-style notification card */}
          <div className="bg-white rounded-xl shadow p-4 text-xs">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-white text-[9px] font-bold">J</div>
              <span className="font-semibold text-gray-800">June</span>
              <span className="text-gray-400 text-[10px]">APP</span>
              <span className="text-gray-400 ml-1">10:36 AM</span>
              <div className="ml-auto flex gap-1">
                <div className="w-4 h-4 bg-pink-400 rounded-sm"/>
                <div className="w-4 h-4 bg-blue-400 rounded-sm"/>
                <div className="w-4 h-4 bg-yellow-400 rounded-sm"/>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-1">
              <span>🏆</span>
              <span className="font-semibold text-gray-700">Qualified signup</span>
            </div>
            <div className="flex items-center gap-1 mb-3 text-gray-500">
              <span>👤</span>
              <span>Eoghan McCabe</span>
              <span className="text-blue-500">eoghan@intercom.io</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 border border-gray-100 rounded p-2 text-[11px]">
              {[
                ["Company name:", "Intercom"],
                ["Location:", "Dublin, Ireland"],
                ["Role:", "CTO & Co-Founder"],
                ["Company website:", "intercom.io"],
                ["Company size:", "800"],
                ["LinkedIn:", "View profile"],
                ["Funding amount:", "33M"],
                ["Crunchbase:", "View company"],
              ].map(([k, v]) => (
                <div key={k}>
                  <span className="text-gray-400">{k}</span>
                  <br />
                  <span className={v.startsWith("View") || v === "intercom.io" ? "text-blue-500" : "text-gray-700 font-medium"}>
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Last seen / Activated badges */}
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="flex-1 h-px bg-green-300"/>
              <Bolt />
              <span>Last seen</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">today</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="flex-1 h-px bg-green-300"/>
              <Bolt />
              <span>Activated</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">true</span>
            </div>
          </div>

          {/* Handwritten annotation */}
          <div className="mt-2 text-gray-500 italic text-sm" style={{ fontFamily: "cursive" }}>
            Also done for you ↙
          </div>
        </div>

        {/* Bottom Right - 2 stacked cards */}
        <div className="col-span-1 flex flex-col gap-4">

          {/* Automatic Enrichment */}
          <div className="bg-orange-50 rounded-2xl p-5">
            <p className="font-bold text-orange-700 text-base mb-1">Automatic enrichment</p>
            <p className="text-gray-600 text-sm mb-3">
              Automatically enrich your customers profiles and their users powered by GPT
            </p>
            <div className="bg-white rounded-xl p-3 text-xs shadow-sm relative">
              <div className="absolute -top-2 right-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="4" height="14" rx="1"/>
                    <rect x="9" y="6" width="4" height="11" rx="1"/>
                    <rect x="15" y="9" width="4" height="8" rx="1"/>
                  </svg>
                </div>
              </div>
              <p className="text-purple-500 font-semibold mb-2 flex items-center gap-1">
                ✦ Enriched with AI
              </p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-gray-500">
                {[
                  ["Website", "intercom.io"],
                  ["Location", "Dublin, Ireland"],
                  ["Employees", "800"],
                  ["Twitter", "@intercom"],
                  ["Funding", "$241M"],
                  ["Qualified", "true"],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-1">
                    <span className="text-gray-400">{k}</span>
                    <span className={v === "true" ? "text-green-500 font-medium" : "text-gray-700 font-medium"}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Integrated with CRM */}
          <div className="bg-green-50 rounded-2xl p-5">
            <p className="font-bold text-green-700 text-base mb-1">Integrated with your CRM</p>
            <p className="text-gray-600 text-sm mb-3">
              Connect June to your CRM and sync product usage data with your CS and sales teams
            </p>
            <div className="bg-white rounded-xl p-3 text-xs shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-700">CRM</span>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center text-white text-[9px]">●</div>
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-[9px] font-bold">H</div>
                </div>
              </div>
              <div className="flex justify-between text-gray-500 mb-1 border-b pb-1">
                <span>Company</span>
                <span>🔷 Active seats</span>
              </div>
              {[
                ["Intercom", "22 (+3)", "bg-gray-800"],
                ["Amie", "20 (-2)", "bg-pink-400"],
              ].map(([name, val, color]) => (
                <div key={name} className="flex justify-between py-1">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-3 h-3 rounded-sm ${color} inline-block`}/>
                    <span className="text-gray-700 font-medium">{name}</span>
                  </span>
                  <span className={val.includes("+") ? "text-green-600 font-medium" : "text-red-400 font-medium"}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}