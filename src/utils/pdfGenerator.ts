export const downloadShivankResume = async (onNotify?: (msg: string) => void) => {
  try {
    const response = await fetch('/Shivank_Pandey_Resume.pdf');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Shivank_Pandey_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    if (onNotify) {
      onNotify('Technical Resume downloaded as Shivank_Pandey_Resume.pdf');
    }
  } catch {
    const link = document.createElement('a');
    link.href = '/Shivank_Pandey_Resume.pdf';
    link.download = 'Shivank_Pandey_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (onNotify) {
      onNotify('Technical Resume downloaded as Shivank_Pandey_Resume.pdf');
    }
  }
};
