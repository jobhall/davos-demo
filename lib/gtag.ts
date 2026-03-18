interface LogEventParams {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}

export const logEvent = ({ action, category, label, value }: LogEventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category ?? undefined,
      event_label: label ?? undefined,
      value: value ?? undefined,
    });
  }
};
