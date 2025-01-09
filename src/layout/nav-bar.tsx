'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

import { Menu } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { GradientButton } from '@/components/ui/gradient-button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 z-50 w-full backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-2xl">✨</span>
            <span className="text-lg font-medium text-white">
              AI Cloud Academy
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          {['Home', 'Courses', 'Team', 'About us', 'Contact us'].map(
            (item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={
                    item === 'Home'
                      ? '/'
                      : `/${item.toLowerCase().replace(' ', '-')}`
                  }
                  className="rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-white/80 transition-all hover:border-white/15 hover:bg-white/[0.06] hover:text-white hover:shadow-[0px_4px_24px_0px_rgba(179,121,255,0.4),-4px_0px_8px_0px_rgba(255,21,88,0.3)]"
                >
                  {item}
                </Link>
              </motion.div>
            )
          )}
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="rounded-lg border border-transparent px-4 py-2 text-lg text-white/90 transition-all hover:border-white/15 hover:bg-white/[0.06] hover:text-white hover:shadow-[0px_4px_24px_0px_rgba(179,121,255,0.4),-4px_0px_8px_0px_rgba(255,21,88,0.3)]"
          >
            Sign up
          </Button>
          <GradientButton>Sign in</GradientButton>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="icon" className="ml-4 text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </motion.div>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-black/95">
            <nav className="flex flex-col space-y-4">
              {['Home', 'Courses', 'Team', 'About us', 'Contact us'].map(
                (item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={
                        item === 'Home'
                          ? '/'
                          : `/${item.toLowerCase().replace(' ', '-')}`
                      }
                      className="rounded-lg border border-transparent px-4 py-2 text-lg text-white/90 transition-all hover:border-white/15 hover:bg-white/[0.06] hover:text-white hover:shadow-[0px_4px_24px_0px_rgba(179,121,255,0.4),-4px_0px_8px_0px_rgba(255,21,88,0.3)]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                )
              )}
              <div className="flex flex-col space-y-2 pt-4">
                <Button className="w-full text-white hover:bg-white/10rounded-lg border border-transparent px-4 py-2 text-lg text-white/90 transition-all hover:border-white/15 hover:bg-white/[0.06] !hover:text-white hover:shadow-[0px_4px_24px_0px_rgba(179,121,255,0.4),-4px_0px_8px_0px_rgba(255,21,88,0.3)]">
                  Sign up
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
