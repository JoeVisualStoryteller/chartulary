import { motion } from 'framer-motion'
import { useDebounce } from 'use-debounce'
import { useEffect, useState } from 'react'

interface SearchFilterProps {
  onSearchChange: (query: string) => void
  onCategoryChange?: (category: string) => void
  onYearChange?: (year: string) => void
  categories?: string[]
  years?: number[]
  showCategoryFilter?: boolean
  showYearFilter?: boolean
}

export function SearchFilter({
  onSearchChange,
  onCategoryChange,
  onYearChange,
  categories = [],
  years = [],
  showCategoryFilter = false,
  showYearFilter = false
}: SearchFilterProps): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [debouncedQuery] = useDebounce(searchQuery, 300)

  useEffect(() => {
    onSearchChange(debouncedQuery)
  }, [debouncedQuery, onSearchChange])

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category)
    onCategoryChange?.(category)
  }

  const handleYearChange = (year: string): void => {
    setSelectedYear(year)
    onYearChange?.(year)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 p-6 bg-parchment dark:bg-parchment-dark rounded-lg border-4 border-gold dark:border-gold-bright"
    >
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">
            Search artworks
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title..."
              className="w-full px-4 py-3 pl-12 bg-white dark:bg-medieval-brown text-medieval-brown dark:text-parchment border-2 border-gold dark:border-gold-bright rounded focus:outline-none focus:ring-2 focus:ring-gold dark:focus:ring-gold-bright font-serif"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-medieval-brown/50 dark:text-parchment/50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        {/* Category Filter */}
        {showCategoryFilter && categories.length > 0 && (
          <div className="md:w-48">
            <label htmlFor="category" className="sr-only">
              Filter by category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-medieval-brown text-medieval-brown dark:text-parchment border-2 border-gold dark:border-gold-bright rounded focus:outline-none focus:ring-2 focus:ring-gold dark:focus:ring-gold-bright font-serif cursor-pointer"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Year Filter */}
        {showYearFilter && years.length > 0 && (
          <div className="md:w-40">
            <label htmlFor="year" className="sr-only">
              Filter by year
            </label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => handleYearChange(e.target.value)}
              className="w-full px-4 py-3 bg-white dark:bg-medieval-brown text-medieval-brown dark:text-parchment border-2 border-gold dark:border-gold-bright rounded focus:outline-none focus:ring-2 focus:ring-gold dark:focus:ring-gold-bright font-serif cursor-pointer"
            >
              <option value="all">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Active Filters Display */}
      {(searchQuery || selectedCategory !== 'all' || selectedYear !== 'all') && (
        <div className="mt-4 flex flex-wrap gap-2">
          {searchQuery && (
            <span className="px-3 py-1 bg-gold dark:bg-gold-bright text-medieval-brown text-sm font-serif rounded-full">
              Search: "{searchQuery}"
            </span>
          )}
          {selectedCategory !== 'all' && (
            <span className="px-3 py-1 bg-gold dark:bg-gold-bright text-medieval-brown text-sm font-serif rounded-full">
              Category: {selectedCategory}
            </span>
          )}
          {selectedYear !== 'all' && (
            <span className="px-3 py-1 bg-gold dark:bg-gold-bright text-medieval-brown text-sm font-serif rounded-full">
              Year: {selectedYear}
            </span>
          )}
          <button
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory('all')
              setSelectedYear('all')
              onSearchChange('')
              onCategoryChange?.('all')
              onYearChange?.('all')
            }}
            className="px-3 py-1 bg-medieval-brown dark:bg-medieval-brown-dark text-parchment text-sm font-serif rounded-full hover:bg-medieval-brown/80 dark:hover:bg-medieval-brown-dark/80 transition-colors"
          >
            Clear All
          </button>
        </div>
      )}
    </motion.div>
  )
}
