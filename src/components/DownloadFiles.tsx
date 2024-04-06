import Download from "./Download";

const DownloadFiles = (props: any) => {
  const handleDownload = () => {
    // Logica per scaricare il file PDF
    const pdfUrl = props.fileDir;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = props.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="portfolio-download">
      {props.fileDescription.length > 5 ? props.fileDescription : <Download />}
    </button>
  );
};

export default DownloadFiles;
