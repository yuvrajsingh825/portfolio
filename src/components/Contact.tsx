import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle, Linkedin, Github } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await resp.json();
      if (data.success) {
        setStatus("success");
        setResponseMsg(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setResponseMsg("Message failed. Contact directly via phone or email.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Let's work <span className="text-cyan-400">together</span>
            </h2>

            <p className="text-zinc-400 mb-12">
              I am actively looking for internship opportunities. Feel free to connect with me.
            </p>

            <div className="space-y-8">

              {/* EMAIL */}
              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <a href="mailto:yuvrajs6400@gmail.com" className="hover:text-cyan-400">
                  yuvrajs6400@gmail.com
                </a>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-4">
                <MapPin className="text-purple-400" />
                <span>Indore, Madhya Pradesh, India</span>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">
                <Phone className="text-green-400" />
                <a 
                  href="https://wa.me/918251016400" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400"
                >
                  +91 8251016400
                </a>
              </div>

              {/* LINKEDIN */}
              <div className="flex items-center gap-4">
                <Linkedin className="text-blue-400" />
                <a 
                  href="https://www.linkedin.com/in/yuvraj-singh-tomar-/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  LinkedIn Profile
                </a>
              </div>

              {/* GITHUB */}
              <div className="flex items-center gap-4">
                <Github className="text-white" />
                <a 
                  href="https://github.com/yuvrajsingh825" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400"
                >
                  github.com/yuvrajsingh825
                </a>
              </div>

            </div>
          </motion.div>

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
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
                />

                <textarea
                  rows={5}
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