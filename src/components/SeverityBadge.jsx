const SeverityBadge = ({ severity, count, showCount = true }) => {
  const severityConfig = {
    critical: {
      bg: 'bg-critical',
      text: 'text-white',
      label: showCount ? count : 'Critical'
    },
    high: {
      bg: 'bg-high',
      text: 'text-white',
      label: showCount ? count : 'High'
    },
    medium: {
      bg: 'bg-medium',
      text: 'text-white',
      label: showCount ? count : 'Medium'
    },
    low: {
      bg: 'bg-low',
      text: 'text-white',
      label: showCount ? count : 'Low'
    }
  };

  const config = severityConfig[severity.toLowerCase()];

  return (
    <span className={`inline-flex items-center justify-center px-2 py-1 rounded text-xs font-semibold ${config.bg} ${config.text} min-w-[28px]`}>
      {config.label}
    </span>
  );
};

export default SeverityBadge;
