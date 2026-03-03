import spinupIcon from "../assets/svg/app-dev-icon.svg";
import alex from "../assets/imgs/landers/alex.png";
import spinup1 from "../assets/imgs/spinup/spinup1.png";
import spinup2 from "../assets/imgs/spinup/spinup2.png";
import spinup3 from "../assets/imgs/spinup/spinup3.png";
import ImgCircle from "../components/imgCircle";
import LinkCase from "../components/linkCase";
import AppTitle from "../components/appTitle";
import MockupGroup from "../components/MockupGroup";

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
            <p className="text-gray-400 text-xs font-mono">4 min read</p>
          </div>
          <div className="flex flex-row gap-2">
            <ImgCircle img={alex} alt="Avatar" size="small" />
          </div>
          <div className="flex flex-col gap-4 font-sans  text-gray-800 font-light text-lg md:text-2xl leading-8 md:leading-10 not-italic">
            <h1 className="font-bold text-2xl md:text-3xl">Contexto</h1>
            <p>
              {" "}
              • Era problema real? • Era empresa? • Era side project? • Você viu
              uma oportunidade?
            </p>
            <p>
              tudo começou quando eu trabalhava em uma empresa que se organizava
              com turnos rotativos. Os turnos disponiveis para os funcionarios
              eram manha, tarde e noite. E o fluxo era assim: a empresa
              divulgava a escala do mes e os funcionarios podiam trocar turnos
              entre si, com a aprovacao do supervisor. e o horario era divulgado
              atraves de uma pagina web assim:
            </p>
            <MockupGroup img1={spinup1} img2={spinup2} img3={spinup3} />

            <p>
              depois disso, a empresa deixou de disponibilizar o horario nesse
              formato e criou um app próprio mostrando assim:
            </p>

            <MockupGroup img1={spinup1} img2={spinup2} img3={spinup3} />

            <h1 className="font-bold text-2xl md:text-3xl">O Problema</h1>
            <p>
              • Qual era a dor real? • Quem era impactado? • Qual o custo do
              problema?
            </p>
            <p>
              O problema é que o primeiro estilo de calendario era feio porem
              intuitivo, por conta das cores e uma visao macro do mes, e a
              segunda versão não possuia uma versao macro e era todo preto e
              branco e acarretou que todos os mais de 1000 funcionários
              recorreram a apps terceiros para ter um controle do seu schedule.
            </p>

            <MockupGroup img1={spinup1} img2={spinup2} img3={spinup3} />

            <p>
              O que acarretou em uma completa desorganização por falta de
              padrão, dificultando o sistema de trocas. porque ja que a empresa
              nao havia implementado um sistema de trocas integrado o fluxo era
              que, os funcionarios tinham um grupo no WhatsApp e lá mandavam
              prints de seus horarios e os dias que gostariam, após isso
              entravam em contato com a pessoa que mandou um print que era
              compativel com a troca desejada, se elaborava um email ao
              supervisor e após isso se esperava a aprovação, o que as vezes era
              um problema porque se depois de 4/5 dias fosse negada voce perdia
              a oportunidade de trocar com outra pessoa que talvez pudesse
              trocar por conta da quantidade de horas do mes. Porem com os novos
              apps terceiros, antes todos estavam acostumados com um padrão de
              calendario e se guiavam muito pelas cores, era um trabalho
              cansativo mas voce poderia entrar no grupo, olhar as imagens e
              buscar por uma troca condizente com a sua, porem isso ficou mais
              dificil sem um modelo 'default' ja que os funcionarios recorreram
              a apps terceiros, ficou mias exaustivos, imagine que vc esta
              acostumado a ver amarelo e saber que se trata de uma manha, mas
              como alguns desses apps eram customizaveis algumas pessoas
              colocavam manhas com vermelho ou com emojis.
            </p>

            <h1 className="font-bold text-2xl md:text-3xl">Impacto</h1>
            <p>
              • Melhorou organização? • Reduziu fricção? • Usuários gostaram? •
              Você aprendeu algo? entao pensei... e se tivessemos um app
              integrado em que fosse tudo padronizado com as mesmas cores, e um
              sistema em que eu pudesse receber diretamente as pessoas cujas as
              quais eu posso fazer trocas e que o sistema ja calculasse se essa
              troca é possivel pela quantidade de horas do mes, turnos e
              treinamentos e entao eu dou um 'match' direto com a pessoa pelo
              app e ela aceitando esse request ja é enviado automaticamente para
              o supervisor? isso economizaria requests do supervios porque
              muitas vezes os pedidos eram negados por nao atenderem os
              requisitos, requisitos esse que o sistema já iria filtrar e alem
              disso iria economizar muito tempo e dor e cabeca para os
              funcionarios.
            </p>
            <p>
              Porem pra isso eu precisaria de acesso ao banco de dados dessa
              empresa, coisa que eu sabia que a empresa nao me daria a menos que
              eu mostrasse ao menos duas coisas: 1- uma prévia concreta de
              funcionamento e 2- aprovamento dos funcionarios.
            </p>
            <p>
              Por isso, ao inves de criar o app ja com todas as features
              implementadas optei por validar a ideia antes e criar um MVP.
            </p>
            <p>
              Com esse MVP eu pouparia um esforço inicial, testaria a aprovacao
              dos funcionarios e teria algo palpavel para mostrar para minha
              chefe e mostrar o verdadeiro poder do SpinUp
            </p>

            <MockupGroup img1={spinup1} img2={spinup2} img3={spinup3} />

            <h1 className="font-bold text-2xl md:text-3xl">
              Sua Decisão Técnica
            </h1>
            <p>
              • Por que escolheu React? • Por que escolheu tal arquitetura? •
              Como estruturou pastas? • Como organizou estado? • Como pensou
              escalabilidade?
            </p>

            <h1 className="font-bold text-2xl md:text-3xl">Desafios reais</h1>
            <p>
              • Problema de performance • Problema de estado complexo • Problema
              de UX • Problema de organização de dados
            </p>

            <h1 className="font-bold text-2xl md:text-3xl">
              O que você faria diferente hoje
            </h1>
            <p>Isso mostra maturidade absurda.</p>

            <h1 className="font-bold text-2xl md:text-3xl">
              Dica nível avançado
            </h1>
            <p>
              Technical Highlights • State management decisions • Component
              architecture • Data modeling decisions • Trade-offs you made
            </p>

            <MockupGroup img1={spinup1} img2={spinup2} img3={spinup3} />
          </div>
          <h1 className="font-bold text-2xl md:text-3xl">VERSAO EM INGLES</h1>
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

          <LinkCase link="/" />
        </section>
        <p className="text-gray-400 text-sm pb-5">Last updated: Mar 03, 2026</p>
      </div>
    </>
  );
}
