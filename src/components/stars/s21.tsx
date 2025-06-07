export default function Star21({
  color,
  size,
  stroke,
  strokeWidth,
  pathClassName,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  color?: string
  size?: number
  stroke?: string
  pathClassName?: string
  strokeWidth?: number
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={size ?? width}
      height={size ?? height}
      {...props}
    >
      <path
        fill={color ?? "currentColor"}
        stroke={stroke}
        strokeWidth={strokeWidth}
        className={pathClassName}
        d="M124.813 110.278C138.298 103.304 159.85 101.721 195 100c-35.15-1.721-56.702-3.304-70.187-10.278 4.604-14.467 18.725-30.826 42.362-56.897-26.071 23.637-42.43 37.758-56.897 42.362C103.304 61.702 101.721 40.15 100 5c-1.721 35.15-3.304 56.702-10.278 70.187-14.467-4.604-30.826-18.725-56.897-42.362 23.637 26.071 37.758 42.43 42.362 56.897C61.702 96.696 40.15 98.28 5 100c35.15 1.721 56.702 3.304 70.187 10.278-4.604 14.467-18.725 30.826-42.362 56.897 26.071-23.637 42.43-37.758 56.897-42.362C96.696 138.298 98.28 159.85 100 195c1.721-35.15 3.304-56.702 10.278-70.187 14.467 4.604 30.826 18.725 56.897 42.362-23.637-26.071-37.758-42.43-42.362-56.897"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  )
}
