export enum LogLevel {
  Debug = "DEBUG",
  Info = "INFO",
  Warn = "WARN",
  Error = "ERROR"
}

export function formatLog(level: LogLevel): string {
  return `${[level]} message`
}

export function isSevere(level: LogLevel): boolean {
  if(level === LogLevel.Warn || level === LogLevel.Error) return true;

return false;
}
