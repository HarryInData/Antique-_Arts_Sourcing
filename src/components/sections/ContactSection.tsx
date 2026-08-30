"use client";

import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
  "bg-white border border-[rgba(24,24,22,0.14)] rounded-none p-[13px_16px] text-[0.875rem] transition-all duration-200 focus:outline-none focus:border-[#9A7B50] focus:shadow-[0_0_0_1px_rgba(154,123,80,0.2)] text-[#181816] w-full font-sans font-light";

const labelStyles =
  "text-[0.6875rem] uppercase tracking-[0.16em] text-[#6F6A61] mb-2 font-medium font-sans block";

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

  const onSubmitWhatsApp = async () => {
    const isValid = await trigger();
    if (!isValid) return;
    const data = getValues();
    const message = buildConsultationWhatsAppMessage(data);
    const waURL = buildWhatsAppURL(message);
    window.open(waURL, "_blank");
  };

  const onSubmitEmail = async () => {
    const isValid = await trigger();
    if (!isValid) return;
    const data = getValues();
    const gmailURL = buildConsultationEmailURL(data);
    window.open(gmailURL, "_blank");
  };

  return (
    <section id="rfq-form" className="section-pad relative bg-[#F4F1EA]">
      <div className="container-main">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="eyebrow">Direct Sourcing Desk</span>
          <h2 className="heading-section mb-4">Request a Quote</h2>
          <p className="body-text">
            Submit your sourcing or custom manufacturing brief. Our export team responds within 24 hours with product availability and technical specification sheets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: RFQ Form (7 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="rfq-company" className={labelStyles}>Company Name</label>
                  <input type="text" id="rfq-company" placeholder="Your Company Name" className={inputStyles} {...register("companyName")} />
                  {errors.companyName && <span className="text-red-600 text-xs mt-1.5">{errors.companyName.message}</span>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="rfq-contact" className={labelStyles}>Contact Person</label>
                  <input type="text" id="rfq-contact" placeholder="Full Name" className={inputStyles} {...register("contactPerson")} />
                  {errors.contactPerson && <span className="text-red-600 text-xs mt-1.5">{errors.contactPerson.message}</span>}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="rfq-email" className={labelStyles}>Business Email</label>
                  <input type="email" id="rfq-email" placeholder="name@company.com" className={inputStyles} {...register("email")} />
                  {errors.email && <span className="text-red-600 text-xs mt-1.5">{errors.email.message}</span>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="rfq-phone" className={labelStyles}>WhatsApp / Phone</label>
                  <input type="tel" id="rfq-phone" placeholder="+1 (555) 000-0000" className={inputStyles} {...register("phone")} />
                  {errors.phone && <span className="text-red-600 text-xs mt-1.5">{errors.phone.message}</span>}
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="rfq-buyer-type" className={labelStyles}>Buyer Type</label>
                  <select id="rfq-buyer-type" className={`${inputStyles} select-custom`} {...register("buyerType")}>
                    {BUYER_TYPE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.buyerType && <span className="text-red-600 text-xs mt-1.5">{errors.buyerType.message}</span>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="rfq-product-category" className={labelStyles}>Product Category</label>
                  <select id="rfq-product-category" className={`${inputStyles} select-custom`} {...register("productCategory")}>
                    {PRODUCT_CATEGORY_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.productCategory && <span className="text-red-600 text-xs mt-1.5">{errors.productCategory.message}</span>}
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="rfq-volume" className={labelStyles}>Estimated Volume</label>
                  <select id="rfq-volume" className={`${inputStyles} select-custom`} {...register("orderVolume")}>
                    {ORDER_VOLUME_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.orderVolume && <span className="text-red-600 text-xs mt-1.5">{errors.orderVolume.message}</span>}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="rfq-country" className={labelStyles}>Destination Country</label>
                  <select id="rfq-country" className={`${inputStyles} select-custom`} {...register("destinationCountry")}>
                    {DESTINATION_COUNTRY_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.destinationCountry && <span className="text-red-600 text-xs mt-1.5">{errors.destinationCountry.message}</span>}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="rfq-message" className={labelStyles}>Project Brief / Specifications</label>
                <textarea
                  id="rfq-message"
                  rows={4}
                  placeholder="Describe your requirements, dimensions, finish preferences, target delivery dates..."
                  className={`${inputStyles} resize-none`}
                  {...register("message")}
                />
                {errors.message && <span className="text-red-600 text-xs mt-1.5">{errors.message.message}</span>}
              </div>

              {/* CAD Brief Note */}
              <div className="bg-white border border-[rgba(24,24,22,0.1)] p-4">
                <p className="text-[#6F6A61] text-[0.8125rem] font-light leading-[1.6]">
                  <strong className="text-[#181816] font-medium">CAD Drawings &amp; Tech Packs:</strong> You can attach .dwg, .dxf, 3D models, or PDF spec sheets directly via WhatsApp or Email after form submission.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <button
                  type="button"
                  onClick={onSubmitWhatsApp}
                  className="btn-primary w-full bg-[#25D366] border-[#25D366] text-white hover:bg-[#1ebe5b] hover:border-[#1ebe5b]"
                >
                  Send via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={onSubmitEmail}
                  className="btn-secondary w-full"
                >
                  Send via Email
                </button>
              </div>
            </form>
          </div>

          {/* Right: Export Details & Verification (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white border border-[rgba(24,24,22,0.1)] p-8">
              <h3 className="heading-sub text-[1.25rem] mb-6">
                Export Desk
              </h3>
              <div className="flex flex-col gap-4 text-[#6F6A61] text-[0.875rem] font-light">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9A7B50] mt-2 flex-shrink-0" />
                  <span>{siteConfig.contact.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9A7B50] mt-2 flex-shrink-0" />
                  <span>{siteConfig.contact.phone}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9A7B50] mt-2 flex-shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[rgba(24,24,22,0.1)] p-8">
              <h3 className="heading-sub text-[1.125rem] mb-4">
                Trade Assurance
              </h3>
              <div className="space-y-3">
                {[
                  "OEM & ODM Custom Manufacturing",
                  "AQL 2.5 Quality Inspection Protocol",
                  "ISPM-15 Timber Crate Packaging",
                  "UL / CE / UKCA Electrical Compliance",
                  "Direct Sea / Air Freight Coordination",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[#6F6A61] text-[0.8125rem] font-light">
                    <span className="w-1 h-1 rounded-full bg-[#9A7B50] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle Map View */}
            <div className="relative overflow-hidden h-[200px] border border-[rgba(24,24,22,0.1)] bg-white">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[0.4] contrast-[0.95]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
