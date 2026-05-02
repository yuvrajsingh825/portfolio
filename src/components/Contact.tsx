import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle, Linkedin, Github } from "lucide-react";
import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    emailjs.sendForm(
      "service_9kw5g1r",           // 👉 apna service id (check kar lena)
      "template_658iyy6",
      formRef.current!,
      "rRb84tKA0BCvdeFk7"
    )
    .then(() => {
      setStatus("success");
      setResponseMsg("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error(error);
      setStatus("error");
      setResponseMsg("Message failed ❌");
    });
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE same hai (no change) */}

          {/* RIGHT SIDE FORM */}
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
                  name="from_name"   // ✅ IMPORTANT
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                />

                <input
                  type="email"
                  name="from_email"   // ✅ IMPORTANT
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                />

                <textarea
                  rows={5}
                  name="message"   // ✅ IMPORTANT
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-cyan-400 text-black rounded-xl font-bold"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}