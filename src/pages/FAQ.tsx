import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import logoEnexus from "@/assets/logo-enexus.png";
import logoKalasalingam from "@/assets/logo-kalasalingam.png";

const faqCategories = [
  {
    category: "General",
    questions: [
      {
        q: "What is Enexus × Kalasalingam?",
        a: "Enexus × Kalasalingam is a collaborative initiative between Enexus and Kalasalingam Academy of Research and Education, focused on providing comprehensive learning resources, roadmaps, and guidance for students and developers in various technology domains.",
      },
      {
        q: "Who can access the resources?",
        a: "Our resources are open to everyone! Whether you're a student at Kalasalingam, a working professional, or a self-learner, you can access all our roadmaps, guides, and learning materials for free.",
      },
      {
        q: "How often are the resources updated?",
        a: "We regularly update our resources to keep pace with the rapidly evolving tech industry. Major updates happen quarterly, with minor updates and additions happening continuously based on community feedback.",
      },
      {
        q: "Can I contribute to the resources?",
        a: "Absolutely! We welcome contributions from the community. You can suggest improvements, report issues, or contribute content through our GitHub repository or by contacting us directly.",
      },
    ],
  },
  {
    category: "Roadmaps",
    questions: [
      {
        q: "What roadmaps are available?",
        a: "We offer comprehensive roadmaps for various roles including Frontend Developer, Backend Developer, Full Stack Developer, DevOps Engineer, AI/ML Engineer, Data Scientist, Mobile Developer, and many more. Each roadmap is designed to take you from beginner to professional.",
      },
      {
        q: "How should I use the roadmaps?",
        a: "Start by identifying your current skill level and desired role. Follow the roadmap sequentially, focusing on one topic at a time. Don't rush - understanding concepts deeply is more important than checking off items quickly.",
      },
      {
        q: "Are the roadmaps suitable for beginners?",
        a: "Yes! Each roadmap includes a beginner-friendly path. We recommend starting with the fundamentals section and progressively moving to advanced topics. The roadmaps also indicate which skills are essential vs. optional.",
      },
      {
        q: "How long does it take to complete a roadmap?",
        a: "This varies based on the roadmap and your dedication. A typical roadmap can take 6-12 months of consistent learning for a complete beginner. If you already have some experience, you can skip certain sections and progress faster.",
      },
    ],
  },
  {
    category: "Learning Resources",
    questions: [
      {
        q: "Are all resources free?",
        a: "Yes, all the roadmaps, guides, and curated learning paths are completely free. We link to external resources that may be paid, but we always try to include free alternatives when possible.",
      },
      {
        q: "Do you provide certificates?",
        a: "Currently, we don't provide certificates directly. However, many of the courses and resources we recommend do offer certificates upon completion.",
      },
      {
        q: "Can I suggest new resources?",
        a: "Yes! We appreciate community suggestions. If you've found a helpful resource that's not listed, please reach out through our contact page or open an issue on our GitHub repository.",
      },
      {
        q: "How do I track my progress?",
        a: "We recommend using a personal learning journal or tracking system. Some learners use tools like Notion, Trello, or simple spreadsheets to track their progress through the roadmaps.",
      },
    ],
  },
  {
    category: "Community",
    questions: [
      {
        q: "Is there a community I can join?",
        a: "Yes! We have an active community on Discord where learners help each other, share resources, and discuss various topics. You can also connect with us on LinkedIn and Twitter.",
      },
      {
        q: "How can I get help if I'm stuck?",
        a: "You can ask questions in our Discord community, post on relevant Stack Overflow tags, or reach out through our contact page. We also recommend finding a study buddy or mentor for personalized guidance.",
      },
      {
        q: "Can I become a mentor?",
        a: "We're always looking for experienced developers who want to give back to the community. If you're interested in mentoring, please reach out through our contact page with your background and areas of expertise.",
      },
      {
        q: "Are there any study groups?",
        a: "Yes! Our Discord community organizes regular study groups for various roadmaps. These groups meet virtually to learn together, discuss concepts, and work on projects collaboratively.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "Which programming language should I start with?",
        a: "It depends on your goals. For web development, start with HTML, CSS, and JavaScript. For data science, Python is excellent. For mobile development, consider Swift (iOS) or Kotlin (Android). Check our roadmaps for specific recommendations.",
      },
      {
        q: "Do I need a computer science degree?",
        a: "No, a CS degree is not required to become a successful developer. Many successful developers are self-taught. However, understanding fundamental CS concepts like data structures and algorithms is valuable regardless of how you learn them.",
      },
      {
        q: "How important is building projects?",
        a: "Extremely important! Building projects is the best way to solidify your learning and build a portfolio. We recommend starting small and gradually taking on more complex projects as you progress through the roadmaps.",
      },
      {
        q: "Should I specialize or be a generalist?",
        a: "Start by exploring different areas to find what interests you most. Then, develop a T-shaped skill profile: broad knowledge across multiple areas with deep expertise in one or two. This makes you versatile yet valuable.",
      },
    ],
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </Link>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <img src={logoEnexus} alt="Enexus" className="h-6 mix-blend-multiply dark:mix-blend-normal dark:invert" />
              <span className="text-muted-foreground">×</span>
              <img src={logoKalasalingam} alt="Kalasalingam" className="h-6 mix-blend-multiply dark:mix-blend-normal dark:invert" />
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link to="/ethics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ethics</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to common questions about our resources, roadmaps, and community.
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {filteredCategories.length > 0 ? (
            <div className="space-y-8">
              {filteredCategories.map((category) => (
                <div key={category.category}>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">{category.category}</h2>
                  <div className="rounded-xl border border-border overflow-hidden bg-card">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, index) => (
                        <AccordionItem key={index} value={`${category.category}-${index}`} className="border-border">
                          <AccordionTrigger className="px-6 hover:no-underline hover:bg-muted/50">
                            <span className="text-left">{item.q}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 text-muted-foreground">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No questions found matching your search.</p>
            </div>
          )}

          {/* Still Have Questions */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 text-center">
            <h3 className="text-2xl font-semibold mb-3">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? We're here to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
