"use client";

import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/Button";
import { WhatsAppIcon, MailIcon, MapPinIcon, PhoneIcon } from "../icons";
import { siteConfig, MAPS_EMBED_URL } from "@/data/siteConfig";
import {
  PRODUCT_CATEGORY_OPTIONS,
  BUYER_TYPE_OPTIONS,
  ORDER_VOLUME_OPTIONS,
  DESTINATION_COUNTRY_OPTIONS,
} from "@/constants";
import {
  buildWhatsAppURL,
  buildConsultationWhatsAppMessage,
  buildConsultationEmailURL,
} from "@/lib/enquiry";

// B2B RFQ Validation schema
const schema = z.object({
  companyName: z.string().min(2, "Company name is required").nonempty("Company name is required"),
  contactPerson: z.string().min(2, "Contact person name is required").nonempty("Contact person is required"),
  email: z.string().email("Valid business email is required").nonempty("Email is required"),
  phone: z.string().min(8, "Valid phone number is required").nonempty("Phone/WhatsApp number is required"),
  buyerType: z.string().nonempty("Buyer type is required"),
  productCategory: z.string().nonempty("Product category is required"),
  orderVolume: z.string().nonempty("Order volume is required"),
  destinationCountry: z.string().nonempty("Destination country is required"),
  message: z.string().min(10, "Project brief must be at least 10 characters").nonempty("Project brief is required"),
});

type FormData = z.infer<typeof schema>;

const inputStyles =
  "bg-bg-surface border border-white/5 rounded-lg p-[14px_18px] text-[0.95rem] transition-fast focus:outline-none focus:border-accent-gold focus:shadow-[0_0_8px_rgba(214,168,79,0.15)] text-white w-full";

