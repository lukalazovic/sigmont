"use client";

import { useForm } from "react-hook-form";
import { ContactFormState } from "../../types/contactFormState";
import { useState } from "react";
import { Loading } from "@/app/features/web/Loader/Loader";
import emailjs from "emailjs-com";
import { ContactSuccess } from "../ContactSuccess/ContactSuccess";

interface IContactFormProps {
    heading: string;
    formInfo: string;
    submitButtonLabel: string;
    showForm: boolean;
    serviceId: string;
    userId: string;
    contactFormTemplateId: string;
}

export const ContactForm = ({
    heading,
    formInfo,
    submitButtonLabel,
    showForm,
    serviceId,
    userId,
    contactFormTemplateId,
}: IContactFormProps) => {
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormState>();

    const onSubmit = (formData: ContactFormState) => {
        setIsLoading(true);
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            from_subject: formData.subject,
            message: formData.message,
        };

        emailjs
            .send(serviceId, contactFormTemplateId, templateParams, userId)
            .then(() => {
                setIsSuccessful(true);
                setIsLoading(false);
            })
            .catch((e) => console.error("Error during sending email", e));

        reset();
    };

    if (!showForm) {
        return null;
    }

    if (isSuccessful) {
        return (
            <div className="inquiry-item col-md-6 position-relative">
                <ContactSuccess />
            </div>
        );
    }
    
    return (
        <>
            <div className="inquiry-item col-md-6 position-relative">
                {isLoading && <Loading />}
                <h2 className="fs-3 text-uppercase mb-4">{heading}</h2>
                <p>{formInfo}</p>
                <form
                    className="form-group flex-wrap"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="form-input col-lg-20 d-flex mb-3">
                        <div className="d-flex flex-column w-100">
                            <input
                                {...register("name", {
                                    required: "This field is required!",
                                })}
                                type="text"
                                placeholder="Write your name here"
                                className="form-control ps-3 me-3"
                            />
                            {errors["name"] && (
                                <span className="invalid-feedback d-block">
                                    {errors["name"]?.message}
                                </span>
                            )}
                        </div>
                        <div className="d-flex flex-column ms-3 w-100">
                            <input
                                {...register("email", {
                                    required: "This field is required!",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Please enter a valid email!",
                                    },
                                })}
                                type="text"
                                name="email"
                                placeholder="Write your email here"
                                className="form-control ps-3 me-3"
                            />
                            {errors["email"] && (
                                <span className="invalid-feedback d-block">
                                    {errors["email"]?.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-12 mb-3">
                        <input
                            {...register("phone", {
                                required: "This field is required!",
                                pattern: {
                                    value: /^\+?[0-9]*$/,
                                    message: "Invalid phone number format!",
                                },
                            })}
                            type="text"
                            placeholder="Phone Number"
                            className="form-control ps-3"
                        />
                        {errors["phone"] && (
                            <span className="invalid-feedback d-block">
                                {errors["phone"]?.message}
                            </span>
                        )}
                    </div>
                    <div className="col-lg-12 mb-3">
                        <input
                            {...register("subject", {
                                required: "This field is required!",
                            })}
                            type="text"
                            placeholder="Write Your Subject Here"
                            className="form-control ps-3"
                        />
                        {errors["subject"] && (
                            <span className="invalid-feedback d-block">
                                {errors["subject"]?.message}
                            </span>
                        )}
                    </div>
                    <div className="col-lg-12 mb-3">
                        <textarea
                            {...register("message", {
                                required: "This field is required!",
                            })}
                            placeholder="Write Your Message Here"
                            className="form-control ps-3"
                            rows={8}
                        />
                        {errors["message"] && (
                            <span className="invalid-feedback d-block">
                                {errors["message"]?.message}
                            </span>
                        )}
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary btn-lg text-uppercase btn-rounded-none">
                            {submitButtonLabel}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
