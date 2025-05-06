import Download from "./icons/Download";

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
    <div onClick={handleDownload} className="portfolio-download">
      {props.fileDescription.length > 5 ? props.fileDescription : null}
      <Download />
    </div>
  );
};

export default DownloadFiles;
