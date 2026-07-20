"use client";

import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/Button";
import { WhatsAppIcon, MailIcon, MapPinIcon, PhoneIcon } from "../icons";
import { siteConfig, MAPS_EMBED_URL } from "@/data/siteConfig";
import { INTEREST_OPTIONS } from "@/constants";
import {
  buildWhatsAppURL,
  buildConsultationWhatsAppMessage,
  buildConsultationEmailURL,
} from "@/lib/enquiry";

// Validation schema using Zod
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").nonempty("Name is required"),
  phone: z.string().min(8, "Valid phone number is required").nonempty("WhatsApp number is required"),
  interest: z.string().nonempty("Interest category is required"),
  message: z.string().min(5, "Project details must be at least 5 characters").nonempty("Message is required"),
});

type FormData = z.infer<typeof schema>;

export const ContactSection: FC = () => {
  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      interest: INTEREST_OPTIONS[0],
    },
  });

  // Handle WhatsApp submission
  const onSubmitWhatsApp = async () => {
    const isValid = await trigger();
    if (!isValid) return;

    const data = getValues();
    const message = buildConsultationWhatsAppMessage(data);
    const waURL = buildWhatsAppURL(message);
    window.open(waURL, "_blank");
  };

  // Handle Email submission
  const onSubmitEmail = async () => {
    const isValid = await trigger();
    if (!isValid) return;

    const data = getValues();
    const gmailURL = buildConsultationEmailURL(data);
    window.open(gmailURL, "_blank");
  };

  return (
    <section id="contact" className="section contact-section py-[120px] relative bg-bg-primary">
      <div className="container max-w-container mx-auto px-6">
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-[55%_45%] gap-[60px]">
          
          {/* Left Side: Consultation Form */}
          <div className="contact-form-box">
            <span className="block text-[0.8rem] uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">
              Submit Enquiry
            </span>
            <h2 className="font-heading text-[2.75rem] font-semibold leading-[1.2] tracking-tight mb-4 text-white">
              Schedule a Consultation
            </h2>
            <div className="w-[60px] h-[2px] bg-accent-gold mb-8" />
            <p className="contact-intro text-text-gray font-light text-[1.05rem] leading-[1.8] mb-8">
              Let&apos;s collaborate on styling your home, showroom, or project. Fill out this quick inquiry and choose how you&apos;d like us to respond — WhatsApp or Email.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group flex flex-col">
                  <label htmlFor="form-name" className="text-[0.8rem] uppercase tracking-[0.1em] text-text-gray mb-2.5 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    placeholder="John Doe"
                    className="bg-bg-surface border border-white/5 rounded-lg p-[16px_20px] color-white text-[0.95rem] transition-fast focus:outline-none focus:border-accent-gold focus:shadow-[0_0_8px_rgba(214,168,79,0.15)] text-white"
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-1.5">{errors.name.message}</span>
                  )}
                </div>

                <div className="form-group flex flex-col">
                  <label htmlFor="form-phone" className="text-[0.8rem] uppercase tracking-[0.1em] text-text-gray mb-2.5 font-medium">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="form-phone"
                    placeholder="+91 98765 43210"
                    className="bg-bg-surface border border-white/5 rounded-lg p-[16px_20px] color-white text-[0.95rem] transition-fast focus:outline-none focus:border-accent-gold focus:shadow-[0_0_8px_rgba(214,168,79,0.15)] text-white"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs mt-1.5">{errors.phone.message}</span>
                  )}
                </div>
              </div>

              <div className="form-group flex flex-col">
                <label htmlFor="form-interest" className="text-[0.8rem] uppercase tracking-[0.1em] text-text-gray mb-2.5 font-medium">
                  Interested In
                </label>
                <select
                  id="form-interest"
                  className="bg-bg-surface border border-white/5 rounded-lg p-[16px_20px] color-white text-[0.95rem] transition-fast focus:outline-none focus:border-accent-gold focus:shadow-[0_0_8px_rgba(214,168,79,0.15)] text-white select-custom"
                  {...register("interest")}
                >
                  {INTEREST_OPTIONS.map((option) => (
                    <option key={option} value={option} className="bg-bg-surface text-white">
                      {option}
                    </option>
                  ))}
                </select>
                {errors.interest && (
                  <span className="text-red-500 text-xs mt-1.5">{errors.interest.message}</span>
                )}
              </div>

              <div className="form-group flex flex-col">
                <label htmlFor="form-message" className="text-[0.8rem] uppercase tracking-[0.1em] text-text-gray mb-2.5 font-medium">
                  Describe Your Project / Sizing Requirement
                </label>
                <textarea
                  id="form-message"
                  rows={4}
                  placeholder="Share any specific design codes, quantities or ceiling heights..."
                  className="bg-bg-surface border border-white/5 rounded-lg p-[16px_20px] color-white text-[0.95rem] transition-fast focus:outline-none focus:border-accent-gold focus:shadow-[0_0_8px_rgba(214,168,79,0.15)] text-white resize-none"
                  {...register("message")}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1.5">{errors.message.message}</span>
                )}
              </div>

              <div className="form-submit-group grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  type="button"
                  onClick={onSubmitWhatsApp}
                  variant="whatsapp"
                  className="w-full py-4 text-[0.8rem]"
                  icon={<WhatsAppIcon className="w-[18px] h-[18px]" />}
                >
                  Send via WhatsApp
                </Button>
                <Button
                  type="button"
                  onClick={onSubmitEmail}
                  variant="email-outline"
                  className="w-full py-4 text-[0.8rem]"
                  icon={<MailIcon className="w-[18px] h-[18px]" />}
                >
                  Send via Email
                </Button>
              </div>
            </form>
          </div>

          {/* Right Side: Details & Google Map */}
          <div className="contact-details-box flex flex-col gap-[30px]">
            <div className="contact-card bg-bg-secondary border border-white/[0.03] p-10 rounded-card">
              <h3 className="contact-card-title font-heading text-[1.35rem] font-semibold text-white mb-6">
                Corporate Showroom
              </h3>
              <div className="contact-info-list flex flex-col gap-5">
                <div className="contact-info-item flex items-start gap-4 text-text-gray text-[0.95rem]">
                  <MapPinIcon className="text-accent-gold flex-shrink-0 w-5 h-5 mt-0.5" />
                  <span className="line-height-[1.5]">{siteConfig.contact.address}</span>
                </div>
                <div className="contact-info-item flex items-start gap-4 text-text-gray text-[0.95rem]">
                  <PhoneIcon className="text-accent-gold flex-shrink-0 w-5 h-5 mt-0.5" />
                  <span className="line-height-[1.5]">{siteConfig.contact.phone}</span>
                </div>
                <div className="contact-info-item flex items-start gap-4 text-text-gray text-[0.95rem]">
                  <MailIcon className="text-accent-gold flex-shrink-0 w-5 h-5 mt-0.5" />
                  <span className="line-height-[1.5]">{siteConfig.contact.email}</span>
                </div>
              </div>
            </div>

            {/* Dark Styled Map Embed */}
            <div className="map-wrapper relative rounded-image overflow-hidden h-[260px] border border-white/5">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full invert-[0.9] hue-rotate-[180deg] grayscale-[1] contrast-[0.9]"
              />
              <div className="map-overlay absolute inset-0 bg-[#0F0F0F]/15 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