const labelStyles =
  "text-[0.75rem] uppercase tracking-[0.12em] text-text-gray mb-2 font-medium block";

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
      buyerType: BUYER_TYPE_OPTIONS[0],
      productCategory: PRODUCT_CATEGORY_OPTIONS[0],
      orderVolume: ORDER_VOLUME_OPTIONS[0],
      destinationCountry: DESTINATION_COUNTRY_OPTIONS[0],
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
    <section id="rfq-form" className="section contact-section py-[60px] sm:py-[80px] lg:py-[120px] relative bg-bg-primary">
      <div className="container max-w-container mx-auto px-6">
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-[58%_42%] gap-8 sm:gap-[40px] lg:gap-[60px]">

          {/* Left Side: B2B RFQ Form */}
          <div className="contact-form-box">
            <span className="block text-[0.8rem] uppercase tracking-[0.3em] text-accent-gold font-semibold mb-3">
              Submit RFQ
            </span>
            <h2 className="font-heading text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold leading-[1.2] tracking-tight mb-4 text-white">
              Request a Quote — B2B Export Enquiry
            </h2>
            <div className="w-[60px] h-[2px] bg-accent-gold mb-8" />
            <p className="contact-intro text-text-gray font-light text-[1.025rem] leading-[1.8] mb-8">
              Submit your sourcing requirements below. Our export desk will respond within 24 hours with catalogue access, indicative pricing, and a dedicated account manager assignment.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              {/* Row 1: Company + Contact Person */}
              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group flex flex-col">
                  <label htmlFor="rfq-company" className={labelStyles}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="rfq-company"
                    placeholder="Your Company Name"
                    className={inputStyles}
                    {...register("companyName")}
                  />
                  {errors.companyName && (
                    <span className="text-red-500 text-xs mt-1.5">{errors.companyName.message}</span>
                  )}
                </div>

                <div className="form-group flex flex-col">
                  <label htmlFor="rfq-contact" className={labelStyles}>
                    Contact Person
                  </label>
                  <input
                    type="text"
                    id="rfq-contact"
                    placeholder="Full Name"
                    className={inputStyles}
                    {...register("contactPerson")}
                  />
                  {errors.contactPerson && (
                    <span className="text-red-500 text-xs mt-1.5">{errors.contactPerson.message}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group flex flex-col">
                  <label htmlFor="rfq-email" className={labelStyles}>
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="rfq-email"
                    placeholder="name@company.com"
                    className={inputStyles}
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1.5">{errors.email.message}</span>
                  )}
                </div>

                <div className="form-group flex flex-col">
                  <label htmlFor="rfq-phone" className={labelStyles}>
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    id="rfq-phone"
                    placeholder="+1 (555) 000-0000"
                    className={inputStyles}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs mt-1.5">{errors.phone.message}</span>
                  )}
                </div>
              </div>

              {/* Row 3: Buyer Type + Product Category */}
              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group flex flex-col">
                  <label htmlFor="rfq-buyer-type" className={labelStyles}>
                    Buyer Type
                  </label>
                  <select
                    id="rfq-buyer-type"
                    className={`${inputStyles} select-custom`}
                    {...register("buyerType")}
                  >
                    {BUYER_TYPE_OPTIONS.map((option) => (
                      <option key={option} value={option} className="bg-bg-surface text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.buyerType && (
                    <span className="text-red-500 text-xs mt-1.5">{errors.buyerType.message}</span>
                  )}
                </div>

                <div className="form-group flex flex-col">
                  <label htmlFor="rfq-product-category" className={labelStyles}>
                    Product Category
                  </label>
                  <select
                    id="rfq-product-category"
                    className={`${inputStyles} select-custom`}
                    {...register("productCategory")}
                  >
                    {PRODUCT_CATEGORY_OPTIONS.map((option) => (
                      <option key={option} value={option} className="bg-bg-surface text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.productCategory && (
                    <span className="text-red-500 text-xs mt-1.5">{errors.productCategory.message}</span>
                  )}
                </div>
              </div>

              {/* Row 4: Order Volume + Destination Country */}
              <div className="form-row grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-group flex flex-col">
                  <label htmlFor="rfq-volume" className={labelStyles}>
                    Estimated Order Volume
                  </label>
                  <select
                    id="rfq-volume"
                    className={`${inputStyles} select-custom`}
                    {...register("orderVolume")}
                  >
                    {ORDER_VOLUME_OPTIONS.map((option) => (
                      <option key={option} value={option} className="bg-bg-surface text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.orderVolume && (
                    <span className="text-red-500 text-xs mt-1.5">{errors.orderVolume.message}</span>
                  )}
                </div>

                <div className="form-group flex flex-col">
                  <label htmlFor="rfq-country" className={labelStyles}>
                    Destination Country
                  </label>
                  <select
                    id="rfq-country"
                    className={`${inputStyles} select-custom`}
                    {...register("destinationCountry")}
                  >
                    {DESTINATION_COUNTRY_OPTIONS.map((option) => (
                      <option key={option} value={option} className="bg-bg-surface text-white">
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.destinationCountry && (
                    <span className="text-red-500 text-xs mt-1.5">{errors.destinationCountry.message}</span>
                  )}
                </div>
              </div>

              {/* Project Brief */}
              <div className="form-group flex flex-col">
                <label htmlFor="rfq-message" className={labelStyles}>
                  Project Brief / Requirements
                </label>
                <textarea
                  id="rfq-message"
                  rows={4}
                  placeholder="Describe your requirements, reference designs, material preferences, custom specifications, or attach CAD drawing references..."
                  className={`${inputStyles} resize-none`}
                  {...register("message")}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1.5">{errors.message.message}</span>
                )}
              </div>

              {/* CAD Upload Note */}
              <div className="bg-bg-surface border border-white/[0.04] rounded-xl px-5 py-3.5">
                <p className="text-text-gray text-[0.825rem] font-light leading-[1.6]">
                  <span className="text-accent-gold font-medium">CAD / Spec Sheet Upload:</span>{" "}
                  To submit CAD drawings (.dwg, .dxf), tech packs, or spec sheets, please attach them directly via WhatsApp or Email after submitting this form. Supported formats: PDF, DWG, DXF, AI, PNG, JPG.
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="form-submit-group grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
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
                Export Office
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

            {/* Export Capabilities Summary */}
            <div className="bg-bg-secondary border border-white/[0.03] p-8 rounded-card">
              <h3 className="font-heading text-[1.1rem] font-semibold text-white mb-5 tracking-[0.04em]">
                Export Capabilities
              </h3>
              <div className="space-y-3">
                {[
                  "OEM & ODM Custom Manufacturing",
                  "Factory Audits & AQL Inspection",
                  "ISPM-15 Timber Crate Packaging",
                  "UL / CE / UKCA Compliance",
                  "Sea & Air Freight Coordination",
                  "20+ Countries Served",
                ].map((capability) => (
                  <div key={capability} className="flex items-center gap-3 text-text-gray text-[0.875rem]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold flex-shrink-0" />
                    <span>{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark Styled Map Embed */}
            <div className="map-wrapper relative rounded-image overflow-hidden h-[220px] border border-white/5">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="220"
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
