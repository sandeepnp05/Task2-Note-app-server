export const formatDateTime = (dateTimeObject) => {
    try {
      if (dateTimeObject instanceof Date) {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        };
        return dateTimeObject.toLocaleDateString(undefined, options);
      } else {
        const date = new Date(dateTimeObject);
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        };
        return date.toLocaleDateString(undefined, options);
      }
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid Date';
    }
  };