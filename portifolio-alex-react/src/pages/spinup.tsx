import spinupIcon from "../assets/svg/app-dev-icon.svg";
import alex from "../assets/imgs/landers/alex.png";
import spinup1 from "../assets/imgs/spinup/spinup1.png";
import spinup2 from "../assets/imgs/spinup/spinup2.png";
import spinup3 from "../assets/imgs/spinup/spinup3.png";
import ImgCircle from "../components/imgCircle";
import AppTitle from "../components/appTitle";
import MockupGroup from "../components/MockupGroup";
import evoscheduleold from "../assets/imgs/spinup/evoscheduleold.jpg";
import evoschedulenew from "../assets/imgs/spinup/evoschedulenew.png";
import MockupWebGroup from "../components/MockupWebGroup";
import figmaMpv1 from "../assets/imgs/spinup/figmamvpspinup.png";
import aproved0 from "../assets/imgs/spinup/aproved1.png";
import aproved2 from "../assets/imgs/spinup/aproved2.png";
import aproved3 from "../assets/imgs/spinup/aproved3.png";
import LinkBackHome from "../components/LinkBackHome";

export default function SpinUp() {
  return (
    <>
      <div className="flex flex-col items-center gap-20 px-6 md:px-16 lg:px-32 xl:px-64 max-w-6xl mx-auto bg-white pt-[env(safe-area-inset-top)]">
        <section className="flex flex-col gap-4">
          <AppTitle
            img={spinupIcon}
            alt="lumioIcon"
            name={"SpinUp"}
            link={"https://gp-schedule.vercel.app"}
          />
          <div className="flex flex-row gap-3 items-center">
            <p className="text-gray-400 text-xs font-mono">2023 - 2024</p>
            <div className="bg-gray-400 h-0.5 w-0.5 rounded-full"></div>
            <p className="text-gray-400 text-xs font-mono">6 min read</p>
          </div>
          <div className="flex flex-row gap-2">
            <ImgCircle img={alex} alt="Avatar" size="small" />
          </div>
          <div className="flex flex-col gap-4 font-sans  text-gray-800 font-light text-lg md:text-2xl leading-8 md:leading-10 not-italic">
            {/* versao curta
            <h1 className="font-bold text-3xl md:text-4xl mb-4">
              SpinUp – Employee Shift Scheduler
            </h1>

            <h2 className="font-bold text-2xl md:text-3xl">Context</h2>
            <p>
              At a company with rotating shifts (morning, afternoon, night),
              employees needed to manage schedules and swaps. The existing tools
              were either outdated web pages or third-party apps, leading to
              inconsistent and fragmented scheduling.
            </p>

            <h2 className="font-bold text-2xl md:text-3xl">Problem</h2>
            <ul className="list-disc pl-6">
              <li>Lack of macro monthly view and consistent color coding</li>
              <li>Fragmented usage of third-party apps</li>
              <li>
                Manual shift swap validation causing delays and missed
                opportunities
              </li>
            </ul>

            <h2 className="font-bold text-2xl md:text-3xl">Solution / MVP</h2>
            <p>I built a lightweight, web-based MVP to validate the concept:</p>
            <ul className="list-disc pl-6">
              <li>Intuitive calendar with macro monthly view</li>
              <li>
                Color-coded shifts (Morning=yellow, Afternoon=green, Night=blue)
              </li>
              <li>
                Editable shift assignments with automatic hour/day calculation
              </li>
              <li>Pre-filled swap request snippets for supervisor emails</li>
            </ul>

            <h2 className="font-bold text-2xl md:text-3xl">
              Technical Decisions
            </h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Next.js:</strong> dynamic routing, server components,
                scalable structure
              </li>
              <li>
                Local persistence for fast iteration (AsyncStorage / browser
                storage)
              </li>
              <li>
                Domain-specific logic embedded: automatic calculation of hours
                and total worked days
              </li>
              <li>
                Trade-offs: no multi-user sync, no authentication, limited
                backend integration
              </li>
            </ul>

            <h2 className="font-bold text-2xl md:text-3xl">Validation</h2>
            <p>
              Presented MVP to manager: concept was positively received. Project
              was not adopted due to internal priorities, but the MVP
              successfully demonstrated operational value and validated the
              idea.
            </p>

            <h2 className="font-bold text-2xl md:text-3xl">
              Next Steps / Production Vision
            </h2>
            <ul className="list-disc pl-6">
              <li>
                Backend & Database: Supabase (auth, PostgreSQL, free-tier
                deployment)
              </li>
              <li>
                Authentication & Identity: unique user identification, shift
                ownership, role-based access
              </li>
              <li>
                Approval Flow: structured email snippets, potential API
                integration for automation
              </li>
              <li>
                Architecture: persistent storage, multi-user support, real-time
                swap validation, business rule enforcement
              </li>
            </ul>

            <p className="italic text-gray-500 mt-2">
              The MVP validated usability; production would formalize
              system-level operations and enable broader adoption.
            </p>

            <MockupGroup img1={spinup1} img2={spinup2} img3={spinup3} /> */}

            <h1 className="font-bold  text-2xl md:text-3xl">Context</h1>
            <p>
              While working at a company with rotating shifts (morning,
              afternoon, night), I noticed inefficiencies in how schedules were
              shared and managed. Employees could request shift swaps via
              supervisor approval, but the process relied on screenshots and
              manual communication.
            </p>
            <p>
              Initially, schedules were displayed on a web page with a
              color-coded monthly view. Later, the company introduced a new
              internal app that removed the macro view and color cues, creating
              confusion.
            </p>

            <MockupWebGroup img1={evoscheduleold} img2={evoschedulenew} />

            <h1 className="font-bold  text-2xl md:text-3xl">Problem</h1>
            <p>
              The previous system, although visually simple, allowed employees
              to easily understand the schedule. The new app lacked:
              <br />• Macro monthly view
              <br />• Visual differentiation between shifts
              <br />• Standardized representation
            </p>
            <p>
              Over 1,000 employees resorted to third-party apps, leading to
              fragmented schedules, inconsistent shift tracking, and inefficient
              swap processes.
            </p>
            <p>
              Key pain points:
              <br />• Employees shared screenshots in WhatsApp groups
              <br />• No standard visual reference
              <br />• Manual swap validation (hours, shifts, training)
              <br />• Delayed approvals leading to lost opportunities
            </p>

            <h1 className="font-bold  text-2xl md:text-3xl">Insight</h1>
            <p>
              I identified an opportunity for a standardized scheduling tool
              that:
              <br />• Preserved a macro monthly view
              <br />• Used consistent color coding
              <br />• Calculated shift hours and total days worked automatically
              <br />• Matched compatible employees for swaps
              <br />• Prepared pre-formatted requests for supervisors
            </p>
            <p>
              This approach would reduce friction, save time, and deliver
              immediate operational value.
            </p>

            <h1 className="font-bold  text-2xl md:text-3xl">Strategy & MVP</h1>
            <p>
              Building a fully integrated system required company backing, which
              was not feasible at the time. Instead, I focused on an MVP to
              validate the concept.
            </p>
            <ul className="list-disc pl-6">
              <li>Clear macro monthly visualization</li>
              <li>Standardized shift representation</li>
              <li>Fast, intuitive editing interactions</li>
            </ul>
            <p>
              Employee interaction model:
              <br />• Activate edit mode
              <br />• Select shift type (Morning, Afternoon, Night)
              <br />• Apply to calendar days
              <br />• Exit edit mode to lock the schedule
            </p>
            <p>
              Goals of the MVP:
              <br />
              1. Test adoption
              <br />
              2. Demonstrate operational value
              <br />
              3. Provide tangible proof to leadership
            </p>

            <img
              className="w-full h-auto rounded-xl max-w-4xl mx-auto"
              src={figmaMpv1}
              alt="Figma MVP mockup"
            />

            <h1 className="font-bold  text-2xl md:text-3xl">
              Technical Decisions
            </h1>

            <h2 className="font-bold text-xl md:text-2xl">Framework Choice</h2>
            <p>
              I chose <strong>Next.js</strong> for:
            </p>
            <ul className="list-disc pl-6">
              <li>Built-in dynamic routing for scalability</li>
              <li>
                Server components and API routes for future backend integration
              </li>
              <li>
                Smoother path for authentication and role-based permissions
              </li>
            </ul>
            <p>
              Although it could be considered overengineering for an MVP, it
              allowed the project to scale without structural changes.
            </p>

            <h2 className="font-bold text-xl md:text-2xl">
              Domain-Specific Logic
            </h2>
            <p>Shift rules were encoded directly in the app:</p>
            <ul className="list-disc pl-6">
              <li>Morning = 7 hours, Afternoon = 8 hours, Night = 9 hours</li>
              <li>
                Automatic calculation of total monthly hours and worked days
              </li>
            </ul>
            <p>
              This provided more context-specific value than generic third-party
              calendars.
            </p>

            <h2 className="font-bold text-xl md:text-2xl">
              Persistence Strategy
            </h2>
            <p>
              Data was stored locally to speed iteration and minimize
              complexity. Trade-offs included:
            </p>
            <ul className="list-disc pl-6">
              <li>No multi-user synchronization</li>
              <li>No authentication</li>
              <li>Data lost on device reset</li>
              <li>No supervisor validation</li>
            </ul>

            <h2 className="font-bold text-xl md:text-2xl">
              Trade-offs & Awareness
            </h2>
            <p>Even with constraints, the MVP delivered:</p>
            <ul className="list-disc pl-6">
              <li>Standardized calendar visualization</li>
              <li>Automated shift calculations</li>
              <li>Clearer swap planning than third-party alternatives</li>
            </ul>
            <p>The goal was validating operational value, not completeness.</p>

            <h1 className="font-bold  text-2xl md:text-3xl">
              Validation & Stakeholder Feedback
            </h1>
            <p>
              The MVP was presented to my manager, who provided positive
              feedback. Although the project was not adopted due to internal
              priorities, it was well received by employees, who validated its
              usability and practical value.
            </p>

            <MockupWebGroup img1={aproved0} img2={aproved2} img3={aproved3} />

            <p>
              The initiative successfully demonstrated concept viability and
              clear operational improvement potential.
            </p>

            <h1 className="font-bold  text-2xl md:text-3xl">
              If Evolved to Production
            </h1>

            <h2 className="font-bold text-xl md:text-2xl">
              Backend & Database
            </h2>
            <p>
              I would integrate <strong>Supabase</strong> to provide:
            </p>
            <ul className="list-disc pl-6">
              <li>Authentication and user management</li>
              <li>PostgreSQL database for persistent storage</li>
              <li>Free-tier deployment for early-stage validation</li>
            </ul>

            <h2 className="font-bold text-xl md:text-2xl">
              Authentication & Identity
            </h2>
            <p>Supabase Auth would allow:</p>
            <ul className="list-disc pl-6">
              <li>Unique user identification</li>
              <li>Shift ownership tracking</li>
              <li>Permission control and future role-based access</li>
            </ul>

            <h2 className="font-bold text-xl md:text-2xl">Approval Flow</h2>
            <p>
              Full supervisor approval automation would require company
              integration. As an intermediate solution:
            </p>
            <ul className="list-disc pl-6">
              <li>Pre-filled email snippets for swap requests</li>
              <li>Automatic inclusion of shift details and validation</li>
              <li>Future integration with email APIs for full automation</li>
            </ul>

            <h2 className="font-bold text-xl md:text-2xl">
              Architectural Evolution
            </h2>
            <p>A production version would add:</p>
            <ul className="list-disc pl-6">
              <li>Persistent database storage</li>
              <li>Multi-user support</li>
              <li>Real-time swap validation</li>
              <li>Business rule enforcement at backend</li>
              <li>Role-based permissions</li>
            </ul>
            <p>
              The MVP validated usability; production would formalize
              system-level operations.
            </p>
            <MockupGroup img1={spinup1} img2={spinup2} img3={spinup3} />
            <p className="italic text-gray-500 mt-2">
              SpinUp was a personal initiative project, and I genuinely have a
              special appreciation for it. It represents more than just code...
              it reflects my mindset of identifying inefficiencies,
              understanding their impact, and proactively building practical
              solutions that create real value and help people.
            </p>
          </div>

          <LinkBackHome link="/" />
        </section>
        <p className="text-gray-400 text-sm pb-5">Last updated: Mar 03, 2026</p>
      </div>
    </>
  );
}
{
  /* <h1 className="font-bold  text-2xl md:text-3xl">VERSAO EM INGLES</h1>
          <h1 className="font-bold text-2xl md:text-3xl">Context</h1>
          <p>
            I was working at a company operating with rotating shifts (morning,
            afternoon, and night).
          </p>
          <p>
            The monthly schedule was published, and employees could request
            shift swaps with supervisor approval.
          </p>
          <p>
            Initially, the schedule was shared through a web page with a clear
            monthly overview and color-coded shifts.
          </p>
          <p>
            Later, the company replaced it with a new internal app that removed
            the macro calendar view and color system.
          </p>
          <MockupGroup img1={spinup1} img2={spinup2} img3={spinup3} />
          <h1 className="font-bold text-2xl md:text-3xl">The Problem</h1>
          <p>
            The original version, although visually outdated, offered a clear
            monthly overview and intuitive color recognition.
          </p>
          <p>
            The new version lacked: <br />• A full monthly perspective <br />•
            Visual differentiation between shifts <br />• Standardized
            representation
          </p>
          <p>
            As a result, more than 1,000 employees started using third-party
            apps to manage their schedules.
          </p>
          <p>This created fragmentation.</p>
          <p>
            Shift swaps became chaotic because: <br />• Employees shared
            screenshots in WhatsApp groups <br />• There was no visual standard{" "}
            <br />• Colors and labels varied between apps <br />• Swap
            validation (monthly hours, training requirements) was manual
          </p>
          <p>
            Requests were often denied days later, causing lost opportunities
            and operational friction.
          </p>
          <p>The process was inefficient for both employees and supervisors.</p>
          <MockupGroup img1={spinup1} img2={spinup2} img3={spinup3} />

          <h1 className="font-bold text-2xl md:text-3xl">Insight</h1>

          <p>I identified an opportunity:</p>

          <p>
            What if there was a standardized, mobile-friendly scheduling tool
            that:
            <br />• Maintained a macro monthly view
            <br />• Used consistent color coding
            <br />• Automatically validated swap eligibility
            <br />• Matched compatible employees
            <br />• Sent pre-validated requests directly to supervisors
          </p>

          <p>
            This would reduce friction, save time, and filter invalid requests
            before reaching management.
          </p>

          <h1 className="font-bold text-2xl md:text-3xl">Strategy</h1>
          <p>
            To implement this, I would need access to the company’s internal
            data — something unrealistic without proof of value.
          </p>

          <p>
            Instead of building a full system immediately, I decided to validate
            the idea first.
          </p>

          <p>
            I built an MVP focused on:
            <br />• Clear monthly visualization
            <br />• Standardized shift representation
            <br />• Basic shift management
          </p>

          <p>
            The goal was to:
            <br />
            1. Test employee adoption
            <br />
            2. Demonstrate operational value
            <br />
            3. Present a tangible solution to leadership
          </p>

          <h1 className="font-bold text-2xl md:text-3xl">
            Technical Decisions
          </h1>
          <h2 className="font-bold text-2xl md:text-3xl">
            1. Framework Choice
          </h2>

          <p>For the MVP, I chose Next.js instead of a plain React setup.</p>

          <p>
            Although the initial scope was relatively small, I intentionally
            opted for a more robust architecture. The company operates at
            multinational scale, and I anticipated that a production-ready
            version would require:
            <br />• Authentication and user identity management
            <br />• Server-side logic for validation
            <br />• Role-based permissions
            <br />• Scalable routing structure
          </p>

          <p>
            Next.js offered:
            <br />• Built-in routing without nested configuration complexity
            <br />• A cleaner structure for dynamic routes
            <br />• Native support for server components and API routes
            <br />• A smoother path toward authentication and backend
            integration
          </p>

          <p>
            Even if it felt like “overengineering” for an MVP, I preferred to
            design with future scalability in mind rather than constrain the
            system early.
          </p>

          <h2 className="font-bold text-2xl md:text-3xl">
            2. Product-Oriented MVP Scope
          </h2>

          <p>The MVP was intentionally focused on usability and speed.</p>

          <p>
            Before building a complex system with synchronization and backend
            integration, the real hypothesis to validate was:
          </p>

          <p>Would employees adopt a standardized scheduling interface?</p>

          <p>
            Instead of solving everything at once, I prioritized: • A clear
            macro monthly view • Consistent color-coded shifts • Fast editing
            interactions • Minimal friction
          </p>

          <p>
            The interaction model was designed to be intuitive: • Users activate
            edit mode • Select a shift type (Morning, Afternoon, Night) • Apply
            it directly to calendar days • Exit edit mode to lock the view
          </p>

          <p>
            This reduced cognitive load and mirrored the mental model employees
            already had.
          </p>

          <h2 className="font-bold text-2xl md:text-3xl">
            3. Domain-Specific Logic
          </h2>

          <p>Even as an MVP, the app was not generic.</p>

          <p>
            It embedded company-specific rules:
            <br />• Morning shifts = 7 hours
            <br />• Afternoon shifts = 8 hours
            <br />• Night shifts = 9 hours
          </p>

          <p>
            Each shift automatically calculated:
            <br />• Total monthly hours
            <br />• Total worked days
          </p>

          <p>
            This immediately differentiated it from third-party calendar apps,
            which were generic and unaware of business rules.
          </p>

          <p>
            Even without synchronization, the product already delivered more
            contextual value than existing alternatives.
          </p>

          <h2 className="font-bold text-2xl md:text-3xl">
            4. Persistence Strategy
          </h2>

          <p>
            Since the objective was validation, I avoided introducing backend
            complexity prematurely.
          </p>

          <p>Data persistence was handled locally.</p>

          <p>
            This allowed:
            <br />• Faster iteration
            <br />• Zero infrastructure cost
            <br />• Immediate usability
          </p>

          <p>
            I was aware of the limitations:
            <br />• No multi-user synchronization
            <br />• No authentication
            <br />• No persistent storage across devices
            <br />• No role validation
          </p>

          <p>However, these trade-offs were intentional.</p>

          <p>
            The MVP’s purpose was validation and demonstration, not full
            operational replacement.
          </p>

          <h2 className="font-bold text-2xl md:text-3xl">
            5. Trade-offs and Engineering Awareness
          </h2>

          <p>The system was deliberately constrained.</p>

          <p>
            I consciously accepted:
            <br />• No real-time swap matching
            <br />• No supervisor approval automation
            <br />• No backend validation
            <br />• No data persistence guarantees
          </p>

          <p>
            But even with these constraints, the MVP:
            <br />• Standardized the visual system
            <br />• Reduced cognitive friction
            <br />• Embedded business logic
            <br />• Improved clarity over third-party tools
          </p>

          <p>The goal was not completeness.</p>
          <p>The goal was proving operational value.</p>

          <h1 className="font-bold text-2xl md:text-3xl">
            Validation & Stakeholder Feedback
          </h1>

          <p>
            After building the MVP, I presented the solution to my direct
            manager.
          </p>

          <p>
            The feedback was positive — the concept was considered valuable and
            aligned with existing operational pain points. However, due to
            internal priorities and resource allocation, the project was not
            adopted at an organizational level.
          </p>

          <p>
            At that point, I decided not to further invest in production-level
            infrastructure without institutional backing.
          </p>

          <p>The initiative still fulfilled its original goal:</p>
          <p>to validate the idea and demonstrate operational potential.</p>

          <h1 className="font-bold text-2xl md:text-3xl">
            If Evolved to Production
          </h1>

          <p>
            If the project were to move beyond MVP validation, the next step
            would be introducing structured backend support.
          </p>

          <h2 className="font-bold text-2xl md:text-3xl">Backend & Database</h2>

          <p>I would integrate Supabase as the backend solution.</p>

          <p>
            Reasons:
            <br />• Familiarity and rapid development speed
            <br />• Built-in authentication system
            <br />• PostgreSQL database
            <br />• Free tier sufficient for early-stage validation
            <br />• No upfront infrastructure cost
          </p>

          <p>
            Given that the product would not initially generate revenue,
            avoiding operational expenses would be a strategic decision.
          </p>

          <h2 className="font-bold text-2xl md:text-3xl">
            Authentication & Identity
          </h2>

          <p>User authentication would be implemented using Supabase Auth.</p>

          <p>
            This would allow:
            <br />• Unique user identification
            <br />• Shift ownership
            <br />• Permission control
            <br />• Future role-based access (employee vs supervisor)
          </p>

          <h2 className="font-bold text-2xl md:text-3xl">Approval Flow</h2>

          <p>
            Full automation of supervisor approval would require internal
            company integration, which was not feasible without official
            adoption.
          </p>

          <p>
            Therefore, an intermediate solution would be implemented:
            <br />• Generate structured, pre-filled email snippets
            <br />• Automatically include shift details and validation summary
            <br />• Allow the user to copy and send directly
          </p>

          <p>
            As a future possibility, integration with email APIs could automate
            this process further.
          </p>

          <h2 className="font-bold text-2xl md:text-3xl">
            Architectural Evolution
          </h2>

          <p>
            Production version would introduce: • Persistent database storage •
            Multi-user support • Real-time swap validation • Business rule
            enforcement at the backend level • Role-based permissions
          </p>
          <p>The MVP proved the usability layer.</p>
          <p>The production version would formalize the system layer.</p> */
}
