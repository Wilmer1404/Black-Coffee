import Reveal from './Reveal'

/**
 * Encabezado de sección: eyebrow + título con palabra(s) acentuadas en cursiva.
 * @param {'left'|'center'} align
 * @param {boolean} light  usa colores para fondos oscuros
 */
export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = 'left',
  light = false,
  as: Tag = 'h2',
  className = '',
  children,
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <Reveal className={`max-w-xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow ${light ? '!text-[#E2A15F]' : ''}`}>{eyebrow}</p>
      )}
      <Tag className="mt-3 text-4xl font-semibold leading-[1.1] sm:text-[2.75rem]">
        {title}{' '}
        <em className={`font-medium ${light ? 'text-[#E2A15F]' : 'text-caramel'}`}>{accent}</em>
      </Tag>
      {description && (
        <p className={`mt-4 text-sm leading-relaxed ${light ? 'text-cream/75' : 'text-primary/65'}`}>
          {description}
        </p>
      )}
      {children}
    </Reveal>
  )
}
