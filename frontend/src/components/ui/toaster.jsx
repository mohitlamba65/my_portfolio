import { useToast } from "../../hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function Toaster() {
    const { toasts, dismiss } = useToast()

    return (
        <div className="fixed bottom-0 right-0 z-[100] flex flex-col gap-2 p-4 max-w-[420px] w-full pointer-events-none">
            <AnimatePresence mode="popLayout">
                {toasts.map(function ({ id, title, description, action, ...props }) {
                    return (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            layout
                            className="pointer-events-auto relative w-full overflow-hidden rounded-lg border border-white/10 bg-[#0a0a0a] p-4 shadow-lg shadow-black/50 ring-1 ring-white/10"
                            {...props}
                        >
                            <div className="grid gap-1">
                                {title && (
                                    <div className="text-sm font-semibold text-white">
                                        {title}
                                    </div>
                                )}
                                {description && (
                                    <div className="text-sm opacity-90 text-gray-400">
                                        {description}
                                    </div>
                                )}
                            </div>
                            {action}
                            <button
                                onClick={() => dismiss(id)}
                                className="absolute right-2 top-2 rounded-md p-1 text-gray-400 opacity-0 transition-opacity hover:text-white focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </div>
    )
}
