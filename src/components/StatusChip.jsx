const StatusChip = ({ status }) => {
  const statusConfig = {
    Completed: {
      bg: 'bg-green-100 dark:bg-green-900/20',
      text: 'text-green-700 dark:text-green-400',
      border: 'border-green-200 dark:border-green-800'
    },
    Scheduled: {
      bg: 'bg-gray-100 dark:bg-gray-800',
      text: 'text-gray-700 dark:text-gray-300',
      border: 'border-gray-200 dark:border-gray-700'
    },
    Failed: {
      bg: 'bg-red-100 dark:bg-red-900/20',
      text: 'text-red-700 dark:text-red-400',
      border: 'border-red-200 dark:border-red-800'
    },
    'In Progress': {
      bg: 'bg-primary/10',
      text: 'text-primary',
      border: 'border-primary/20'
    }
  };

  const config = statusConfig[status] || statusConfig.Scheduled;

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium border ${config.bg} ${config.text} ${config.border}`}>
      {status}
    </span>
  );
};

export default StatusChip;
