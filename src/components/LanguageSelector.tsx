import { Button } from '@/components/ui/button';

interface LanguageSelectorProps {
  onSelect: (lang: string) => void;
  className?: string;
}

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'hr', label: 'HR' },
  { code: 'de', label: 'DE' },
];

export default function LanguageSelector({ onSelect, className = '' }: LanguageSelectorProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          className="notranslate px-2 text-sm font-inter"
          onClick={() => onSelect(lang.code)}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
}
