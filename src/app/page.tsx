"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, CheckCircle, Sparkles, Star, Zap, Shield } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="largeSmall"
      background="grid"
      cardStyle="outline"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Moes Webpages"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" }
          ]}
          button={{ text: "Get Started", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Build Your Digital Presence"
          description="Stunning, high-converting websites designed specifically for your business. We create web experiences that turn visitors into customers."
          tag="Professional Web Design"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Start Your Project", href: "#pricing" },
            { text: "View Portfolio", href: "#portfolio" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/a-stunning-modern-website-design-showcas-1773871435640-0efe0df2.png"
          imageAlt="Web design portfolio showcase"
          showBlur={true}
          showDimOverlay={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSixteen
          title="Services Built for Results"
          description="We offer comprehensive web design solutions tailored to help your business succeed online. From stunning interfaces to optimized performance, we handle every detail."
          tag="What We Offer"
          tagIcon={CheckCircle}
          tagAnimation="blur-reveal"
          negativeCard={{
            items: [
              "Outdated websites",              "Poor user experience",              "Slow loading times",              "No mobile optimization"
            ]
          }}
          positiveCard={{
            items: [
              "Modern, responsive design",              "Intuitive navigation",              "Lightning-fast performance",              "SEO optimized"
            ]
          }}
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[{ text: "Learn More", href: "#contact" }]}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardOne
          title="Recent Projects"
          description="Explore our latest web design work showcasing diverse industries and innovative solutions."
          tag="Portfolio Showcase"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "p1",              name: "Fashion E-Commerce Store",              price: "15K - 25K",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/a-beautiful-e-commerce-website-design-sh-1773871436987-0f73164a.png",              imageAlt: "Fashion ecommerce website design"
            },
            {
              id: "p2",              name: "SaaS Platform Dashboard",              price: "20K - 30K",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/a-professional-saas-application-website--1773871435701-de379703.png",              imageAlt: "SaaS application interface design"
            },
            {
              id: "p3",              name: "Creative Agency Site",              price: "12K - 20K",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/a-creative-agency-website-design-with-bo-1773871439530-40a918f0.png",              imageAlt: "Creative agency portfolio website"
            }
          ]}
          buttons={[{ text: "View All Projects", href: "#contact" }]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Clients Say"
          description="Real feedback from businesses we've helped transform their online presence."
          tag="Client Success Stories"
          tagIcon={Award}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          showRating={true}
          animationType="blur-reveal"
          testimonials={[
            {
              id: "t1",              name: "Sarah Johnson",              handle: "Founder & CEO",              rating: 5,
              testimonial: "Moes Webpages transformed our online store. Our sales increased by 150% within three months. Highly recommend!",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/a-professional-headshot-photo-of-a-happy-1773871434925-3490577d.png",              imageAlt: "Sarah Johnson headshot"
            },
            {
              id: "t2",              name: "Michael Chen",              handle: "Product Manager",              rating: 5,
              testimonial: "The team delivered exactly what we needed. Professional, creative, and always responsive to feedback.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/a-professional-headshot-photo-of-a-happy-1773871435292-03503ed1.png",              imageAlt: "Michael Chen headshot"
            },
            {
              id: "t3",              name: "Emily Rodriguez",              handle: "Marketing Director",              rating: 5,
              testimonial: "Our new website is beautiful and has dramatically improved our customer engagement. Worth every penny!",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/a-professional-headshot-photo-of-a-smili-1773871434970-ead8e624.png",              imageAlt: "Emily Rodriguez headshot"
            },
            {
              id: "t4",              name: "David Kim",              handle: "CEO",              rating: 5,
              testimonial: "Best investment we made this year. The design is stunning and the technical execution is flawless.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/a-professional-headshot-photo-of-a-male--1773871435377-1433a94c.png",              imageAlt: "David Kim headshot"
            },
            {
              id: "t5",              name: "Jessica Martinez",              handle: "Brand Manager",              rating: 5,
              testimonial: "They understood our brand vision instantly and delivered beyond expectations. Simply outstanding!",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/a-professional-headshot-photo-of-a-femal-1773871434368-4f83f086.png",              imageAlt: "Jessica Martinez headshot"
            },
            {
              id: "t6",              name: "James Wilson",              handle: "Operations Director",              rating: 5,
              testimonial: "Professional, creative, and reliable. This team sets the standard for web design excellence.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/a-professional-headshot-photo-of-a-male--1773871435242-8a58bbd1.png",              imageAlt: "James Wilson headshot"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Transparent Pricing"
          description="Choose the perfect package for your business needs. All plans include ongoing support and updates."
          tag="Investment Options"
          tagIcon={Zap}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="scale-rotate"
          plans={[
            {
              id: "basic",              badge: "Great Start",              badgeIcon: Sparkles,
              price: "$500",              subtitle: "Perfect for small businesses",              features: [
                "Basic webpage setup",                "Mobile responsive design",                "Basic SEO optimization",                "Contact form integration",                "Free domain setup"
              ]
            },
            {
              id: "addons",              badge: "Add-Ons Available",              badgeIcon: Star,
              price: "$250",              subtitle: "Enhance your package",              features: [
                "Additional pages",                "Advanced features",                "Custom integrations",                "E-commerce setup",                "Performance optimization"
              ]
            },
            {
              id: "full",              badge: "Best Value",              badgeIcon: Award,
              price: "$1,500 + $20/mo",              subtitle: "Complete web solution",              features: [
                "Full package website",                "Unlimited pages",                "Custom features & API",                "Enterprise SEO strategy",                "12 months support",                "Monthly maintenance & updates"
              ]
            }
          ]}
          buttons={[{ text: "Get Started", href: "#contact" }]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="We've had the privilege of working with innovative companies and organizations that trust us with their digital presence."
          tag="Proven Track Record"
          tagIcon={Shield}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          names={[
            "Google",            "Microsoft",            "Apple",            "Amazon",            "Slack",            "Shopify",            "Netflix",            "Uber"
          ]}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/google-company-logo-in-clean-recognizabl-1773871434226-9ecdde71.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/microsoft-company-logo-featuring-the-ico-1773871435031-7208927b.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/apple-company-logo-showing-the-iconic-ap-1773871434291-bc1750bf.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/amazon-company-logo-with-the-characteris-1773871434982-970b8b6b.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/slack-company-logo-featuring-the-colorfu-1773871434332-ed7abcb0.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/shopify-company-logo-with-the-recognizab-1773871435005-ac52f5ca.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/netflix-company-logo-with-the-distinctiv-1773871435339-7ac3842d.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B2WBbWaQPKGBUH3yQyyxilG5F9/uber-company-logo-showing-the-minimalist-1773871435213-64376517.png"
          ]}
          showCard={true}
          speed={40}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Everything you need to know about our web design services and process."
          faqs={[
            {
              id: "q1",              title: "How long does a website project take?",              content: "Most projects take 1-2 days depending on changes made after the initial site is made. "
            },
            {
              id: "q2",              title: "Do you provide ongoing maintenance?",              content: "Yes! For an additional fee of $20/month!"
            },
            {
              id: "q3",              title: "Can you redesign my existing website?",              content: "Absolutely. We specialize in modernizing outdated websites while preserving SEO rankings and important functionality."
            },
            {
              id: "q4",              title: "What if I need changes after launch?",              content: "We include unlimited revisions during the design phase. After launch, changes are covered under our maintenance plans."
            }
          ]}
          textPosition="left"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          showCard={true}
          buttons={[{ text: "Contact Us", href: "#contact" }]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Moes Webpages"
          copyrightText="© 2025 Moes Webpages. All rights reserved."
          columns={[
            {
              title: "Services",              items: [
                { label: "Web Design", href: "#services" },
                { label: "E-Commerce", href: "#services" },
                { label: "SEO Optimization", href: "#services" },
                { label: "Maintenance", href: "#services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact", href: "#contact" },
                { label: "Support", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}