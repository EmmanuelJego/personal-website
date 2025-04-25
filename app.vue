<template>
  <div class="flex flex-col items-center md:p-8 p-4">
    <!-- Desktop header -->
    <header class="hidden md:flex sticky bg-white ring-1 ring-slate-200 top-8 w-full max-w-3xl z-20 px-3 py-2 rounded-lg shadow-md gap-6 items-center">
      <div class="text-primary font-bold text-lg">
        Emmanuel Jégo
      </div>
      <nav class="flex gap-3">
        <a class="transition hover:text-slate-600" href="#projects">Projects</a>
        <a class="transition hover:text-slate-600" href="#skills">Skills</a>
        <a class="transition hover:text-slate-600" href="#journey">Journey</a>
      </nav>
      <span class="ml-auto inline-flex items-center gap-x-1.5 rounded-lg px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-200">
        <svg class="size-2 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
          <circle cx="3" cy="3" r="3" />
        </svg>
        Available for work
      </span>
    </header>
    <!-- Mobile header -->
    <header class="md:hidden flex sticky bg-white ring-1 ring-slate-200 top-4 w-full max-w-3xl z-20 px-3 py-2 rounded-lg shadow-md gap-6 items-center">
      <div class="text-primary font-bold text-lg">
        Emmanuel Jégo
      </div>
      <button class="ml-auto btn-secondary !p-1.5" @click="isMobielDrawerShown = true">
        <Bars3Icon class="size-5" />
      </button>
    </header>
    <MobileDrawer v-model="isMobielDrawerShown" @contact="isContactFromShown = true" />

    <main class="w-full max-w-3xl md:py-32 py-16 flex flex-col gap-40">
      <!-- Header -->
      <div class="flex md:flex-row flex-col gap-10 items-center md:items-start">
        <div class="md:size-48 size-56 bg-[url('/img/profile.jpg')] bg-cover ring-1 ring-slate-200 rounded-lg shadow-md shrink-0"/>
        <div class="flex flex-col items-center text-center md:text-left md:items-start">
          <p>
            Hi, I'm Emmanuel
          </p>
          <h1 class="text-3xl font-bold mb-8">
            I build modern, intuitive and efficient web applications.
          </h1>

          <p>
            I'm a software development engineer, passionate about creating and developing useful, innovative and intuitive digital solutions.
          </p>
          <p>
            I offer my services as a freelancer, specializing in web development in <b>Vue.js</b> and <b>Node.js</b>.
          </p>
          <p>
            I live in Rennes, France.
          </p>

          <div class="flex gap-2 mt-10 items-center bg-white ring-1 ring-slate-200 px-1.5 py-1.5 rounded-lg shadow-md w-max">
            <button v-tooltip="'Send me an e-mail'" class="btn-primary flex items-center gap-2" @click="isContactFromShown = true">
              <EnvelopeIcon class="size-5" />
              Let's talk
            </button>
            <a v-tooltip="'Check my LinkedIn profile'" :href="linkedinUrl" target="_blank">
              <img src="/img/linkedin.png" alt="LinkedIn icon" class="size-8 rounded-md">
            </a>
            <a v-tooltip="'Check my Malt profile'" :href="maltUrl" target="_blank">
              <img src="/img/malt.png" alt="Malt icon" class="size-8 rounded-md">
            </a>
          </div>
        </div>
      </div>
      <ContactModal v-model="isContactFromShown" />

      <!-- Projects -->
      <div id="projects" class="flex flex-col scroll-mt-32">
        <h2 class="text-3xl font-bold mb-10">
          Personal projects
        </h2>
        <p>
          I spend a lot of time building my own projects. Designing your own apps and seeing people use them every day is very satisfying, rewarding and enriching.
        </p>
        <p class="mb-10">
          Beyond the fun I have building them, these projects allow me to understand the real issues surrounding an application or software. They allow me to deal with a wide variety of topics: <b>UI</b>, <b>UX</b>, <b>APIs</b>, <b>robustness</b>, <b>security</b>, <b>databases</b>, <b>AI</b>, <b>hosting</b>, <b>CI/CD</b>, <b>user satisfaction</b>, <b>SEO</b>...
        </p>
        <div class="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg ring-1 ring-slate-200 shadow-md p-2 flex flex-col gap-1 group transition-all hover:shadow-lg hover:cursor-pointer" @click="isPolygotShown = true">
            <div class="w-full aspect-[4/3] bg-[url('/img/polygot_cover.png')] bg-cover ring-1 ring-slate-200 rounded-md shadow-sm shrink-0 relative overflow-hidden flex">
              <span class="absolute size-full pointer-events-none bg-slate-700/20 top-0 left-0 flex opacity-0 group-hover:opacity-100 transition-all"/>
              <button class="btn-secondary m-auto z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-all">
                Learn more
              </button>
            </div>
            <h3 class="mt-1 mb-0">
              Polygot
            </h3>
            <p class="text-sm">
              Translation automation tool for teams and developers. Synchronize your i18n files into 30+ languages in 1 command.
            </p>
            <div class="flex items-center gap-2">
              <span class="badge">Automation</span>
              <span class="badge">i18n</span>
              <span class="badge">SaaS</span>
              <span class="badge">CLI</span>
            </div>
          </div>
          <div class="bg-white rounded-lg ring-1 ring-slate-200 shadow-md p-2 flex flex-col gap-1 group transition-all hover:shadow-lg hover:cursor-pointer" @click="isVisualPDFShown = true">
            <div class="w-full aspect-[4/3] bg-[url('/img/visualpdf_cover.png')] bg-cover ring-1 ring-slate-200 rounded-md shadow-sm shrink-0 relative overflow-hidden flex">
              <span class="absolute size-full pointer-events-none bg-slate-700/20 top-0 left-0 flex opacity-0 group-hover:opacity-100 transition-all"/>
              <button class="btn-secondary m-auto z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-all">
                Learn more
              </button>
            </div>
            <h3 class="mt-1 mb-0">
              Visual PDF
            </h3>
            <p class="text-sm">
              Free online PDF tools. The app offers 19 tools to treat and generate PDFs, helping 2,000+ daily unique users generating 5,000+ documents per day.
            </p>
            <div class="flex items-center gap-2">
              <span class="badge">Free</span>
              <span class="badge">2,000+ daily users</span>
            </div>
          </div>

          <ProjectModal v-model="isPolygotShown" name="Polygot" :url="polygotUrl" :icon="'/img/polygot.svg'">
            <template #default>
              <div class="mb-4 text-slate-500">
                <div>
                  Polygot is a tool enabling teams and developers to <b>automate the translation process</b> for their apps.
                </div>
                <div>
                  Polygot leverages <b>AI</b> to generate high-quality, contextualized translations, unlike conventional translation tools. You can also create glossaries and modify certain parameters to obtain even more accurate translations.
                </div>
              </div>
              <div class="font-semibold">
                For developers:
              </div>
              <ul class="text-slate-500 list-disc pl-5 text-sm">
                <li>Link your Polygot project to your codebase using the CLI</li>
                <li>Edit your i18n files in your source language only</li>
                <li>When translations need to be generated, run the `synchronize` command using the CLI; i18n files for target languages are automatically updated</li>
                <li>Use the API to create your own integrations and workflows</li>
              </ul>
              <div class="font-semibold mt-2">
                For teams:
              </div>
              <ul class="text-slate-500 list-disc pl-5 text-sm">
                <li>Let your developers push the source i18n files, or import them manually</li>
                <li>Generate translations in 1 click</li>
                <li>Use the editing, history, and comparison tools to monitor and adjust translations as needed</li>
                <li>Invite team members or translators to help with translation or proofreading</li>
              </ul>
            </template>
          </ProjectModal>

          <ProjectModal v-model="isVisualPDFShown" name="Visual PDF" :url="visualPdfUrl" :icon="'/img/visualpdf.svg'">
            <template #default>
              <div class="mb-4 text-slate-500">
                <div>
                  Visual PDF is a suite of free online tools for <b>processing PDF files</b>.
                </div>
                <div>
                  In this highly saturated market of online PDF tools, the challenge was to appear in the top results of search engines.
                </div>
              </div>
              <div class="font-semibold">
                Strategy:
              </div>
              <ul class="text-slate-500 list-disc pl-5 text-sm">
                <li><b>Build unique tools</b>, that most competitors don't offer ("crop PDF pages" and "duplicate PDF pages" helped a lot)</li>
                <li><b>Translate</b> the application into many languages</li>
                <li><b>Optimize SEO</b> by targeting keywords and improving page load times</li>
                <li><b>Collect feedback</b> from users, to find out what could be improved</li>
              </ul>
              <div class="font-semibold mt-2">
                Results:
              </div>
              <ul class="text-slate-500 list-disc pl-5 text-sm">
                <li>2,000+ unique daily users on average</li>
                <li>5,000+ daily files generated</li>
              </ul>
            </template>
          </ProjectModal>
        </div>
      </div>

      <!-- Skills -->
      <div id="skills" class="flex flex-col scroll-mt-32">
        <h2 class="text-3xl font-bold mb-10">
          Skills
        </h2>
        <p>
          I've developed a wide range of skills during my experience as an employee, freelancer or while creating my own projects.
        </p>
        <p class="mb-10">
          These skills enable me to cover all stages of a project, from mock-up design to continous deployment.
        </p>
        <h3>
          Development
        </h3>
        <div class="flex flex-wrap gap-3">
          <span class="badge skill">Vue.js</span>
          <span class="badge skill">Node.js</span>
          <span class="badge skill">Nuxt.js</span>
          <span class="badge skill">Typescript</span>
          <span class="badge skill">Hono</span>
          <span class="badge skill">Express</span>
          <span class="badge skill">Cloudflare</span>
          <span class="badge skill">TailwindCSS</span>
          <span class="badge skill">Bootstrap</span>
          <span class="badge skill">SQL</span>
          <span class="badge skill">NoSQL</span>
          <span class="badge skill">Turborepo</span>
          <span class="badge skill">Open AI API</span>
          <span class="badge skill">Soket.io</span>
          <span class="badge skill">Docker</span>
          <span class="badge skill">Git</span>
        </div>
        <h3 class="mt-8">
          Other
        </h3>
        <div class="flex flex-wrap gap-3">
          <span class="badge skill">Figma</span>
          <span class="badge skill">SEO</span>
        </div>
      </div>

      <!-- Journey -->
      <div id="journey" class="flex flex-col scroll-mt-32">
        <h2 class="text-3xl font-bold mb-10">
          My developer journey
        </h2>
        <div class="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-10">
          <div class="col-start-1 row-start-1 row-span-3 w-full h-full flex">
            <span class="h-full mx-auto w-[2px] bg-slate-200" />
          </div>
          <span class="col-start-1 row-start-1 badge h-max !bg-white !ring-slate-200 !text-sm !shadow-md">2019</span>
          <div class="col-start-2 row-start-1 bg-white w-full rounded-lg ring-1 ring-slate-200 shadow-md px-3 py-2 mb-12">
            I'm a <b>graduate</b> of the Ecole Supérieure des Ingénieurs de Rennes (ESIR), as an information systems engineer.
            <br>
            I work at <b>Script&Go</b>, a software publisher specializing in the construction industry, where I completed my fourth-year internship and then my work-study program in my fifth year of engineering school. I'm involved in the development of the BatiScript Mobile application.
          </div>

          <span class="col-start-1 row-start-2 badge h-max !bg-white !ring-slate-200 !text-sm !shadow-md">2020</span>
          <div class="col-start-2 row-start-2 bg-white w-full rounded-lg ring-1 ring-slate-200 shadow-md px-3 py-2 mb-12">
            I'm starting to get interested in web technologies. I'm starting a <b>small freelance developer business</b>, alongside my main job.
            <br>
            I'm also starting to develop <b>Visual PDF</b>, a project that allows me to enlarge my web skills and work on a variety of subjects: mock-up design, environments (dev, staging, prod), CI/CD, SEO, hosting...
          </div>

          <span class="col-start-1 row-start-3 badge h-max !bg-white !ring-slate-200 !text-sm !shadow-md">2022</span>
          <div class="col-start-2 row-start-3 bg-white w-full rounded-lg ring-1 ring-slate-200 shadow-md px-3 py-2 mb-12">
            I decide to take my <b>freelance development business more seriously</b> and devote 100% of my time to it.
            <br>
            I complete a few short assignments, followed by a one-and-a-half-year assignment at <b>Nanocode</b>, publisher of crisis management software for large companies. There I strengthen my back-end skills, and bring my front-end knowledge to the team.
          </div>

          <span class="col-start-1 row-start-4 badge h-max !bg-white !ring-slate-200 !text-sm !shadow-md">2024</span>
          <div class="col-start-2 row-start-4 bg-white w-full rounded-lg ring-1 ring-slate-200 shadow-md px-3 py-2">
            I'm starting to work on a new personal project: <b>Polygot</b>.
            <br>
            Making Visual PDF available in many languages takes a lot of my time. I decide to create a tool that would allow me to automate this process, while ensuring the quality of the translations, thanks to AI.
            <br>
            Rather than creating a small tool for my personal use only, I decide to challenge myself by creating a real marketable solution under the <b>SaaS</b> model.
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { EnvelopeIcon, Bars3Icon } from '@heroicons/vue/24/outline';

const linkedinUrl = 'https://www.linkedin.com/in/emmanuel-j%C3%A9go-29bb92a7/'
const maltUrl = 'https://www.malt.fr/profile/emmanueljego'
const polygotUrl = 'https://polygothq.com'
const visualPdfUrl = 'https://visualpdf.com'

const isContactFromShown = ref(false)
const isPolygotShown = ref(false)
const isVisualPDFShown = ref(false)
const isMobielDrawerShown = ref(false)

</script>
