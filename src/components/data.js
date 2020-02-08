import React from 'react';

// Get the copy out of the Object:
//
// F: (.|\n)*?(.*info: \{(.|\n)*?\})(.|\n)*?
// R: $2\n
//
// F: \{((.|\n)*?)\}
// R: $1

export default [
  {
    wrapperClass: 'tall-big-phone video-shadow',
    type: 'video',
    class: 'daily-motion',
    file: 'videos/daily-mail-concept.mp4',
    info: {
      title: 'Daily Mail App Concept',
      project: 'Presales',
      description: 'The goal was to show a possible improvement direction.'
    },
    tags: ['look', 'mobile', 'concept', 'typography'],
    id: '10592916-c265-4302-ab29-76d78b2d7d26'
  },
  {
    wrapperClass: 'wide-big',
    type: 'image',
    file: 'images/QiVisor-HR.png',
    tags: ['look', 'data visualization', 'complex'],
    info: {
      title: 'Employee Location Analysis',
      project: 'Industrial Monitoring Tool',
      description: 'The screen shows the employee location analysis view.'
    },
    id: '8d4fc9d7-e94b-4ba6-9a23-1aa14f18f7d8'
  },
  {
    wrapperClass: 'wide-big',
    type: 'video',
    class: 'cover-video',
    file: 'videos/PW-concept-small.mp4',
    caseId: 'pw',
    caseReady: true,
    tags: ['concept', 'complex'],
    info: {
      title: 'Insurance Risk Simulation IDE (Initial Concept)',
      description:
        'The demo of the initial concept that was created in two days after the briefing on the project goal.',
      project: 'Risk Management Solution'
    },
    id: '60be6b44-8302-47a8-8ee2-bc5ef3c93a39'
  },
  {
    wrapperClass: 'small',
    type: 'image',
    class: 'center',
    file: 'images/PW-deploy-icon.svg',
    caseId: 'pw',
    caseReady: true,
    tags: ['look'],
    info: {
      title: 'Deploy Package Icon',
      description: 'A nice thing to press when the work is done 😎',
      project: 'Risk Management Solution'
    },
    id: 'e5514cc4-aa22-427b-a2e6-d622ad4ef568'
  },
  {
    wrapperClass: 'tall-big',
    type: 'image',
    file: 'images/PW-properties.png',
    caseId: 'pw',
    caseReady: true,
    tags: ['look', 'complex'],
    info: {
      title: 'Properties Panel',
      project: 'Risk Management Solution',
      description:
        'Task functions can have a large set of output parameters. This design is focused on their nesting structure and reordering.'
    },
    id: '66121a53-3409-437f-8f92-79dd2b6522bb'
  },
  {
    wrapperClass: 'wide-big',
    type: 'image',
    file: 'images/PW-nodes-types.png',
    caseId: 'pw',
    caseReady: true,
    tags: ['look', 'complex'],
    info: {
      title: 'Node Types',
      project: 'Risk Management Solution',
      description:
        'Various node types: task functions, a data source, data destinations, an exit, and a note.'
    },
    id: '93143382-0eca-4477-aa13-866a39e1f18e'
  },
  // {
  //   wrapperClass: 'wide-big',
  //   type: 'image',
  //   file: 'images/PW-real-case.png',
  //   caseId: 'pw',
  //   caseReady: true,
  //   tags: ['look', 'complex'],
  //   info: {
  //     title: 'Real-World Case',
  //     project: 'Risk Management Solution',
  //     description:
  //       'Simple but still real-world scenario to test the design decisions.'
  //   },
  //   id: '9697fa40-1ce4-4835-8709-0ba17b31b794'
  // },
  {
    wrapperClass: 'wide-big',
    type: 'image',
    class: '',
    file: 'images/PW-signoff-cropped.png',
    caseId: 'pw',
    caseReady: true,
    tags: ['look', 'complex'],
    info: {
      title: 'Orchestrator',
      project: 'Risk Management Solution',
      description:
        'The Windows app to install, run, and debug jobs in full-fledged environments.'
    },
    id: '157fb8f5-3619-440b-8d76-9d7022acf240'
  },
  {
    wrapperClass: 'small',
    type: 'image',
    class: 'center',
    file: 'images/PW-navigator.svg',
    caseId: 'pw',
    caseReady: true,
    tags: ['look'],
    info: {
      title: 'Navigator Icon',
      project: 'Risk Management Solution',
      description:
        'The ribbon button to turn on the navigation panel that shows the bird’s eye view on the job graph.'
    },
    id: 'd43844e6-1f0f-4eb5-9b0e-fe9631b57c31'
  },
  {
    wrapperClass: 'wide-big',
    type: 'image',
    class: '',
    file: 'images/PW-job-editing-cropped.png',
    caseId: 'pw',
    caseReady: true,
    tags: ['look', 'complex'],
    info: {
      title: 'Job Editing Application',
      project: 'Risk Management Solution',
      description:
        'Job editing IDE (Windows). Sidebar features all of the resources required to build a risk calculation job: script bundles, models, variables, and jobs themselves.'
    },
    id: '8d14448f-7db5-4902-8b14-aef585cf8c19'
  },
  {
    wrapperClass: 'wide-big',
    type: 'video',
    class: 'cover-video',
    file: 'videos/Lighting-POC-animation.mp4',
    caseId: 'automation',
    caseReady: true,
    tags: ['concept', 'complex', '3d'],
    info: {
      title: 'Driving the Lights With Objects',
      project: 'Stage Automation R&D',
      description:
        'The concept for array driving with a meta-ball while controlling the fall-off function. (Made in Houdini.)'
    },
    id: 'd81be583-4bf9-4af8-9ba0-b26813b40541'
  },
  {
    wrapperClass: 'wide-big',
    type: 'video',
    class: 'cover-video',
    file: 'videos/automation-fly-concept.mp4',
    caseId: 'automation',
    caseReady: true,
    tags: ['concept', 'complex', '3d'],
    info: {
      title: 'The “Flight” Rig',
      project: 'Stage Automation R&D',
      description:
        'The concept for the scenic “flight” design interface enabling the actor-centric approach. (Made in Houdini.)'
    },
    id: 'd421494c-8df8-4966-a455-113491de4bb8'
  },
  {
    wrapperClass: 'wide-big',
    type: 'image',
    file: 'images/Navarik-mockup-map-no-browser.png',
    tags: ['concept', 'complex'],
    info: {
      title: '“Oil on the Way” Visualization',
      project: 'Presales',
      description:
        'The concept for the interface to allow brokers to analyze the crude oil transportation between the primary production and consumption points.'
    },
    id: '048bc090-b472-4bcd-a424-d75fe6a454a0'
  },
  {
    wrapperClass: 'wide-big',
    type: 'video',
    class: 'cover-video',
    file: 'videos/automation-assets-concept.mp4',
    caseId: 'automation',
    caseReady: true,
    info: {
      title: 'Stage Automation Assets',
      project: 'Stage Automation R&D',
      description:
        'The concept is demonstrating the parametric stage automation asset (i. e. sliding LED screens). The main idea is to allow a quick stage design and cueing with the help of reusable components. (Made in Houdini.)'
    },
    tags: ['concept', 'complex', '3d'],
    id: 'f552c810-38af-4699-86d5-73c34449146d'
  },
  {
    wrapperClass: 'wide-big',
    type: 'image',
    file: 'images/supply-chain-risk-concept-v1.png',
    info: {
      title: 'Supply Chain Risks',
      project: 'Presales',
      description:
        'The concept I made as a part of our sales pitch for the major network equipment supplier. Its intent was to find a new way to explicate the supply chain risk visually by showing how and where it forms.'
    },
    tags: ['concept', 'data visualization'],
    id: 'dd797c60-7304-46dd-b502-0d112aa5a5b1'
  },
  {
    wrapperClass: 'wide',
    type: 'video',
    class: 'cover-video',
    file: 'videos/automation-light-small.mp4',
    caseId: 'automation',
    caseReady: true,
    info: {
      title: 'Lights Attracted to the Object',
      project: 'Stage Automation R&D',
      description:
        'Light control concept that demonstrates the activation of an array by object positioning.'
    },
    tags: ['concept', 'complex', '3d'],
    id: '959b2190-1a87-4733-9c45-6787fe34495d'
  },
  {
    wrapperClass: 'wide',
    type: 'image',
    file: 'images/houdini-actinia.png',
    info: {
      title: '“Actinia”',
      description: 'Made while studying Houdini’s particle systems.'
    },
    tags: ['look', '3d'],
    id: '70b320f1-2d03-4e59-90c1-d4ced4263f8f'
  },
  {
    wrapperClass: 'wide',
    type: 'image',
    file: 'images/sound-to-geometry.png',
    info: {
      title: 'Sound and Video to Geometry',
      description:
        'A frame of the animation driven by the video (size and color) and sound (movement amplitude).'
    },
    tags: ['look', '3d'],
    id: '91a426f6-aa99-4cfd-8b6e-9ecb85c54b17'
  },
  {
    wrapperClass: 'small',
    type: 'image',
    class: 'center',
    file: 'images/videos@3x.png',
    info: {
      title: '“Videos” Icon',
      project: 'Unreleased Social Network',
      description:
        'Made for the social network startup. Somewhat resembles the look of the YouTube player of that era.'
    },
    tags: ['look'],
    id: 'cd03d464-0c57-4672-952b-94a5bfd354a7'
  },
  {
    wrapperClass: 'wide',
    type: 'image',
    file: 'images/Agner-logo-big-perspective-2.png',
    info: {
      title: 'AGNER Logo',
      project: 'Erlang Package Manager',
      description:
        'AGNER is a shorthand for “A Giant Nebula of Erlang Repositories.” It also pays homage to the Danish statistician Agner Krarup Erlang. The logo is reminiscent of a nebula.'
    },
    tags: ['look'],
    id: '51d5ee08-474b-4810-9eb7-cbf76b215758'
  },
  {
    wrapperClass: 'wide-big',
    type: 'image',
    file: 'images/diving-concept.png',
    info: {
      title: 'Time-Tracking for the Industrial Divers',
      description:
        'The concept features the general workflow of the “layered” time-tracking. Managers are supposed to manage the divers’ contracts grouped by the vessel. The layered timeline shows the stacking pay-rates.'
    },
    tags: ['concept'],
    id: '69f48c5b-e0cd-45fb-bc84-44bbfade566a'
  },
  {
    wrapperClass: 'wide',
    type: 'image',
    file: 'images/keepa-logo-dribbble.png',
    info: {
      title: '“Keepa” Lettering',
      description:
        'The lettering for the Keepa design studio owned by my friends. Made for fun.'
    },
    tags: ['look', 'lettering', 'typography', 'concept'],
    id: '3306a262-1600-416f-ae9c-b8cf15817b90'
  },
  {
    wrapperClass: 'wide',
    type: 'image',
    file: 'images/Yawn-logo-blur-400-300.png',
    info: {
      title: 'Yawn Logo',
      description:
        'The logo for the property search engine. The “Y” letter resembles the palatine uvula, which you may have a chance to observe in the mouth of a yawning person.'
    },
    tags: ['look', 'lettering', 'typography'],
    id: '70b3bba4-3388-4e79-b754-a79e109c57bd'
  },
  {
    wrapperClass: 'small',
    type: 'image',
    class: 'center',
    file: 'images/3dLutCreator-Icon-no-bg.png',
    info: {
      title: '“3D Lut Creator” Logo Concept',
      description:
        'The concept resembles the 3D color space grid, which is one of the main features of the app.'
    },
    tags: ['look', '3d'],
    id: 'fcbe31a7-0fa7-4b6e-bebf-8612b6e818b6'
  },
  {
    wrapperClass: 'wide-big latency',
    type: 'video',
    file: 'videos/latency-discovery.mp4',
    info: {
      title: 'Latency Discovery',
      project: 'Networking Latency Monitoring Tool',
      description:
        'This view allows looking through dozens of latency graphs and finding the anomalies.'
    },
    tags: ['concept', 'data visualization'],
    id: '1ecab83a-8667-424a-8a08-cbac01f77a60'
  },
  {
    wrapperClass: 'wide-big',
    type: 'image',
    file: 'images/patient-summary-cropped.png',
    info: {
      title: 'Patient’s Card',
      project: 'Healthcare CRM',
      description: (
        <span>
          The card shows all of the patient’s metrics history on one screen.
          Each graph is a variation on the Edward Tufte’s “sparkline” with the
          (most important) last five days expanded into the table. (Thanks to{' '}
          <a href="https://www.linkedin.com/in/victor-hotskivskyy-848876a3">
            Victor Hotskivskyy
          </a>{' '}
          for beautifully implementing my ideas.)
        </span>
      )
    },
    tags: ['data visualization'],
    id: '3c52b1b5-41eb-45ac-b681-187b4e704d8b'
  },
  {
    wrapperClass: 'medium',
    type: 'image',
    class: 'center',
    file: 'images/effect-doplera-cd-look.png',
    info: {
      title: 'The Doppler Effect',
      description:
        'Cover for a collection of poems and short stories published to support the visually impaired. The works are read by authors and famous actors. Pro bono.'
    },
    tags: ['look', 'typography'],
    id: '9fe12871-e48d-46b3-b2d4-b877648f1a44'
  },
  {
    wrapperClass: 'small',
    type: 'image',
    class: 'center',
    file: 'images/VoiceAssistant-icon.png',
    info: {
      title: 'Voice Assistant Icon',
      project: '',
      description: 'An icon for a proof of concept app.'
    },
    tags: ['look'],
    id: '0586d842-6533-4c4e-b497-ef6d6e9d8f32'
  },
  {
    wrapperClass: 'wide',
    type: 'image',
    file: 'images/tatubalin-logo.svg',
    info: {
      title: 'Tatubalin Guitars Mark',
      description:
        'My friend builds guitars, so I decided to help him by making a mark. It was also to practice my lettering skills.'
    },
    tags: ['look', 'lettering', 'typography'],
    id: 'a8512757-20b6-42b2-b829-19b53946b655'
  },
  {
    wrapperClass: 'small',
    type: 'image',
    class: 'center',
    file: 'images/archmock-icon.png',
    info: {
      title: 'Archmock Icon',
      description:
        'In times of trouble, I needed a CHM reader for Mac. Archmock was the best I could find, but I didn’t like the icon. So here we are.'
    },
    tags: ['look', '3d'],
    id: 'ef891e0a-d030-4d2e-b6fc-85c1834d1c9b'
  },
  {
    wrapperClass: 'wide-big',
    type: 'image',
    file: 'images/red-ball.png',
    info: {
      title: 'Red Ball',
      description:
        'One of the experiments with grouping and primitives’ attributes in Houdini.'
    },
    tags: ['look', '3d'],
    id: 'a8ee2493-2cc9-4e8b-9b48-ab53101e8fc2'
  }
];
