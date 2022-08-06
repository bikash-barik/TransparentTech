import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'q98otsr6',
  dataset: 'production',
  apiVersion: '2022-06-18',
  token:
    'sk2BT2HhGVukHIIFMpNePJotqmm05DWfhEcpWPrAYQjIbZQYtz21Ep7ePLCyLbKGga4VjjSSJWzfvGUgeU3kzSLMjb8qBbxpnZ3xghQbcAgxiKzayzgH1TGxx4I70v1aEsgxDG01fT6TPlh003PI5OERznNGfmVPcgpaoSflAQFHKTG12cE8',
  useCdn: false,
})
