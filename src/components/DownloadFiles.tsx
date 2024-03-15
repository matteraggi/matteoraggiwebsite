const DownloadFiles = () => {
  const handleDownload = () => {
    // Logica per scaricare il file PDF
    const pdfUrl = "/Curriculum.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Portfolio Raggi Matteo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="portfolio-download">
      Scarica il mio Portfolio
    </button>
  );
};

export default DownloadFiles;
