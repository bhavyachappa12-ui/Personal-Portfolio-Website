import React, { useState } from 'react';
import { Landmark, ArrowLeft, Check, CheckCircle2, User, Lock, QrCode, Send, Smartphone, MoreHorizontal, Home, ListOrdered, CreditCard, Bell, Menu, ShieldCheck } from 'lucide-react';

export const FinanceWireframes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'low-fi' | 'high-fi'>('comparison');

  return (
    <div className="w-full bg-slate-900 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 text-white border border-slate-800 shadow-xl overflow-hidden">
      
      {/* Top Controls Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 uppercase tracking-wide">
              Wireframes Showcase
            </span>
            <span className="text-xs font-mono text-slate-400">Figma Design Process</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
            Finance App: Low-Fi vs. High-Fi Wireframes
          </h3>
        </div>

        {/* View Mode Toggle Buttons */}
        <div className="flex items-center p-1 bg-slate-800/80 rounded-xl border border-slate-700/80 text-xs font-medium self-stretch sm:self-auto justify-center">
          <button
            type="button"
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'comparison'
                ? 'bg-blue-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Side-by-Side
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('low-fi')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'low-fi'
                ? 'bg-slate-700 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Low-Fidelity
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('high-fi')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'high-fi'
                ? 'bg-blue-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            High-Fidelity
          </button>
        </div>
      </div>

      {/* Main Wireframe Displays */}
      <div className="pt-6 space-y-12">

        {/* SECTION 1: LOW FIDELITY WIREFRAME */}
        {(activeTab === 'comparison' || activeTab === 'low-fi') && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-400" />
                <h4 className="text-lg font-serif font-bold text-slate-200">
                  Low-Fidelity Wireframes
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-400">Structure & Content Mapping (Monochrome)</span>
            </div>

            {/* 4 Low-Fi Mobile Frames Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Frame 1: Low-Fi Login */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-md border border-slate-200 flex flex-col justify-between min-h-[380px] font-serif">
                <div className="text-[10px] text-slate-400 font-sans font-semibold mb-2">Login</div>
                
                <div className="space-y-4 my-auto text-center px-2">
                  <h5 className="text-lg font-serif font-bold text-slate-900">Finance App</h5>
                  
                  {/* Square Box Icon */}
                  <div className="w-10 h-10 border-2 border-slate-900 mx-auto rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 border border-slate-900" />
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-3 text-left pt-2 font-sans text-xs">
                    <div>
                      <span className="text-[11px] text-slate-700 font-medium">Username:</span>
                      <div className="h-8 bg-slate-200 rounded-md w-full mt-1" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-700 font-medium">Password:</span>
                      <div className="h-8 bg-slate-200 rounded-md w-full mt-1" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="w-full bg-slate-300 py-2 rounded-md font-sans text-xs font-bold text-slate-800 tracking-wider">
                      LOGIN
                    </div>
                  </div>
                </div>

                <div className="text-[9px] text-center text-slate-400 font-sans mt-4">Frame 1 • Wireframe</div>
              </div>

              {/* Frame 2: Low-Fi Dashboard */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-md border border-slate-200 flex flex-col justify-between min-h-[380px]">
                <div className="text-[10px] text-slate-400 font-sans font-semibold mb-2">Dashboard</div>

                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex justify-between items-center text-slate-800">
                    <Menu className="w-4 h-4" />
                    <Home className="w-4 h-4" />
                  </div>

                  {/* Greeting */}
                  <div className="font-serif text-xs font-bold text-slate-800">Hello, User</div>

                  {/* Total Balance Gray Card */}
                  <div className="bg-slate-200 p-3 rounded-xl text-center space-y-1">
                    <span className="text-[10px] text-slate-600 uppercase font-sans">Total Balance</span>
                    <div className="text-base font-serif font-bold text-slate-900">₹ 25,000.00</div>
                  </div>

                  {/* Transfer Money Button */}
                  <div className="bg-slate-300 py-2 rounded-lg text-center font-sans text-[11px] font-bold text-slate-800">
                    TRANSFER MONEY
                  </div>

                  {/* Recent Transactions */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-sans text-slate-600 block font-medium">Recent Transactions</span>
                    <div className="flex items-center justify-between text-[10px] p-1.5 rounded bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-300" />
                        <div>
                          <div className="font-bold text-slate-800 leading-tight">Bhavya</div>
                          <div className="text-[8px] text-slate-400">sent money</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-slate-900">- ₹ 500</div>
                        <div className="text-[8px] text-slate-400">12 may 2024</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-[9px] text-center text-slate-400 font-sans mt-4">Frame 2 • Wireframe</div>
              </div>

              {/* Frame 3: Low-Fi Transfer Money */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-md border border-slate-200 flex flex-col justify-between min-h-[380px]">
                <div className="text-[10px] text-slate-400 font-sans font-semibold mb-2">Transfer Money</div>

                <div className="space-y-3 font-serif">
                  {/* Top Bar */}
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 pb-1">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Transfer Money</span>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-2 font-sans text-[11px]">
                    <div>
                      <span className="text-slate-600">Recipient Name</span>
                      <div className="h-7 bg-slate-200 rounded-md w-full mt-0.5" />
                    </div>
                    <div>
                      <span className="text-slate-600">Account Number</span>
                      <div className="h-7 bg-slate-200 rounded-md w-full mt-0.5" />
                    </div>
                    <div>
                      <span className="text-slate-600">Amount</span>
                      <div className="h-7 bg-slate-200 rounded-md w-full mt-0.5" />
                    </div>
                  </div>

                  <div className="pt-3">
                    <div className="bg-slate-300 py-2 rounded-lg text-center font-sans text-[11px] font-bold text-slate-800">
                      SEND MONEY
                    </div>
                  </div>
                </div>

                <div className="text-[9px] text-center text-slate-400 font-sans mt-4">Frame 3 • Wireframe</div>
              </div>

              {/* Frame 4: Low-Fi Confirmation */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-md border border-slate-200 flex flex-col justify-between min-h-[380px] text-center">
                <div className="text-[10px] text-slate-400 font-sans font-semibold mb-2 text-left">Confirmation</div>

                <div className="space-y-3 my-auto">
                  {/* Checkmark Circle */}
                  <div className="w-12 h-12 rounded-full border-2 border-slate-800 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6 text-slate-900" />
                  </div>

                  <div className="font-serif font-bold text-sm text-slate-900">Payment Successfull !</div>

                  <div>
                    <div className="text-lg font-serif font-bold text-slate-900">₹ 1,000</div>
                    <div className="text-[9px] text-slate-500 font-sans">Sent Successfully</div>
                  </div>

                  <div className="pt-1">
                    <div className="text-[10px] font-sans font-bold text-slate-700">Transaction ID</div>
                    <div className="text-[10px] font-mono text-slate-400">XXXXXXXXXX</div>
                  </div>

                  <div className="pt-2">
                    <div className="bg-slate-300 py-2 rounded-lg text-center font-sans text-[10px] font-bold text-slate-800">
                      BACK TO HOME
                    </div>
                  </div>
                </div>

                <div className="text-[9px] text-center text-slate-400 font-sans mt-4">Frame 4 • Wireframe</div>
              </div>

            </div>
          </div>
        )}

        {/* SECTION 2: HIGH FIDELITY WIREFRAME */}
        {(activeTab === 'comparison' || activeTab === 'high-fi') && (
          <div className="space-y-4 pt-4 border-t border-slate-800/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <h4 className="text-lg font-sans font-bold text-blue-400">
                  High-Fidelity Interface Screens
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-400">Full Visual UI Design (Electric Blue Theme)</span>
            </div>

            {/* 4 High-Fi Mobile Frames Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Frame 1: Hi-Fi Login */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-lg border border-blue-200 flex flex-col justify-between min-h-[380px]">
                <div className="text-[10px] text-blue-600 font-mono font-bold mb-1">Login</div>

                <div className="space-y-3 my-auto text-center">
                  <h5 className="text-lg font-serif font-bold text-slate-900">Finance App</h5>

                  {/* Bank Icon */}
                  <div className="w-10 h-10 bg-slate-100 rounded-full mx-auto flex items-center justify-center text-slate-800 shadow-2xs">
                    <Landmark className="w-5 h-5" />
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-2 text-left text-[11px] font-sans">
                    <div>
                      <span className="text-slate-600 font-medium">Username:</span>
                      <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-400 mt-0.5">
                        <User className="w-3 h-3 text-slate-400" />
                        <span className="text-[10px]">Enter your username</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-600 font-medium">Password:</span>
                      <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-400 mt-0.5">
                        <Lock className="w-3 h-3 text-slate-400" />
                        <span className="text-[10px]">Enter your password</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[9px] pt-1">
                      <label className="flex items-center gap-1 text-slate-600 cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded text-blue-600 w-3 h-3" />
                        <span>Remember me</span>
                      </label>
                      <span className="text-blue-600 font-semibold cursor-pointer">Forgot password?</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <div className="w-full bg-[#2563EB] hover:bg-blue-700 py-2 rounded-xl text-white text-xs font-bold shadow-md shadow-blue-500/20 cursor-pointer transition-colors">
                      LOGIN
                    </div>
                  </div>

                  <div className="text-[9px] text-slate-500 pt-1">
                    Don't have an account? <span className="text-blue-600 font-bold cursor-pointer">Signup</span>
                  </div>
                </div>

                <div className="text-[9px] text-center text-slate-400 font-mono">Frame 1 • Hi-Fi</div>
              </div>

              {/* Frame 2: Hi-Fi Dashboard (Frame 4) */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-lg border border-blue-200 flex flex-col justify-between min-h-[380px]">
                <div>
                  <div className="text-[10px] text-blue-600 font-mono font-bold mb-2">Frame 4 (Dashboard)</div>

                  <div className="space-y-3">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center">
                      <Menu className="w-4 h-4 text-slate-800" />
                      <div className="relative">
                        <Bell className="w-4 h-4 text-slate-800" />
                        <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      </div>
                    </div>

                    {/* Greeting */}
                    <div className="font-bold text-xs text-slate-900">Hello, User</div>

                    {/* Bright Royal Blue Card */}
                    <div className="bg-[#2563EB] text-white p-3.5 rounded-2xl shadow-md shadow-blue-500/30 space-y-1 relative overflow-hidden">
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] text-blue-100 font-medium">Total Balance</span>
                        <QrCode className="w-3.5 h-3.5 text-blue-200" />
                      </div>
                      <div className="text-base font-extrabold tracking-tight">₹ 25,000.00</div>
                      <div className="text-[8px] text-blue-200 font-mono">Available Balance</div>
                    </div>

                    {/* 4 Action Buttons */}
                    <div className="grid grid-cols-4 gap-1.5 text-center text-[8px] font-medium text-slate-700 pt-1">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-7 h-7 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          <QrCode className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-tight">Scan QR</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-7 h-7 bg-[#2563EB] rounded-lg flex items-center justify-center text-white shadow-xs">
                          <Send className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-tight font-bold text-blue-600">Transfer</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-7 h-7 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          <Smartphone className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-tight">Mobile Recharge</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-7 h-7 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          <MoreHorizontal className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-tight">More</span>
                      </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="pt-1">
                      <div className="flex items-center justify-between text-[10px] mb-1">
                        <span className="font-bold text-slate-800">Recent Transactions</span>
                        <span className="text-blue-600 font-semibold cursor-pointer">View All</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] p-1.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px]">
                            ↓
                          </div>
                          <div>
                            <div className="font-bold text-slate-800 leading-tight">Bhavya</div>
                            <div className="text-[8px] text-slate-400">sent money</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-slate-900">- ₹ 500</div>
                          <div className="text-[8px] text-slate-400">12 may 2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-3 pt-2 border-t border-slate-100 grid grid-cols-4 text-center text-[8px] text-slate-400 font-medium">
                  <div className="text-blue-600 font-bold flex flex-col items-center gap-0.5">
                    <Home className="w-3.5 h-3.5" />
                    <span>Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <ListOrdered className="w-3.5 h-3.5" />
                    <span>Transactions</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Card</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <User className="w-3.5 h-3.5" />
                    <span>Profile</span>
                  </div>
                </div>
              </div>

              {/* Frame 3: Hi-Fi Transfer Money (Frame 5) */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-lg border border-blue-200 flex flex-col justify-between min-h-[380px]">
                <div className="text-[10px] text-blue-600 font-mono font-bold mb-1">Frame 5 (Transfer)</div>

                <div className="space-y-3">
                  {/* Top Bar */}
                  <div className="flex items-center gap-2 text-xs font-serif font-bold text-slate-800 pb-1">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Transfer Money</span>
                  </div>

                  {/* Send Illustration Badge */}
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-[#2563EB] mx-auto flex items-center justify-center relative my-1 shadow-inner">
                    <Send className="w-6 h-6 transform -rotate-12" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-400" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-blue-300" />
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-2 text-[11px] font-sans">
                    <div>
                      <span className="text-slate-600 font-medium">Recipient Name</span>
                      <input
                        type="text"
                        readOnly
                        placeholder="Enter your name"
                        className="w-full text-[10px] px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 mt-0.5 focus:outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-slate-600 font-medium">Account Number</span>
                      <input
                        type="text"
                        readOnly
                        placeholder="Enter Account number"
                        className="w-full text-[10px] px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 mt-0.5 focus:outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-slate-600 font-medium">Amount</span>
                      <input
                        type="text"
                        readOnly
                        placeholder="Enter Amount"
                        className="w-full text-[10px] px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 mt-0.5 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="w-full bg-[#2563EB] hover:bg-blue-700 py-2 rounded-xl text-white text-xs font-bold shadow-md shadow-blue-500/20 text-center cursor-pointer transition-colors">
                      SEND MONEY
                    </div>
                  </div>
                </div>

                <div className="text-[9px] text-center text-slate-400 font-mono mt-4">Frame 5 • Hi-Fi</div>
              </div>

              {/* Frame 4: Hi-Fi Confirmation */}
              <div className="bg-white text-slate-900 rounded-2xl p-4 shadow-lg border border-blue-200 flex flex-col justify-between min-h-[380px] text-center">
                <div className="text-[10px] text-blue-600 font-mono font-bold mb-1 text-left">Confirmation</div>

                <div className="space-y-3 my-auto">
                  {/* Vibrant Green Checkmark Circle with Confetti */}
                  <div className="relative w-12 h-12 mx-auto">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/30">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    {/* Confetti Dots */}
                    <div className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <div className="absolute -bottom-1 -left-2 w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  </div>

                  <div className="font-serif font-bold text-sm text-emerald-600">
                    Payment Successfull !
                  </div>

                  <div>
                    <div className="text-xl font-serif font-extrabold text-slate-900">₹ 1,000</div>
                    <div className="text-[9px] text-slate-500 font-sans">Sent Successfully</div>
                  </div>

                  <div className="pt-1">
                    <div className="text-[10px] font-sans font-bold text-slate-700">Transaction ID</div>
                    <div className="text-[10px] font-mono text-slate-400 font-medium">XXXXXXXXXX</div>
                  </div>

                  <div className="pt-2">
                    <div className="w-full bg-[#2563EB] hover:bg-blue-700 py-2 rounded-xl text-white text-xs font-bold shadow-md shadow-blue-500/20 text-center cursor-pointer transition-colors">
                      BACK TO HOME
                    </div>
                  </div>
                </div>

                <div className="text-[9px] text-center text-slate-400 font-mono mt-4">Frame 6 • Hi-Fi</div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
