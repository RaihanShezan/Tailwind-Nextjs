import Link from 'next/link'
import CommandText from 'components/tailwind/CommandText'

export default function WelcomeCard() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-200">
      <div className="flex w-3/4 max-w-3xl flex-col items-center justify-center rounded-2xl border bg-slate-700 px-4 py-8 text-center text-white shadow shadow-black">
        <h1 className="mb-4 text-2xl font-bold">Tailwind with NextJS</h1>
        <p>
          This is a{' '}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="text-teal-300 hover:underline"
          >
            Next.js
          </Link>{' '}
          project bootstrapped with{' '}
          <Link
            href="https://github.com/vercel/next.js/tree/canary/packages/create-next-app"
            target="_blank"
            className="text-teal-300 hover:underline"
          >
            create-next-app
          </Link>
          . Then it is configured with{' '}
          <Link
            href="https://tailwindcss.com/docs/guides/nextjs"
            target="_blank"
            className="text-teal-300 hover:underline"
          >
            TailwindCSS
          </Link>
          .
        </p>

        <h3 className="mt-10 mb-2 text-xl">Getting Started</h3>
        <ul className="list-disc">
          <li>
            First, install the required packages using:{' '}
            <CommandText command="npm i" />
          </li>
          <li>
            Then, run the development server:{' '}
            <CommandText command="npm run dev" />
          </li>
        </ul>
      </div>
    </div>
  )
}
