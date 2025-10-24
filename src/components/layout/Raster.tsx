interface RasterProps {
	className?: string
}

export default function Raster({ className} : RasterProps ) {
	return (
		<div className={`absolute left-1/2 top-1/2 pointer-events-none overflow-hidden ${className ?? ""}`} style={{
			width: "600px",
			height: "644px",
			transform: "translate(-50%, -50%)",
			maskImage:
				"radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
			WebkitMaskImage:
				"radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
		}}>
			{/* Grid lines */}
			{Array.from({ length: 10 }).map((_, i) => (
				<div
					key={`v-${i}`}
					className="absolute top-0 h-full border-l border-white/10"
					style={{ left: `${(i + 1) * 60}px` }}
				/>
			))}
			{Array.from({ length: 10 }).map((_, i) => (
				<div
					key={`h-${i}`}
					className="absolute left-0 w-full border-t border-white/10"
					style={{ top: `${(i + 1) * 60}px` }}
				/>
			))}

			{/* Cyan glow */}
			<div className="absolute left-[178px] top-[187px] w-[272px] h-[272px] bg-[#18AEF0] opacity-20 rounded-full blur-[146px]" />
		</div>
	);
}
