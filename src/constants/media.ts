const BASE_URL = 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=';
const SUFFIX = '&version_id=null';

const generateUrl = (filename: string) => `${BASE_URL}${encodeURIComponent(filename)}${SUFFIX}`;

export const MEDIA_URLS = {
  // Logos
  logos: {
    intelligenceLogo: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/logo%20inteligencia-Photoroom.png?alt=media&token=c18680f6-f667-4993-b051-51995b0e8e14',
    gcmLogo: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/logo-gcm-sem%20fundo.png?alt=media&token=abcb7bfd-cecf-4101-87b9-83f942235ebd',
  },

  // RISP Page
  risp: {
    risp: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/RISP.png?alt=media&token=3cfa9f84-fc4c-4886-b88a-e0abb1715a07',
    aisp: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/AISP.png?alt=media&token=22f2cc01-bcb4-4ac9-8431-fd768931d692',
    cisp: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/CISP.png?alt=media&token=7dcc47d6-5632-4f86-9eaa-9bb8c26203c4',
  },

  // SISP Page
  sisp: {
    principles: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/PRINCIPIOS.jpeg?alt=media&token=d9abd640-465b-4469-b6ba-71dc4f1cb36c',
    mapDc: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/mapa-dc.jpeg?alt=media&token=eaee7456-19a3-435c-ab0d-42b4936659f8',
  },

  // PSYOP Page
  psyop: {
    // Desktop images
    definitionPc: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/psyop%20pc.png?alt=media&token=86f80e4f-8604-4e42-8a06-5e6e22602edf',
    definitionMb: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/psyop%20mb.png?alt=media&token=effbe8d3-687b-4034-bb8d-a29b3f4f05e1',
    classificationPc: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/psyop%20pcc%20(1).png?alt=media&token=32d10f56-ae69-4c3f-9ae6-b43db23acf75',
    classificationMb: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/psyop%20mbb.png?alt=media&token=77c7c010-7b0e-4238-af29-1f9897c3c098',
    logicPc: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/psyop%20pc.png?alt=media&token=86f80e4f-8604-4e42-8a06-5e6e22602edf',
    logicMb: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/psyop%20mb.png?alt=media&token=effbe8d3-687b-4034-bb8d-a29b3f4f05e1',
    // Videos
    video1: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/video1.mp4?alt=media&token=3ed8e033-259f-49cb-8a3a-78c436ae2f36',
    video2: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/video2%20c.mp4?alt=media&token=2612a10b-2d5d-423d-b7d9-2ed71db99633',
    video1Thumb: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/video1thumb.png?alt=media&token=03db9239-e2a5-4bae-9d2f-2635bc1b1a0a',
    video2Thumb: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/video1thumb.png?alt=media&token=03db9239-e2a5-4bae-9d2f-2635bc1b1a0a',
  },

  // Analytics Page
  analytics: {
    intelligenceLogo: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/logo%20inteligencia-Photoroom.png?alt=media&token=c18680f6-f667-4993-b051-51995b0e8e14',
  },

  // Intelligence Page
  intelligence: {
    levels: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/niveis.png?alt=media&token=f91ca727-9a34-4e54-8289-b9da48824ac8' ,
  },

  // Counter Intelligence Page
  counterIntelligence: {
    cipePc: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/CI%20P%20E%20A.png?alt=media&token=b26a478d-d2ea-43f4-9fe3-bd97e5186ed7',
    cipeMb: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/CIPEA%20MOBILE.png?alt=media&token=136bdfbb-79bd-4bfa-8716-8d82faafc885',
    pillarsPc: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/3pilarpc.png?alt=media&token=c7ff0c4c-ab83-4a53-9adf-89c1d10a13b7',
    pillarsMb: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/3pilarmb.png?alt=media&token=5eb38bd2-d1ab-4a95-ad03-079170508266',
  },

  // Introduction
  introduction: {
    cycle: 'https://firebasestorage.googleapis.com/v0/b/gcm-caxias-17535.firebasestorage.app/o/ciclo.png?alt=media&token=2c5673ce-f5c0-4b2b-b0b7-dd6910e8a9c8',
  },
};