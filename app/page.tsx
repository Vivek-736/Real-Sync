"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Users, Lock, Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen px-6 bg-gradient-to-br from-blue-950 to-slate-900 text-white">
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Image src="/icon.png" alt="favicon" width={40} height={40} />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              RealSync
            </span>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden md:flex items-center gap-8"
          >
            <Link
              href="#features"
              className="hover:text-blue-300 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-blue-300 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-blue-300 transition-colors"
            >
              Testimonials
            </Link>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-4"
          >
            {!isSignedIn && (
              <>
                <Link href="/sign-in">
                  <Button
                    variant="ghost"
                    className="text-white hover:text-blue-300 hover:bg-blue-900/40"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
            {isSignedIn && (
              <Link href="/dashboard">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Dashboard
                </Button>
              </Link>
            )}
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 bg-blue-900/40 backdrop-blur-sm rounded-lg"
          >
            <nav className="flex flex-col gap-4 px-4">
              <Link
                href="#features"
                className="py-2 hover:text-blue-300 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="py-2 hover:text-blue-300 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-blue-300 transition-colors"
              >
                Testimonials
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-blue-800">
                {!isSignedIn && (
                  <>
                    <Link href="/sign-in">
                      <Button
                        variant="ghost"
                        className="text-white text-center hover:text-blue-300 hover:bg-blue-900/40"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href="/sign-up">
                      <Button className="bg-blue-500 text-center hover:bg-blue-600 text-white">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
                {isSignedIn && (
                  <Link href="/dashboard">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      Dashboard
                    </Button>
                  </Link>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </header>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Collaborate in real-time with your team
            </h1>
            <p className="text-lg text-blue-200/90 max-w-lg">
              Edit documents together, see everyone&apos;s cursor, and manage
              permissions seamlessly. The future of collaborative work is here.
            </p>
            <div className="flex flex-row gap-4 pt-4">
              <Link href="/dashboard">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white md:px-8 px-4 md:py-6 py-2 text-lg">
                  Get Started
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-300 hover:bg-blue-900/40 md:px-8 px-4 md:py-6 py-2 text-lg"
                >
                  Watch Demo
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] rounded-xl overflow-hidden border border-blue-700/30 shadow-2xl shadow-blue-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800/40 to-blue-900/40 flex items-center justify-center">
              <Image
                src="/hero.jpg"
                alt="Hero image placeholder"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful collaboration features
          </h2>
          <p className="text-lg text-blue-200/90">
            Everything you need to work together efficiently, no matter where
            your team is located.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div
            variants={fadeIn}
            className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/30"
          >
            <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-time Cursors</h3>
            <p className="text-blue-200/90">
              See where everyone is working in real-time with multi-colored
              cursors and selections.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/30"
          >
            <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Live Editing</h3>
            <p className="text-blue-200/90">
              Changes appear instantly for all collaborators, with no lag or
              conflicts.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/30"
          >
            <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
              <Lock className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Permission Management</h3>
            <p className="text-blue-200/90">
              Control who can view, comment, or edit your documents with
              granular permissions.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/30"
          >
            <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
              <CheckCircle className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Version History</h3>
            <p className="text-blue-200/90">
              Access previous versions of your document and restore them with a
              single click.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/30"
          >
            <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
              <CheckCircle className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Comments & Feedback</h3>
            <p className="text-blue-200/90">
              Leave contextual comments and resolve discussions without leaving
              the document.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/30"
          >
            <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
              <CheckCircle className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Notifications</h3>
            <p className="text-blue-200/90">
              Get notified about important changes and mentions without being
              overwhelmed.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section
        id="how-it-works"
        className="container mx-auto px-4 py-16 md:py-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How RealSync works
          </h2>
          <p className="text-lg text-blue-200/90">
            Simple, intuitive, and powerful. Get started in minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] rounded-xl overflow-hidden border border-blue-700/30 shadow-2xl shadow-blue-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800/40 to-blue-900/40 flex items-center justify-center">
              <Image
                src="/work.png"
                alt="How it works image placeholder"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Create a document</h3>
                <p className="text-blue-200/90">
                  Start from scratch or use one of our templates to get going
                  quickly.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Invite your team</h3>
                <p className="text-blue-200/90">
                  Share a link or invite specific people with custom permission
                  levels.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Collaborate in real-time
                </h3>
                <p className="text-blue-200/90">
                  Edit together, see everyone&apos;s changes instantly, and work
                  seamlessly.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                <span className="font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Track progress</h3>
                <p className="text-blue-200/90">
                  Monitor changes, resolve comments, and keep your project
                  moving forward.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="testimonials"
        className="container mx-auto px-4 py-16 md:py-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Loved by teams worldwide
          </h2>
          <p className="text-lg text-blue-200/90">
            See what our users have to say about RealSync.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div
            variants={fadeIn}
            className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="font-bold text-blue-300">JD</span>
              </div>
              <div>
                <h4 className="font-bold">Jane Doe</h4>
                <p className="text-sm text-blue-300">
                  Product Manager, TechCorp
                </p>
              </div>
            </div>
            <p className="text-blue-200/90">
              &quot;RealSync has transformed how our team works together. The
              real-time editing and cursor tracking make remote collaboration
              feel natural.&quot;
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="font-bold text-blue-300">MS</span>
              </div>
              <div>
                <h4 className="font-bold">Mike Smith</h4>
                <p className="text-sm text-blue-300">
                  Designer, CreativeStudio
                </p>
              </div>
            </div>
            <p className="text-blue-200/90">
              &quot;The permission management is a game-changer. We can easily
              control who has access to what, making client collaboration
              seamless.&quot;
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-700/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="font-bold text-blue-300">AL</span>
              </div>
              <div>
                <h4 className="font-bold">Amy Lee</h4>
                <p className="text-sm text-blue-300">CEO, StartupInc</p>
              </div>
            </div>
            <p className="text-blue-200/90">
              &quot;We&lsquo;ve tried many collaboration tools, but RealSync
              stands out with its intuitive interface and powerful features.
              It&#39;s become essential to our workflow.&quot;
            </p>
          </motion.div>
        </motion.div>
      </section>

      <footer className="container mx-auto px-4 py-8 mt-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center bg-transparent"
        >
          <p className="text-blue-300 mb-2">Made with 💗 by Vivek</p>
          <div className="flex gap-6 mt-4">
            <Link
              href="#"
              className="text-blue-300 hover:text-blue-100 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-blue-300 hover:text-blue-100 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-blue-300 hover:text-blue-100 transition-colors"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
