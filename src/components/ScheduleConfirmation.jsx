"use client"

export default function ScheduleConfirmation({ isOpen, onClose, scheduledDate, scheduledTime }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 py-6">
      <div className="bg-white border border-purple-200 rounded-2xl sm:rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl">
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#efac02]/20 rounded-full mx-auto mb-3 sm:mb-4">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#efac02]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-purple-900 text-center mb-2 break-words">Post Scheduled Successfully!</h3>

        <p className="text-purple-700/80 text-center mb-5 sm:mb-6 text-sm sm:text-base">Your post has been scheduled for:</p>

        <div className="bg-purple-50 border border-purple-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="text-center min-w-0">
              <p className="text-purple-600 text-xs sm:text-sm mb-1">Date</p>
              <p className="text-purple-900 font-semibold text-sm sm:text-base break-words">{scheduledDate}</p>
            </div>
            <div className="w-px h-10 sm:h-12 bg-purple-200 shrink-0"></div>
            <div className="text-center min-w-0">
              <p className="text-purple-600 text-xs sm:text-sm mb-1">Time</p>
              <p className="text-purple-900 font-semibold text-sm sm:text-base break-words">{scheduledTime}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-[#efac02] hover:bg-[#d99a02] text-purple-900 font-semibold py-2.5 sm:py-3 text-sm sm:text-base rounded-xl transition-colors shadow-md"
        >
          Done
        </button>
      </div>
    </div>
  )
}
