const variants = {
  dark: 'btn-dark',
  outline: 'btn-outline',
  accent:
    'inline-flex items-center justify-center gap-2 rounded-full bg-caramel px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#b3631f] hover:shadow-soft',
  light:
    'inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-primary transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-soft',
}

const sizes = {
  md: '',
  sm: '!px-4 !py-2 !text-xs',
}

/** Botón/enlace: si recibe `href` renderiza <a>, de lo contrario <button>. */
export default function Button({
  variant = 'dark',
  size = 'md',
  href,
  className = '',
  children,
  ...rest
}) {
  const classes = `${variants[variant]} ${sizes[size]} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel focus-visible:ring-offset-2 ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
