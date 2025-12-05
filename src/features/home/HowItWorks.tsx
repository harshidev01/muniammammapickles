import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";
import {
  MdWorkOutline,
  MdOutlineDashboardCustomize,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaUserPlus, FaFileContract } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { FiSend } from "react-icons/fi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsClipboardData, BsPeople } from "react-icons/bs";

const StepCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) => (
  <div className="flex flex-col gap-3 items-center lg:max-w-[15vw] text-center">
    {icon}
    <h4 className="text-2xl text-black/80 font-medium">{title}</h4>
    <p className="text-black/60">{description}</p>
  </div>
);

const HighlightItem = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) => (
  <div className="flex flex-row gap-4">
    {icon}
    <div className="flex flex-col">
      <h4 className="text-xl font-medium">{title}</h4>
      <p className="max-w-[25vw] text-black/60">{description}</p>
    </div>
  </div>
);

const TabContentLayout = ({
  headline,
  description,
  steps,
  highlights,
  imgSrc,
}: {
  headline: string;
  description: string;
  steps: { title: string; description: string; icon: JSX.Element }[];
  highlights: { title: string; description: string; icon: JSX.Element }[];
  imgSrc: string;
}) => (
  <div className="flex flex-col gap-10 items-center mt-10">
    <div className="flex flex-col items-center text-center gap-3">
      <h4 className="font-medium text-4xl">{headline}</h4>
      <p className="text-gray-500 text-xl">{description}</p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 flex-wrap justify-center">
      {steps.map((step, index) => (
        <StepCard key={index} {...step} />
      ))}
    </div>

    <div className="flex flex-row gap-[10vw] mt-10 items-center flex-wrap justify-center">
      <div className="flex flex-col gap-5">
        <div className="text-3xl font-medium">Why FreeGrow?</div>
        <p className="text-lg text-black/60">
          We make hiring & freelancing simple.
        </p>
        {highlights.map((item, index) => (
          <HighlightItem key={index} {...item} />
        ))}
      </div>
      <div className="relative hidden lg:flex">
        <div className="flex gap-4 border border-blue-50 shadow-xl absolute bottom-[10vh] -left-[4vw] bg-white rounded-tr-xl rounded-br-xl">
          <div className="w-[1px] bg-[#28bda7]"></div>
          <div className="flex flex-col py-2 pr-3">
            <h4 className="font-medium text-xl">+ 3K</h4>
            <p className="text-sm text-black/70">Monthly signups</p>
          </div>
        </div>

        <div className="flex gap-4 border border-blue-50 shadow-xl absolute top-[2vh] -right-[4vw] bg-white rounded-xl items-center pl-2">
          <AiOutlineThunderbolt className="w-6 h-6 text-[#28bda7]" />
          <div className="flex flex-col py-2 pr-3">
            <h4 className="font-medium text-xl">+ 7K</h4>
            <p className="text-sm text-black/70">Daily website visitors</p>
          </div>
        </div>

        <img
          src={imgSrc}
          className="max-h-[70vh] object-cover w-[20vw] rounded-2xl"
          alt="Tab Visual"
        />
      </div>
    </div>
  </div>
);

