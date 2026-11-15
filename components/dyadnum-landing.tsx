"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Copy, ExternalLink, MessageCircle, Smartphone, Shield, Users, TrendingUp, ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function DyadnumLanding() {
  const [copiedContract, setCopiedContract] = useState(false)

  const copyContract = () => {
    navigator.clipboard.writeText("0x123...4567")
    setCopiedContract(true)
    setTimeout(() => setCopiedContract(false), 2000)
  }

  return (
    <div className="min-h-screen w-full text-foreground overflow-x-hidden bg-black relative">
      {/* Top Right Background Element */}
      <div 
        className="absolute blur-[100px] hidden lg:block"
        style={{
          width: '694.1927490234375px',
          height: '695.98193359375px',
          top: '-288px',
          right: '-200px',
          opacity: 1,
          background: 'linear-gradient(0deg, #878787 0%, #EEEEEE 100%)',
          zIndex: 1
        }}
      />
      

      
      {/* Top Left Background Element */}
      <div 
        className="absolute blur-[100px] hidden lg:block"
        style={{
          width: '694.1927490234375px',
          height: '695.98193359375px',
          top: '-194px',
          left: '-200px',
          opacity: 1,
          background: 'linear-gradient(0deg, #878787 0%, #EEEEEE 100%)',
          zIndex: 1
        }}
      />
      
      {/* Shaped Header */}
      <div className="sticky top-0 left-0 right-0 z-50 w-full">
        <div className="w-full h-[55px] relative">
          {/* SVG Background */}
          <div className="absolute inset-0">
            <img 
              src="/Vector 41.svg" 
              alt="Header background" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-3 text-black"
                 style={{
                   fontFamily: 'SF Pro',
                   fontWeight: 510,
                   fontSize: '17.5px',
                   lineHeight: '10.63px',
                   letterSpacing: '0%',
                   textAlign: 'center'
                 }}>
              <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
              <span>8 $DYNM TGE Incoming • Native Token of Dyadnum</span>
              <div className="w-px h-4 bg-black/20"></div>
              <span>Learn more →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-[44px] left-1/2 transform -translate-x-1/2 z-40 w-full max-w-[1920px] h-[118px] px-4">
        <div className="w-full h-full rounded-[21px] flex items-center justify-between px-8">
          
          {/* Logo */}
          <div className="flex items-center gap-3 h-full">
            <img 
              src="/Group 48096456.svg" 
              alt="Dyadnum Logo" 
              className=" w-auto object-contain mt-[120px]"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#docs" className="text-black hover:text-black/80 transition-colors flex items-center gap-1"
               style={{ 
                 fontFamily: 'SF Pro',
                 fontWeight: 510,
                 fontSize: '14px',
                 lineHeight: '8.5px',
                 letterSpacing: '0%'
               }}>
              Docs
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#roadmap" className="text-black hover:text-black/80 transition-colors"
               style={{ 
                 fontFamily: 'SF Pro',
                 fontWeight: 510,
                 fontSize: '14px',
                 lineHeight: '8.5px',
                 letterSpacing: '0%'
               }}>
              Roadmap
            </a>
            <a href="#features" className="text-black hover:text-black/80 transition-colors"
               style={{ 
                 fontFamily: 'SF Pro',
                 fontWeight: 510,
                 fontSize: '14px',
                 lineHeight: '8.5px',
                 letterSpacing: '0%'
               }}>
              Features
            </a>
            <a href="#tokenomics" className="text-black hover:text-black/80 transition-colors"
               style={{ 
                 fontFamily: 'SF Pro',
                 fontWeight: 510,
                 fontSize: '14px',
                 lineHeight: '8.5px',
                 letterSpacing: '0%'
               }}>
              Tokenomics
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Telegram Button */}
            <div className="w-[60px] h-[60px] cursor-pointer hover:scale-110 transition-transform duration-200">
              <img 
                src="/Group 48096296.svg" 
                alt="Telegram Button" 
                className="w-full h-full"
              />
          </div>
            
            {/* Pitch Deck Button */}
            <div className="cursor-pointer hover:scale-110 transition-transform duration-200">
              <img 
                src="/Group 48096297.svg" 
                alt="Pitch Deck Button" 
                className="h-[60px] w-auto"
              />
        </div>
            
            {/* Dashboard Button */}
            <div className="cursor-pointer hover:scale-110 transition-transform duration-200">
              <img 
                src="/Group 48096298.svg" 
                alt="Dashboard Button" 
                className="h-[60px] w-auto"
              />
      </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Curved Bottom */}
      <section className="relative py-20 px-4 text-center" style={{ paddingTop: '200px', minHeight: '100vh', overflow: 'visible' }}>
        {/* Background SVG - Group 48096468 */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/Group 48096468.svg" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Bottom Background SVG - Group 48096469 */}
        <div className="absolute left-0 right-0 w-full h-auto 
                      bottom-[-400px] ">
          <img 
            src="/Group 48096469.svg" 
            alt="Hero bottom background" 
            className="w-full h-auto object-"
          />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center justify-start pt-12">
          <h1 className="text-center mb-8"
              style={{
                width: '1026px',
                height: '90px',
                opacity: 1,
                fontFamily: 'Nohemi',
                fontWeight: 600,
                fontSize: '45.23px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                textTransform: 'capitalize',
                background: 'linear-gradient(0deg, #F7F9FF 0%, #D0D5E0 100%, #D0D5E0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0px 0.84px 0.84px #FFFFFF) drop-shadow(0px 3.35px 12.56px #000000) drop-shadow(0px 3.35px 3.35px rgba(0,0,0,0.25))'
              }}>
            The World's First WhatsApp Native Trade Engine Scaling DeFi Where Trust Already Lives
          </h1>

          {/* Button */}
          <div className="mt-4">
            <img 
              src="/button.svg" 
              alt="Get In Touch Button" 
              className="h-[76px] w-auto cursor-pointer hover:scale-105 transition-transform duration-200"
              />
            </div>

          {/* Phone Mockup - Positioned to overlap with bottom background */}
          <div className="relative z-20 mt-8">
            <img 
              src="/Group 48096465.svg" 
              alt="Phone Mockup" 
              className="w-[376px] h-[528.3043212890625px] opacity-100"
              />
            </div>

        
        </div>

        {/* Partner Ecosystem - moved inside hero for better visual flow */}
        <div className="relative z-10 pt-0 pb-8">
          {/* <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-xl font-medium mb-12 text-gray-400 tracking-wider">OUR PARTNER ECOSYSTEM</h2>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
              {["QUICKSWAP", "ZKsync", "BINANCE", "polygon", "TCMM", "W"].map((partner) => (
                <div
                  key={partner}
                  className="text-lg font-medium hover:opacity-100 transition-opacity cursor-pointer text-white"
                >
                  {partner}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60 mt-8">
              {["Dogechain", "CyberSwap", "BitBridge", "WONDERLAND", "api3"].map((partner) => (
                <div
                  key={partner}
                  className="text-lg font-medium hover:opacity-100 transition-opacity cursor-pointer text-white"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Tools of The Trade */}
      <section id="features" className="relative py-20 px-4" style={{ marginTop: '400px' }}>
        {/* Background SVG - Ref.svg */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/Ref.svg" 
            alt="Tools section background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="mb-4"
                style={{
                  fontFamily: 'Nohemi',
                  fontWeight: 600,
                  fontSize: '54px',
                  lineHeight: '100%',
                  letterSpacing: '-1%',
                  textTransform: 'capitalize',
                  background: 'linear-gradient(0deg, #F7F9FF 0%, #D0D5E0 100%, #D0D5E0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0px 1px 1px #FFFFFF) drop-shadow(0px 4px 15px #000000) drop-shadow(0px 4px 4px rgba(0,0,0,0.25))'
                }}>
              Tools Of The Trade
            </h2>
            <p className="text-lg"
               style={{
                 fontFamily: 'Lufga',
                 fontWeight: 400,
                 fontSize: '14px',
                 lineHeight: '140%',
                 letterSpacing: '0%',
                 textAlign: 'center',
                 color: '#8E8E93'
               }}>
              Navigate the Wild Waters with Titan-like Precision
            </p>
          </div>

          <div className="flex gap-8">
            {/* First Container - Execution Magnet */}
            <div className="w-[274px] h-[392px] rounded-[21px] border-[1.33px] border-solid p-4 flex flex-col gap-2"
                 style={{
                   background: 'linear-gradient(0deg, #878787 0%, #EEEEEE 100%)',
                  //  borderImage: 'linear-gradient(162.62deg, #FFFFFF 12.36%, rgba(255, 255, 255, 0.6) 32.02%, rgba(255, 255, 255, 0) 38.89%, rgba(255, 255, 255, 0) 51.76%, rgba(255, 255, 255, 0.6) 58.23%, rgba(255, 255, 255, 0.8) 77.89%) 1',
                   boxShadow: '0px 0.5px 0px rgba(255, 255, 255, 0.16)'
                 }}>
              {/* Title */}
              <h3 className="text-center mb-4"
                  style={{
                    fontFamily: 'Nohemi',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#000000'
                  }}>
                Execution Magnet
              </h3>
              
              {/* Navigation Items */}
              <div className="space-y-2">
                {/* Active Selected Item */}
                <div className="w-[250px] h-[56px] rounded-[21px] border border-solid flex items-center justify-between px-4 cursor-pointer"
                     style={{
                       background: '#F7F9FF',
                       borderColor: '#F7F9FF'
                     }}>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-black" />
                    <span className="text-black"
                          style={{
                            fontFamily: 'SF Pro',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '140%',
                            letterSpacing: '0%',
                            color: '#000000'
                          }}>
                      Market & Limit Orders
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-black" />
                  </div>
                
                {/* Other Items */}
                <div className="flex items-center gap-3 p-4 cursor-pointer">
                  <Users className="w-5 h-5 text-black" />
                  <span className="text-black"
                        style={{
                          fontFamily: 'SF Pro',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '140%',
                          letterSpacing: '0%',
                          color: '#000000'
                        }}>
                    DCA Orders
                  </span>
                  </div>
                
                <div className="flex items-center gap-3 p-4 cursor-pointer">
                  <Smartphone className="w-5 h-5 text-black" />
                  <span className="text-black"
                        style={{
                          fontFamily: 'SF Pro',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '140%',
                          letterSpacing: '0%',
                          color: '#000000'
                        }}>
                    Dyadnum Crypto Card
                  </span>
                  </div>
                
                <div className="flex items-center gap-3 p-4 cursor-pointer">
                  <TrendingUp className="w-5 h-5 text-black" />
                  <span className="text-black"
                        style={{
                          fontFamily: 'SF Pro',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '140%',
                          letterSpacing: '0%',
                          color: '#000000'
                        }}>
                    Fiat ↔ Crypto
                  </span>
                </div>
                  </div>
                  </div>

            {/* Second Container - Precision Meets Simplicity */}
            <div className="w-[1150px] h-[392px] rounded-[21px] flex flex-col overflow-hidden"
                 style={{
                   background: '#000000'
                 }}>
              {/* Upper Section with Group 3.svg */}
              <div className="relative flex-1 overflow-hidden"
                   style={{
                     background: '#000'
                   }}>
                {/* Group 3.svg Background */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src="/Group 3.svg" 
                    alt="Diagonal gradient effect" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Light Border at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
              </div>
              
              {/* Lower Section with Content */}
              <div className="flex-1 p-8 flex flex-col justify-center"
                   style={{
                     background: '#000000'
                   }}>
                <h3 className="text-2xl font-bold mb-6 text-white">Precision Meets Simplicity</h3>
                <p className="text-gray-300 leading-relaxed">
                  Automate or act instantly with market orders, or lock in your price ahead of time with limits that
                  execute in under 5 milliseconds with auto pre-trade audits. No MetaMask headaches, no Telegram Bot
                  clutter, just seamless, lightning-fast execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-8xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="mb-4"
                style={{
                  fontFamily: 'Nohemi',
                  fontWeight: 600,
                  fontSize: '54px',
                  lineHeight: '100%',
                  letterSpacing: '-1%',
                  textTransform: 'capitalize',
                  background: 'linear-gradient(0deg, #F7F9FF 0%, #D0D5E0 100%, #D0D5E0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0px 1px 1px #FFFFFF) drop-shadow(0px 4px 15px #000000) drop-shadow(0px 4px 4px rgba(0,0,0,0.25))'
                }}>
              Additional Features
            </h2>
          </div>

          {/* Swiper Carousel */}
          <div className="relative px-4">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              centeredSlides={false}
              loop={false}
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              {/* Slide 1 - Adaptive 2FA Security */}
              <SwiperSlide>
                <div className="flex flex-col items-center gap-4 mx-auto w-full max-w-[467px] min-h-[400px] px-2 sm:px-4"
                     style={{
                       gap: '18px'
                     }}>
                  {/* Image Container */}
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                       style={{
                         borderRadius: '855.67px',
                         border: '2.57px solid transparent',
                         background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #F7F9FF, #D0D5E0) border-box'
                       }}>
                    <img 
                      src="/↪️Cryptic_ Post.svg" 
                      alt="Adaptive 2FA Security" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                        style={{
                          fontFamily: 'Nohemi',
                          fontWeight: 400,
                          fontSize: 'clamp(20px, 4vw, 32px)',
                          lineHeight: '120%',
                          letterSpacing: '0%',
                          textAlign: 'center',
                          verticalAlign: 'middle',
                          background: 'linear-gradient(0deg, #F7F9FF 0%, #D0D5E0 100%, #D0D5E0 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0px 1px 1px #FFFFFF)'
                        }}>
                      Adaptive 2FA Security
                    </h3>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg"
                       style={{
                         fontFamily: 'SF Pro',
                         fontWeight: 400,
                         lineHeight: '28px',
                         letterSpacing: '0%',
                         textAlign: 'center'
                       }}>
                      From critical actions to irreversible withdrawals, security scales with the moment. Fast when you need it, uncompromising when it matters.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 - Mass Adoption Optimized User Experience */}
              <SwiperSlide>
                <div className="flex flex-col items-center gap-4 mx-auto w-full max-w-[467px] min-h-[400px] px-2 sm:px-4"
                     style={{
                       gap: '18px'
                     }}>
                  {/* Image Container */}
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                       style={{
                         borderRadius: '855.67px',
                         border: '2.57px solid transparent',
                         background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #F7F9FF, #D0D5E0) border-box'
                       }}>
                    <img 
                      src="/Glass Effect.svg" 
                      alt="Mass Adoption Optimized User Experience" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                        style={{
                          fontFamily: 'Nohemi',
                          fontWeight: 400,
                          fontSize: 'clamp(20px, 4vw, 32px)',
                          lineHeight: '120%',
                          letterSpacing: '0%',
                          textAlign: 'center',
                          verticalAlign: 'middle',
                          background: 'linear-gradient(0deg, #F7F9FF 0%, #D0D5E0 100%, #D0D5E0 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0px 1px 1px #FFFFFF)'
                        }}>
                      Mass Adoption Optimized User Experience
                    </h3>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg"
                       style={{
                         fontFamily: 'SF Pro',
                         fontWeight: 400,
                         lineHeight: '28px',
                         letterSpacing: '0%',
                         textAlign: 'center'
                       }}>
                      Analyzes every interaction to adapt instantly guiding beginners, empowering intermediates, and serving veterans in one seamless experience that builds confidence, not friction Without compromise.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 - Multi-Chain Wallet Tracker */}
              <SwiperSlide>
                <div className="flex flex-col items-center gap-4 mx-auto w-full max-w-[467px] min-h-[400px] px-2 sm:px-4"
                     style={{
                       gap: '18px'
                     }}>
                  {/* Image Container */}
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                       style={{
                         borderRadius: '855.67px',
                         border: '2.57px solid transparent',
                         background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #F7F9FF, #D0D5E0) border-box'
                       }}>
                    <img 
                      src="/Group 48096286.svg" 
                      alt="Multi-Chain Wallet Tracker" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                        style={{
                          fontFamily: 'Nohemi',
                          fontWeight: 400,
                          fontSize: 'clamp(20px, 4vw, 32px)',
                          lineHeight: '120%',
                          letterSpacing: '0%',
                          textAlign: 'center',
                          verticalAlign: 'middle',
                          background: 'linear-gradient(0deg, #F7F9FF 0%, #D0D5E0 100%, #D0D5E0 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: 'drop-shadow(0px 1px 1px #FFFFFF)'
                        }}>
                      Multi-Chain Wallet Tracker
                    </h3>
                    <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg"
                       style={{
                         fontFamily: 'SF Pro',
                         fontWeight: 400,
                         lineHeight: '28px',
                         letterSpacing: '0%',
                         textAlign: 'center'
                       }}>
                      Wallet Tracker: Tracks Movements Across Supported Chains, Delivers Fully Customizable Priority Alerts, and Reveals Emerging Patterns Before They're Obvious.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      {/* <section className="section-darker py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Additional Benefits Across The Ecosystem</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass p-8 text-center bg-gray-900/50 border-gray-600">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Adaptive 2FA Security</h3>
                <p className="text-gray-300">
                  From critical actions to irreversible withdrawals, security scales with the moment. Fast when you need
                  it, uncompromising when it matters.
                </p>
              </CardContent>
            </Card>

            <Card className="glass p-8 text-center bg-gray-900/50 border-gray-600">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600">
                  <div className="text-white text-2xl font-bold">Loading...</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Mass Adoption Optimized User Experience</h3>
                <p className="text-gray-300">
                  Analyzes every interaction to adapt instantly guiding beginners, empowering intermediates, and serving
                  veterans in one seamless experience that builds confidence, not friction Without compromise.
                </p>
              </CardContent>
            </Card>

            <Card className="glass p-8 text-center bg-gray-900/50 border-gray-600">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-600">
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Multi-Chain Wallet Tracker</h3>
                <p className="text-gray-300">
                  Wallet Tracker: Tracks Movements Across Supported Chains, Delivers Fully Customizable Priority Alerts,
                  and Reveals Emerging Patterns Before They're Obvious.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Effortless Onboarding */}
      <section className="relative py-20 px-4">
        {/* Background SVG - Ref.svg */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/Ref.svg" 
            alt="Effortless Onboarding background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <h2 className="text-center mb-16"
              style={{
                fontFamily: 'Nohemi',
                fontWeight: 600,
                fontSize: '54px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                textTransform: 'capitalize',
                background: 'linear-gradient(0deg, #F7F9FF 0%, #D0D5E0 100%, #D0D5E0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0px 1px 1px #FFFFFF) drop-shadow(0px 4px 15px #000000) drop-shadow(0px 4px 4px rgba(0,0,0,0.25))'
              }}>
            Effortless Onboarding Via WhatsApp
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="mb-4"
                    style={{
                      fontFamily: 'Nohemi',
                      fontWeight: 400,
                      fontSize: '32px',
                      lineHeight: '120%',
                      letterSpacing: '0%',
                      textAlign: 'left',
                      verticalAlign: 'middle',
                      background: 'linear-gradient(0deg, #F7F9FF 0%, #D0D5E0 100%, #D0D5E0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0px 1px 1px #FFFFFF)'
                    }}>
                  Zero Drag Setup
                </h3>
                <p className="text-gray-300"
                   style={{
                     fontFamily: 'SF Pro',
                     fontWeight: 400,
                     fontSize: '18px',
                     lineHeight: '28px',
                     letterSpacing: '0%',
                     textAlign: 'left'
                   }}>
                  Create & Fund Your Wallet In Seconds, Guided By An Adaptive User Experience
                </p>
              </div>

              <div>
                <h3 className="mb-4"
                    style={{
                      fontFamily: 'Nohemi',
                      fontWeight: 400,
                      fontSize: '32px',
                      lineHeight: '120%',
                      letterSpacing: '0%',
                      textAlign: 'left',
                      verticalAlign: 'middle',
                      background: 'linear-gradient(0deg, #F7F9FF 0%, #D0D5E0 100%, #D0D5E0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0px 1px 1px #FFFFFF)'
                    }}>
                  Execute & Earn
                </h3>
                <p className="text-gray-300"
                   style={{
                     fontFamily: 'SF Pro',
                     fontWeight: 400,
                     fontSize: '18px',
                     lineHeight: '28px',
                     letterSpacing: '0%',
                     textAlign: 'left'
                   }}>
                  Trade Manually Or On Autopilot, While Passive Income From Curated Backed By Institutional-Grade
                </p>
              </div>

              <div>
                <h3 className="mb-4"
                    style={{
                      fontFamily: 'Nohemi',
                      fontWeight: 400,
                      fontSize: '32px',
                      lineHeight: '120%',
                      letterSpacing: '0%',
                      textAlign: 'left',
                      verticalAlign: 'middle',
                      background: 'linear-gradient(0deg, #F7F9FF 0%, #D0D5E0 100%, #D0D5E0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0px 1px 1px #FFFFFF)'
                    }}>
                  Turn Profits Into Fiat
                </h3>
                <p className="text-gray-300"
                   style={{
                     fontFamily: 'SF Pro',
                     fontWeight: 400,
                     fontSize: '18px',
                     lineHeight: '28px',
                     letterSpacing: '0%',
                     textAlign: 'left'
                   }}>
                  Seamlessly convert your crypto gains to traditional currency
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/Group 48096465.svg"
                alt="Phone Mockup"
                style={{
                  width: '554.9839477539062px',
                  height: '779.7871704101562px',
                  opacity: 1
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="relative py-20 px-4 mb-20">
        {/* Background SVG - Ref.svg */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/Ref.svg" 
            alt="Tokenomics background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="mb-8"
              style={{
                fontFamily: 'Nohemi',
                fontWeight: 600,
                fontSize: '54px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                textTransform: 'capitalize',
                background: 'linear-gradient(0deg, #F7F9FF 0%, #D0D5E0 100%, #D0D5E0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0px 1px 1px #FFFFFF) drop-shadow(0px 4px 15px #000000) drop-shadow(0px 4px 4px rgba(0,0,0,0.25))'
              }}>
            $DYNM Tokenomics
          </h2>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="text-gray-400">Contract:</span>
            <code className="bg-gray-800 px-3 py-1 rounded text-gray-300 border border-gray-600">0x123...4567</code>
            <Button
              size="sm"
              variant="outline"
              onClick={copyContract}
              className="glass bg-transparent border-gray-600 text-white hover:bg-white/10"
            >
              {copiedContract ? "Copied!" : <Copy className="w-4 h-4" />}
            </Button>
          </div>

          {/* Tokenomics Chart */}
          <div className="relative mx-auto mb-12 flex justify-center">
            <img
              src="/Group 48096467.svg"
              alt="Tokenomics Distribution Chart"
              className="object-contain"
              style={{
                width: '700px',
                height: '700px',
              }}
            />
          </div>

          {/* Infinite Horizontal Scrolling Cards */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-2" style={{ animation: 'scroll 20s linear infinite' }}>
              {/* First set of cards */}
              <div className="flex-shrink-0" style={{
                width: '573.4000244140625px',
                height: '196.4600067138672px',
                borderRadius: '21px',
                borderWidth: '1.33px',
                paddingTop: '16px',
                paddingRight: '32px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                background: '#DDDDDD3D',
                border: '1.33px solid',
                borderImageSource: 'linear-gradient(162.62deg, #FFFFFF 12.36%, rgba(255, 255, 255, 0.6) 32.02%, rgba(255, 255, 255, 0) 38.89%, rgba(255, 255, 255, 0) 51.76%, rgba(255, 255, 255, 0.6) 58.23%, rgba(255, 255, 255, 0.8) 77.89%)',
                backdropFilter: 'blur(6px)',
                boxShadow: '2px 4px 8px 0px #00000014'
              }}>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2 text-white">Buy & Sell Tax</h3>
                  <p className="text-sm text-gray-300">5% for Marketing, Development & Scaling</p>
                </div>
              </div>

              <div className="flex-shrink-0" style={{
                width: '573.4000244140625px',
                height: '196.4600067138672px',
                borderRadius: '21px',
                borderWidth: '1.33px',
                paddingTop: '16px',
                paddingRight: '32px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                background: '#DDDDDD3D',
                border: '1.33px solid',
                borderImageSource: 'linear-gradient(162.62deg, #FFFFFF 12.36%, rgba(255, 255, 255, 0.6) 32.02%, rgba(255, 255, 255, 0) 38.89%, rgba(255, 255, 255, 0) 51.76%, rgba(255, 255, 255, 0.6) 58.23%, rgba(255, 255, 255, 0.8) 77.89%)',
                backdropFilter: 'blur(6px)',
                boxShadow: '2px 4px 8px 0px #00000014'
              }}>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2 text-white">Total Supply</h3>
                  <p className="text-sm text-gray-300">100,000,000</p>
                </div>
              </div>

              <div className="flex-shrink-0" style={{
                width: '573.4000244140625px',
                height: '196.4600067138672px',
                borderRadius: '21px',
                borderWidth: '1.33px',
                paddingTop: '16px',
                paddingRight: '32px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                background: '#DDDDDD3D',
                border: '1.33px solid',
                borderImageSource: 'linear-gradient(162.62deg, #FFFFFF 12.36%, rgba(255, 255, 255, 0.6) 32.02%, rgba(255, 255, 255, 0) 38.89%, rgba(255, 255, 255, 0) 51.76%, rgba(255, 255, 255, 0.6) 58.23%, rgba(255, 255, 255, 0.8) 77.89%)',
                backdropFilter: 'blur(6px)',
                boxShadow: '2px 4px 8px 0px #00000014'
              }}>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2 text-white">Liquidity Pool</h3>
                  <p className="text-sm text-gray-300">Locked & Renounced via UNCX Network</p>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0" style={{
                width: '573.4000244140625px',
                height: '196.4600067138672px',
                borderRadius: '21px',
                borderWidth: '1.33px',
                paddingTop: '16px',
                paddingRight: '32px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                background: '#DDDDDD3D',
                border: '1.33px solid',
                borderImageSource: 'linear-gradient(162.62deg, #FFFFFF 12.36%, rgba(255, 255, 255, 0.6) 32.02%, rgba(255, 255, 255, 0) 38.89%, rgba(255, 255, 255, 0) 51.76%, rgba(255, 255, 255, 0.6) 58.23%, rgba(255, 255, 255, 0.8) 77.89%)',
                backdropFilter: 'blur(6px)',
                boxShadow: '2px 4px 8px 0px #00000014'
              }}>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2 text-white">Buy & Sell Tax</h3>
                  <p className="text-sm text-gray-300">5% for Marketing, Development & Scaling</p>
                </div>
              </div>

              <div className="flex-shrink-0" style={{
                width: '573.4000244140625px',
                height: '196.4600067138672px',
                borderRadius: '21px',
                borderWidth: '1.33px',
                paddingTop: '16px',
                paddingRight: '32px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                background: '#DDDDDD3D',
                border: '1.33px solid',
                borderImageSource: 'linear-gradient(162.62deg, #FFFFFF 12.36%, rgba(255, 255, 255, 0.6) 32.02%, rgba(255, 255, 255, 0) 38.89%, rgba(255, 255, 255, 0) 51.76%, rgba(255, 255, 255, 0.6) 58.23%, rgba(255, 255, 255, 0.8) 77.89%)',
                backdropFilter: 'blur(6px)',
                boxShadow: '2px 4px 8px 0px #00000014'
              }}>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2 text-white">Total Supply</h3>
                  <p className="text-sm text-gray-300">100,000,000</p>
                </div>
              </div>

              <div className="flex-shrink-0" style={{
                width: '573.4000244140625px',
                height: '196.4600067138672px',
                borderRadius: '21px',
                borderWidth: '1.33px',
                paddingTop: '16px',
                paddingRight: '32px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                background: '#DDDDDD3D',
                border: '1.33px solid',
                borderImageSource: 'linear-gradient(162.62deg, #FFFFFF 12.36%, rgba(255, 255, 255, 0.6) 32.02%, rgba(255, 255, 255, 0) 38.89%, rgba(255, 255, 255, 0) 51.76%, rgba(255, 255, 255, 0.6) 58.23%, rgba(255, 255, 255, 0.8) 77.89%)',
                backdropFilter: 'blur(6px)',
                boxShadow: '2px 4px 8px 0px #00000014'
              }}>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2 text-white">Liquidity Pool</h3>
                  <p className="text-sm text-gray-300">Locked & Renounced via UNCX Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Base Roadmap</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-700"></div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                {
                  phase: "Q1 Phase",
                  title: "Expanding The Impossible",
                  items: [
                    "Early WhatsApp Features Access",
                    "Exclusive WA Partnership",
                    "Intuitive User Experience",
                    "Non-Custodial Wallet",
                    "Account Support",
                    "Gamification Support",
                    "AI Assistant Support",
                    "Multi-Chain Portfolio",
                    "Seamless WA Trading",
                  ],
                  funding: "Angel Round Completed - $500K",
                },
                {
                  phase: "Q2 Phase",
                  title: "Emerge From Stealth",
                  items: [
                    "Refined Vision & Strategy",
                    "Strategic Banking Partnership",
                    "Card Issuing Partnership",
                    "Data Ascender UNIX",
                    "Base Support",
                    "Uni Praxis",
                    "AI Enhancement",
                    "Cross Chain Bridge",
                    "Website & Socials Launch",
                  ],
                  funding: "Non-Dilutive Grants - $500K",
                },
                {
                  phase: "Q3 Phase",
                  title: "$DYNM Token Launch",
                  items: [
                    "WhatsApp Mini App",
                    "Tier 1 CEX Listings",
                    "Gamified Airdrop Campaign",
                    "Text To Trade",
                    "Fiat ↔ Crypto",
                    "Dyadnum AI",
                    "Yield Farming Integration",
                    "Targeted Multi-Region Rollout",
                  ],
                  funding: "Trade Feature Elevation",
                },
                {
                  phase: "Q4 Phase",
                  title: "Gamified Airdrop Campaign",
                  items: [
                    "Celebrity Partnerships",
                    "Dyadnum 2.0",
                    "New York Billboard Campaign",
                    "RWA Integration",
                    "Mass Adoption Campaign",
                    "More To Come!",
                  ],
                  funding: "Institutional Onboarding",
                },
                {
                  phase: "Q5 Phase",
                  title: "Celebrity Partnerships",
                  items: [
                    "Global Expansion",
                    "Enterprise Solutions",
                    "Advanced Trading Tools",
                    "DeFi Protocol Integration",
                    "Mobile App Launch",
                  ],
                  funding: "Series A Funding",
                },
              ].map((phase, index) => (
                <Card key={index} className="glass p-6 relative bg-gray-800/50 border-gray-600">
                  {/* Timeline Dot */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full border-4 border-black"></div>

                  <CardContent className="p-0">
                    <Badge variant="secondary" className="mb-4 bg-gray-700 text-gray-300">
                      {phase.phase}
                    </Badge>
                    <h3 className="text-lg font-bold mb-4 text-white">{phase.title}</h3>
                    <ul className="space-y-2 text-sm text-gray-300 mb-4">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Badge variant="outline" className="text-xs bg-gray-700 text-gray-300 border-gray-600">
                      {phase.funding}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Tweets */}
      <section className="section-dark py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">$DYNM Tweets</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((tweet) => (
              <Card key={tweet} className="glass p-6 bg-gray-800/50 border-gray-600">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">CEO of Dyadnum</p>
                      <p className="text-sm text-gray-400">#Dyadnum</p>
                    </div>
                  </div>
                  <p className="text-sm mb-4 text-gray-300">
                    CEO of Dyadnum ❤️ A heartfelt 🙏 thank you to everyone who has support, we are LIVE now! Your belief
                    in our vision fuels our innovation. Let's continue to push the boundaries together! 🚀Aq
                  </p>
                  <Button variant="ghost" size="sm" className="text-green-400 hover:bg-green-400/10">
                    Read X <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-darker py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Visit The Dyadnum Blog</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Evolution of 3D Mapping: A Journey from Inception to NeoTech's Advanced Innovations",
                category: "Perfect Blog Post",
              },
              {
                title: "Understanding DeFi Protocols: A Comprehensive Guide to Decentralized Finance",
                category: "Technical Guide",
              },
              {
                title: "WhatsApp Trading: The Future of Accessible Cryptocurrency Trading",
                category: "Industry Insights",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="glass overflow-hidden group cursor-pointer hover:scale-105 transition-transform bg-gray-800/50 border-gray-600"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 bg-gray-700 text-gray-300">
                    {post.category}
                  </Badge>
                  <h3 className="font-bold mb-4 group-hover:text-green-400 transition-colors text-white">
                    {post.title}
                  </h3>
                  <Button variant="ghost" size="sm" className="text-green-400 p-0 hover:bg-green-400/10">
                    Read article <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-dark py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">FAQs</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="glass rounded-lg px-6 bg-gray-800/50 border-gray-600">
              <AccordionTrigger className="text-left text-white hover:text-green-400">
                What is Dyadnum built for?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Dyadnum is built for the billions who were never reached, not because they weren't ready, but because no
                product ever met them where they already were. It's for first-time traders and seasoned veterans alike.
                For the curious, the committed, and the ones who don't even know they're next.
                <br />
                <br />
                If WhatsApp is the front door, Dyadnum is what's inside.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="glass rounded-lg px-6 bg-gray-800/50 border-gray-600">
              <AccordionTrigger className="text-left text-white hover:text-green-400">
                Why isn't there a typical bot startup manual for Dyadnum?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Because Dyadnum isn't a typical bot. We're building a comprehensive trading ecosystem that integrates
                seamlessly with WhatsApp, providing institutional-grade tools through a familiar interface.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="glass rounded-lg px-6 bg-gray-800/50 border-gray-600">
              <AccordionTrigger className="text-left text-white hover:text-green-400">
                Isn't Crypto trading against WhatsApp's Term of service?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                We operate within WhatsApp's guidelines by providing educational content and facilitating connections to
                external trading platforms. All actual trading occurs on compliant, regulated exchanges.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="glass rounded-lg px-6 bg-gray-800/50 border-gray-600">
              <AccordionTrigger className="text-left text-white hover:text-green-400">
                What's the max amount of funds I can hold in Dyadnum?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Fund limits vary based on verification level and regulatory requirements in your jurisdiction. Higher
                limits are available for verified users with enhanced security measures.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="glass rounded-lg px-6 bg-gray-800/50 border-gray-600">
              <AccordionTrigger className="text-left text-white hover:text-green-400">
                How secure is Dyadnum?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Dyadnum employs bank-grade security with adaptive 2FA, non-custodial wallet architecture, and real-time
                fraud detection. Your funds remain under your control at all times.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-gray-800 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold">
                  ⧗
                </div>
                <span className="text-xl font-bold text-white">Dyadnum</span>
              </div>
              <p className="text-gray-400 mb-6">
                Dyadnum brings crypto into WhatsApp — the world's most personal, universal messaging app. While Telegram
                bots paved the power of native, in-chat trading, Dyadnum isn't converting crypto — it's distributing it
                where people already live, making adoption simple, direct, and human-first.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Socials</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">
                  X
                </a>
                <a href="#" className="block hover:text-white transition-colors">
                  Telegram
                </a>
                <a href="#" className="block hover:text-white transition-colors">
                  WhatsApp
                </a>
                <a href="#" className="block hover:text-white transition-colors">
                  DexScreener
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">
                  Docs
                </a>
                <a href="#" className="block hover:text-white transition-colors">
                  Pitch Deck
                </a>
                <a href="#" className="block hover:text-white transition-colors">
                  Dyadnum
                </a>
                <a href="#" className="block hover:text-white transition-colors">
                  FAQ
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Apps</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">
                  Strategic Sale
                </a>
                <a href="#" className="block hover:text-white transition-colors">
                  Claim
                </a>
                <a href="#" className="block hover:text-white transition-colors">
                  Staking
                </a>
                <a href="#" className="block hover:text-white transition-colors">
                  Terminal
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
            <p className="text-sm text-gray-400">© 2025 Dyadnum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
