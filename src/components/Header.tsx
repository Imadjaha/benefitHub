import DarkModeSwitcher from "./DarkModeSwitcher";

interface HeaderProps {
  title: string;
  subtitle?: string;
  darkModeSwitcher?: boolean;
  rightContent?: React.ReactNode;
}

export default function Header({
  title,
  subtitle,
  darkModeSwitcher,
  rightContent,
}: HeaderProps) {
  return (
    <header className="w-full theme-bg shadow-sm border-b border-gray-200 dark:border-gray-700 mb-4">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">{title}</h1>
            {subtitle && (
              <p className="text-sm mt-1">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {rightContent}
            {darkModeSwitcher && <DarkModeSwitcher />}
          </div>
        </div>
      </div>
    </header>
  );
}