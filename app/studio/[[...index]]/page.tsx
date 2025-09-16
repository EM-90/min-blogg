import {NextStudio} from 'next-sanity/studio'
import config from '../../../sanity.config' // Adjust path if needed

export default function StudioPage() {
  return <NextStudio config={config} />
}
