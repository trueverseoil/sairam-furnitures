import { Link } from 'react-router-dom'

export function AnnouncementBar() {
  return (
    <div className="safe-top bg-brand-950 text-white">
      <div className="ouch-container py-2.5">
        <Link
          to="/shop"
          className="block truncate text-center text-[11px] font-medium tracking-wide sm:text-xs md:text-sm"
        >
          Festive sale — up to 75% off · Extra 5% on prepaid · Free delivery in Salem
        </Link>
      </div>
    </div>
  )
}
