import Icon from './Icon'
import Reveal from './Reveal'

/**
 * Encabezado de sección: etiqueta (pill con icono o eyebrow) + título con
 * palabra(s) acentuadas en cursiva.
 * @param {{icon?: string, text: string}} [tag]  pill con icono sobre el título
 * @param {'left'|'center'} align
 * @param {boolean} light  usa colores para fondos oscuros
 */
export default function SectionHeading({
  eyebrow,
  tag,
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
      {tag && (
        <span className="pill-tag">
          {tag.icon && <Icon name={tag.icon} className="h-3 w-3" strokeWidth={2.2} />}
          {tag.text}
        </span>
      )}
      {eyebrow && <p className={`eyebrow ${light ? '!text-[#E2A15F]' : ''}`}>{eyebrow}</p>}
      <Tag
        className={`${
          tag || eyebrow ? 'mt-2.5 sm:mt-3' : ''
        } text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-semibold leading-[1.18] sm:leading-[1.12]`}
      >
        {title}{' '}
        <em className={`font-medium ${light ? 'text-[#E2A15F]' : 'text-caramel'}`}>{accent}</em>
      </Tag>
      {description && (
        <p
          className={`mt-2.5 sm:mt-4 text-xs sm:text-sm leading-relaxed ${
            light ? 'text-cream/75' : 'text-primary/65'
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </Reveal>
  )
}
