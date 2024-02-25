import createMDXPlugin from '@next/mdx'
import { resolve } from 'node:path'

const withMDX = createMDXPlugin()

export default withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack(config) {
    config.resolve.alias['next-mdx-import-source-file'].splice(
      -1,
      1,
      resolve(process.cwd(), 'mdx-react.js')
    )
    return config
  },
})
