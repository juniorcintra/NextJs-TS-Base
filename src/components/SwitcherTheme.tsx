import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { tv } from 'tailwind-variants';


const inputVariants = tv({
  base: 'absolute top-[3px] left-[4px] size-6 rounded-full bg-transparent flex items-center justify-center shadow-md transform transition duration-300 ease-in-out',
  variants: {
    variant: {
      dark: 'translate-x-0',
      light: 'translate-x-6',
    },
  },
  defaultVariants: {
    variant: 'light',
  },
})

export default function SwitcherTheme() {
  const [theme, setStateTheme] = useState('light')
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme(theme)
  }, [setTheme, theme])

  return (
    <div className='flex items-center justify-center'>
      <label className='flex items-center cursor-pointer' htmlFor="theme-toggle">
        <div className='w-14 h-8 relative rounded-3xl bg-background border border-icon-color'>
          <input type="checkbox" className="hidden" id="theme-toggle" onChange={() => setStateTheme(theme === 'light' ? 'dark' : 'light')} checked={theme === 'light'} />
          <div className={inputVariants({ variant: theme === 'light' ? 'light' : 'dark' })}>
            {theme === 'light' ? (
              <SunIcon key="sun" className="fill-icon-color size-5" />
            ) : (
              <MoonIcon key="moon" className="fill-icon-color size-5" />
            )}
          </div>
        </div>
      </label>
    </div>
  )
}