export default function HowItWorks() {
  return (
    <div className="mt-10 flex flex-col items-center gap-7">

      <Tabs className="w-[95vw] lg:w-[80vw]" defaultValue="employee">
        <TabsList className="w-full bg-blue-600 h-12">
          <TabsTrigger
            className="text-white data-[state=active]:text-black"
            value="employee"
          >
            Employee
          </TabsTrigger>
          <TabsTrigger
            className="text-white data-[state=active]:text-black"
            value="freelancer"
          >
            Freelancer
          </TabsTrigger>
          <TabsTrigger
            className="text-white data-[state=active]:text-black"
            value="employer"
          >
            Employer
          </TabsTrigger>
          <TabsTrigger
            className="text-white data-[state=active]:text-black"
            value="client"
          >
            Client
          </TabsTrigger>
        </TabsList>

        {/* EMPLOYEE */}
        <TabsContent value="employee">
          <TabContentLayout
            headline="How It Works for Employees"
            description="Land your dream job in just a few steps."
            steps={[
              {
                title: "Create Profile",
                description: "Add skills, roles and expected CTC.",
                icon: <FaUserPlus className="w-10 h-10 text-blue-600" />,
              },
              {
                title: "Browse Jobs",
                description: "Find curated roles from top tech companies.",
                icon: (
                  <MdOutlineDashboardCustomize className="w-10 h-10 text-blue-600" />
                ),
              },
              {
                title: "Apply Instantly",
                description: "Quick apply with 1-click.",
                icon: <FiSend className="w-10 h-10 text-blue-600" />,
              },
              {
                title: "Get Selected",
                description: "Track offers and interviews.",
                icon: (
                  <MdOutlineVerifiedUser className="w-10 h-10 text-blue-600" />
                ),
              },
            ]}
            highlights={[
              {
                title: "Real Companies",
                description: "Verified startups and brands hiring actively.",
                icon: <BsPeople className="w-6 h-6 text-blue-600" />,
              },
              {
                title: "Career Tools",
                description: "AI resume builder and interview tips.",
                icon: (
                  <MdOutlineDashboardCustomize className="w-6 h-6 text-blue-600" />
                ),
              },
              {
                title: "Instant Alerts",
                description: "Get email and in-app notifications.",
                icon: (
                  <AiOutlineThunderbolt className="w-6 h-6 text-blue-600" />
                ),
              },
              {
                title: "Certificates",
                description: "Get PPO or internship certification.",
                icon: <PiCertificate className="w-6 h-6 text-blue-600" />,
              },
            ]}
            imgSrc="home/howitworks/employee.avif"
          />
        </TabsContent>

        {/* FREELANCER */}
        <TabsContent value="freelancer">
          <TabContentLayout
            headline="How It Works for Freelancers"
            description="Earn from anywhere on your own terms."
            steps={[
              {
                title: "Sign Up",
                description: "Create a profile with your portfolio.",
                icon: <FaUserPlus className="w-10 h-10 text-blue-600" />,
              },
              {
                title: "Browse Gigs",
                description: "Access thousands of projects globally.",
                icon: <MdWorkOutline className="w-10 h-10 text-blue-600" />,
              },
              {
                title: "Send Proposals",
                description: "Pitch your skills and pricing.",
                icon: <FiSend className="w-10 h-10 text-blue-600" />,
              },
              {
                title: "Get Paid",
                description: "Receive payments securely.",
                icon: <BiMoneyWithdraw className="w-10 h-10 text-blue-600" />,
              },
            ]}
            highlights={[
              {
                title: "Escrow Protection",
                description: "Funds are secured until project is complete.",
                icon: (
                  <MdOutlineVerifiedUser className="w-6 h-6 text-blue-600" />
                ),
              },
              {
                title: "Verified Clients",
                description: "Work with real businesses.",
                icon: <BsPeople className="w-6 h-6 text-blue-600" />,
              },
              {
                title: "No Middleman",
                description: "Direct payment to your wallet.",
                icon: <BiMoneyWithdraw className="w-6 h-6 text-blue-600" />,
              },
              {
                title: "Ratings & Reviews",
                description: "Grow your credibility profile.",
                icon: <BsClipboardData className="w-6 h-6 text-blue-600" />,
              },
            ]}
            imgSrc="home/howitworks/freelancer.webp"
          />
        </TabsContent>

        {/* EMPLOYER */}
        <TabsContent value="employer">
          <TabContentLayout
            headline="How It Works for Employers"
            description="Hire full-time or contract developers in minutes."
            steps={[
              {
                title: "Post a Job",
                description: "Share your role with our talent pool.",
                icon: <MdWorkOutline className="w-10 h-10 text-blue-600" />,
              },
              {
                title: "Review Candidates",
                description: "AI + manual screening helps you filter fast.",
                icon: <BsClipboardData className="w-10 h-10 text-blue-600" />,
              },
              {
                title: "Schedule Interviews",
                description: "Manage and invite applicants to meetings.",
                icon: (
                  <MdOutlineDashboardCustomize className="w-10 h-10 text-blue-600" />
                ),
              },
              {
                title: "Hire Easily",
                description: "Onboard directly from FreeGrow.",
                icon: <FaFileContract className="w-10 h-10 text-blue-600" />,
              },
            ]}
            highlights={[
              {
                title: "Reduce Hiring Time",
                description: "Smart filters and instant recommendations.",
                icon: (
                  <AiOutlineThunderbolt className="w-6 h-6 text-blue-600" />
                ),
              },
              {
                title: "Custom Dashboards",
                description: "Track applications and offers visually.",
                icon: (
                  <MdOutlineDashboardCustomize className="w-6 h-6 text-blue-600" />
                ),
              },
              {
                title: "Payout Flexibility",
                description: "Pay per hire or subscription.",
                icon: <BiMoneyWithdraw className="w-6 h-6 text-blue-600" />,
              },
              {
                title: "Brand Promotion",
                description: "Highlight your company culture.",
                icon: <BsPeople className="w-6 h-6 text-blue-600" />,
              },
            ]}
            imgSrc="home/howitworks/employer.jpg"
          />
        </TabsContent>

        {/* CLIENT */}
        <TabsContent value="client">
          <TabContentLayout
            headline="How It Works for Clients"
            description="Post a project, get bids, and hire freelancers fast."
            steps={[
              {
                title: "Create a Project",
                description: "Fill in details, budget, and timeline.",
                icon: <MdWorkOutline className="w-10 h-10 text-blue-600" />,
              },
              {
                title: "Get Proposals",
                description: "Freelancers will submit their bids.",
                icon: <FiSend className="w-10 h-10 text-blue-600" />,
              },
              {
                title: "Choose Best Match",
                description: "View portfolio, ratings, and price.",
                icon: (
                  <MdOutlineVerifiedUser className="w-10 h-10 text-blue-600" />
                ),
              },
              {
                title: "Manage & Pay",
                description: "Track work & release payments.",
                icon: <BiMoneyWithdraw className="w-10 h-10 text-blue-600" />,
              },
            ]}
            highlights={[
              {
                title: "Flexible Payments",
                description: "Pay per milestone or at project end.",
                icon: <BiMoneyWithdraw className="w-6 h-6 text-blue-600" />,
              },
              {
                title: "Verified Talent",
                description: "Access experienced freelancers.",
                icon: <BsPeople className="w-6 h-6 text-blue-600" />,
              },
              {
                title: "Secure Messaging",
                description: "Chat and share files directly.",
                icon: <FiSend className="w-6 h-6 text-blue-600" />,
              },
              {
                title: "Support Anytime",
                description: "We're here to help you succeed.",
                icon: (
                  <AiOutlineThunderbolt className="w-6 h-6 text-blue-600" />
                ),
              },
            ]}
            imgSrc="home/howitworks/client.jpg"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
