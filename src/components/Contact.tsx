import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [status, setStatus] = useState("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("loading");

    emailjs
      .sendForm(
        "service_9kw5g1r",
        "template_658iyy6",
        formRef.current,
        "rRb84tKA0BCvdeFk7"
      )
      .then(() => {
        setStatus("success");
        setResponseMsg("Message sent successfully 🚀");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setResponseMsg("Something went wrong ❌");
      });
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* 🔥 LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Get in Touch</h2>

            <p className="text-zinc-400">
              Feel free to contact me for projects, collaborations or just a hello 👋
            </p>

            <div className="space-y-3 text-zinc-300">
              <p>📧 yuvrajs6400@gmail.com</p>
              <p>📍 Ujjain, India</p>
            </div>

            {/* 🔗 SOCIAL LINKS */}
            <div className="flex gap-4 pt-4 flex-wrap">

              <a
                href="https://www.linkedin.com/in/yuvraj-singh-tomar-"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition"
              >
                🔗 LinkedIn
              </a>

              <a
                href="https://github.com/yuvrajsingh825"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition"
              >
                💻 GitHub
              </a>

              <a
                href="https://wa.me/918251016400"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-black rounded-xl hover:bg-green-400 transition"
              >
                💬 WhatsApp
              </a>

            </div>
          </motion.div>

          {/* ✅ RIGHT SIDE (FORM) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass rounded-3xl p-8"
          >
            {status === "success" ? (
              <div className="text-center space-y-4">
                <CheckCircle size={50} className="text-green-500 mx-auto" />
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-zinc-400">{responseMsg}</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                />

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-cyan-400 text-black rounded-xl font-bold"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    {responseMsg}
                  </p>
                )}

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}