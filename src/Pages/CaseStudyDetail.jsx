
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAirtable } from "../Context/AirTableContext";

export default function CaseStudyDetail() {

 const { id } = useParams();
  const { getTableData } = useAirtable();
  const [study, setStudy] = useState(null);

  useEffect(() => {
    const fetchStudy = async () => {
      // Option 1: fetch all and filter
      const data = await getTableData("caseStudy");
      const found = data.find((r) => r.id === id);
      setStudy(found);
    };
    fetchStudy();
  }, [id, getTableData]);

  if (!study) return <div className="text-center mt-20">Loading…</div>;
  return (
    <div className="min-h-screen bg-white">
      

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-12 mt-20">
        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-[HeadingFont] text-center mb-8">Overview</h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className=" text-center font-[HeadingFont] text-fs-24 font-semibold">
              {study.fields.Title}
            </p>
            <p className="text-fs-21">
              {study.fields.description}
            </p>
           </div>
        </section>

        {/* The Engine Behind the Acceleration */}
        {/* <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">The Engine Behind the Acceleration</h2>
          <p className="text-gray-700 mb-4">
            Our proprietary AI agents integrate three pillars of AI ops into a single performance infrastructure:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>AI Agent Network:</strong> Three core areas (market, content, and intelligent partner development solutions 24/7)
            </li>
            <li>
              <strong>Intelligent Automation:</strong> Streamlined processes, automated workflows, and enhanced operational efficiency
            </li>
            <li>
              <strong>Automated Content Stack:</strong> Personalized proposals, intelligent email drip, performance analytics, and AI-driven campaign tools
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            At its core, this program delivers design-to-execute integrated ecosystems that guide every partner (direct across their maturity curve, understanding to 
            execution, and performance to leadership.
          </p>
        </section>

        {/* The 3-Layer Framework */}
        {/* <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">The 3-Layer Framework: 60-90-180 Day Model</h2>
          <p className="text-gray-700 mb-4 font-semibold">Strategy + Training</p>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Market Targeting:</strong> Identify and target by partner maturity, capacity, and regional opportunity
            </li>
            <li>
              <strong>Mainstreaming:</strong> Deep-dive content on focus, security, networking, migration, and business use cases
            </li>
            <li>
              <strong>Sales & Leadership Tactics:</strong> Tactical modules for founders, BDMs, and sales champions
            </li>
            <li>
              <strong>Gamification:</strong> Real-time leaderboard framework linked to pipeline performance and partner behavior
            </li>
          </ul>
        </section> */}

        {/* Development, Content & Tools */}
        {/* <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Development, Content & Tools</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>CRM Rollout:</strong> Advanced traffic cards, lead prospection decks, objection handling flows
            </li>
            <li>
              <strong>Sales Automation:</strong> Intelligent email sequences, proposal, and pipeline management journeys
            </li>
            <li>
              <strong>Training Assets:</strong> Whitelabel microlearning, co-branded LMS platforms, influencer-led sessions
            </li>
            <li>
              <strong>Partner Dashboard Templates:</strong> Live tracking of leads, attendance, conversions KPIs, and content usage
            </li>
          </ul>
        </section> */}

        {/* Execution & Monitoring */}
        {/* <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Execution & Monitoring</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Campaign Orchestration:</strong> Multi-channel campaigns across email, social, and webinar platforms
            </li>
            <li>
              <strong>Pipeline Monitoring:</strong> Lead quality, conversion, pricing, and final-to-deal metrics in real-time
            </li>
            <li>
              <strong>Field Integration:</strong> Structured field sales framework for events, training, networking and in-store rollouts
            </li>
            <li>
              <strong>Recognition & Rewards:</strong> Badges, trophies, LinkedIn certifications, and leadership connects
            </li>
          </ul>
        </section> */}

        {/* Impact & Metrics */}
        {/* <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Impact & Metrics</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>360° Partner Team Members Trained</strong> with 100% engagement retention
            </li>
            <li>
              <strong>Sustained Customer-led growth</strong> trends achieved due to MQLs
            </li>
          </ul>
        </section> */}

        {/* What's Included */}
        {/* <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">What's Included</h2>
          <ul className="space-y-3 text-gray-700">
            <li>Dedicated Partner Onboarding Flow</li>
            <li>Lead Gen & Pipeline Playbook Templates</li>
            <li>Live Partner Performance Dashboards</li>
            <li>Quarterly Success Offsites</li>
            <li>24/7 AI Agent Support</li>
          </ul>
        </section> */}

        {/* Conclusion */}
        {/* <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Conclusion: One Program. One Champion Mindset.</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Cloud Speed Circuit isn't a marketing service. It's a reputation, customizable channel transformation framework, designed to turn sluggish ecosystems 
              into high-performance growth engines.
            </p>
            <p>Built on online-tailored AI. Fueled by AI.</p>
            <p>Designed to scale. Proven with Microsoft.</p>
            <p>Deployed for Pulp Strategy.</p>
          </div>
        </section>  */}
      </div>
    </div>
  )
}
