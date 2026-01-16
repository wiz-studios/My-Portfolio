"use client";

import type React from "react";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const getFadeUpVariants = (reduceMotion: boolean) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reduceMotion ? 0 : 0.6, ease: "easeOut" },
  },
});

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const shouldReduceMotion = useReducedMotion() ?? false;
  const fadeUpVariants = getFadeUpVariants(shouldReduceMotion);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Message sent successfully",
          description: "Thank you for your message. I'll get back to you soon!",
          duration: 5000,
        });

        // Reset form fields with delay
        setTimeout(() => {
          setName("");
          setEmail("");
          setMessage("");
          setIsSuccess(false);
        }, 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
      className="space-y-4"
    >
      {/* Name Input */}
      <motion.div variants={fadeUpVariants} className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-background/60 border-border/70"
        />
      </motion.div>

      {/* Email Input */}
      <motion.div variants={fadeUpVariants} className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-background/60 border-border/70"
        />
      </motion.div>

      {/* Message Input */}
      <motion.div variants={fadeUpVariants} className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="min-h-[120px] bg-background/60 border-border/70"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={fadeUpVariants}>
        <Button
          type="submit"
          className={`w-full transition-all duration-300 ${
            isSuccess ? "bg-green-500 hover:bg-green-600" : "glow-button"
          }`}
          disabled={isSubmitting || isSuccess}
        >
          {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
        </Button>
      </motion.div>
    </motion.form>
  );
}
